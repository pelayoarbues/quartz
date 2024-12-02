---
author: [[@ecardenas300 on Twitter]]
title: "I Tested the RAG Perform..."
date: 2023-12-11
tags: 
- tweets
- literature-note
---
![rw-book-cover](https://pbs.twimg.com/profile_images/1717537716944908288/pOJFCTLA.jpg)

## Metadata
- Author: [[@ecardenas300 on Twitter]]
- Full Title: I Tested the RAG Perform...
- URL: https://twitter.com/ecardenas300/status/1733912609865228343

## Highlights
- I tested the RAG performance of hybrid search weightings (alpha) using Ragas 🧪
  TL;DR:
  Ragas uses an LLM to evaluate the performance of the retrieval and generation in your RAG pipeline. I used the dataset behind Verba (thanks to <a href="https://twitter.com/aestheticedwar1">@aestheticedwar1</a>). The best performance came from an alpha set to 0.75.
  Hybrid search combines keyword-based search algorithms with vector search techniques. The weighting is determined by the alpha parameter; alpha = 0 is BM25 only and alpha = 1 is vector search only. 
  Ragas offers four metrics, 2 for generation (faithfulness and answer relevancy) and 2 for retrieval (context precision and recall).
  Takeaways from the visual below:
  1. Alpha = 0.75 had the highest faithfulness score. This means that the generated response was more factually accurate than the others. 
  2. Alpha = 0.75 and alpha = 1 had the highest answer relevancy. Answer relevancy measures how relevant the generated response is to the question. 
  3. Alpha = 0.5 and alpha = 0.75 had the higest context precision. Precision is measuing how accurate the chunks were from the retrieved chunks. 
  4. Alpha = 0 had the highest context recall. <a href="https://twitter.com/weaviate_io">@weaviate_io</a> has hybrid search built it natively, allowing you to test the best alpha parameter for your application!
  I'm still learning about RAG evaluation and the Ragas score. If you'd like to test this out yourself, check out the repo link in the reply 🙂<img src='https://pbs.twimg.com/media/GBAN2YqWIAApLmC.jpg'/> ([View Tweet](https://twitter.com/ecardenas300/status/1733912609865228343))
- <a href="https://twitter.com/aestheticedwar1">@aestheticedwar1</a> Here is the GitHub repo: https://t.co/QWCpow76LS
  If you'd like to learn more about RAG evaluation, check out this overview by <a href="https://twitter.com/CShorten30">@CShorten30</a> and I 🥳 
  https://t.co/HD1EL5NtyP ([View Tweet](https://twitter.com/ecardenas300/status/1733912968515953095))
