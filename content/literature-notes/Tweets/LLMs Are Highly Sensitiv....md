---
author: [[@rohanpaul_ai on Twitter]]
title: "LLMs Are Highly Sensitiv..."
date: 2024-09-22
tags: 
- tweets
- literature-note
---
![rw-book-cover](https://pbs.twimg.com/profile_images/1816185267037859840/Fd18CH0v.jpg)

## Metadata
- Author: [[@rohanpaul_ai on Twitter]]
- Full Title: LLMs Are Highly Sensitiv...
- URL: https://twitter.com/rohanpaul_ai/status/1837854548066500782

## Highlights
- LLMs are highly sensitive to prompt variations, leading to inconsistent performance across different prompts for the same task. 👨‍🔧
  Intent-based Prompt Calibration (IPC) iteratively refines prompts to match user intent using synthetic boundary cases, addressing prompt sensitivity and optimizing with limited data.
  📌 IPC generates challenging synthetic samples at each iteration, focusing on boundary cases that expose prompt ambiguities.
  📌 The system employs three meta-prompts: Sample Generator, Analyzer, and Prompt Generator. The Sample Generator creates diverse, adversarial samples with balanced class distribution. The Analyzer evaluates prompt performance and identifies failure cases. The Prompt Generator suggests improved prompts based on historical performance and analysis.
  📌 For generative tasks, IPC first calibrates a ranking prompt, then uses it to optimize the generative prompt. This approach allows optimization with minimal annotation effort.
  📌 The system architecture consists of four components: Dataset (manages data operations), Estimator (handles predictions and annotations), Evaluator (assesses records and performs error analysis), and Optimizer (manages the optimization process flow).
  📌 IPC outperforms existing methods like OPRO and PE on classification tasks (spoiler detection, sentiment analysis, PG detection) and generative tasks (enthusiastic/reliable and sarcastic/positive movie reviews).
  📌 The method demonstrates superior performance with limited data, achieving higher accuracy and lower variance compared to baseline approaches.
  📌 Ablation studies reveal the importance of synthetic data generation, iterative refinement, and error analysis in improving model performance.
  📌 IPC effectively handles imbalanced data distributions by generating balanced synthetic samples, particularly beneficial for real-world moderation tasks.
  ![](https://pbs.twimg.com/media/GYFeU7kWEAEZvs-.png) ([View Tweet](https://twitter.com/rohanpaul_ai/status/1837854548066500782))
- 🗞️ Paper - https://t.co/CfHQ537xHH 
  ![](https://pbs.twimg.com/media/GYFfKVIXQAAyaVF.png) ([View Tweet](https://twitter.com/rohanpaul_ai/status/1837854762953302527))
- ![](https://pbs.twimg.com/media/GYFfMGBXEAET5lN.png) ([View Tweet](https://twitter.com/rohanpaul_ai/status/1837854792510546309))
- ![](https://pbs.twimg.com/media/GYFfN9OWoAAUIYL.png) ([View Tweet](https://twitter.com/rohanpaul_ai/status/1837854824953442423))
- ![](https://pbs.twimg.com/media/GYFfP62XQAAMjPC.jpg) ([View Tweet](https://twitter.com/rohanpaul_ai/status/1837854859229298740))
- ![](https://pbs.twimg.com/media/GYFfRaLXEAA9H4o.png) ([View Tweet](https://twitter.com/rohanpaul_ai/status/1837854883812200463))
- ![](https://pbs.twimg.com/media/GYFfSmbXoAApVgT.png) ([View Tweet](https://twitter.com/rohanpaul_ai/status/1837854903747645525))
