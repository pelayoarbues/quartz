---
author: [[@AmandaAskell on Twitter]]
title: "Here Is Claude 3&#39;s Syste..."
date: 2024-03-07
tags: 
- tweets
- literature-note
---
![rw-book-cover](https://pbs.twimg.com/profile_images/1542922855431647233/-KRy-wfH.jpg)

## Metadata
- Author: [[@AmandaAskell on Twitter]]
- Full Title: Here Is Claude 3's Syste...
- URL: https://twitter.com/AmandaAskell/status/1765207842993434880

## Highlights
- Here is Claude 3's system prompt! 
  Let me break it down 🧵 
  ![](https://pbs.twimg.com/media/GH9FfW0bcAAWBbW.jpg) ([View Tweet](https://twitter.com/AmandaAskell/status/1765207842993434880))
- To begin with, why do we use system prompts at all? First, they let us give the model ‘live’ information like the date. Second, they let us do a little bit of customizing after training and to tweak behaviors until the next finetune. This system prompt does both. ([View Tweet](https://twitter.com/AmandaAskell/status/1765207845119967568))
- The first part is fairly self-explanatory. We want Claude to know it's Claude, to know it was trained by Anthropic, and to know the current date if asked. 
  ![](https://pbs.twimg.com/media/GH9FrdbbAAAsehA.png) ([View Tweet](https://twitter.com/AmandaAskell/status/1765207846667575312))
- This part tells the model about when its knowledge cuts off and tries to encourage it to respond appropriately to the fact that it's being sent queries after that date. 
  ![](https://pbs.twimg.com/media/GH9FvHSaYAAAkiR.png) ([View Tweet](https://twitter.com/AmandaAskell/status/1765207848471101691))
- This part is mostly trying to nudge Claude to and to not be overly rambly on short, simple questions. 
  ![](https://pbs.twimg.com/media/GH9F21hakAAWXDX.png) ([View Tweet](https://twitter.com/AmandaAskell/status/1765207850476097745))
- We found Claude was a bit more likely to refuse tasks that involved right wing views than tasks that involved left wing views, even if both were inside the Overton window. This part encourages Claude to be less partisan in its refusals. 
  ![](https://pbs.twimg.com/media/GH9LPjtbgAA89qJ.png) ([View Tweet](https://twitter.com/AmandaAskell/status/1765212339136274880))
- We don't want Claude to stereotype anyone, but we found that Claude was less likely to identify harmful stereotyping when it comes to majority groups. So this part is aimed at reducing stereotyping generally. 
  ![](https://pbs.twimg.com/media/GH9LVXFbcAAQTtG.png) ([View Tweet](https://twitter.com/AmandaAskell/status/1765212453473042540))
- The non-partisan part of the system prompt above can cause the model to become a bit more "both sides" on issues outside the Overton window. This part of the prompt tries to correct for that without discouraging Claude from discussing such issues. 
  ![](https://pbs.twimg.com/media/GH9LfYsaIAAZMxV.png) ([View Tweet](https://twitter.com/AmandaAskell/status/1765212600504303923))
- Another self-explanatory part. Claude is helpful. Claude should write code in markdown. 
  ![](https://pbs.twimg.com/media/GH9LpRcbgAE4wuS.png) ([View Tweet](https://twitter.com/AmandaAskell/status/1765212794327347594))
- You might think this part is to keep the system prompt secret from you, but we know it's trivial to extract the system prompt. The real goal of this part is to stop Claude from excitedly telling you about its system prompt at every opportunity. 
  ![](https://pbs.twimg.com/media/GH9LvdIaQAA_iB4.png) ([View Tweet](https://twitter.com/AmandaAskell/status/1765212896538276176))
- So there we have it! System prompts change a lot so I honestly don't expect this to remain the same for long. But hopefully it's still interesting to see what it's doing. ([View Tweet](https://twitter.com/AmandaAskell/status/1765212949654933504))
