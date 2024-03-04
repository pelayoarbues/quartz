---
author: [[Lilian Weng]]
title: "Learning with not Enough Data Part 2: Active Learning"
date: 2024-03-04
tags: 
- articles
- literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article1.be68295a7e40.png)

## Metadata
- Author: [[Lilian Weng]]
- Full Title: Learning with not Enough Data Part 2: Active Learning
- URL: https://lilianweng.github.io/posts/2022-02-20-active-learning/

## Highlights
- This is part 2 of what to do when facing a limited amount of labeled data for supervised learning tasks. This time we will get some amount of human labeling work involved, but within a budget limit, and therefore we need to be smart when selecting which samples to label. ([View Highlight](https://read.readwise.io/read/01hr4bq7g17d796g1y0w2f54cm))
- What is Active Learning?[#](https://lilianweng.github.io/posts/2022-02-20-active-learning#what-is-active-learning)
  Given an unlabeled dataset U and a fixed amount of labeling cost B, active learning aims to select a subset of B examples from U to be labeled such that they can result in maximized improvement in model performance. This is an effective way of learning especially when data labeling is difficult and costly, e.g. medical images. This classical [survey paper](https://burrsettles.com/pub/settles.activelearning.pdf) in 2010 lists many key concepts. While some conventional approaches may not apply to deep learning, discussion in this post mainly focuses on deep neural models and training in batch mode.
  ![](https://lilianweng.github.io/posts/2022-02-20-active-learning/active-learning-workflow.png)
  Fig. 1. Illustration of a cyclic workflow of active learning, producing better models more efficiently by smartly choosing which samples to label. ([View Highlight](https://read.readwise.io/read/01hr4brnyz9nxvb39wjvfk7yd0))
- Acquisition Function[#](https://lilianweng.github.io/posts/2022-02-20-active-learning#acquisition-function)
  The process of identifying the most valuable examples to label next is referred to as “sampling strategy” or “query strategy”. The scoring function in the sampling process is named “acquisition function”, denoted as U(x). Data points with higher scores are expected to produce higher value for model training if they get labeled. ([View Highlight](https://read.readwise.io/read/01hr4bs4anbwcy721daf17em30))
- Uncertainty Sampling[#](https://lilianweng.github.io/posts/2022-02-20-active-learning#uncertainty-sampling)
  **Uncertainty sampling** selects examples for which the model produces most uncertain predictions. Given a single model, uncertainty can be estimated by the predicted probabilities, although one common complaint is that deep learning model predictions are often not calibrated and not correlated with true uncertainty well. In fact, deep learning models are often overconfident.
  • *Least confident score*, also known as *variation ratio*: U(x)=1−Pθ(y^|x).
  • *Margin score*: U(x)=Pθ(y^1|x)−Pθ(y^2|x), where y^1 and y^2 are the most likely and the second likely predicted labels.
  • *Entropy*: U(x)=H(Pθ(y|x))=−∑y∈YPθ(y|x)log⁡Pθ(y|x).
  Another way to quantify uncertainty is to rely on a committee of expert models, known as Query-By-Committee (QBC). QBC measures uncertainty based on a pool of opinions and thus it is critical to keep a level of disagreement among committee members. ([View Highlight](https://read.readwise.io/read/01hr4bt8hrjq1srve9crmtbhm5))
- Diversity Sampling[#](https://lilianweng.github.io/posts/2022-02-20-active-learning#diversity-sampling)
  **Diversity sampling** intend to find a collection of samples that can well represent the entire data distribution. Diversity is important because the model is expected to work well on any data in the wild, just not on a narrow subset. Selected samples should be representative of the underlying distribution. Common approaches often rely on quantifying the similarity between samples. ([View Highlight](https://read.readwise.io/read/01hr4btt5nkt9racztkgb98z77))
- Expected Model Change[#](https://lilianweng.github.io/posts/2022-02-20-active-learning#expected-model-change)
  **Expected model change** refers to the impact that a sample brings onto the model training. The impact can be the influence on the model weights or the improvement over the training loss ([View Highlight](https://read.readwise.io/read/01hr4bv5qse7kr9nn8pyrqzwtb))
- Hybrid Strategy[#](https://lilianweng.github.io/posts/2022-02-20-active-learning#hybrid-strategy)
  Many methods above are not mutually exclusive. A **hybrid** sampling strategy values different attributes of data points, combining different sampling preferences into one. Often we want to select uncertain but also highly representative samples. ([View Highlight](https://read.readwise.io/read/01hr4bvg79910ne7jaf0yq54ap))
