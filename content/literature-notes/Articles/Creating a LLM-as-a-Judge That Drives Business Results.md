---
author: [[Hamel Husain]]
title: "Creating a LLM-as-a-Judge That Drives Business Results"
date: 2024-10-30
tags: 
- articles
- literature-note
---
![rw-book-cover](https://hamel.dev/blog/posts/llm-judge/images/cover_img.png)

## Metadata
- Author: [[Hamel Husain]]
- Full Title: Creating a LLM-as-a-Judge That Drives Business Results
- URL: https://hamel.dev/blog/posts/llm-judge/

## Highlights
- The Problem: AI Teams Are Drowning in Data[](https://hamel.dev/blog/posts/llm-judge/#the-problem-ai-teams-are-drowning-in-data)
  Ever spend weeks building an AI system, only to realize you have no idea if it’s actually working? You’re not alone. I’ve noticed teams repeat the same mistakes when using LLMs to evaluate AI outputs:
  1. **Too Many Metrics**: Creating numerous measurements that become unmanageable.
  2. **Arbitrary Scoring Systems**: Using uncalibrated scales (like 1-5) across multiple dimensions, where the difference between scores is unclear and subjective. What makes something a 3 versus a 4? Nobody knows, and different evaluators often interpret these scales differently.
  3. **Ignoring Domain Experts**: Not involving the people who understand the subject matter deeply.
  4. **Unvalidated Metrics**: Using measurements that don’t truly reflect what matters to the users or the business.
  The result? Teams end up buried under mountains of metrics or data they don’t trust and can’t use. Progress grinds to a halt. Everyone gets frustrated. ([View Highlight](https://read.readwise.io/read/01jbf39y18c4zgfmb7sdpnsyer))
- Step 1: Find *The* Principal Domain Expert[](https://hamel.dev/blog/posts/llm-judge/#step-1-find-the-principal-domain-expert)
  In most organizations there is usually one (maybe two) key individuals whose judgment is crucial for the success of your AI product. These are the people with deep domain expertise or represent your target users. Identifying and involving this **Principal Domain Expert** early in the process is critical. ([View Highlight](https://read.readwise.io/read/01jbf3a8adh7qh3scs3jfeybzr))
- **Why is finding the right domain expert so important?**
  • **They Set the Standard**: This person not only defines what is acceptable technically, but also helps you understand if you’re building something users actually want.
  • **Capture Unspoken Expectations**: By involving them, you uncover their preferences and expectations, which they might not be able to fully articulate upfront. Through the evaluation process, you help them clarify what a “passable” AI interaction looks like.
  • **Consistency in Judgment**: People in your organization may have different opinions about the AI’s performance. Focusing on the principal expert ensures that evaluations are consistent and aligned with the most critical standards.
  • **Sense of Ownership**: Involving the expert gives them a stake in the AI’s development. They feel invested because they’ve had a hand in shaping it. In the end, they are more likely to approve of the AI. ([View Highlight](https://read.readwise.io/read/01jbf3afvmdm9gr4e5w9y63rjk))
- Many developers attempt to act as the domain expert themselves, or find a convenient proxy (ex: their superior). This is a recipe for disaster. People will have varying opinions about what is acceptable, and you can’t make everyone happy. What’s important is that your principal domain expert is satisfied.
  **Remember:** This doesn’t have to take a lot of the domain expert’s time. Later in this post, I’ll discuss how you can make the process efficient. Their involvement is absolutely critical to the AI’s success. ([View Highlight](https://read.readwise.io/read/01jbf3b27nq58v652d60yjxepd))
- Step 2: Create a Dataset[](https://hamel.dev/blog/posts/llm-judge/#step-2-create-a-dataset)
  With your principal domain expert on board, the next step is to build a dataset that captures problems that your AI will encounter. It’s important that the dataset is diverse and represents the types of interactions that your AI will have in production.
  Why a Diverse Dataset Matters[](https://hamel.dev/blog/posts/llm-judge/#why-a-diverse-dataset-matters)
  • **Comprehensive Testing**: Ensures your AI is evaluated across a wide range of situations.
  • **Realistic Interactions**: Reflects actual user behavior for more relevant evaluations.
  • **Identifies Weaknesses**: Helps uncover areas where the AI may struggle or produce errors. ([View Highlight](https://read.readwise.io/read/01jbf3bkaw2fx2qz4r94m4497j))
- Dimensions for Structuring Your Dataset[](https://hamel.dev/blog/posts/llm-judge/#dimensions-for-structuring-your-dataset)
  You want to define dimensions that make sense for your use case. For example, here are ones that I often use for B2C applications:
  1. **Features**: Specific functionalities of your AI product.
  2. **Scenarios**: Situations or problems the AI may encounter and needs to handle.
  3. **Personas**: Representative user profiles with distinct characteristics and needs. ([View Highlight](https://read.readwise.io/read/01jbf3bwnjy59pdbtxn2dnkp5v))
- Generating Data[](https://hamel.dev/blog/posts/llm-judge/#generating-data)
  To build your dataset, you can:
  • **Use Existing Data**: Sample real user interactions or behaviors from your AI system.
  • **Generate Synthetic Data**: Use LLMs to create realistic user inputs covering various features, scenarios, and personas.
  Often, you’ll do a combination of both to ensure comprehensive coverage. Synthetic data is not as good as real data, but it’s a good starting point. Also, we are only using LLMs to generate the user inputs, not the LLM responses or internal system behavior.
  Regardless of whether you use existing data or synthetic data, you want good coverage across the dimensions you’ve defined. ([View Highlight](https://read.readwise.io/read/01jbf3tjhc6qz2xfbfvdtynx9r))
- Generating Synthetic Data[](https://hamel.dev/blog/posts/llm-judge/#generating-synthetic-data)
  When generating synthetic data, you only need to create the user inputs. You then feed these inputs into your AI system to generate the AI’s responses. It’s important that you log everything so you can evaluate your AI. To recap, here’s the process:
  1. **Generate User Inputs**: Use the LLM prompts to create realistic user inputs.
  2. **Feed Inputs into Your AI System**: Input the user interactions into your AI as it currently exists.
  3. **Capture AI Responses**: Record the AI’s responses to form complete interactions.
  4. **Organize the Interactions**: Create a table to store the user inputs, AI responses, and relevant metadata. ([View Highlight](https://read.readwise.io/read/01jbf3tzsxvb5805fgn52whpds))
- How much data should you generate?[](https://hamel.dev/blog/posts/llm-judge/#how-much-data-should-you-generate)
  There is no right answer here. At a minimum, you want to generate enough data so that you have examples for each combination of dimensions (in this toy example: features, scenarios, and personas). However, you also want to keep generating more data until you feel like you have stopped seeing new failure modes. The amount of data I generate varies significantly depending on the use case. ([View Highlight](https://read.readwise.io/read/01jbf3x6w64hxwq5tk61rasdjp))
- Does synthetic data actually work?[](https://hamel.dev/blog/posts/llm-judge/#does-synthetic-data-actually-work)
  You might be skeptical of using synthetic data. After all, it’s not real data, so how can it be a good proxy? In my experience, it works surprisingly well. Some of my favorite AI products, like [Hex](https://hex.tech/) use synthetic data to power their evals:
  > “LLMs are surprisingly good at generating excellent - and diverse - examples of user prompts. This can be relevant for powering application features, and sneakily, for building Evals. If this sounds a bit like the Large Language Snake is eating its tail, I was just as surprised as you! All I can say is: it works, ship it.” *[Bryan Bischof](https://www.linkedin.com/in/bryan-bischof/), Head of AI Engineering at Hex* ([View Highlight](https://read.readwise.io/read/01jbf3xh3g1fbymj20wbxpt6wr))
