---
author: [[Philipp Schmid]]
title: "Can ORPO redefine how we train and align LLMs for..."
date: 2024-03-18
tags: 
- tweets
- literature-note
---
![rw-book-cover](https://pbs.twimg.com/profile_images/1714444511860887552/8TzsCn3e_normal.jpg)

## Metadata
- Author: [[Philipp Schmid]]
- Full Title: Can ORPO redefine how we train and align LLMs for...
- URL: https://twitter.com/_philschmid/status/1768925684313808943

## Highlights
- Can ORPO redefine how we train and align LLMs for RLHF? 🤔 
  State-of-the-art LLMs followed the process of Base Model → Supervised Fine-tuning → RLHF (PPO/DPO). This is very resource-intensive and complex. 😒 Odds Ratio Preference Optimization (ORPO) proposes a new method to train LLMs by combining SFT and Alignment into a new objective (loss function), achieving state of the art results. 🧐 ([View Highlight](https://read.readwise.io/read/01hs9hz6j3z66ccbw9fwssbyj9))
- Training process: 
  1️⃣ Create a pairwise preference dataset (chosen/rejected), e.g. [@argilla_io](https://twitter.com/argilla_io) UltraFeedback. 
  2️⃣ Make sure the dataset doesn’t contain instances where the chosen and rejected responses are the same, or one is empty. 
  3️⃣ Select a pre-trained LLM (e.g., Llama-2, Mistral) 
  4️⃣ Train the Base model with ORPO objective on preference dataset 
  ^No extra SFT step, directly applied to base model 🔥 ([View Highlight](https://read.readwise.io/read/01hs9hzj570jthbzhgdtddqf7f))
- Insights 
  🧠 Reference model-free → memory friendly 
  🔄 Replaces SFT+DPO/PPO with 1 single method (ORPO) 
  🏆 ORPO Outperforms SFT, SFT+DPO on PHI-2, Llama 2, and Mistral 
  📊 Mistral ORPO achieves 12.20% on AlpacaEval2.0, 66.19% on IFEval, and 7.32 on MT-Bench out [@huggingface](https://twitter.com/huggingface) Zephyr Beta ([View Highlight](https://read.readwise.io/read/01hs9hzwnbdrgjj3c709hsp872))
- We try to integrate ORPO into Hugging Face TRL and validate the results in the coming weeks. ([View Highlight](https://read.readwise.io/read/01hs9j03tbjfdfywje5xjvbhsk))
