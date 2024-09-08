---
author: [[AlphaSignal]]
title: "🤯 New Technique Allows Open-Source LLM to Beat Top Closed-Source Models"
date: 2024-09-08
tags: 
- articles
- literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article1.be68295a7e40.png)

## Metadata
- Author: [[AlphaSignal]]
- Full Title: 🤯 New Technique Allows Open-Source LLM to Beat Top Closed-Source Models

## Highlights
- **Reflection-Tuning Process**
  • The technique separates planning into a distinct step, enhancing chain-of-thought reasoning and producing concise outputs.
  • This approach addresses hallucination tendencies in current LLMs by implementing a self-correction mechanism before committing to an answer.
  • Here's how it works1. During inference, the model generates reasoning within <thinking> tags.2. If it detects a mistake, it uses <reflection> tags to correct itself before moving forward.3. Only after this self-correction does the model provide a final answer, enclosed in <output> tags. ([View Highlight](https://read.readwise.io/read/01j74d2m5qtpzvvvxrc1h5nrxx))
- **Problem** 
  LLMs face trade-offs between performance and cost. Mixture-of-Experts (MoE) models offer a solution, but lack open-source options. OLMOE-1B-7B addresses this gap with 6.9B total parameters, activating only 1.3B per token.
  **Solution** 
  OLMOE-1B-7B, a fully open-source MoE LLM, was trained on 5.1 trillion tokens. It uses 64 small experts per layer, with 8 activated. The model employs dropless token-choice routing and auxiliary losses for stability.
  **Results** 
  OLMOE-1B-7B outperforms models with similar active parameters, matching Llama2-13B's MMLU score (54.1%). After instruction tuning, it surpasses Llama2-13B-Chat and DeepSeekMoE-16B on benchmarks like MMLU, GSM8k, and HumanEval. ([View Highlight](https://read.readwise.io/read/01j74dx5xsyv1wjrcygv21vxz2))
- **Problem** 
  Recent studies favor long-context LLMs over Retrieval-Augmented Generation (RAG) for question-answering tasks. However, this paper argues that extremely long contexts can diminish focus on relevant information, potentially degrading answer quality.
  **Solution** 
  The authors propose Order-Preserve RAG (OP-RAG), which maintains the original order of retrieved chunks in the context, unlike traditional RAG that orders by relevance.
  **Results** 
  OP-RAG outperforms long-context LLMs and vanilla RAG. Using Llama3.1-70B, OP-RAG achieves 47.25 F1 score on EN.QA with 48K tokens, compared to 34.26 F1 score with 117K tokens for long-context LLM without RAG. On EN.MC, OP-RAG reaches 88.65% accuracy with 24K tokens, surpassing Gemini-1.5-Pro's 85.57% with 188K tokens. ([View Highlight](https://read.readwise.io/read/01j74dxhy73g0ycxz39sg3bkkb))
