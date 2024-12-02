---
author: [[@akshay_pachaar on Twitter]]
title: "This Is the Future of Bu..."
date: 2024-07-08
tags: 
- tweets
- literature-note
---
![rw-book-cover](https://pbs.twimg.com/profile_images/1578327351544360960/YFpWSWIX.jpg)

## Metadata
- Author: [[@akshay_pachaar on Twitter]]
- Full Title: This Is the Future of Bu...
- URL: https://twitter.com/akshay_pachaar/status/1810290243582787909

## Highlights
- This is the future of building RAGs. Let me introduce you to DSPy today: ([View Tweet](https://twitter.com/akshay_pachaar/status/1810290243582787909))
- In terms of analogy, DSPy is to RAG as PyTorch is to DNNs.
  DSPy : RAG :: PyTorch : DNNs
  To understand DSPy, we need to grasp three key concepts:
  - Signatures
  - Modules
  - Optimizers
  Let's delve into each one! 🚀 
  ![](https://pbs.twimg.com/media/GR9xaYabUAAJ4bI.jpg) ([View Tweet](https://twitter.com/akshay_pachaar/status/1810290278001160462))
- 1️⃣ Signature
  We use a signature to tell DSPy what to do instead of how to do; they save us from writing gigantic & complex prompts.
  DSPy supports inline short strings as signatures; however, you can always write a class for it if necessary! 
  ![](https://pbs.twimg.com/media/GR9xcKjaMAA5j08.jpg) ([View Tweet](https://twitter.com/akshay_pachaar/status/1810290308317577492))
- 3️⃣ Module
  A module takes a signature & expresses it in form of a sophisticated prompt or whatever your signature specifies, based on the specified technique & the LLM configured.
  It can be thought of as a parametrised layer in PyTorch that can learn from the data (input/output) 
  ![](https://pbs.twimg.com/media/GR9xeA7aEAA7zyS.jpg) ([View Tweet](https://twitter.com/akshay_pachaar/status/1810290340546683177))
- Now, before delving into the concept of an optimizer, let's define a DSPy program that we want to optimise.
  Here's a basic DSPy RAG program & it's similar to PyTorch where we have an __init__() function for module definitions and a forward function for module interactions. 
  ![](https://pbs.twimg.com/media/GR9xf0jaAAAjnnz.jpg) ([View Tweet](https://twitter.com/akshay_pachaar/status/1810290370498252850))
- 3️⃣ Optimizer
  A DSPy optimizer can optimize 3 things:
  - LM Weights
  - Instructions (prompts/signatures)
  - Demonstrations of the input output behaviour
  Here's how we use a train set & custom metric to optimize the RAG program we defined earlier: 
  ![](https://pbs.twimg.com/media/GR9xhlRboAATgMp.jpg) ([View Tweet](https://twitter.com/akshay_pachaar/status/1810290401418649670))
- Automatic Evaluations ✨
  Now that we have optimised our program, DSPy offers automatic evaluation where you need to provide:
  - A dev set of questions & expected answers
  - An evaluation metric (supports predefined & custom metric)
  Check this out👇 
  ![](https://pbs.twimg.com/media/GR9xjYXawAAY7I1.jpg) ([View Tweet](https://twitter.com/akshay_pachaar/status/1810290432322265274))
- You can find all the code & details in the [LightningAI](https://twitter.com/LightningAI)⚡️ studio shared below!
  The work in the studio has been adapted from DSPy tutorials on their GitHub, with additional support of local LLMs on the studios using Ollama.
  Take it for a spin:
  https://t.co/8fBeGLcYHN ([View Tweet](https://twitter.com/akshay_pachaar/status/1810290455692931310))
- That's a wrap!
  If you're interested in learning more about DSPy & RAGs, I'll be covering:
  - DSPy assertions
  - RAGs with citations
  - Finetuning a LM for complex RAGs
  Stay tuned & find me → [akshay_pachaar](https://twitter.com/akshay_pachaar) ✔️
  Cheers! 🥂 ([View Tweet](https://twitter.com/akshay_pachaar/status/1810290478639915044))
