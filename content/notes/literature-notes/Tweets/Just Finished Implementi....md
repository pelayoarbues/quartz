---
author: [[@MatheusFacure on Twitter]]
title: "Just Finished Implementi..."
tags: 
- tweets
- literature-note
---
# Just Finished Implementi...

![rw-book-cover](https://pbs.twimg.com/profile_images/1425517308085252104/cGEtIj56.jpg)

## Metadata
- Author: [[@MatheusFacure on Twitter]]
- Full Title: Just Finished Implementi...
- Category: #tweets
- URL: https://twitter.com/MatheusFacure/status/1621866169627025410

## Highlights
- Just finished implementing the fascinating Design and Analysis of Switchback Experiments paper and its crazy how much I learned while doing so. Most of which had nothing to with Switchback Experiments, but with causal inf. in general 🧵 https://t.co/KA1geje1zF 
  ![](https://pbs.twimg.com/media/FoIGkQTXgAIrc1B.png) ([View Tweet](https://twitter.com/MatheusFacure/status/1621866169627025410))
- First, a link to the original paper: https://t.co/FGh4codEvR ([View Tweet](https://twitter.com/MatheusFacure/status/1621866403581071360))
- A bit of context: switchback designs are great for when you have very few or a single unit. Ex: a ride sharing company wants to know the effect of rising prices on customers' waiting time. To do so, they can turn the treatment (price increases) on and off for the same unit. ([View Tweet](https://twitter.com/MatheusFacure/status/1621867927568777217))
- If the treatment effect dissipates rather quickly, the company can do that multiple times and do a before and after comparison with treatment on and off. ([View Tweet](https://twitter.com/MatheusFacure/status/1621868450573389824))
- The goal of the experiment is usually the total effect, which is the outcome under the treatment always on and always off. Those are the top and bottom lines in the plot. Since the treatment effects carry over for some time, the obs. outcome bounces between those lines. ([View Tweet](https://twitter.com/MatheusFacure/status/1621868980737638400))
- Now, when I read this I thought to myself: "I know how to read this! I'll just use OLS! All I have to do is include the treatment indicator and a sufficient amount of lags to capture the carryover effect" 
  ![](https://pbs.twimg.com/media/FoIKFlLWQAESLIC.png) ([View Tweet](https://twitter.com/MatheusFacure/status/1621869920945315841))
- What is cool about OLS is that you don't even need to know the order of the carryover effect, just an upper bound on it, K. Estimating the following model and summing up the coefficients on all the lags will give you an unbiased estimate on the total effect. 
  ![](https://pbs.twimg.com/media/FoIKJjHXwAUi4t2.png) ([View Tweet](https://twitter.com/MatheusFacure/status/1621870387825983488))
- But that is now that the paper does. Instead, they propose an IPW estimator which seems complicated at first, but it's not. First, they assume that you know the order of the carryover effect (let's say 2, for the example). 
  ![](https://pbs.twimg.com/media/FoIKtLvWQAEHZne.png) ([View Tweet](https://twitter.com/MatheusFacure/status/1621870901229764610))
- Now, the indicator function at the numerator is selecting sequences where the treatment was the same for 1 plus the carryover effect order. Ex: for carry over of 2 periods, this numerator selects sequences where the treatment is the same in the last 3 periods (this + two lags). ([View Tweet](https://twitter.com/MatheusFacure/status/1621871554178031617))
- The denominator is the probability of observing that sequence. It depends on the randomizing probability and how often does randomization occur. Ex: for rand at every period and p=0.5, the chance of observing [1,1,1] is 0.5^3. ([View Tweet](https://twitter.com/MatheusFacure/status/1621871920412082179))
- If you go back to the image, this estimator only takes the points that overlap with the upper or lower line and throws away everything else. It then upscale those outcome by the chance of observing the requires number of consecutive equal treatments. ([View Tweet](https://twitter.com/MatheusFacure/status/1621872358716837894))
- That estimator is unbiased, but since it throws away a lot of data, it has a much higher variance than the OLS one. Here is 500 simulations using both estimators to estimate the effect. 
  ![](https://pbs.twimg.com/media/FoIMs3LXgAAsfF5.png) ([View Tweet](https://twitter.com/MatheusFacure/status/1621872794894991361))
- So, what is the gain in using that IPW estimator? I kept thinking about it and it is something the authors mention at the beginning of the paper, but very briefly, and I'm not entirely sure it's obvious what it means. Here it is: 
  ![](https://pbs.twimg.com/media/FoINBiuWQAImJyX.png) ([View Tweet](https://twitter.com/MatheusFacure/status/1621873249259868168))
- I remember seeing something related to this at @paulgp slides. At first glance, it seems to be a question of model based vs design based inference. The IPW estimator makes fewer assumptions than that model I've estimated with OLS. 
  https://t.co/FGONh2Xgd6 
  ![](https://pbs.twimg.com/media/FoIOV2dWIAIAVeS.jpg) ([View Tweet](https://twitter.com/MatheusFacure/status/1621874637209587713))
- @paulgp But it pays a steep price in terms of variance. So I better know what those assumptions are, cause maybe I'm willing to make them! Now, to be honest, I'm not entirely sure I've pinpointed exactly what they are. An obvious one is additivity of the effects: 
  ![](https://pbs.twimg.com/media/FoIO8PuWIAEZG6q.png) ([View Tweet](https://twitter.com/MatheusFacure/status/1621875326878973954))
- @paulgp But honestly, that doesn't seem to be too strong of an assumption. I think I'm missing something, since Y_t is a time series, but I suck at TS… Maybe something like strict exogeneity, but I feel like saying this is kind of cheating, since it's hard to know what it implies... ([View Tweet](https://twitter.com/MatheusFacure/status/1621875953239572481))
- @paulgp Still, even though I haven't got the bottom of it, it's nonetheless an interesting case where you have to tradeoff more assumptions for less variance and one that also highlights the distinction between model vs design based inference. ([View Tweet](https://twitter.com/MatheusFacure/status/1621876333453213696))
- But this is going on a tangent. Continuing on the paper, they propose a design which aims at minimizing the variance of that estimator. I recommend you forget about the ugly looking formula and focus on the case where the # of periods is divisible by the carryover order + 1. 
  ![](https://pbs.twimg.com/media/FoIRXviXwAEI3RK.jpg) ([View Tweet](https://twitter.com/MatheusFacure/status/1621877936973299717))
- Now, let's think about this intuitively. If the carryover effect lasts for 2 periods, you probably want to randomize in blocks of 3 periods right? If you randomize with smaller blocks, the chance of getting sequences of treatments that are of size at least three diminishes. ([View Tweet](https://twitter.com/MatheusFacure/status/1621878373185101827))
- That will cause the numerator in the estimator to evaluate to zero more often, which will essentially reduce your "sample size", so to speak. ([View Tweet](https://twitter.com/MatheusFacure/status/1621878497772802049))
- Conversely, if you randomize on very big blocks, you'll increase the chance of unbalanced design (more treated than control or vice versa), and hence decrease treatment variance. So, intuitively speaking, randomizing every 3 periods sounds about right. ([View Tweet](https://twitter.com/MatheusFacure/status/1621878639724732417))
- What the authors show is that this intuitive design is very close to the optimal one, but not exactly. You can decrease variance a bit by including two gaps, at the end and beginning, of size of the carryover. Here are three examples for you to see what I mean. 
  ![](https://pbs.twimg.com/media/FoISiByWQAAuqZZ.jpg) ([View Tweet](https://twitter.com/MatheusFacure/status/1621879203623755777))
- This is very interesting, but it also made me think that we sometimes advocate for new things uncritically, just because they are new. This is very interesting indeed and I really liked the paper. But it is not a game changer for most applications. ([View Tweet](https://twitter.com/MatheusFacure/status/1621880020951089153))
- Having said that, of course I'll opt and advocate for this optimal design after all, why not? But at the same time, I probably won't make a huge deal of it if ppl still prefer the simpler approach. ([View Tweet](https://twitter.com/MatheusFacure/status/1621880864123535360))
- That's it. Hope you learned something here! I'll include this stuff in a more structured way in my upcoming book in case you are interested. ([View Tweet](https://twitter.com/MatheusFacure/status/1621881100359327744))
- PS: Forgot to post the variance from the simulations. Here, T=120, m=2 (carryover order) and 3 different designs. Every period, every 3 periods and the opt. design. Like I said, not a game changer, but interesting! 
  ![](https://pbs.twimg.com/media/FoIiGXDWAAAeKrZ.png) ([View Tweet](https://twitter.com/MatheusFacure/status/1621896611977732099))
