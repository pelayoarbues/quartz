---
author: [[@ecardenas300 on Twitter]]
title: "One Prompt Does Not Fit..."
date: 2024-04-18
tags: 
- tweets
- literature-note
---
![rw-book-cover](https://pbs.twimg.com/profile_images/1717537716944908288/pOJFCTLA.jpg)

## Metadata
- Author: [[@ecardenas300 on Twitter]]
- Full Title: One Prompt Does Not Fit...
- URL: https://twitter.com/ecardenas300/status/1780631627275571471

## Highlights
- One prompt does not fit all language models ☝️
  Luckily for you, DSPy automates the task of prompt engineering! 
  Here is a thread with a few things to know about the collection of compilers in DSPy. It is also outlined in a new blog post from [CShorten30](https://twitter.com/CShorten30) and I, “Your Language Model Deserves Better Prompting” 
  🧵 (1 / 10)
  ![](https://pbs.twimg.com/media/GLYQsV7XwAAWq_4.jpg) ([View Tweet](https://twitter.com/ecardenas300/status/1780631627275571471))
- Blog post: https://t.co/094YWOxQWR
  There are 4 steps to get started with DSPy optimization:
  1. Connect DSPy to your LLMs and RMs (such as [cohere](https://twitter.com/cohere) and [weaviate_io](https://twitter.com/weaviate_io))
  2. Load your dataset
  3. Define your program
  4. Define your metric
  🧵 (2 / 10) ([View Tweet](https://twitter.com/ecardenas300/status/1780631628957528075))
- There are two key aspects of prompt engineering:
  1. Providing examples of the task
  2. Tweaking the Instructions that describe task
  🧵 (3 / 10) ([View Tweet](https://twitter.com/ecardenas300/status/1780631630329053298))
- Instead of having to manually write examples of your task (or examples of rationales when adding things like Chain-of-Thought prompting), DSPy orchestrates generating synthetic examples and controlling their quality.
  We are super happy to share an update on adding [weights_biases](https://twitter.com/weights_biases) logging to DSPy where we can see the score of our generated examples!
  🧵 (4 / 10)
  ![](https://pbs.twimg.com/media/GLYSK7bXQAAMmRT.jpg) ([View Tweet](https://twitter.com/ecardenas300/status/1780631632145170843))
- The synthetic example party doesn’t stop there. 
  DSPy then adds Random Search and Optuna (Bayesian Optimization) on top of synthetic examples to find the optimal subset to put in your prompts! 
  🧵 (5 / 10) ([View Tweet](https://twitter.com/ecardenas300/status/1780631634200469801))
- In addition to providing examples of the task in the prompt, another strategy is to tweak the instructions used to describe the task. DSPy again lessens the human effort required to do this with the COPRO and MIPRO optimizers. 
  🧵 (6 / 10) ([View Tweet](https://twitter.com/ecardenas300/status/1780631635647496336))
- Under the hood, COPRO uses 2 key mechanisms to achieve automated prompt engineering, (1) paraphrasing instructions, and (2) learning from the scores achieved by each instruction.
  COPRO first generates `breadth` instructions, they are then evaluated, and then COPRO takes all the instructions and their scores as inputs to generate a new instruction. This continues for `depth` iterations.
  🧵 (7 / 10) ([View Tweet](https://twitter.com/ecardenas300/status/1780631637170036968))
- MIPRO combines both instruction tuning and example generation, as well as a “data scientist” that learns about your dataset to inform better prompts!
  MIPRO first summarizes the dataset to make observations about the task. MIPRO then proceeds in a similar strategy as COPRO to propose paraphrases and learn from their performance, however, MIPRO also adds `BootstrapFewShot` to further understand the performance of each proposed instruction when paired with examples!
  More info from [kristahopsalong](https://twitter.com/kristahopsalong) and [michaelryan207](https://twitter.com/michaelryan207) here: https://t.co/rh1Vz5f4jR
  🧵 (8 / 10) ([View Tweet](https://twitter.com/ecardenas300/status/1780631638797349131))
- This blog post focuses on Prompt Engineering with DSPy, but a very interesting aspect of DSPy is how it abstracts prompt engineering with gradient descent based Fine-Tuning! Here are some more thoughts on this from [lateinteraction](https://twitter.com/lateinteraction): 
  https://t.co/iz26fWpiPK
  🧵 (9 / 10) ([View Tweet](https://twitter.com/ecardenas300/status/1780631640374644842))
- [lateinteraction](https://twitter.com/lateinteraction) Last, but not least!!
  We are hosting an event with [arizeai](https://twitter.com/arizeai), [cohere](https://twitter.com/cohere), and [lateinteraction](https://twitter.com/lateinteraction) on May 1st in San Francisco! We hope to see you there, sign up below!
  https://t.co/T0X010rbDh
  🧵 (10 / 10) ([View Tweet](https://twitter.com/ecardenas300/status/1780632844252909887))
