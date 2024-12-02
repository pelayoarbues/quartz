---
author: [[@archit_sharma97 on Twitter]]
title: "Ever Wondered if the RL..."
tags: 
- tweets
- literature-note
---
# Ever Wondered if the RL...

![rw-book-cover](https://pbs.twimg.com/profile_images/1434732854252998659/BUEZnwYJ.jpg)

## Metadata
- Author: [[@archit_sharma97 on Twitter]]
- Full Title: Ever Wondered if the RL...
- Category: #tweets
- URL: https://twitter.com/archit_sharma97/status/1663595372269408261

## Highlights
- Ever wondered if the RL in RLHF is really needed? Worried that you might really need to understand how PPO works?
  Worry no more, Direct Preference Optimization (DPO) allows you to fine-tune LMs directly from preferences via a simple classification loss, no RL required.
  🧵 -> https://t.co/vnyh28gdFG ([View Tweet](https://twitter.com/archit_sharma97/status/1663595372269408261))
- How? The key idea is that language models can ALREADY be used as reward models (see below). The binary cross-entropy loss function used for fitting a reward model to preference data can now be used to fine-tune the language models directly! 
  ![](https://pbs.twimg.com/media/FxY3k_OaEAA0_wQ.jpg) ([View Tweet](https://twitter.com/archit_sharma97/status/1663595374173646849))
- This isn’t a party trick! This derivation is principled, optimizing *exactly* the same objective used for RLHF. And it leads to a simple algorithm: Increase prob of pref. completions, and decrease prob of dispref. ones, but only on examples where the model is wrong! 
  ![](https://pbs.twimg.com/media/FxY_ASzaYAEEQNk.jpg) ([View Tweet](https://twitter.com/archit_sharma97/status/1663595376073670659))
- Despite the simplicity, DPO can perform better than PPO. DPO summaries are preferred 58% over PPO summaries (human evals), 61% over human summs in test set (GPT4 evals). DPO single-turn responses are preferred ~60% on Anthropic HH over chosen completions in test set (GPT4 evals). 
  ![](https://pbs.twimg.com/media/FxY5gZyagAAmve6.jpg) 
  ![](https://pbs.twimg.com/media/FxY5gZyakAIjsrv.jpg) 
  ![](https://pbs.twimg.com/media/FxY5gZwaQAENmk_.jpg) ([View Tweet](https://twitter.com/archit_sharma97/status/1663595378409869313))
- Bypassing RL isn’t just about mathematical aesthetics or performance; computational savings are huge too: no value function training, no explicit reward models, never need to sample the model during training. ([View Tweet](https://twitter.com/archit_sharma97/status/1663595380515409922))
- I am very excited about this line of work, lots of cool ideas seem to be possible with this simplification!
  more details on arxiv: https://t.co/2wnEGWnTDs
  code release soon!
  a wonderful collaboration w/ @rm_rafailov, @ericmitchellai, @StefanoErmon, @chrmanning, @chelseabfinn ([View Tweet](https://twitter.com/archit_sharma97/status/1663595381966655489))
