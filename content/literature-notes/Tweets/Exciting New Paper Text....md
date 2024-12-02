---
author: [[@thomasahle on Twitter]]
title: "Exciting New Paper: Text..."
date: 2024-06-14
tags: 
- tweets
- literature-note
---
![rw-book-cover](https://pbs.twimg.com/profile_images/1281418733693607937/_vWJlaTi.jpg)

## Metadata
- Author: [[@thomasahle on Twitter]]
- Full Title: Exciting New Paper: Text...
- URL: https://twitter.com/thomasahle/status/1801397334229848066

## Highlights
- Exciting new paper: TextGrad: Automatic “Differentiation” via Text!
  This is a DSPy-like framework for optimizing prompts in a composite LLM system. However, there is one major difference!
  In DSPy the idea is (basically):
  - Forward pass: Each Module (LLM call) generates picks a random prompt (set of few-shot examples)
  - Backwards pass: If the final answer was good, each internal module upweight the prompt it used.
  In TextGrad you try to do something like the "chain rule":
  - Forward pass: Each Module receives a (query, prompt) pair and outputs an answer.
  - Backwards pass: We ask an LLM to "improve the prompt given the (query, answer) pair" and importantly "how you should improve the query" given the (prompt, answer) pair.
  That allows you to bootstrap the backwards pass all the way end-to-end.
  How well does it work? Pretty well! Prompt optimization is hard to do, and this method works at least as well as DSPy with random search!
  More importantly, it's an exciting view into what's to come in module LLM programming!
  The paper also discusses lots of interesting applications, such as code gen! Well worth a read.
  Pdf: https://t.co/RerivVwvHQ
  By [mertyuksekgonul](https://twitter.com/mertyuksekgonul), [federicobianchy](https://twitter.com/federicobianchy), Joseph Boen, [ShengLiu_](https://twitter.com/ShengLiu_), [ZhiHuangPhD](https://twitter.com/ZhiHuangPhD), Carlos Guestrin, [james_y_zou](https://twitter.com/james_y_zou)!
  ![](https://pbs.twimg.com/media/GP_U0lCaQAAsDrp.jpg)
  ![](https://pbs.twimg.com/media/GP_X0CCbEAETuYx.jpg)
  ![](https://pbs.twimg.com/media/GP_YfrJbEAAqxBu.jpg) ([View Tweet](https://twitter.com/thomasahle/status/1801397334229848066))
- https://t.co/BJYWOdVPcg ([View Tweet](https://twitter.com/thomasahle/status/1801397796471509475))
