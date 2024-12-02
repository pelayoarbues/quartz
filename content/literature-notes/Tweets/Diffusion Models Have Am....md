---
author: [[@alexlioralexli on Twitter]]
title: "Diffusion Models Have Am..."
date: 2023-09-26
tags: 
- tweets
- literature-note
---
![rw-book-cover](https://pbs.twimg.com/profile_images/1646908294563233793/lsOCbifE.jpg)

## Metadata
- Author: [[@alexlioralexli on Twitter]]
- Full Title: Diffusion Models Have Am...
- URL: https://twitter.com/alexlioralexli/status/1706380605901115443

## Highlights
- Diffusion models have amazing image creation abilities. But how well does their generative knowledge transfer to discriminative tasks?
  We present Diffusion Classifier: strong classification results with pretrained conditional diffusion models, *with no additional training*!
  1/9 https://t.co/xOh6AqcW58 ([View Tweet](https://twitter.com/alexlioralexli/status/1706380605901115443))
- Diffusion Classifier approximates the learned p(img | class) with the ELBO. This consists of adding noise to the image and using the diffusion model conditioned on each class to predict the noise. We find p(class | img) with Bayes’ rule to determine the most likely class.
  2/9 
  ![](https://pbs.twimg.com/media/F65G3npbUAAL_1E.jpg) ([View Tweet](https://twitter.com/alexlioralexli/status/1706380608740659563))
- This lets us directly use the text-conditioned Stable Diffusion model for zero-shot classification. Diffusion Classifier outperforms CLIP ResNet-50 and is better than other ways of utilizing knowledge from the diffusion model, like generating & training on synthetic data.
  3/9 
  ![](https://pbs.twimg.com/media/F65HDNXaEAEgpf2.jpg) ([View Tweet](https://twitter.com/alexlioralexli/status/1706380611622146061))
- A gap remains with the best contrastive models. This may be because Stable Diffusion only trains on “aesthetic” images, so these zero-shot datasets are out-of-distribution! SD also trains with *only* horizontal flip. This gap may close if data + augmentations are matched.
  4/9 ([View Tweet](https://twitter.com/alexlioralexli/status/1706380613404725315))
- We can also use Stable Diffusion for compositional reasoning. On the challenging Winoground benchmark, where the task is to match the correct caption to the correction image, Diffusion Classifier *significantly outperforms* even the strongest contrastive methods 🔥
  5/9 
  ![](https://pbs.twimg.com/media/F65HLetaEAE2zxo.jpg) 
  ![](https://pbs.twimg.com/media/F65HO5yaEAEP_Q7.jpg) ([View Tweet](https://twitter.com/alexlioralexli/status/1706380614746919284))
- Finally, we can do ImageNet classification with DiT, a class-conditional diffusion model trained only on ImageNet. Diffusion Classifier achieves 79.1% val accuracy, the *highest known performance* by a purely generative classifier.
  6/9 
  ![](https://pbs.twimg.com/media/F65HdkmaEAEgK0S.jpg) ([View Tweet](https://twitter.com/alexlioralexli/status/1706380616978272458))
- Diffusion Classifier has better OOD behavior than discriminative models trained on the same labeled data. It achieves *significantly higher* OOD acc than predicted by its in-distribution acc. This level of “effective robustness” is unparalleled among ImageNet-only models.
  7/9 
  ![](https://pbs.twimg.com/media/F65HpbpaEAAoWwT.jpg) ([View Tweet](https://twitter.com/alexlioralexli/status/1706380618689654897))
- Overall, our strong results suggest that it’s time to revisit generative approaches to classification 🔍. Check out our #ICCV2023 paper for more details!
  Abs: https://t.co/qfGmLQLL79
  Website and code: https://t.co/3TyWBpdGNl
  8/9 ([View Tweet](https://twitter.com/alexlioralexli/status/1706380621600395568))
- Last but not least, thanks to @mihirp98, @ShivamDuggal4, @_ellisbrown, and @pathak2206 for a great collaboration!
  9/9 ([View Tweet](https://twitter.com/alexlioralexli/status/1706380623198507201))
