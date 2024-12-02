---
author: [[@argilla_io on Twitter]]
title: "🥁 Launching a New Datase..."
date: 2024-04-19
tags: 
- tweets
- literature-note
---
![rw-book-cover](https://pbs.twimg.com/profile_images/1584628553072746499/iJsTS7Rz.png)

## Metadata
- Author: [[@argilla_io on Twitter]]
- Full Title: 🥁 Launching a New Datase...
- URL: https://twitter.com/argilla_io/status/1781356699602800713

## Highlights
- 🥁 Launching a new dataset: Capybara-Preferences, built with distilabel 1.0 ⚗️!
  Hard at work fine-tuning Llama 3? 
  Here's the dataset you've been waiting for.
  Initial results with ORPO & this dataset are 🔥
  https://t.co/OW0S6vHv3k
  🧵What makes this dataset so special? 
  ![](https://pbs.twimg.com/media/GLiWnO_XwAAyHii.jpg) ([View Tweet](https://twitter.com/argilla_io/status/1781356699602800713))
- In Feb, our CEO [dvilasuero](https://twitter.com/dvilasuero) built a 7K version
  💡Idea
  ✅Big labs use multiturn preference data
  ❌The OSS AI community had single-turn prefs
  Misunderstood by many, [jiwoohong98](https://twitter.com/jiwoohong98) [nlee288](https://twitter.com/nlee288) showed its great for ORPO, thanks!
  Now it's used by +100s models
  https://t.co/bLMoEaBrYL ([View Tweet](https://twitter.com/argilla_io/status/1781356702106857820))
- The 7K version also led to an epic Zephyr fine-tune of Mixtral-8x22B by [_lewtun](https://twitter.com/_lewtun) in collab with [kaist_ai](https://twitter.com/kaist_ai) , [huggingface](https://twitter.com/huggingface) and [argilla_io](https://twitter.com/argilla_io) 
  https://t.co/Aol2oN5Kvw
  We wondered: what happens if we scale it to the full capybara from [ldjconfirmed](https://twitter.com/ldjconfirmed)?
  Meet Capybara-Preferences! ([View Tweet](https://twitter.com/argilla_io/status/1781356704778572193))
- 😅 Building the 7K version was fun & painful at the same time
  Yesterday, we released distilabel 1.0: a whole new level of reproducibility & capabilities to build complex data generation pipelines
  Capybara-Prefs is a perfect showcase of distilabel 1.0.
  Here's the pipeline 👇 
  ![](https://pbs.twimg.com/media/GLid-CqW4AAwS05.jpg) ([View Tweet](https://twitter.com/argilla_io/status/1781356708146651591))
- The new distilabel it's based on the idea of Steps that get executed async following a user-defined DAG.
  Let's take a look at the different steps to go from LDJs Capybara to a Preference version.
  1⃣ LoadHubDataset: a built-in-step to read a HF hub dataset ("LDJnr/Capybara") 
  ![](https://pbs.twimg.com/media/GLifgnGXUAAVAoL.jpg) ([View Tweet](https://twitter.com/argilla_io/status/1781356711925686420))
- 2⃣ FormatMessages: a custom step to format the chat messages from the Capybara dataset
  We separate the conversation messages from the responses in Capybara and keep it to include it in the preference rating step! 
  ![](https://pbs.twimg.com/media/GLifuQJWkAEZyrb.jpg) ([View Tweet](https://twitter.com/argilla_io/status/1781356715759259898))
- 3⃣ text_generation_with_*: Parallel steps to generate responses to the last user message (using the full conversation context)
  Here's the generation step using the amazing OpenHermes from [Teknium1](https://twitter.com/Teknium1) 
  We define two more: Notus, NeuralBeagle by [maximelabonne](https://twitter.com/maximelabonne) 
  ![](https://pbs.twimg.com/media/GLigOJmWwAERilM.jpg) ([View Tweet](https://twitter.com/argilla_io/status/1781356720125530254))
- 3⃣(bis) PreserveGeneration: runs in parallel and formats the original Capybara responses as the other on the fly generations. 
  ![](https://pbs.twimg.com/media/GLih-P7WQAApMyU.jpg) ([View Tweet](https://twitter.com/argilla_io/status/1781356723904684521))
- 4⃣ CombineColumns: a built-in step to combine the outputs of the previous step
  These combines our 4 responses into a generations list and a list indicating which model generated each response 
  ![](https://pbs.twimg.com/media/GLiip4pXYAAvVRM.jpg) ([View Tweet](https://twitter.com/argilla_io/status/1781356727796973658))
- 5⃣ PrepareInstruction: this is an important custom step which adds the full conversation in the instruction so the preference rating step can use the context to rate the final response. 
  ![](https://pbs.twimg.com/media/GLijpNtXYAAF5VP.jpg) ([View Tweet](https://twitter.com/argilla_io/status/1781356731273990238))
- 6⃣ UltraFeedback: a built-in step with our enhanced UltraFeedback prompt for judging the quality of responses!
  We use gpt-4-turbo as judge, you can experiment with Anthropic models, Gemini, and maybe Llama 3?? 
  ![](https://pbs.twimg.com/media/GLikW7WWAAAZYKP.jpg) ([View Tweet](https://twitter.com/argilla_io/status/1781356735132836113))
- 7⃣ KeepColumns: it does what it says 🙂, define the final columns of your shiny new preference dataset!
  And that's our quick overview!
  1. Check distilabel and get started: https://t.co/o8u9B2EqsQ
  2. Check the full pipeline: 
  https://t.co/yvChmbZk26
  3. Start fine-tuning! 
  ![](https://pbs.twimg.com/media/GLilEbGXQAA4UDp.jpg) ([View Tweet](https://twitter.com/argilla_io/status/1781356739096449048))
