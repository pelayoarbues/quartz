---
author: [[@giffmana on Twitter]]
title: "Who Killed Non-Contrasti..."
tags: 
- tweets
- literature-note
---
# Who Killed Non-Contrasti...

![rw-book-cover](https://pbs.twimg.com/profile_images/378800000845687873/37bba4f807fe3a2c644a252f8191338d.jpeg)

## Metadata
- Author: [[@giffmana on Twitter]]
- Full Title: Who Killed Non-Contrasti...
- Category: #tweets
- URL: https://twitter.com/giffmana/status/1669840989853196292

## Highlights
- Who killed non-contrastive image-text pretraining? @AlecRad and @_jongwook_kim with the below Fig2 in CLIP.
  Who collected the 7 Dragonballs and asked Shenron to resurrect it? Yours truly, in this new paper of ours.
  Generative captioning is not only competitive, it seems better! 
  ![](https://pbs.twimg.com/media/Fyxt7oIXwAALoAD.jpg) 
  ![](https://pbs.twimg.com/media/FyxuDc5WYAIJdRs.png) 
  ![](https://pbs.twimg.com/media/FyxugWOXgAEz3bm.png) ([View Tweet](https://twitter.com/giffmana/status/1669840989853196292))
- Some results first: Looking at a wide mix of tasks, an image encoder pre-trained on image/alt-text pairs via captioning (Cap/CapPa) almost matches a contrastive one (CLIP) on classification tasks, and largely outperforms it on image-text tasks. 
  ![](https://pbs.twimg.com/media/FyxwVXuWAAIitGr.png) 
  ![](https://pbs.twimg.com/media/FyxxF0gWwAA3g8-.png) 
  ![](https://pbs.twimg.com/media/FyxxH7HX0AU5Lpf.png) 
  ![](https://pbs.twimg.com/media/FyxxLMJXgAM6T_8.png) ([View Tweet](https://twitter.com/giffmana/status/1669840992223084544))
- Even better, Captioning (green) seems to scale better than Contrastive (red), both in terms of model size (top row) and training duration (bottom row). 
  ![](https://pbs.twimg.com/media/FyxxVNTXsAE44Jy.png) ([View Tweet](https://twitter.com/giffmana/status/1669840994886352897))
- The method is almost as straightforward as it gets: Cap (middle) is an encoder-decoder model with ViT encoder and auto-regressive decoder.
  Because predicting the rest of the caption after the first few tokens may be too easy, leading to little signal from later tokens to image… 
  ![](https://pbs.twimg.com/media/Fyxx1hnXwAEQNqd.jpg) ([View Tweet](https://twitter.com/giffmana/status/1669840997365301249))
- …we perform "parallel captioning" 75% of the time, where the decoder only sees mask tokens on the input and uses full self-attention (i.e. is conditioned only on the image).
  This improves results a bit "for free" but is not crucial, Cap works well too. 
  ![](https://pbs.twimg.com/media/FyxzC0jWcAA-5s4.jpg) ([View Tweet](https://twitter.com/giffmana/status/1669841000414560262))
- Why did we work on what seems like a pointless direction according to CLIP's Fig2?
  We think Cap can fundamentally provide more signal. There's things (eg: "A left of B") Contrastive never needs to learn.
  ARO (https://t.co/UGllPI3ut4 iclr oral) nicely summarizes this shortcoming 
  ![](https://pbs.twimg.com/media/FyxznqTWAAYsUTX.jpg) ([View Tweet](https://twitter.com/giffmana/status/1669841002641629187))
- And indeed, Captioning (blue) completely nails this new ARO benchmark where CLIP and advanced hard-negative Contrastive methods fail.
  But then, so does a Cap that doesn't even look at the image (green). We'd love to test on WinoGround, but alas we can't (weird license, @ylecun) 
  ![](https://pbs.twimg.com/media/Fyx0VRWWYAAx2AM.jpg) ([View Tweet](https://twitter.com/giffmana/status/1669841005154107392))
- There's a lot more in the paper, if you're generally interested in pre-training models with noisy image-text data, I highly recommend you read it: https://t.co/7jBzi25C9k
  PS1: This little table, and the fact we're experienced CLIP trainers, says we compare apples to apples. 
  ![](https://pbs.twimg.com/media/Fyx2WGxWYAIN01Z.png) ([View Tweet](https://twitter.com/giffmana/status/1669841007741894657))
- PS2: am I saying the CLIP figure is wrong? No! We reproduce a similar result.
  However, this extreme inefficiency of captioning seems limited to this exact combination of ResNet50+short training+ImageNet 0shot
  Switching to ViT, training longer, other benchmarks all look better. 
  ![](https://pbs.twimg.com/media/Fyx18p-XwAAxKgC.png) ([View Tweet](https://twitter.com/giffmana/status/1669841009914552321))
- PS3: Thanks to @__kolesnikov__ for the "who killed...?" idea, it almost became the paper title and was my personal favourite :) It's a reference to https://t.co/hoBRQziw8F ([View Tweet](https://twitter.com/giffmana/status/1669844037291982850))
- PS4: I have huge respect for Alec and Jong Wook, no hate at all, just poking a bit of fun :) ([View Tweet](https://twitter.com/giffmana/status/1670030941681491968))
