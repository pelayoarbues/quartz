---
author: [[predibase.com]]
title: "7 Things You Need to Know About Fine-Tuning LLMs"
date: 2024-05-13
tags: 
- articles
- literature-note
---
![rw-book-cover](https://predibase.com/static/c5f62ce48a44ebc6f50f95728c9f4db7/3a835/7_things_about_fine-tuning__1_.png)

## Metadata
- Author: [[predibase.com]]
- Full Title: 7 Things You Need to Know About Fine-Tuning LLMs
- URL: https://predibase.com/blog/7-things-you-need-to-know-about-fine-tuning-llms

## Highlights
- Training a large language model (LLM) from scratch is a time-consuming and computationally expensive endeavor that requires massive amounts of data (*and frankly is out of reach for all but 1% of enterprises*). Alternatively, fine-tuning a pre-trained model requires significantly fewer resources and less time, while producing similar or stronger results for a specific task. ([View Highlight](https://read.readwise.io/read/01hxrpvbj61f9re3p0j399vzet))
- In the world of deploying large language models (LLMs), there are essentially three primary methods that can be used today. The simplest is the **"out-of-the-box" deployment**, where users query the LLM based on its pre-existing knowledge. However, we don't recommend this strategy beyond quick prototyping, as everyone has access to the same models. To gain a competitive edge, two advanced methods involve integrating your own data with the LLM to increase its accuracy: Retrieval-Augmented Generation (RAG) and fine-tuning. ([View Highlight](https://read.readwise.io/read/01hxrpvrzjr48z78ytrcmdyr1f))
- **RAG**, on one hand, dynamically incorporates relevant documents into prompts to improve the model’s accuracy in providing factual information. There's been a lot of buzz around RAG, since with the implementation of proper access controls, a RAG system can be established to augment a LLM, significantly reducing instances of the model generating inaccurate or nonsensical information, commonly referred to as “hallucinations”. The challenge with this approach is that RAG systems are very complex to maintain and constrained by the retrieved information, limiting their creativity. ([View Highlight](https://read.readwise.io/read/01hxrpvtjtqm4v4zwwcq1xwrzx))
- **Fine-tuning**, on the other hand, directly modifies the model’s weights to incorporate a company’s specific knowledge based on your own data. This leads to greater performance and creativity, for smaller size models and simpler systems to maintain. And, despite the established perception that RAG systems are best to prevent hallucinations, there is a growing belief that fine-tuning may become a valuable tool for addressing hallucinations as well in the near future. ([View Highlight](https://read.readwise.io/read/01hxrpvxe9dy861kz4a7tscwx4))
- **So, how do you pick between RAG and fine-tuning?** They are not mutually exclusive, but the choice between these methods depends on your desired outcome.
  RAG is ideal when specific answers are buried within documents, allowing for direct integration into prompts to enhance accuracy. Fine-tuning, on the other hand, is less about fact retrieval and more about enhancing model performance in unfamiliar scenarios, such as generating structured outputs like JSON for downstream software processes.
  While fine-tuning is making progress towards mitigating model hallucinations, it really shines in creative tasks, like for example code generation using proprietary languages not covered during the model’s training. This method can support complex tasks like reliable JSON creation, writing in Shakespeare's style, and can be particularly useful for learning new programming languages and boosting productivity through features like autocomplete. ([View Highlight](https://read.readwise.io/read/01hxrpw5pmzvq05y2b66kk6gfr))
- Different techniques can be used to fine-tune a model, such as:
  1. **Continued pre-training**, where the model learns to predict the next word in a sequence, like with GitHub Copilot’s code prediction.
  2. **Instruction fine-tuning**, which focuses on question and answer pairs, teaching the model to generate responses based on prompts.
  3. **Reinforcement learning with human feedback (RLHF)**, which shifts the focus from predicting the next token to maximizing rewards based on human preferences. This approach not only aligns the model with non-controversial outputs but also improves factuality and reduces hallucinations, catering to diverse use cases without clear-cut answers but aiming for a certain ‘vibe’ that resonates with human readers. ([View Highlight](https://read.readwise.io/read/01hxrpwhawg5dfvpab01br0cx5))
- Now while this all sounds amazing, if you feel overwhelmed you're not alone. In the rapidly evolving LLM landscape, a few tools have emerged that are worth using to help you fine-tune the best LLMs for your tasks: [**Hugging Face's**](https://huggingface.co/) transformers library and [**Ludwig**](https://ludwig.ai/0.4/). ([View Highlight](https://read.readwise.io/read/01hxrpx2gb06ahya2m2mw38efc))
- If you’re comfortable with machine learning (ML) already or just curious about how it all works, then [**transformers**](https://huggingface.co/docs/transformers/en/index) is a fantastic tool for that. It’s an open-source tool that’s a hit for its clean design and ease of use. It provides you with a great way to get started with its ‘trainer’ API, but if you’re ready to dive deeper, you can explore their ‘accelerate’ library for custom training loops and more advanced capabilities. ([View Highlight](https://read.readwise.io/read/01hxrpx7w1jhbs6v1d2pjrd1gq))
- Now, for the software developers out there with a pressing business need, you might not want to get lost in the ML weeds. That’s where **Ludwig** comes in. Ludwig is a framework that lets you work with tabular data using a simple YAML file. No need to write complex optimization code; Ludwig handles distributed training, quantization, and gradient checkpointing right out of the box. ([View Highlight](https://read.readwise.io/read/01hxrpxctf0hzv1wz1hwdyvr5p))
- It also shines with experiment tracking, integrating smoothly with tools like MLflow and Weights & Biases. It takes care of all the nitty-gritty details from your model training, like configs, weights, and data pre-processing. So, wherever you are in your ML journey, we highly recommend checking out these tools. ([View Highlight](https://read.readwise.io/read/01hxrpxpak9w5ha1r1dge25h14))
- Last but not least, there is the question of which LLMs to use, open-source or closed source? What are the pros and cons? With recent concerns over OpenAI’s API, should enterprises consider other companies’ APIs like Anthropic, or should they fine-tune their own LLMs? How do closed-source solutions compare to open-source ones? ([View Highlight](https://read.readwise.io/read/01hxrpxtxtmxt012zmyvz52ynx))
- The decision often comes down to customization. Closed-source fine-tuning, like **OpenAI’s API**, offers an amazing user-friendly experience where you provide your dataset and specify the training epochs, and they handle the infrastructure and deployment. ([View Highlight](https://read.readwise.io/read/01hxrpy02nwad6rv39s0k4cnxd))
- However, once in production, scaling becomes a challenge with closed-source models. If you’re not a major spender, you may not receive the level of support needed to autoscale infrastructure for high request volumes, and exporting your model for further customization isn’t an option. ([View Highlight](https://read.readwise.io/read/01hxrpy121j1gf4a4dpp1hmsrp))
- Open-source solutions may have a steeper initial learning curve, but they offer greater flexibility. That's why at **Predibase**, we aim to provide every developer with an easy start, similar to closed-source experiences while allowing for customization and control in production. ([View Highlight](https://read.readwise.io/read/01hxrpy7fns8fzp0ghka1c23n3))
- That means you can access the latest state-of-the-art open-source models like LLaMA, code-LLaMA, Mistral, etc… choose your infrastructure, export your models at any point if you choose to do so, and we automatically right-size compute resources based on demand, and simplify a lot of the complexity behind fine-tuning by giving you the right level of abstraction to train and serve your models. ([View Highlight](https://read.readwise.io/read/01hxrpyd2mmrt6xcr48sba8dg8))
- Fine-tuning open-source LLMs does have a steeper learning curve, however. ​​One of the primary challenges teams face when fine-tuning large language models is **out-of-memory errors (OOMs)**. These occur when the model’s size exceeds the available compute resources, such as GPU memory. For example, training on a T4 GPU using Google Colab is free, but the size of the model you can train is limited. A BERT model might fit, but as you approach models with seven billion parameters, it becomes risky, and with 13 billion parameters, it’s nearly impossible. Models with 70 billion parameters are definitely out of the question on such hardware. ([View Highlight](https://read.readwise.io/read/01hxrpyvqc0f5935h7t3ha3f80))
- To avoid OOMs, teams can employ **parameter-efficient fine-tuning (PFT)** or **adapter-based fine-tuning**. This approach involves using a base model, like a 7 billion parameter model, and fine-tuning it in a way that doesn’t require training the entire model. Traditionally, you might train the whole model or just the last layer. Training the entire model increases memory usage significantly, requiring 2 to 3 times more GPU memory. However, training only the last layer uses much less memory but limits the model’s expressivity. ([View Highlight](https://read.readwise.io/read/01hxrpzffrfb37v5hqm5g0f79t))
- A resurgence in fine-tuning techniques has led to training not just the last layer but also intermediate layers, specifically the query and value projection matrices within the self-attention layers. This method, outlined in the [**LoRA**](https://arxiv.org/abs/2106.09685) paper, allows for a low memory footprint while achieving higher expressivity by inserting trainable weights throughout the model. Make sure to check out our [LoRA Land](https://predibase.com/lora-land) site which contains a collection of 25+ open-source LoRA adapters fine-tuned on Mistral-7B that outperform GPT4. ([View Highlight](https://read.readwise.io/read/01hxrpznan6xkdsc7nqxd7v3rz))
- When memory pressure persists, **quantization** is another technique to consider. Tim Detmers’ [Bits and Bytes Library](https://github.com/TimDettmers/bitsandbytes) enables model quantization, reducing precision from FP32 to 4-bit, which can decrease memory usage by 4X to 8X. Combined with adapter fine-tuning, this approach can reduce the memory footprint even further than the starting point. ([View Highlight](https://read.readwise.io/read/01hxrq0fh6sxy3ccjq771j5rtq))
- We’re advancing towards a point where training on **commodity hardware** is becoming feasible. However, it’s important to note that **quantization** can impact model quality. Reducing the precision of weights inevitably leads to some loss in quality, but when fine-tuning, the model is already being tailored to a specific subset of use cases. The technique known as [**QLoRA**](https://arxiv.org/abs/2305.14314), which combines a 4-bit quantized base model with FP16 adapters, helps mitigate the quality reduction from quantization. This allows for direct optimization of the entire stack, from the 4-bit quantized base to the FP16 adapters, achieving performance comparable to a fully fine-tuned FP16 model with an **8x reduction in memory usage**. ([View Highlight](https://read.readwise.io/read/01hxrq05kydrh6hzrvbdx8d812))
- to avoid issues like OOMs when fine-tuning:
  1. **Parameter-Efficient Fine-Tuning (PFT):** Use a base model and fine-tune selectively to significantly reduce memory usage.
  2. **Training Intermediate Layers:** Enhance expressivity with low memory impact by training specific intermediate layers.
  3. **Quantization:** Apply model quantization to cut memory usage by up to 8X, especially when combined with adapter fine-tuning.
  4. **QLoRA Technique:** Combine quantized base models with FP16 adapters to maintain quality while reducing memory needs by 8X.
  5. **Libraries like DeepSpeed:** Utilize libraries to distribute the model across GPUs, halving memory usage per GPU. ([View Highlight](https://read.readwise.io/read/01hxrq0vfvqptvjj5wefzztwx2))
- These strategies are among the top solutions for addressing out-of-memory errors. Tools like [**Predibase**](https://go.predibase.com/free-trial-sign-up?utm_source=google&utm_medium=paid-search&utm_campaign=20042273467&utm_content=%7B%7Bad.id%7D%7D&utm_term=predibase&hsa_acc=5493976452&hsa_cam=20042273467&hsa_grp=148051428709&hsa_ad=682591994137&hsa_src=g&hsa_tgt=kwd-2016989340633&hsa_kw=predibase&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAiApuCrBhAuEiwA8VJ6JuccyFXTdsNMDxtkfpDjWif_tJ0zV_B3biKSAVk3YmlmpCw99wSmXxoCFvAQAvD_BwE) and [**Ludwig**](https://ludwig.ai/0.4/) handle these issues out of the box. Ludwig serves as the core engine for Predibase, which is a managed infrastructure layer that maximizes Ludwig’s capabilities. Predibase automatically selects the appropriate GPUs based on your data and model size, streamlining the entire process. ([View Highlight](https://read.readwise.io/read/01hxrq12kmxkn72btn38zq5qwz))
- The second most common challenge after out-of-memory errors, is the **inability to converge** during training. You might notice gradients fluctuating wildly and the loss function failing to stabilize. To combat this, a technique called **gradient checkpointing** can be employed. This method allows you to effectively increase your batch size without exceeding GPU memory limits. For example, if your actual batch size is 2, you can accumulate gradients over several forward passes—say, 4 passes—before performing backpropagation, simulating a larger batch size like 8. This can enhance training stability and improve the chances of convergence. Additionally, fine-tuning the **learning rate** is also beneficial. ([View Highlight](https://read.readwise.io/read/01hxrq165b5f6ghmfnrc8gpqyn))
- Regarding convergence, gradient checkpointing is highly recommended. Additionally, a technique from a recent paper called [**NEFtune**](https://arxiv.org/abs/2310.05914)—which stands for Noisy Embedding Fine-Tuning—draws inspiration from computer vision, where data augmentation is prevalent. NEFtune involves adding noise to embeddings during fine-tuning to enhance robustness and generalization, similar to data augmentation in computer vision. Surprisingly, this method works well and also helps prevent overfitting by introducing variability during training. ([View Highlight](https://read.readwise.io/read/01hxrq1gf7w8dyx6arj4rj8nn6))
- When it comes to data for fine-tuning, a common question is, ‘How much data do I need?’ This is indeed the question of the day, perhaps even the era, as many seek to leverage their private data effectively but lack the know-how. The first thing you'll need to consider is **the similarity between your pre-trained model and the data you wish it to learn.** ([View Highlight](https://read.readwise.io/read/01hxrq1veavyhzjgd0wvatd2q9))
- For example, consider a large-scale model like [Llama-2-7b](https://huggingface.co/meta-llama/Llama-2-7b) which has 7 billion parameters trained on internet data. If you aim to emulate the average Redditor, you might need very little training data. The model already has extensive data on Reddit’s speech patterns. In such cases, fine-tuning may not be necessary; a simple prompt asking the model to ‘*talk like a Redditor*’ will most likely be enough to elicit the desired style. ([View Highlight](https://read.readwise.io/read/01hxrq27v3vb1eqdb865q59gcs))
- Conversely, if you’re dealing with a complex JSON payload with 100 keys, varying schemas, possibly nested dictionaries, and proprietary to your company, the model is unlikely to have encountered such data before. In these instances, the common consensus is that more data is better. While 100 samples might kickstart the process, you’d ideally want thousands of data points. You’re essentially teaching the model a new language, and the domain mismatch between the model and your task necessitates a substantial amount of data. ([View Highlight](https://read.readwise.io/read/01hxrq2fs6m4vjkjtjxrx91xbn))
- It’s a well-acknowledged truth, yet developing an intuition for it can be challenging, especially for those less familiar with machine learning. Generally, more data is preferable. However, even with around 50 samples, it’s worth trying, as based on our experience it can make a significant difference. ([View Highlight](https://read.readwise.io/read/01hxrq2sxn5z7vyrgs0k2qs3at))
- Finally, when data is in short supply, consider the following techniques to generate additional data:
  • Augmenting existing data: Modify current data slightly to create new samples.
  • Synthesizing data: Use generative models to create new examples based on patterns in the existing data. You can check out our [model distillation playbook](https://github.com/predibase/llm_distillation_playbook) for detailed insights on this topic.
  • Crowdsourcing: Gather more data from a group of people, especially for tasks like labeling or classification.
  • Transfer learning: Utilize data from related tasks or domains to supplement the limited data. ([View Highlight](https://read.readwise.io/read/01hxrq31b3n2kda146qpzfed3t))
- Evaluating language models used to be straightforward because the models weren’t very good. It was sufficient to ask if the model could speak English, using traditional metrics like BLEU or ROUGE. Nowadays, models are so fluent that they can produce text that sounds correct but isn’t, which represents a paradigm shift that the machine learning community is still adjusting to. ([View Highlight](https://read.readwise.io/read/01hxrq3g17hrc0ashrt5s82t3d))
- The best approach currently is to understand why you’re using large language models (LLMs) so you can ensure they work in production. For example, if you require **a semi-structured output** like a valid JSON payload, you could write a Python **script** that calls the LLM, validates the JSON, checks the keys, and follows your schema. This script can serve as an accuracy metric to determine whether your off-the-shelf or fine-tuned model performs better. ([View Highlight](https://read.readwise.io/read/01hxrq3n2b60hav9d1j9wtbgv7))
- Serving fine-tuned LLMs differs from training, with priorities shifting to **latency**, **uptime**, and **accuracy**. While training may require many GPUs, serving might use fewer but higher-quality GPUs.
  Quantized models (e.g., 4-bit) can introduce latency during serving as they upcast to FP16 for computation and downcast back for each layer. Managing compute costs is also crucial, as serving models 24/7 can be expensive. Auto-scaling solutions like Predibase and our open-source package LoRAX help address these issues.
  Fine-tuning customizes a model for specific tasks, which may limit its use for other purposes. In contrast, a general-purpose base model offers versatility. [LoRAX](https://predibase.com/blog/lora-exchange-lorax-serve-100s-of-fine-tuned-llms-for-the-cost-of-one), which stands for LoRA Exchange, allows stacking adapters in a single GPU deployment, enabling multiple fine-tuned models to coexist on one GPU, leading to cost savings. For instance, LoRAX could process a million tokens for just 31 cents, whereas two separate deployments might cost 62 cents, and with 128 deployments, the savings are substantial.
  Cost-efficiently serve many fine-tuned LLMs on a single GPU with LoRAX
  LoRAX offers a cost-effective way to serve models, optimizing resource usage and reducing expenses, beneficial for companies optimizing for product-market fit or those with limited traction.
  LoRAX provides massive cost savings when serving fine-tuned LLMs ([View Highlight](https://read.readwise.io/read/01hxrq46r2anb3kysj75qxq29m))
- ecent advancements in fine-tuning are shaping its future, making it increasingly relevant for both form and facts.
  [Research](https://arxiv.org/abs/2310.01352) from Meta has demonstrated how fine-tuning can enhance Retrieval-Augmented Generation (RAG) systems. This involves fine-tuning the embedder to provide the LLM with what it needs and teaching the LLM to disregard irrelevant retrievals.
  Can fine-tuning reduce hallucinations? The answer is that the jury is still out, there have been a few recent works that show significant improvements. For example, another significant [paper](https://arxiv.org/abs/2311.08401) focuses on fine-tuning language models for factuality using a training scheme similar to RLHF, DPO, which has been shown to reduce hallucinations by up to 50%. This research, led by Chris Manning and Chelsea Finn from Stanford, is a promising step towards improving the accuracy of language models.
  These papers suggest that the integration of RAG and fine-tuning is not only possible but also beneficial, and we can expect to see more applications of these techniques in the near future. If you’re interested, I recommend reading these studies for a deeper understanding. ([View Highlight](https://read.readwise.io/read/01hxrq4tzx7bqcq98z0pndd4qg))