---
author: [[@justLV on Twitter]]
title: "I Wanted to Imagine How..."
tags: 
- tweets
- literature-note
---
# I Wanted to Imagine How...

![rw-book-cover](https://pbs.twimg.com/profile_images/1605299334022541312/0aaapkwB.jpg)

## Metadata
- Author: [[@justLV on Twitter]]
- Full Title: I Wanted to Imagine How...
- Category: #tweets
- URL: https://twitter.com/justLV/status/1626281106927669248

## Highlights
- I wanted to imagine how we’d better use #stablediffusion for video content / AR.
  A major obstacle, why most videos are so flickery, is lack of temporal & viewing angle consistency, so I experimented with an approach to fix this
  See 🧵 for process & examples https://t.co/LpjBifbwmU ([View Tweet](https://twitter.com/justLV/status/1626281106927669248))
- Ideally you want to learn a single representation of an object across time or different viewing directions to perform a *single* #img2img generation on. 
  For this I used https://t.co/tfbZCyKXsZ (2021) ([View Tweet](https://twitter.com/justLV/status/1626281108169170944))
- This learns an "atlas" to represent an object and its background across the video.
  Regularization losses during training help preserve the original shape, with a result that resembles a usable slightly "unwrapped" version of the object 
  ![](https://pbs.twimg.com/media/FpGzfMqaUAEnaM3.jpg) ([View Tweet](https://twitter.com/justLV/status/1626281109180022784))
- The authors of the paper recommend using Mask R-CNN for creating a segmentation mask before training, but for this I found it easier (and cleaner) to just create a mask with the Rotobrush in After Effects https://t.co/ltVoSkTBhZ ([View Tweet](https://twitter.com/justLV/status/1626282113027940353))
- Once the "atlas" was learned I could then run it through #depth2img, then use the new atlas to reproject across the video. 
  This last remapping part is quick so you could imagine it being rendered live based on your viewing angle for #AR (for a pre-generated scene) https://t.co/WX6pqF1MUh ([View Tweet](https://twitter.com/justLV/status/1626284447447543808))
- Here are some more out there takes, including turning my couch into a jumping castle! 🏰🎈
  There are endless possibilities here for content creation. Follow for more creative AI experiments! https://t.co/rNPWjM3S3o ([View Tweet](https://twitter.com/justLV/status/1626285841361559553))
