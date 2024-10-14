---
author: [[Nathan Benaich]]
title: "State of AI Report - 2024"
date: 2024-10-11
tags: 
- articles
- literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/media/reader/parsed_document_assets/224919358/f74stvTNG_CBQ2Q7w88mZ2ptviLCOTYl_DSpUlyXjUY-cove_tIbOM2D.png)

## Metadata
- Author: [[Nathan Benaich]]
- Full Title: State of AI Report - 2024
- URL: https://readwise.io/reader/document_raw_content/224919358

## Highlights
- Research - Frontier lab performance converges, but OpenAI maintains its edge following the launch of o1, as planning and reasoning emerge as a major frontier.
  - Foundation models demonstrate their ability to break out of language as multimodal research drives into mathematics, biology, genomics, the physical sciences, and neuroscience.
  - US sanctions fail to stop Chinese (V)LLMs rising up community leaderboards. ([View Highlight](https://read.readwise.io/read/01j9xcy14s3nbehbhtstxnm3sc))
- Industry - NVIDIA remains the most powerful company in the world, enjoying a stint in the $3T club, while regulators probe the concentrations of power within GenAI.
  - More established GenAI companies bring in billions of dollars in revenue, while start-ups begin to gain traction in sectors like video and audio generation.
  Although companies begin to make the journey from model to product, long-term questions around pricing and sustainability remain unresolved.
  - Driven by a bull run in public markets, AI companies reach $9T in value, while investment levels grow healthily in private companies. ([View Highlight](https://read.readwise.io/read/01j9xcxwvxq6grdzjfg81qtdb6))
- Politics - While global governance efforts stall, national and regional AI regulation has continued to advance, with controversial legislation passing in the US and EU.
  - The reality of compute requirements forces Big Tech companies to reckon with real-world physical constraints on scaling and their own emissions targets.
  Meanwhile, governments’ own attempts to build capacity continue to lag.
  - Anticipated AI effects on elections, employment and a range of other sensitive areas are yet to be realized at any scale. ([View Highlight](https://read.readwise.io/read/01j9xcy4qmpc95r7xe5tfm6w3y))
- Safety - A vibe-shift from safety to acceleration takes place as companies that previously warned us about the pending extinction of humanity need to ramp up enterprise sales and usage of their consumer apps.
  - Governments around the world emulate the UK in building up state capacity around AI safety, launching institutes and studying critical national infrastructure for potential vulnerabilities.
  - Every proposed jailbreaking ‘ﬁx’ has failed, but researchers are increasingly concerned with more sophisticated, long-term attacks. ([View Highlight](https://read.readwise.io/read/01j9xcy8bdteka2wpdw0n2wskg))
- For much of the year, both benchmarks and community leaderboards pointed to a chasm between GPT-4 and ‘the best of the rest’. However, Claude 3.5 Sonnet, Gemini 1.5, and Grok 2 have all but eliminated this gap as model performance now begin to converge.
  ● On both formal benchmarks and vibes-based analysis, the best-funded frontier labs are able to rack up scores within low single digits of each other on individual capabilities.
  ● Models are now consistently highly capable coders, are strong at factual recall and math, but less good at open-ended question-answering and multi-modal problem solving.
  ● Many of the variations are sufﬁciently small that they are now likely to be the product of differences in implementation. For example, GPT-4o outperforms Claude 3.5 Sonnet on MMLU, but apparently underperforms it on MMLU-Pro - a benchmark designed to be more challenging.
  ● Considering the relatively subtle technical differences between architectures and likely heavy overlaps in pre-training data, model builders are now increasingly having to compete on new capabilities and product features. ([View Highlight](https://read.readwise.io/read/01j9xd007zc1xyc2wtw8z546tr))
- The OpenAI team had clearly clocked the potential of inference compute early, with OpenAI o1 appearing within weeks of papers from other labs exploring the technique.
  ● By shifting compute from pre- and post-training to inference, o1 reasons through complex prompts step-by-step in a chain-of-thought (COT) style, employing RL to sharpen the COT and the strategies it uses. This unlocks the possibility of solving multi-layered math, science, and coding problems where LLMs have historically struggled, due to the inherent limitations of next-token prediction.
  ● OpenAI report signiﬁcant improvements on reasoning-heavy benchmarks versus 4o, with the starkest on AIME 2024 (competition math), with a whopping score of 83.83 versus 13.4.
  ● However, this capability comes at a steep price: 1M input tokens of o1-preview costs $15, while 1M output tokens will set you back $60. This makes it 3-4x more expensive than GPT-4o.
  ● OpenAI is clear in its API documentation that it is not a like-for-like 4o replacement and that it is not the best model for tasks that require consistently quick responses, image inputs or function calling ([View Highlight](https://read.readwise.io/read/01j9xczjxmmygy353k9gkg6dcv))
- The community were quick to put o1 through its paces, ﬁnding that it performed signiﬁcantly better than other LLMs on certain logical problems and puzzles. Its true edge shone through, however, on complex math and science tasks, with a viral video of a PhD student reacting with astonishment as it reproduced a year of his PhD code in approximately an hour. However, the model remains weaker on certain kinds of spatial reasoning. Like its predecessors, it can’t play chess to save its life… yet. ([View Highlight](https://read.readwise.io/read/01j9xd0np036tnkk1yzffd3r3e))
- In April, Meta dropped the Llama 3 family, 3.1 in July, and 3.2 in September. Llama 3.1 405B, their largest to-date, is able to hold its own against GPT-4o and Claude 3.5 Sonnet across reasoning, math, multilingual, and long-context tasks. This marks the ﬁrst time an open model has closed the gap with the proprietary frontier.
  ● Meta stuck to the same decoder-only transformer architecture that it’s used since Llama 1, with minor adaptations, namely more transformer layers and attention heads.
  ● Meta used an incredible 15T tokens to train the family. While this blew through the “Chinchilla-optimal” amount of training compute, they found that both the 8B and 70B models improved log-linearly up to 15T.
  ● Llama 3.1 405B was trained over 16,000 H100 GPUs, the ﬁrst Llama model trained at this scale.
  ● Meta followed up with Llama 3.2 in September, which incorporated 11B and 90B VLMs (Llama’s multimodal debut).
  The former was competitive with Claude 3 Haiku, the latter with GPT-4o-mini. The company also released 1B and 3B text-only models, designed to operate on-device.
  ● Llama-based models have now racked up over 440M downloads on Hugging Face. ([View Highlight](https://read.readwise.io/read/01j9xd16bwzj95d09cnjv06fxy))
## New highlights added October 14, 2024 at 9:56 AM
- With open source commanding considerable community support and becoming a hot button regulatory issue, some researchers have suggested that the term is often used misleadingly. It can be used to lump together vastly different openness practices across weights, datasets, licensing, and access methods. ([View Highlight](https://read.readwise.io/read/01ja4z92tsw8bz0bxrc3ddycqf))
