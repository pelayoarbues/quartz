---
author: [[Sebastian Raschka]]
title: "Practical Tips for Finetuning LLMs Using LoRA"
date: 2023-11-22
tags: 
- articles
- literature-note
---
![rw-book-cover](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5dfbd169-eb7e-41e1-a050-556ccd6fb679_1600x672.png)

## Metadata
- Author: [[Sebastian Raschka]]
- Full Title: Practical Tips for Finetuning LLMs Using LoRA
- URL: https://magazine.sebastianraschka.com/p/practical-tips-for-finetuning-llms

## Highlights
- • Despite the inherent randomness of LLM training (or when training models on GPUs in general), the outcomes remain remarkably consistent across multiple runs.
  • QLoRA presents a trade-off that might be worthwhile if you're constrained by GPU memory. It offers 33% memory savings at the cost of a 39% increase in runtime.
  • When finetuning LLMs, the choice of optimizer shouldn't be a major concern. While SGD on its own is suboptimal, there's minimal variation in outcomes whether you employ AdamW, SGD with a scheduler, or AdamW with a scheduler.
  • While Adam is often labeled a memory-intensive optimizer due to its introduction of two new parameters for every model parameter, this doesn't significantly affect the peak memory demands of the LLM. This is because the majority of the memory is allocated for large matrix multiplications rather than retaining extra parameters.
  • For static datasets, iterating multiple times, as done in multi-epoch training, might not be beneficial. It often deteriorates the results, probably due to overfitting.
  • If you're incorporating LoRA, ensure it's applied across all layers, not just to the Key and Value matrices, to maximize model performance.
  • Adjusting the LoRA rank is essential, and so is selecting an apt alpha value. A good heuristic is setting alpha at twice the rank's value.
  • 7 billion parameter models can be finetuned efficiently within a few hours on a single GPU possessing 14 GB of RAM. With a static dataset, optimizing an LLM to excel across all benchmark tasks is unattainable. Addressing this requires diverse data sources, or perhaps LoRA might not be the ideal tool. ([View Highlight](https://read.readwise.io/read/01hfvjy6py7wjg5sdbkyp0aswq))
- [Last month, I shared an article with several LoRA experiments](https://lightning.ai/pages/community/lora-insights/), based on the open-source [Lit-GPT repository](https://github.com/Lightning-AI/lit-gpt) that I co-maintain with my colleagues at Lightning AI. This Ahead of AI article aims to discuss the primary lessons I derived from my experiments. ([View Highlight](https://read.readwise.io/read/01hfvjeqpsmnpc3g4v1wt3rqyh))
- • Despite the inherent randomness of LLM training (or when training models on GPUs in general), the outcomes remain remarkably consistent across multiple runs.
  • QLoRA presents a trade-off that might be worthwhile if you're constrained by GPU memory. It offers 33% memory savings at the cost of a 33% increase in runtime.
  • When finetuning LLMs, the choice of optimizer shouldn't be a major concern. While SGD on its own is suboptimal, there's minimal variation in outcomes whether you employ AdamW, SGD with a scheduler, or AdamW with a scheduler.
  • While Adam is often labeled a memory-intensive optimizer due to its introduction of two new parameters for every model parameter, this doesn't significantly affect the peak memory demands of the LLM. This is because the majority of the memory is allocated for large matrix multiplications rather than retaining extra parameters.
  • For static datasets, iterating multiple times, as done in multi-epoch training, might not be beneficial. It often deteriorates the results, probably due to overfitting.
  • If you're incorporating LoRA, ensure it's applied across all layers, not just to the Key and Value matrices, to maximize model performance.
  • Adjusting the LoRA rank is essential, and so is selecting an apt alpha value. A good heuristic is setting alpha at twice the rank's value.
  • 7 billion parameter models can be finetuned efficiently within a few hours on a single GPU possessing 14 GB of RAM. With a static dataset, optimizing an LLM to excel across all benchmark tasks is unattainable. Addressing this requires diverse data sources, or perhaps LoRA might not be the ideal tool. ([View Highlight](https://read.readwise.io/read/01hfvjggzrsnp57btmvrrdd5gg))
- Large language models are large, and it can be expensive to update all model weights during training due to GPU memory limitations. 
  For example, suppose we have an LLM with 7B parameters represented in a weight matrix *W*. (In reality, the model parameters are, of course, distributed across different matrices in many layers, but for simplicity, we refer to a single weight matrix here). During backpropagation, we learn a *ΔW* matrix, which contains information on how much we want to update the original weights to minimize the loss function during training. ([View Highlight](https://read.readwise.io/read/01hfvk2hagfhyd95a5wtcsg9s7))
- The weight update is then as follows:
  *W*updated = *W* + *ΔW*
  If the weight matrix *W* contains 7B parameters, then the weight update matrix *ΔW* also contains 7B parameters, and computing the matrix *ΔW* can be very compute and memory intensive.
  The LoRA method proposed by [Hu](https://arxiv.org/abs/2106.09685) *[et al.](https://arxiv.org/abs/2106.09685)* replaces to decompose the weight changes, *ΔW*, into a lower-rank representation. To be precise, it does not require to explicitly compute *ΔW*. Instead, LoRA learns the decomposed representation of *ΔW* directly during training which is where the savings are coming from, as shown in the figure below. ([View Highlight](https://read.readwise.io/read/01hfvk3q4m95wxpgg9vfsxzkd8))
- [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5dfbd169-eb7e-41e1-a050-556ccd6fb679_1600x672.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5dfbd169-eb7e-41e1-a050-556ccd6fb679_1600x672.png) ([View Highlight](https://read.readwise.io/read/01hfvk4nan89vhr5fjy3xq28gj))
- the decomposition of *ΔW* means that we represent the large matrix *ΔW* with two smaller LoRA matrices, *A* and *B*. If *A* has the same number of rows as *ΔW* and *B* has the same number of columns as *ΔW*, we can write the decomposition as *ΔW = AB*. (*AB* is the matrix multiplication result between matrices *A* and *B*.) ([View Highlight](https://read.readwise.io/read/01hfvk4wqxyd8fpr56v8q89k9b))
- How much memory does this save? It depends on the rank *r*, which is a hyperparameter. For example, if *ΔW* has 10,000 rows and 20,000 columns, it stores 200,000,000 parameters. If we choose *A* and *B* with *r=8*, then *A* has 10,000 rows and 8 columns, and *B* has 8 rows and 20,000 columns, that's 10,000×8 + 8×20,000 = 240,000 parameters, which is about 830× less than 200,000,000. ([View Highlight](https://read.readwise.io/read/01hfvk5chdvn6mv804atgnsjtv))
- *A* and *B* can't capture all the information that *ΔW* could capture, but this is by design. When using LoRA, we hypothesize that the model requires *W* to be a large matrix with full rank to capture all the knowledge in the pretraining dataset. However, when we finetune an LLM, we don't need to update all the weights and capture the core information for the adaptation in a smaller number of weights than *ΔW* would; hence, we have the low-rank updates via *AB*. ([View Highlight](https://read.readwise.io/read/01hfvk5wxdgk9cst470h7hssqh))
- Running multiple experiments with LoRA, I found that the benchmark results are surprisingly consistent across the different runs despite the inherent randomness of LLM training or when training models on GPUs in general. This is a good basis for additional comparison studies.
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9fcb4b0c-0dec-4f19-8311-73e80de73a62_1244x278.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9fcb4b0c-0dec-4f19-8311-73e80de73a62_1244x278.png) ([View Highlight](https://read.readwise.io/read/01hfvk642r0dx5z0s97j0h2e60))
- [QLoRA by Dettmers](https://arxiv.org/abs/2305.14314) *[et al.](https://arxiv.org/abs/2305.14314)*, short for quantized LoRA, is a technique that further reduces memory usage during finetuning. During backpropagation, QLoRA quantizes the pretrained weights to 4-bit precision and uses paged optimizers to handle memory spikes. ([View Highlight](https://read.readwise.io/read/01hfvk6b1p47wttf3fne9h48fd))
- I found that one can save 33% of GPU memory when using LoRA. However, this comes at a 39% increased training runtime caused by the additional quantization and dequantization of the pretrained model weights in QLoRA. ([View Highlight](https://read.readwise.io/read/01hfvk6m5a3ewfp51k11sy9pat))
- Default LoRA with 16-bit brain floating point precision:
  • Training time: 1.85 h
  • Memory used: 21.33 GB
  QLoRA with 4-bit *Normal Floats:*
  • Training time: 2.79 h
  • Memory used: 14.18 GB
  Moreover, I found that the modeling performance was barely affected, which makes QLoRA a feasible alternative to regular LoRA training to work around the common GPU memory bottleneck.
  [
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fddf4b7b6-9174-4c45-823f-4976b2b1a013_1240x216.png)
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fddf4b7b6-9174-4c45-823f-4976b2b1a013_1240x216.png) ([View Highlight](https://read.readwise.io/read/01hfvk6tfrq5j9vhb2qpqynrt6))
