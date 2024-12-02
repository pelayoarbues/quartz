---
author: [[Rohan Paul]]
title: "Weight-Decomposed Low-Rank Adaptation (DoRA) from @nvidia"
date: 2024-07-15
tags: 
- tweets
- literature-note
---
![rw-book-cover](https://pbs.twimg.com/profile_images/1715475762516840448/kst_-vG1_x96.jpg)

## Metadata
- Author: [[Rohan Paul]]
- Full Title: Weight-Decomposed Low-Rank Adaptation (DoRA) from @nvidia
- URL: https://twitter.com/rohanpaul_ai/status/1810952494907883644

## Highlights
- Weight-Decomposed Low-Rank Adaptation (DoRA) from [@nvidia](https://twitter.com/nvidia). Quite a groundbreaking research for low-GPU LLM fine-tuning.
  Consistently outperforms LoRA across a wide variety of LLM and vision language model (VLM) 🤯 ([View Highlight](https://read.readwise.io/read/01j2vcd6w4hhyrhd9mxn0f67vb))
- 💡 DoRA consistently outperforms LoRA on fine-tuning LLaMA, LLaVA, and VL-BART on various downstream tasks, such as commonsense reasoning, visual instruction tuning, and image/video-text understanding. ([View Highlight](https://read.readwise.io/read/01j2vcdcd6cv634nfwfrn62g6z))
- 📌 In LoRA the changes in the original weight matrix W is adapted by adding a low-rank product of two smaller matrices BA , where B and A are the low-rank matrices. So, the adapted weight matrix becomes W + BA.
  i.e. with LoRA the fine-tuned weight W′ can be represented as:
  W′ = W_0 + ∆W = W0 + BA
  Where W_0 remains static during the fine-tuning process, and the underlined parameters are being trained. The matrix A is initialized with uniform Kaiming distribution, while B is initially set to zero, resulting in ∆W = BA being zero at the start of training. ([View Highlight](https://read.readwise.io/read/01j2vcdx0kv55rnp8qw93z21z5))
- DoRA decomposes the pre-trained weight into two components, magnitude and direction, for fine-tuning, specifically employing LoRA for directional updates to efficiently minimize the number of trainable parameters. ([View Highlight](https://read.readwise.io/read/01j2vce2q9xvfb3ztjxq00mdy3))
- 📌 By employing DoRA, both the learning capacity and training stability of LoRA is enhanced while avoiding any additional inference overhead. ([View Highlight](https://read.readwise.io/read/01j2vce6psp0ge1wf1t1xpy0sy))
- On this the paper says - Drawing on Weight Normalization, which achieves faster convergence via improving the conditioning of the gradient with weight reparameterization, we introduce a novel weight decomposition analysis that initially reparameterizes model weights into magnitude and directional components. Because the directional component is large in terms of parameter numbers, we further decompose it with LoRA for efficient finetuning. ([View Highlight](https://read.readwise.io/read/01j2vcef4wj5d2f5asbgn7dgxm))
- ✨ One of the key idea is that limiting LoRA to concentrate exclusively on directional adaptation while also allowing the magnitude component to be tunable simplifies the task compared to the original approach, where LoRA is required to learn adjustments in both magnitude and direction. ([View Highlight](https://read.readwise.io/read/01j2vcejjgegm4nkezkpkwwd8k))
- ![](https://pbs.twimg.com/media/GSHLmcGWoAEhFXX.png) ([View Highlight](https://read.readwise.io/read/01j2vcempyw6nd18w12yzt6qgv))
- ![](https://pbs.twimg.com/media/GSHMQhxXUAAirxR.png) ([View Highlight](https://read.readwise.io/read/01j2vcetgz3w6wf77zpj4w7yg1))
