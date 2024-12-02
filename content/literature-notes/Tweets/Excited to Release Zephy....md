---
author: [[@_lewtun on Twitter]]
title: "Excited to Release Zephy..."
date: 2023-10-27
tags: 
- tweets
- literature-note
---
![rw-book-cover](https://pbs.twimg.com/profile_images/1097405296543236096/gS2C7RIq.jpg)

## Metadata
- Author: [[@_lewtun on Twitter]]
- Full Title: Excited to Release Zephy...
- URL: https://twitter.com/_lewtun/status/1717816585786626550

## Highlights
- Excited to release Zephyr-7b-beta 🪁 !
  It pushes our recipe to new heights & tops 10x larger models 💪
  📝 Technical report: https://t.co/3R4czrpbu5
  🤗Model: https://t.co/8uUkvg4E7j
  ⚔️Evaluate it against 10+ LLMs in the <a href="https://twitter.com/lmsysorg">@lmsysorg</a> arena: https://t.co/2cMZRUvhOc
  Details in the 🧵 
  ![](https://pbs.twimg.com/media/F9bhv3qWEAAzYUN.jpg) ([View Tweet](https://twitter.com/_lewtun/status/1717816585786626550))
- For context, Zephyr 7B is a series of chat models based on:
  🔥 <a href="https://twitter.com/MistralAI">@MistralAI</a>'s epic Mistral 7B base model
  💬 The UltraChat dataset with 1.4M dialogues from ChatGPT
  ⚖️ The UltraFeedback dataset with 64k prompts & completions judged by GPT-4
  Here's what the process looks like 👇 
  ![](https://pbs.twimg.com/media/F9baNiaWcAAfqPM.png) ([View Tweet](https://twitter.com/_lewtun/status/1717816587657281595))
- While writing up the report we discovered we could squeeze more perf by:
  🧹 Aggressively filtering UltraChat down to 200k samples
  🏋️‍♀️ Training for more DPO epochs
  The new model is Zephyr-7B-β and competitive with ChatGPT on AlpacaEval 🔥!
  Model 👉: https://t.co/8uUkvg5bWR 
  ![](https://pbs.twimg.com/media/F9bnRcBXwAAou8Z.jpg) ([View Tweet](https://twitter.com/_lewtun/status/1717816590341931179))
- So what did we filter from UltraChat?
  With Zephyr-7B-α we noticed that the model had a tendency to:
  - Write incorrect casing, e.g. "Hi. how are you?" vs "Hi. How are you?"
  - Preface responses with "I don't have personal X" etc
  Fixing both issues gave a much better SFT model! ([View Tweet](https://twitter.com/_lewtun/status/1717816593172840471))
- Next, we applied "direct preference optimisation" (DPO) to the SFT model with the UltraFeedback dataset.
  An interesting discovery is that training longer => overfitting, but better on chat benchmarks!
  We think this is similar to overfitting in SFT, which also works well 👀 
  ![](https://pbs.twimg.com/media/F9baaSYWUAAaVyF.png) ([View Tweet](https://twitter.com/_lewtun/status/1717816595131859018))
- We also examined whether SFT or DPO are really needed 🤔?
  ❌ Applying DPO without SFT is bad (can't learn chat template)
  ❌ Applying SFT on UltraChat + best response on UltraFeedback
  ✅ Applying SFT + DPO gives best perf 
  ![](https://pbs.twimg.com/media/F9baiGOWwAARc8_.png) ([View Tweet](https://twitter.com/_lewtun/status/1717816597790834855))
- In our vibes-based evals, it was reassuring to see Zephyr-7b-beta passed <a href="https://twitter.com/jackclarkSF">@jackclarkSF</a>'s famous helicopter prompt 🚁
  Note the SFT model without DPO hallucinate an "adult-sized helicopter" 😅 
  ![](https://pbs.twimg.com/media/F9boaw9XIAAMRQ_.jpg) ([View Tweet](https://twitter.com/_lewtun/status/1717816599888163063))
- This work would not have been possible without the awesome AI community & we're grateful to:
  - <a href="https://twitter.com/MistralAI">@MistralAI</a> for releasing kick arse models
  - <a href="https://twitter.com/lmsysorg">@lmsysorg</a> & <a href="https://twitter.com/stanfordnlp">@stanfordnlp</a> for pioneering chat model evals
  - <a href="https://twitter.com/stingning">@stingning</a> and the UltraLM team for creating high quality datasets
  Thank you 🤗! ([View Tweet](https://twitter.com/_lewtun/status/1717816602429730929))
