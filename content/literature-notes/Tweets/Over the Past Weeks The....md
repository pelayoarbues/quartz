---
author: [[@Thom_Wolf on Twitter]]
title: "Over the Past Weeks The..."
date: 2023-10-30
tags: 
- tweets
- literature-note
---
![rw-book-cover](https://pbs.twimg.com/profile_images/1629469939860946946/WUyBolSu.jpg)

## Metadata
- Author: [[@Thom_Wolf on Twitter]]
- Full Title: Over the Past Weeks The...
- URL: https://twitter.com/Thom_Wolf/status/1717821614467739796

## Highlights
- Over the past weeks the H4 team has been busy pushing the Zephyr 7B model to new heights 🗻
  The new version is now topping all 7b models on chat evals and even 10x larger models 🤯🔥
  Here are the intuitions on it
  1/ Start with the strongest pretrained model you can find: Mistral 7B is amazing, by far the strongest 7B pretrained model. Props to the Mistral AI team 😍
  2/ Scale human-preference annotations: several studies have show how for many tasks GPT4 is on-par with the average human annotators while making scalable annotations as easy as an API call: the H4 team started from the largest and most diverse public GPT4 preference annotation dataset: UltraFeedback 🤖🦾
  3/ Drop Reinforcement Learning in favor of DPO (Direct Preference Optimization): while using LLM in RL is definitely much easier compared to the struggles of getting deep-RL to work from scratch, DPO totally remove RL from the preference annotation training and directly optimize the preference model in a much more stable training procedure in the H4 team's experiments
  4/ Don't be scared of overfitting on preference dataset: This is maybe the most counterintuitive results of the work. While the train/test loss of DPO training shows signs of overfitting on the feedback dataset after just one epoch, training further still show significant improvements on downstream tasks even up to 3 epochs without signs of performances regression. Would be interesting to dive even further in this surprising behavior
  5/ Share everything openly 😁 the recipes, code, model and dataset will be available at https://t.co/qkKhS8eqvt 
  In the meantime the paper is a great starting point: https://t.co/qzZ0tb8Aq1<img src='https://pbs.twimg.com/media/F9brn0CXkAMj6pd.jpg'/> ([View Tweet](https://twitter.com/Thom_Wolf/status/1717821614467739796))
