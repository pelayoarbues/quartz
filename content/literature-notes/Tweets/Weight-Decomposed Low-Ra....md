---
author: [[@rohanpaul_ai on Twitter]]
title: "Weight-Decomposed Low-Ra..."
date: 2024-07-10
tags: 
- tweets
- literature-note
---
![rw-book-cover](https://pbs.twimg.com/profile_images/1715475762516840448/kst_-vG1_x96.jpg)

## Metadata
- Author: [[@rohanpaul_ai on Twitter]]
- Full Title: Weight-Decomposed Low-Ra...
- URL: https://twitter.com/rohanpaul_ai/status/1810952494907883644

## Highlights
- Weight-Decomposed Low-Rank Adaptation (DoRA) from [nvidia](https://twitter.com/nvidia). Quite a groundbreaking research for low-GPU LLM fine-tuning.
  Consistently outperforms LoRA across a wide variety of LLM and vision language model (VLM) 🤯
  Begins by decomposing the pre-trained weight into its magnitude and directional components, then fine-tunes both.
  💡 DoRA consistently outperforms LoRA on fine-tuning LLaMA, LLaVA, and VL-BART on various downstream tasks, such as commonsense reasoning, visual instruction tuning, and image/video-text understanding.
  -----
  First revisiting the regular LoRA concept
  📌 In LoRA the changes in the original weight matrix W is adapted by adding a low-rank product of two smaller matrices BA , where B and A are the low-rank matrices. So, the adapted weight matrix becomes W + BA.
  i.e. with LoRA the fine-tuned weight W′ can be represented as:
  W′ = W_0 + ∆W = W0 + BA
  Where W_0 remains static during the fine-tuning process, and the underlined parameters are being trained. The matrix A is initialized with uniform Kaiming distribution, while B is initially set to zero, resulting in ∆W = BA being zero at the start of training.
  -----
  DoRA decomposes the pre-trained weight into two components, magnitude and direction, for fine-tuning, specifically employing LoRA for directional updates to efficiently minimize the number of trainable parameters.
  📌 By employing DoRA, both the learning capacity and training stability of LoRA is enhanced while avoiding any additional inference overhead.
  📌 Now, how exactly do they decompose W into these 2 pieces : magnitude vector (m) and a directional matrix (V)?
  On this the paper says - Drawing on Weight Normalization, which achieves faster convergence via improving the conditioning of the gradient with weight reparameterization, we introduce a novel weight decomposition analysis that initially reparameterizes model weights into magnitude and directional components. Because the directional component is large in terms of parameter numbers, we further decompose it with LoRA for efficient finetuning.
  ✨ One of the key idea is that limiting LoRA to concentrate exclusively on directional adaptation while also allowing the magnitude component to be tunable simplifies the task compared to the original approach, where LoRA is required to learn adjustments in both magnitude and direction.
  ![](https://pbs.twimg.com/media/GSHLmcGWoAEhFXX.png) ([View Tweet](https://twitter.com/rohanpaul_ai/status/1810952494907883644))
- ![](https://pbs.twimg.com/media/GSHMQhxXUAAirxR.png) ([View Tweet](https://twitter.com/rohanpaul_ai/status/1810953121058697450))
- ![](https://pbs.twimg.com/media/GSHManLWcAASnC4.png) ([View Tweet](https://twitter.com/rohanpaul_ai/status/1810953292274336168))
- 🗞️ Paper: https://t.co/s0pHNTWsia
  Github: https://t.co/u52xRBlJMX ([View Tweet](https://twitter.com/rohanpaul_ai/status/1810953316500660571))
