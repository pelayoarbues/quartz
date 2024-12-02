---
author: [[@sh_reya on Twitter]]
title: "Been Working on LLMs In..."
tags: 
- tweets
- literature-note
---
# Been Working on LLMs In...

![rw-book-cover](https://pbs.twimg.com/profile_images/1342529111839944705/hzr44mb5.jpg)

## Metadata
- Author: [[@sh_reya on Twitter]]
- Full Title: Been Working on LLMs In...
- Category: #tweets
- URL: https://twitter.com/sh_reya/status/1641106353971421185

## Highlights
- Been working on LLMs in production lately. Here is an initial thoughtdump on LLMOps trends I’ve observed, compared/contrasted with their MLOps counterparts (no, this thread was not written by chat gpt) ([View Tweet](https://twitter.com/sh_reya/status/1641106353971421185))
- 1) Experimentation is tangibly more expensive (and slower) in LLMOps. These APIs are not cheap, nor is it really feasible to experiment w/ smaller/cheaper models and expect behaviors to stay consistent when calling bigger models ([View Tweet](https://twitter.com/sh_reya/status/1641106356500598786))
- 1.5) we know from MLOps research that high experimentation velocity is crucial for putting and keeping pipelines in prod. A fast way is to collect a few examples, load up a notebook, try out a heck of a lot of different prompts—calling for prompt versioning & management systems ([View Tweet](https://twitter.com/sh_reya/status/1641106358857793538))
- 2) LLMs present a different paradigm of data collection. In tradition ML we’d collect a gazillion examples that span almost our entire distribution of inputs. In no/few shot learning, we collect fewer examples and hope the LLM was pretrained on relevant context ([View Tweet](https://twitter.com/sh_reya/status/1641106360598396928))
- 3) so when it comes to evaluation & deployment, LLMs can fail hard on some pockets of the distribution. Like in MLOps, the easiest way to react to these failures is to put up a filter in the pipeline. Prod ML pipelines are almost always amalgamations of models + rules ([View Tweet](https://twitter.com/sh_reya/status/1641106362217431041))
- 4) I think CI for ML is going to look super different in LLM land. hold-out validation sets are giving less and less insight into ML pipeline performance. In our research we found that organizations often A/B test in prod or do staged deployments of ML pipeline changes; but ([View Tweet](https://twitter.com/sh_reya/status/1641106363760926723))
- 5) it is super important to validate ML pipeline changes as early as possible. Re: CI for LLMs, I am already hearing of people making suites of synthetic examples to test their new prompts on, keeping a store of gold standard examples that LLMs must correctly output against, etc ([View Tweet](https://twitter.com/sh_reya/status/1641106366210387968))
- 6) many people, ranging from ML novices to ML experts, wonder, do I prompt engineer or do I fine tune? My databases PhD brain feels that something is way off with data management for LLMs; this shouldn’t be such a big question ([View Tweet](https://twitter.com/sh_reya/status/1641106367988793351))
- 7) i’m observing that the pipelines to fine-tune and prompt engineer are different; yet they are both experimentation patterns. In traditional ML, people were kinda forced to write training/fine tuning pipelines. In LLM land I think people feel reluctant to write training ([View Tweet](https://twitter.com/sh_reya/status/1641106370911952898))
- 8) and fine tuning pipelines, not just because of cost but because of architectural complexity. Do I have to prepare a dataset? Clean data? What’s the point of doing this if I’m paying an LLM to have world context? If I can hold out as long as possible without fine-tuning… ([View Tweet](https://twitter.com/sh_reya/status/1641106372719964161))
- 9) But I think eventually people will end up fine tuning, or engineering super specific prompts, not just because they achieve good performance but also they may provide a level of robustness to changes in the underlying API model ([View Tweet](https://twitter.com/sh_reya/status/1641106374368313344))
- 10) So the ability to fine tune, or put stateful info (e.g., putting a user’s k most recent queries, or the latest experiment) into the prompt, seems crucial for LLMs in prod. Been thinking a lot about this data management problem in my current project ([View Tweet](https://twitter.com/sh_reya/status/1641106376381595650))
- 11) Few companies are mature enough to have continually training/finetuning ML pipelines. It is a complicated mess. Unfortunately I am seeing the same pattern emerge in LLMs, where it is a nightmare (architecturally) to think about continually fine tuning models ([View Tweet](https://twitter.com/sh_reya/status/1641106378050920452))
- 12) I can’t the only one looking at many plugin and retrieval architectures, wondering about the how challenging it is to efficiently update models or shared state. Many LLM tools are designed for this train-once and deploy-forever paradigm, which we know doesn’t hold in prod ([View Tweet](https://twitter.com/sh_reya/status/1641106379783155713))
- All things said, I am very excited by the ML progress, and the ability of the LLMOps tools to keep up with this progress. I feel very lucky to be in this field at the right time and place, learning so much as I build data management tools for people using LLMs in prod ([View Tweet](https://twitter.com/sh_reya/status/1641106381481861121))
