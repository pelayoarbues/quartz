---
author: [[@iScienceLuvr on Twitter]]
title: "Claude, @AnthropicAI&#39;s P..."
tags: 
- tweets
- literature-note
---
# Claude, @AnthropicAI's P...

![rw-book-cover](https://pbs.twimg.com/profile_images/1553508977735962624/nnlSwBmu.jpg)

## Metadata
- Author: [[@iScienceLuvr on Twitter]]
- Full Title: Claude, @AnthropicAI's P...
- Category: #tweets
- URL: https://twitter.com/iScienceLuvr/status/1630515428014407680

## Highlights
- Claude, @AnthropicAI's powerful ChatGPT alternative, was trained with "Constitutional AI".
  Constitutional AI is particularly interesting since it uses less human feedback than other methods, making it more scalable.
  Let's dive into how Constitutional AI works in 13 tweets! ([View Tweet](https://twitter.com/iScienceLuvr/status/1630515428014407680))
- Constitutional AI (CAI) is based on:
  1. Supervised Fine-Tuning (SFT)
  2. Reinforcement Learning from Human Feedback (RLHF).
  If you don't know how SFT & RLHF work, you should first check out my thread on the topic 😉 (1/13)
  https://t.co/3tSvB544f3 ([View Tweet](https://twitter.com/iScienceLuvr/status/1630515430988173313))
- The goal is to build AI assistants that follow certain "constitutional principles" to make models less harmful (generating offensive outputs, reinforcing social biases,etc.)
  We can use AI feedback & supervision to follow these principles & limit the human feedback needed. (2/13) ([View Tweet](https://twitter.com/iScienceLuvr/status/1630515434154872835))
- The first component of CAI is similar to SFT. However, instead of fine-tuning our language model (LM) on (prompt, human-written response) pairs, we fine-tune on (prompt, AI-written response) pairs!
  The prompts are hard prompts that will often generate harmful samples. (3/13) 
  ![](https://pbs.twimg.com/media/FqDBJsXagAAdRc8.jpg) ([View Tweet](https://twitter.com/iScienceLuvr/status/1630515443424460801))
- So we don't want the default AI response. Instead, we also ask the model to critique its own response, and then revise the response based on the critique.
  More importantly, we ask the model to critique based on a given constitutional principle! (4/13) 
  ![](https://pbs.twimg.com/media/FqDBKNBaIAA9L_i.jpg) ([View Tweet](https://twitter.com/iScienceLuvr/status/1630515453482397696))
- You can also repeat the critique+revision process multiple times and get more and more harmless responses. Or the AI responses can be "self-critiqued" based on different principles, so they become harmless in different ways. (5/13) ([View Tweet](https://twitter.com/iScienceLuvr/status/1630515457844482049))
- Now we can use these more harmless responses to fine-tune our model & get a model that is harmless from the get-go. While prompts may need to be written by humans, you can see no responses need to be written by humans if you have a good base LM that can self-critique well. (6/13) ([View Tweet](https://twitter.com/iScienceLuvr/status/1630515460637708290))
- The paper also approaches an additional approach:
  Reinforcement Learning from AI Feedback (RLAIF)
  It is quite similar to RLHF, except it doesn't use human feedback! 😉 (7/13) 
  ![](https://pbs.twimg.com/media/FqDBLJvaIAEj_YR.jpg) ([View Tweet](https://twitter.com/iScienceLuvr/status/1630515468997107712))
- Just like typical RLHF pipelines, we start out with an SFT model, except it's the one trained with self-critiquing constitutional AI.
  Next, we need a reward/preference model. While RLHF uses human preferences to train the reward model, RLAIF uses AI preferences! (8/13) 
  ![](https://pbs.twimg.com/media/FqDBLq3aUAAyt_X.jpg) ([View Tweet](https://twitter.com/iScienceLuvr/status/1630515477343793152))
- A base LM generates a pair of responses, and another LM selects the preferred response, based on a constitutional principle.
  We can ask multiple times based on different constitutional principles, & ensemble over them.
  We can also use chain-of-thought to improve results! (9/13) 
  ![](https://pbs.twimg.com/media/FqDBMNPaIAEk1U2.jpg) ([View Tweet](https://twitter.com/iScienceLuvr/status/1630515488894894080))
- After getting our reward model trained with AI-generated preferences, we can then train the model with reinforcement learning like was done in RLHF. (10/13) ([View Tweet](https://twitter.com/iScienceLuvr/status/1630515493898694656))
- Before showing the results, here are how the constitutional principles look like - just a subset, the full principles are in Appendix C of the paper (11/13) 
  ![](https://pbs.twimg.com/media/FqDBNFaaEAAwntS.jpg) ([View Tweet](https://twitter.com/iScienceLuvr/status/1630515503570513921))
- Here are some examples of the final trained model (52B params, supervised CAI followed by RLAIF), referred to as RL-CAI CoT. You can see that the model doesn't evade the question and provides nuanced responses to controversial and harmful prompts. (12/13) 
  ![](https://pbs.twimg.com/media/FqDBNxKaAAA0D1b.jpg) 
  ![](https://pbs.twimg.com/media/FqDBOJLagAEPifC.jpg) ([View Tweet](https://twitter.com/iScienceLuvr/status/1630515521505624064))
- Evaluation by crowdworkers also indicates that RL-CAI is more harmless than standard RLHF, while still being very "helpful". (13/13) 
  ![](https://pbs.twimg.com/media/FqDBO06aQAABXsF.jpg) ([View Tweet](https://twitter.com/iScienceLuvr/status/1630515533312589825))
- That's all! I am excited about techniques like CAI that utilize AI itself to limit human feedback needed, but still in an interpretable manner.
  While the paper studies harmlessness, you could use CAI to elicit any desired behavior based on different constitutional principles. ([View Tweet](https://twitter.com/iScienceLuvr/status/1630515537250746369))
- Check out the paper for more info → https://t.co/PYuSwRujrQ
  If you are interested in playing with some of these ideas (mainly the self-critiquing part), check out @LangChainAI's implementation → https://t.co/7zU946jwZq
  Additionally, @carperai is researching similar directions ([View Tweet](https://twitter.com/iScienceLuvr/status/1630515540031860740))
- If you liked this thread, consider sharing this thread 🙏
  and follow me for more ML content! 🙂 → @iScienceLuvr ([View Tweet](https://twitter.com/iScienceLuvr/status/1630515542875316230))
