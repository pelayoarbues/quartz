---
author: [[arxiv.org]]
title: "þÿSeven Failure Points When Engineering a Retrieval Augmented Generation System"
date: 2024-01-23
tags: 
- articles
- literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)

## Metadata
- Author: [[arxiv.org]]
- Full Title: þÿSeven Failure Points When Engineering a Retrieval Augmented Generation System
- URL: https://arxiv.org/pdf/2401.05856.pdf

## Highlights
- The two key takeaways arising from our work are: 1) validation of a RAG system is only feasible during operation, and 2) the robustness of a RAG system evolves rather than designed in at the start. ([View Highlight](https://read.readwise.io/read/01hmvfm0n5ex841b1z9b25e43n))
- In a RAG system, the retrieval system works using embeddings that provide a compressed semantic representation of the docu- ment. An embedding is expressed as a vector of numbers. During the Index process each document is split into smaller chunks that are converted into an embedding using an embedding model. The original chunk and the embedding are then indexed in a database. Software engineers face design decisions around how best to chunk the document and how large a chunk should be. If chunks are too small certain questions cannot be answered, if the chunks are too long then the answers include generated noise. ([View Highlight](https://read.readwise.io/read/01hmvfpfk8eep9pyahefhafgpn))
- The Query process takes place at run time. A question expressed as natural language is first converted into a general query. To gen- eralise the query a large language model is used which enables additional context such as previous chat history to be included in the new query. An embedding is then calculated from the new query to use for locating relevant documents from the database. Top-k similar documents are retrieved using a similarity method such as cosine similarity (vector databases have techniques such as inverted indexes to speed up retrieval time). The intuition is that chunks that are semantically close to the query are likely to contain the answer. ([View Highlight](https://read.readwise.io/read/01hmvfq5g98wbkhhnfva5g4v2v))
- Retrieved documents are then re-ranked to maximise the likeli- hood that the chunk with the answer is located near the top. The next stage is the Consolidator which is responsible for processing the chunks. This stage is needed to overcome the limitations of large language models 1) token limit and 2) rate limit. Services such as OpenAI have hard limits on the amount of text to include in a prompt. This restricts the number of chunks to include in a prompt to extract out an answer and a reduction strategy is needed to chain prompts to obtain an answer. These online services also restrict the number of tokens to use within a time frame restricting the latency of a system. Software engineers need to consider these tradeoffs when designing a RAG system. ([View Highlight](https://read.readwise.io/read/01hmvfqj8ffz96d6d5f4jdwwdr))
- The final stage ofa RAG pipeline is when the answer is extracted from the generated text. Readers are responsible for filtering the noise from the prompt, adhering to formatting instructions (i.e. an- swer the question as a list of options), and producing the output to return for the query. Implementation of a RAG system requires cus- tomising multiple prompts to process questions and answers. This process ensures that questions relevant for the domain are returned. ([View Highlight](https://read.readwise.io/read/01hmvga9j0vnaa98sghpa47bv6))
