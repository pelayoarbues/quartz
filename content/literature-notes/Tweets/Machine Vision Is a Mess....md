---
author: [[@recursus on Twitter]]
title: "Machine Vision Is a Mess..."
tags: 
- tweets
- literature-note
---
# Machine Vision Is a Mess...

![rw-book-cover](https://pbs.twimg.com/profile_images/1332444944166883328/KTEmUxXQ.jpg)

## Metadata
- Author: [[@recursus on Twitter]]
- Full Title: Machine Vision Is a Mess...
- Category: #tweets
- URL: https://twitter.com/recursus/status/1665890200512258048

## Highlights
- Machine vision is a mess of special methods, Frankensteined together. For awhile I thought it had to be - like the evolutionary goulash of our own visual system.
  But no. Vision can be UNIFIED with a framework we call COUNTERFACTUAL WORLD MODELING (CWM).
  https://t.co/lhY2G3MIRm 
  ![](https://pbs.twimg.com/media/Fx5dN5eWAAIXZR4.png) ([View Tweet](https://twitter.com/recursus/status/1665890200512258048))
- CWM unifies visual tasks that don't seem related to each other.
  A SINGLE, UNSUPERVISED model can compute forward predictions, keypoints, optical flow, occlusions, object segmentations, and relative monocular depth - without any labeled data or special architectures. 
  ![](https://pbs.twimg.com/media/Fx5g-9pXgAARPin.jpg) ([View Tweet](https://twitter.com/recursus/status/1665890203553210370))
- The idea is simple:
  1. Train an unsupervised model on visual data in a way that it *has to* learn certain structure.
  2. Get the model to do various visual computations by "asking it" questions about "counterfactuals" - inputs that are slightly perturbed versions of reality. 
  ![](https://pbs.twimg.com/media/Fx5hW1uX0AAkbpJ.jpg) ([View Tweet](https://twitter.com/recursus/status/1665890206560419841))
- Sound familiar? These two ingredients are inspired by Large Language Models ("foundation models"), which are trained in on lots of unlabeled text, then prompted to do different tasks just by asking them!
  Turns out the approach works for vision, too, but with some changes. ([View Tweet](https://twitter.com/recursus/status/1665890208947027968))
- CHANGE 1: Instead of vanilla masked token prediction, we have to train with masks that force the model to "temporally factor" *appearance* from *dynamics*.
  The reason? Short-term visual scene dynamics are *highly constrained by physics* whereas scene appearance is not. 
  ![](https://pbs.twimg.com/media/Fx5ii-sXoAEzLZ3.jpg) ([View Tweet](https://twitter.com/recursus/status/1665890210490593281))
- Learning this low-D dynamical structure enables
  CHANGE 2: To read out lots of tasks without supervision, we prompt the CWM with a small number of "counterfactual" visual tokens (i.e., modified from the original input.)
  DIFFERENT counterfactuals ask DIFFERENT questions: ([View Tweet](https://twitter.com/recursus/status/1665890212730347523))
- OPTICAL FLOW =
  "If a visual marker were placed at some point in the first frame of a movie, where would it end up in the next frame?" 
  ![](https://pbs.twimg.com/media/Fx5j4MzWAAAz11Z.jpg) ([View Tweet](https://twitter.com/recursus/status/1665890214269657088))
- SEGMENTATION = 
  "If point P in this image *were* moving, which *other* points would also be moving?"
  Because the CWM had to learn about object dynamics to make good predictions during training, it has a latent representation of objects -- even though it never saw any labels! 
  ![](https://pbs.twimg.com/media/Fx5kGgAXoAIjOAx.jpg) ([View Tweet](https://twitter.com/recursus/status/1665890217302142976))
- And so on. Note that these tasks naturally bootstrap on one another -- reading out FLOW helps read out OBJECT SEGMENTS.
  Thus CWM is an approach for constructing a COMPUTATIONAL GRAPH of visual tasks. 
  I strongly suspect that *all* visual computations are part of this graph. 
  ![](https://pbs.twimg.com/media/Fx5lW91XoAUVAdD.jpg) ([View Tweet](https://twitter.com/recursus/status/1665890219369922560))
- I was stunned when we realized that seemingly any visual task can be reformulated as a prediction problem - but a prediction problem about *scenes that don't really exist.* 
  The theory says: "to compute X, run some mini-thought experiments whose outcomes depend on X." ([View Tweet](https://twitter.com/recursus/status/1665890221429338114))
- What's also striking is that these counterfactual simulations are equivalent to taking DERIVATIVES of the original, trained prediction model.
  This means that (1) they're in a sense "natural" and easy to identify, and (2) they're efficient to compute with autograd. 
  ![](https://pbs.twimg.com/media/Fx5pUjHXsAIJMQP.png) ([View Tweet](https://twitter.com/recursus/status/1665890223027281922))
- CWM is a general framework that applies, basically unchanged, to any modality.
  I'm most excited about its potential for learning unified, "pre-linguistic" representations -- which is sorely needed, e.g. in robotics, for model-predictive control and physical scene understanding. ([View Tweet](https://twitter.com/recursus/status/1665890226290524160))
- This is the beginning, but also the culmination of years of thinking about how to build a unified, unsupervised vision model. 
  No way it could have happened without @dyamins, @honglin_c, Kevin Feigelis, and our other co-authors. ([View Tweet](https://twitter.com/recursus/status/1665890227863339008))
- It's hard in AI to pass up low-hanging fruit. I'm super grateful to them for taking a stab at a "grand unified theory."
  I'm betting this is the explanation of how our own unified, unparalleled visual system arose - without labeled data or the internet to train on.
  We shall see! ([View Tweet](https://twitter.com/recursus/status/1665890229406904320))
