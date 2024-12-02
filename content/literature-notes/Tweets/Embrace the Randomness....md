---
author: [[@ph_singer on Twitter]]
title: "Embrace the Randomness..."
date: 2023-09-01
tags: 
- tweets
- literature-note
---
![rw-book-cover](https://pbs.twimg.com/profile_images/826415206272204801/B_g7QQ3B.jpg)

## Metadata
- Author: [[@ph_singer on Twitter]]
- Full Title: Embrace the Randomness...
- URL: https://twitter.com/ph_singer/status/1696877654497013835

## Highlights
- Embrace the randomness
  As promised, here is my first post about potentially useful tips and tricks for training deep learning models. Some of these posts might be quite long, some will be shorter. The first thing we will talk about is randomness when fine-tuning models.
  When training and fine-tuning deep learning models, there can be significant randomness present in your final checkpoints. Many different random aspects influence the training routine, such as random weight initialization, random batching, or random augmentations. This randomness can particularly manifest itself on smaller data fine-tuning coupled with more unstable validation metrics such as regression tasks.
  A natural first thought many practitioners have is to fix all seeds and keep them stable across all local experiments and then in the end put the best experiment into production. When I started a couple years ago delving more heavily into fine-tuning deep learning models and also participating on Kaggle, this was also something I was doing. But over time, I learned that it is actually counterproductive, and it is a way more robust strategy to never fix seeds and keep as much randomness in your experiments.
  The main reason is that it allows you to better understand and explore how stable your checkpoints are and how confident you can be that they will perform as expected in the field. Let's say you follow a typical approach of having a holdout validation set and a test set (this could be your unseen production data, a Kaggle public/private leaderboard test set, or even a local holdout test set you rarely look at). You train a model on your train set, evaluate it on the validation set, and you get a local score of 0.85. 
  You feel confident and submit your model or put it in production, but suddenly you are seeing scores of 0.75 on the test set. This is the point where you have to question the generalization capabilities of your model. Is the test data just more complex than your validation data, i.e. do you have a non-representative validation set? Is your model bad at generalizing? Are there any other reasons? But actually, many times you can just be lucky/unlucky. By fixing the seed, you got a seed that is lucky on your validation run, but unlucky on your test run, or the other way around. 
  If you now always have all seeds fixed, you might never be able to explore this locally. But if you never fix it, you can get a feeling of this locally. A good strategy is to run the same experiment multiple times, with random seeds. This allows you to better understand the range of scores you can get, with fixed hyperparameters, but just random seeds. Let's assume we rerun our previous experiment three times locally, and now instead of always getting 0.85, we get 0.85, 0.75 and 0.8. This suggests that the models are quite random and the score we got in the test set is within the range we observe locally.
  In such a case, it might become crucial to find strategies that stabilize the results and bring this range more narrow so that you can have more confidence in your models. These can be strategies such as trying to add more data, changing hyperparameters, switching to larger backbones, and all other typical techniques one would try when fine-tuning models.
  It might also become apparent, that single seeds are too unstable, and ensembling might become crucial to improve accuracy and reduce randomness. This means averaging multiple seeds and checking the results. In best case, this approaches the upper limit of the individual scores, or even improve them.
  In many such cases, it is even recommended to stick to a single holdout fold (instead of multi k-fold) and run multiple seeds for each experiment you are running. Then you can check the range, as well as the ensemble of multiple seeds. In the end, you would prefer that experiment, that produces the highest ensemble score, if you can afford to deploy such ensembles. Or, those that have the smallest random range, if you want to deploy single seeds.
  Attached to this post is visualization highlighting the effect of this strategy in a previous Kaggle competition. Each dot in this graph is the local validation score for an ensemble across three random seeds, and the leaderboard/test score of this ensemble. Individual seeds did exhibit significant randomness, and did not lead to a successful and confident validation strategy. 
  Obviously, always running multiple seeds can be computationally expensive, and slow down your experimenting. But many times, it can be well worth the efforts, and as this effect can be particularly prominent in smaller data training, it is usually quite feasible to do it. You can gain a lot more confidence in your final models by doing so. 
  Actually, also some papers and public benchmarks would benefit from better highlighting the randomness involved. Often times it is also hard to judge as an audience if the score reported was just lucky, or actually representative.
  In future posts, I will discuss two related topics: early stopping and full data re-training. ([View Tweet](https://twitter.com/ph_singer/status/1696877654497013835))
- Some more details on the mentioned competition can be found here (/w @ybabakhin): https://t.co/IJMMQpkhnJ ([View Tweet](https://twitter.com/ph_singer/status/1696877858663153750))
