---
author: [[@hrishioa on Twitter]]
title: "Been Pretty Excited Wait..."
date: 2023-10-13
tags: 
- tweets
- literature-note
---
![rw-book-cover](https://pbs.twimg.com/profile_images/1652004946534072320/8IvHCznu.jpg)

## Metadata
- Author: [[@hrishioa on Twitter]]
- Full Title: Been Pretty Excited Wait...
- URL: https://twitter.com/hrishioa/status/1712199009308398079

## Highlights
- Been pretty excited waiting for @MistralAI's new paper about how the model is able to beat (in all of our tests) models 3-10x the size.
  Sliding Window Attention seems to be the main reason - and it's genius.
  Let me explain why it's brilliant and what I understand. 
  ![](https://pbs.twimg.com/media/F8Lz7Cub0AA-CMC.jpg) ([View Tweet](https://twitter.com/hrishioa/status/1712199009308398079))
- Sliding Window Attention makes it so that a token can only connect to information from the previous X tokens - not all of them.
  All the tokens still influence the output, but what influences their individual attention score at each layer is significantly cut down. 
  ![](https://pbs.twimg.com/media/F8Lz7hNbsAAVWzS.jpg) ([View Tweet](https://twitter.com/hrishioa/status/1712199018284241096))
- It's interesting to imagine what this does to a model that's pre-trained with this architecture.
  If my presumption is right, this lets attention layers compress knowledge even further, by adding the constraint that they need to retrieve it from the previous N tokens. ([View Tweet](https://twitter.com/hrishioa/status/1712199021291549001))
- This makes perfect sense - Transformers (with MQA and other tools) are just ways to constrain what would otherwise just be fully connected.
  Constraints force models to compress knowledge instead of overfitting, in ways that make it possible to retrieve and generalize it. ([View Tweet](https://twitter.com/hrishioa/status/1712199023917199556))
- Sliding window initially struck me as similar to some of the work on streaming LLMs like the work out of MIT's HAN lab
  It operates at a much deeper level. It's a new way to reduce the n^2 scaling attention, and has applications that stretch a lot more.
  https://t.co/HGdjtRRSJr ([View Tweet](https://twitter.com/hrishioa/status/1712199026526036054))
- Long term I think this has the strong possibility of becoming a new standard. Congrats to the team at Mistral - the full paper has more on how they've improved inference speed, and system prompts that better align models without losing helpfulness as much. ([View Tweet](https://twitter.com/hrishioa/status/1712199029311012866))
