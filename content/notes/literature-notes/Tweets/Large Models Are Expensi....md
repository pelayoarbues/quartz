---
author: [[@sourab_m on Twitter]]
title: "Large Models Are Expensi..."
tags: 
- tweets
- literature-note
---
# Large Models Are Expensi...

![rw-book-cover](https://pbs.twimg.com/profile_images/1616378799624687618/IrF7Ft2r.jpg)

## Metadata
- Author: [[@sourab_m on Twitter]]
- Full Title: Large Models Are Expensi...
- Category: #tweets
- URL: https://twitter.com/sourab_m/status/1624090029198020612

## Highlights
- Large models are expensive to fine-tune on downstream tasks. What if we could achieve the same performance with a small fraction of the trainable parameters 🤑?
  Introducing 🤗 PEFT: library for "parameter-efficient fine-tuning".
  https://t.co/Rj8eM9tltR
  https://t.co/Mxs2BqSu5G
  🧵 
  ![](https://pbs.twimg.com/media/FontRPdaMAIgmv_.jpg) ([View Tweet](https://twitter.com/sourab_m/status/1624090029198020612))
- With PEFT, you can fit the fine-tuning of very large models within consumer GPUs with support from other techniques like CPU offloading!
  For example, you can fine-tune an OPT-6.7b with PEFT and `bitsandbytes` in @GoogleColab ... fast ⚡️⚡️
  https://t.co/EYmH0swfkg ([View Tweet](https://twitter.com/sourab_m/status/1624090033333628929))
- PEFT currently supports the following techniques for parameter-efficient fine-tuning:
  1️⃣ LoRA by @edwardjhu and @WeizhuChen et. al.
  2️⃣ Prefix tuning
  3️⃣ Prompt tuning by @noahconst et. al.
  4️⃣ P-tuning
  More coming soon 🔜 ([View Tweet](https://twitter.com/sourab_m/status/1624090036106039299))
- Let's code a sequence classification model but with the LoRA support provided by PEFT.
  First, we define a configuration underlying the fine-tuning method (LoRA in this case). 
  ![](https://pbs.twimg.com/media/FontSNVaEAARXIo.png) ([View Tweet](https://twitter.com/sourab_m/status/1624090043815165952))
- Then, we initialize the base model and wrap it with `get_peft_model()`: 
  ![](https://pbs.twimg.com/media/FontSuAaAAUejOJ.jpg) ([View Tweet](https://twitter.com/sourab_m/status/1624090053868949505))
- And we're ready to train 🔥 
  ![](https://pbs.twimg.com/media/FontTTiagAEWEWF.jpg) ([View Tweet](https://twitter.com/sourab_m/status/1624090062458867713))
- If you serialize the parameters of the `lora_model`, you will notice that they are only a couple of MBs. This greatly helps with portability 💼
  Here is one example:
  https://t.co/Qmkurh1HJ3 ([View Tweet](https://twitter.com/sourab_m/status/1624090066405724161))
- We strive to make PEFT as modality-agnostic as possible. So, we have tested different methods offered by PEFT for various NLP tasks, DreamBooth training, image segmentation & more!
  Check out our examples and @GoogleColab notebooks here:
  https://t.co/59FhQRds1W ([View Tweet](https://twitter.com/sourab_m/status/1624090069261860865))
