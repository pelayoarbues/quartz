---
author: [[@clusteredbytes on Twitter]]
title: "Multi Document Agent Arc..."
date: 2023-10-03
tags: 
- tweets
- literature-note
---
![rw-book-cover](https://pbs.twimg.com/profile_images/1637707601864454144/Gqpvj271.jpg)

## Metadata
- Author: [[@clusteredbytes on Twitter]]
- Full Title: Multi Document Agent Arc...
- URL: https://twitter.com/clusteredbytes/status/1708637770762031286

## Highlights
- Multi Document Agent architecture (v0) in @llama_index, a step beyond naive top-k RAG.
  It allows answering broader set of questions over multiple documents, which weren't possible with basic RAG.
  Let's break down the agent architecture and see how it works 👇🧵 
  ![](https://pbs.twimg.com/media/F7ZM_rCWoAA8qfA.jpg) ([View Tweet](https://twitter.com/clusteredbytes/status/1708637770762031286))
- Architecture:
  - For each document, a VectorIndex is created for semantic search, and a SummaryIndex is created for summarization
  - Then we create QueryEngine for both these Indices
  - Next the QueryEngines are converted to QueryTools 
  ![](https://pbs.twimg.com/media/F7ZNAQDXoAAjK-I.png) ([View Tweet](https://twitter.com/clusteredbytes/status/1708637778265756094))
- These Tools are passed to OpenAIAgent. This is the document agent.
  Each document has an agent like this that chooses to perform summarization or semantic search within each document. 
  ![](https://pbs.twimg.com/media/F7ZNAmsXEAAoTe4.jpg) ([View Tweet](https://twitter.com/clusteredbytes/status/1708637784783638816))
- Next we have a top-level Retriever-Enabled Agent.
  This boss agent orchestrates across different document agents.
  First it retrieves the document agents relevant to the question, then passes the input to those agents only and crafts the response from those agent outputs. 
  ![](https://pbs.twimg.com/media/F7ZNA_9WMAAQ_8z.png) ([View Tweet](https://twitter.com/clusteredbytes/status/1708637791523840120))
- This is version 0, and there's still room for improvement. Next steps are parallel query planning, reducing latency and more 🚀
  Full guide here: https://t.co/ULJj2KI8ST ([View Tweet](https://twitter.com/clusteredbytes/status/1708637795781156944))
- Here's a short demo of how this Multi Document Agent architecture would work: https://t.co/YCuFi59ZZS ([View Tweet](https://twitter.com/clusteredbytes/status/1708637802982682863))
- Thanks for reading.
  I write about AI, LLMs, RAG etc. and try to make complex topics as easy as possible. 
  Stay tuned for more ! 🔥 #AI #RAG ([View Tweet](https://twitter.com/clusteredbytes/status/1708637810402513038))
