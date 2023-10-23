---
author: [[readwise.io]]
title: " LoRA: Low-Rank Adaptation of Large Language Models"
date: 2023-08-25
tags: 
- articles
- literature-note
---
#  LoRA: Low-Rank Adaptation of Large Language Models

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)

## Metadata
- Author: [[readwise.io]]
- Full Title:  LoRA: Low-Rank Adaptation of Large Language Models
- URL: https://readwise.io/reader/document_raw_content/29930613

## Highlights
- LORA: LOW-RANK ADAPTATION OF LARGE LAN-
  GUAGE MODELS ([View Highlight](https://read.readwise.io/read/01gzxe8nt7ecbk2s0e4c2tv49y))
## New highlights added October 23, 2023 at 2:13 PM
- An important paradigm of natural language processing consists of large-scale pre- training on general domain data and adaptation to particular tasks or domains. As we pre-train larger models, full ﬁne-tuning, which retrains all model parameters, becomes less feasible. ([View Highlight](https://read.readwise.io/read/01hde6cwxkxywcq6zqm2nx052d))
- We propose Low-Rank Adaptation, or LoRA, which freezes the pre- trained model weights and injects trainable rank decomposition matrices into each layer of the Transformer architecture, greatly reducing the number of trainable pa- rameters for downstream tasks. ([View Highlight](https://read.readwise.io/read/01hde6d66arvspyc5stq1v72gw))
- LoRA performs on-par or better than ﬁne- tuning in model quality on RoBERTa, DeBERTa, GPT-2, and GPT-3, despite hav- ing fewer trainable parameters, a higher training throughput, and, unlike adapters, no additional inference latency ([View Highlight](https://read.readwise.io/read/01hde6dsjzzkvw9gpvwa4nfens))
- Many applications in natural language processing rely on adapt- ing one large-scale, pre-trained language model to multiple down- stream applications. Such adaptation is usually done via ﬁne-tuning, which updates all the parameters of the pre-trained model. The ma- jor downside of ﬁne-tuning is that the new model contains as many parameters as in the original model. ([View Highlight](https://read.readwise.io/read/01hde6e78ctekcjqvhv6gm1bbz))
- Many sought to mitigate this by adapting only some parameters or learning external modules for new tasks. This way, we only need to store and load a small number of task-speciﬁc parameters in ad- dition to the pre-trained model for each task, greatly boosting the operational efﬁciency when deployed. ([View Highlight](https://read.readwise.io/read/01hde6evh1k6eame2xgeknvhwq))
- We take inspiration from Li et al. (2018a); Aghajanyan et al. (2020) which show that the learned over-parametrized models in fact reside on a low intrinsic dimension. We hypothesize that the change in weights during model adaptation also has a low “intrinsic rank”, leading to our proposed Low-Rank Adaptation (LoRA) approach. LoRA allows us to train some dense layers in a neural network indirectly by optimizing rank decomposition matrices of the dense layers’ change during adaptation instead, while keeping the pre-trained weights frozen, as shown in Figure 1. ([View Highlight](https://read.readwise.io/read/01hde6kk2014hc9ktjbwrkfkp6))
