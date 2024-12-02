---
author: [[@atroyn on Twitter]]
title: "Today I&#39;m Pleased to Sha..."
date: 2024-06-01
tags: 
- tweets
- literature-note
---
![rw-book-cover](https://pbs.twimg.com/profile_images/1710905180139753472/g9QhqYs7.jpg)

## Metadata
- Author: [[@atroyn on Twitter]]
- Full Title: Today I'm Pleased to Sha...
- URL: https://twitter.com/atroyn/status/1796232436436852818

## Highlights
- today i'm pleased to share the first of a series of technical reports with the ai application developer community - our investigation into the use of linear embedding adapters in improving retrieval accuracy in realistic settings. [SuvanshSanjeev](https://twitter.com/SuvanshSanjeev) [trychroma](https://twitter.com/trychroma) 
  ![](https://pbs.twimg.com/media/GO1_4bSbEAAimzS.jpg) ([View Tweet](https://twitter.com/atroyn/status/1796232436436852818))
- [SuvanshSanjeev](https://twitter.com/SuvanshSanjeev) [trychroma](https://twitter.com/trychroma) first the money shot. you can get up to 70% improvement in retrieval accuracy, just by fitting a linear transform to a relatively small amount of labeled data, and applying it to *just the query embedding*. for many applications, this is the difference between working or not. 
  ![](https://pbs.twimg.com/media/GO2A4epa4AA-OVA.png) ([View Tweet](https://twitter.com/atroyn/status/1796233703536148501))
- [SuvanshSanjeev](https://twitter.com/SuvanshSanjeev) [trychroma](https://twitter.com/trychroma) embedding adapters aren't a new idea. you take query-document pairs labeled according to whether the document is relevant to the query (e.g. +1 / -1), and fit a transform. you then apply the transform after the general embedding model to specialize on your data and use-case. 
  ![](https://pbs.twimg.com/media/GO2BG3yasAENqAE.jpg) ([View Tweet](https://twitter.com/atroyn/status/1796234093010780661))
- [SuvanshSanjeev](https://twitter.com/SuvanshSanjeev) [trychroma](https://twitter.com/trychroma) for linear adapters, you simply fit a linear model (basically a matmul). this corresponds to a linear transform of the vector space, i.e. stretching, squeezing, and rotating it to better fit your data and queries. it's computationally very cheap, both to train and to run. ([View Tweet](https://twitter.com/atroyn/status/1796234702812270623))
- [SuvanshSanjeev](https://twitter.com/SuvanshSanjeev) [trychroma](https://twitter.com/trychroma) we experimented with a number of approaches to linear adapters, and compared them to fine-tuning. we trained a joint adapter (applied to both query and document embeddings), query-only, separate, and warm-started from query to apply to documents. 
  ![](https://pbs.twimg.com/media/GO2CEs_aQAQgbG7.png) ([View Tweet](https://twitter.com/atroyn/status/1796235039128306011))
- [SuvanshSanjeev](https://twitter.com/SuvanshSanjeev) [trychroma](https://twitter.com/trychroma) though the performance varies according to the dataset, there is a significant improvement in all cases. for example, one can use a linear adapter to improve retrieval accuracy of an embedding model trained on english, to documents and queries in spanish 
  ![](https://pbs.twimg.com/media/GO2CeGGa8AA1HlB.png) ([View Tweet](https://twitter.com/atroyn/status/1796235284922953895))
- [SuvanshSanjeev](https://twitter.com/SuvanshSanjeev) [trychroma](https://twitter.com/trychroma) (it doesn't work as well on korean but it's surprising that it works at all in this setting) 
  ![](https://pbs.twimg.com/media/GO2CpjjbIAAqK7n.png) ([View Tweet](https://twitter.com/atroyn/status/1796235510526235096))
- [SuvanshSanjeev](https://twitter.com/SuvanshSanjeev) [trychroma](https://twitter.com/trychroma) we found that training a linear adapter to just the query is always competitive in this setting. this is really great because it means 1. you don't have to re-compute your doc embeddings and 2. you can cheaply improve accuracy for many users, separately, on a single corpus. ([View Tweet](https://twitter.com/atroyn/status/1796235827120587256))
- [SuvanshSanjeev](https://twitter.com/SuvanshSanjeev) [trychroma](https://twitter.com/trychroma) we ablate negative sampling i.e. training with irrelevant as well as relevant pairs, and (as expected), it provides a significant boost. negative sampling is very cheap in this setting, just sample random documents without a positive relevancy label! 
  ![](https://pbs.twimg.com/media/GO2DK2aaQAQUmpk.png) ([View Tweet](https://twitter.com/atroyn/status/1796236226732900859))
- [SuvanshSanjeev](https://twitter.com/SuvanshSanjeev) [trychroma](https://twitter.com/trychroma) we also want to understand how much data is necessary to get a useful improvement. we find that this varies significantly by dataset, and speculate that (similar to recent work by [khoomeik](https://twitter.com/khoomeik)) this is related to data diversity. but you start to beat the baseline at about 10-20%. 
  ![](https://pbs.twimg.com/media/GO2D7K-bQAANUUF.jpg) 
  ![](https://pbs.twimg.com/media/GO2D93easAAaAiM.png) ([View Tweet](https://twitter.com/atroyn/status/1796237175111172396))
- finally, we took a look at datasets with a holdout split. as expected, we see more modest gains, varying by dataset, but still significant. 
  ![](https://pbs.twimg.com/media/GO2EfR7aIAAu5SM.png) 
  ![](https://pbs.twimg.com/media/GO2EmJkaQAEmQQ2.png) ([View Tweet](https://twitter.com/atroyn/status/1796237631828980066))
- there's a few interesting directions for future work. we don't constrain the linear transform, despite the fact that measure cosine similarity - we train all parameters separately. constraining the transform to SO(dim) to represent only rotations, might be interesting to try. ([View Tweet](https://twitter.com/atroyn/status/1796238323893363011))
- you can read the full report here:
  https://t.co/safEfuq4XW ([View Tweet](https://twitter.com/atroyn/status/1796238383351804213))
- the repo to replicate / play with this is here: 
  https://t.co/QXvm3mZ4Pp ([View Tweet](https://twitter.com/atroyn/status/1796238533713346769))
- thanks to [SuvanshSanjeev](https://twitter.com/SuvanshSanjeev), who did the majority of the work, and to [MadelineNotes](https://twitter.com/MadelineNotes) and [jeffreyhuber](https://twitter.com/jeffreyhuber) who are responsible for the site design and implementation. ([View Tweet](https://twitter.com/atroyn/status/1796238671634722921))
- [SuvanshSanjeev](https://twitter.com/SuvanshSanjeev) [MadelineNotes](https://twitter.com/MadelineNotes) [jeffreyhuber](https://twitter.com/jeffreyhuber) more coming. 
  ![](https://pbs.twimg.com/media/GO2FqJNaMAAzD8x.png) ([View Tweet](https://twitter.com/atroyn/status/1796238805210628125))
