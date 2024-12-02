---
author: [[@_philschmid on Twitter]]
title: "How Good Are LLMs in a L..."
date: 2024-07-03
tags: 
- tweets
- literature-note
---
![rw-book-cover](https://pbs.twimg.com/profile_images/1714444511860887552/8TzsCn3e.jpg)

## Metadata
- Author: [[@_philschmid on Twitter]]
- Full Title: How Good Are LLMs in a L...
- URL: https://twitter.com/_philschmid/status/1808420168558649479

## Highlights
- How good are LLMs in a long context, and do we need RAG? 🤔 Summary of a Haystack (SummHay) tries to solve the limitations of “Needle in a Haystack” by focusing on challenging information extraction. [GoogleDeepMind](https://twitter.com/GoogleDeepMind) Gemini 1.5 pro performs the best with and without RAG (37-44%), while [OpenAI](https://twitter.com/OpenAI) GPT-4o and [AnthropicAI](https://twitter.com/AnthropicAI) Claude 3 Opus are below 20%. 👀
  SummHay includes 92 subtopics for evaluating long-context LLMs and RAG. It was curated by synthesizing "Haystacks" with specific insights repeated across documents. LLMs need to generate summaries that identify relevant insights and accurately cite source documents. Performance is measured using Coverage (how well the summary captures the important insights) and Citation (how accurately the summary cites the source documents).
  Insights
  💡 RAG always improves the performance of LLMs if correct information is retrieved
  📊 Evaluated 10 LLMs and 50 RAG systems, including GPT-4o, Claude 3 Opus, and Gemini-1.5-pro
  🏆 Claude 3 Opus achieved the highest Coverage; Gemini-1.5-pro highest citation
  🎯 Gemini-1.5-pro is the best LLM without RAG with 37.8; Claude 3 Sonnet 18.3; GPT-4o 11.4;
  ⚙️ Gemini-1.5-pro + Oracle RAG achieves 44.6, whereas humans achieved 56.1.
  🔢 Full input is around 100,000 tokens, while Oracle RAG is reduced to 15,000 tokens
  📈 Smaller Models like Claude 3 Haiku or Gemini 1.5 Flash outperform bigger LLMs (GPT-4o, Claude 3 Opus) with RAG
  ![](https://pbs.twimg.com/media/GRjMORVWUAAVycP.jpg) ([View Tweet](https://twitter.com/_philschmid/status/1808420168558649479))
- Great work from [SFResearch](https://twitter.com/SFResearch)! The Paper includes a lot of more details and the Code is available for you to rerun. 
  Paper: https://t.co/nEGapbqH3W
  Github: https://t.co/n298DFMWQw
  https://t.co/nEGapbqH3W ([View Tweet](https://twitter.com/_philschmid/status/1808420170613875017))
