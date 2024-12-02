---
author: [[@StefanABaumann on Twitter]]
title: "Are You Ever Fed Up With..."
date: 2024-03-27
tags: 
- tweets
- literature-note
---
![rw-book-cover](https://pbs.twimg.com/profile_images/1749621040861298688/J9qoKyQa.jpg)

## Metadata
- Author: [[@StefanABaumann on Twitter]]
- Full Title: Are You Ever Fed Up With...
- URL: https://twitter.com/StefanABaumann/status/1772790282121007254

## Highlights
- Are you ever fed up with the lack of sufficiently fine-grained control in T2I diffusion models?
  It turns out diffusion models already knew how to do it, we just have to learn how to leverage this capability.
  Project page: https://t.co/5KlmA54p0P (1/n) 
  ![](https://pbs.twimg.com/media/GJo3QNQWEAAf18i.jpg) ([View Tweet](https://twitter.com/StefanABaumann/status/1772790282121007254))
- Before I continue, let me thank my amazing co-authors Felix Krause, Michael Neumayr, [nickstracke_](https://twitter.com/nickstracke_), [vtaohu](https://twitter.com/vtaohu), and Björn Ommer, without whom this paper wouldn’t have been possible! ([View Tweet](https://twitter.com/StefanABaumann/status/1772790345480179820))
- [nickstracke_](https://twitter.com/nickstracke_) [vtaohu](https://twitter.com/vtaohu) Many recent works have tackled controlling structure, but continuous, subject-specific attribute control in generated images is still lacking. Specifically, we want to influence the attributes of subjects mentioned in the prompt on a continuous scale. <video controls><source src="https://video.twimg.com/tweet_video/GJo4FWFXUAAUqYG.mp4" type="video/mp4">Your browser does not support the video tag.</video> ([View Tweet](https://twitter.com/StefanABaumann/status/1772791131316568177))
- [nickstracke_](https://twitter.com/nickstracke_) [vtaohu](https://twitter.com/vtaohu) It turns out large-scale T2I models knew all along how to do really fine-grained control of attribute expression - we just have to learn how to control it. We do that by identifying robust directions in the tokenwise text embedding space that correspond to specific attributes. ([View Tweet](https://twitter.com/StefanABaumann/status/1772791188216557744))
- [nickstracke_](https://twitter.com/nickstracke_) [vtaohu](https://twitter.com/vtaohu) Specifically, we observe that, around nouns like those for people, the tokenwise CLIP embedding space is very similar and well-behaved. This enables us to find directions that correspond to specific attributes, e.g., age. 
  ![](https://pbs.twimg.com/media/GJo4kD3XkAAhzWw.jpg) ([View Tweet](https://twitter.com/StefanABaumann/status/1772791629209866259))
- [nickstracke_](https://twitter.com/nickstracke_) [vtaohu](https://twitter.com/vtaohu) These directions can be identified from contrastive prompts (young <-> old person) describing the attribute without needing training images. We present an efficient optimization-free and a robust optimization-based approach to identify these semantic directions in our paper. ([View Tweet](https://twitter.com/StefanABaumann/status/1772791696960413951))
- So, what can we do with this? First, we can use this to control tons of different attributes of different kinds of subjects (orange marks images generated from an unmodified prompt such as "a photo of a bed"). 
  ![](https://pbs.twimg.com/media/GJo4uIZWsAAqyPY.jpg) ([View Tweet](https://twitter.com/StefanABaumann/status/1772791976326545659))
- Of course, they’re also stackable! 
  ![](https://pbs.twimg.com/media/GJo5BUeXcAAarJF.jpg) ([View Tweet](https://twitter.com/StefanABaumann/status/1772792133637845347))
- And, most importantly, they’re subject-specific! As these are directions on top of the existing token embeddings, just apply them to the token for one subject and control that subject’s attributes individually, without needing masks! 
  ![](https://pbs.twimg.com/media/GJo5LDCW0AEmfUi.jpg) ([View Tweet](https://twitter.com/StefanABaumann/status/1772792277489897825))
- But the best thing? This works without ever modifying the T2I diffusion model. This means that you can still use This also means that this can even be transferred zero-shot to other models that use the same CLIP text encoder(s) such as SDXL -> SD 1.5 or Stable Cascade. ([View Tweet](https://twitter.com/StefanABaumann/status/1772792505337037023))
- Code and a Colab notebook for you to experiment around with are available on our GitHub: https://t.co/NItHLTQ9nJ ([View Tweet](https://twitter.com/StefanABaumann/status/1772793626713629164))
- A special shoutout also goes out to the amazing work Concept Sliders (https://t.co/bLR07J66uU), which achieved a similar thing (but without subject-specificity) and inspired some parts of our method. ([View Tweet](https://twitter.com/StefanABaumann/status/1772810359260238072))
- This thread would also not be complete if I didn't mention the various works like StyleCLIP that paved the way for this work, using similar approaches on the pooled CLIP embedding to globally affect images generated using StyleGAN in a controlled manner ([View Tweet](https://twitter.com/StefanABaumann/status/1772818634559172961))
