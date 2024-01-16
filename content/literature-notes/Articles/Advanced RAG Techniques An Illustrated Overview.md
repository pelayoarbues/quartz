---
author: [[IVAN ILIN]]
title: "Advanced RAG Techniques: An Illustrated Overview"
date: 2024-01-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://miro.medium.com/v2/resize:fit:1200/1*1fgXZ3jvzFYVY0tU_f53cw.jpeg)

## Metadata
- Author: [[IVAN ILIN]]
- Full Title: Advanced RAG Techniques: An Illustrated Overview
- URL: https://pub.towardsai.net/advanced-rag-techniques-an-illustrated-overview-04d193d8fec6

## Highlights
- **Basically RAG is Search + LLM prompting**, where you ask the model to answer the query provided the information found with the search algorithm as a context. Both the query and the retrieved context are injected into the prompt that is sent to the LLM. ([View Highlight](https://read.readwise.io/read/01hm8q1j5fevjwh0j3wh5r3vs1))
- Even the **vector search** area got pumped by that hype although embedding based search engines were made with [faiss](https://faiss.ai) back in 2019. Vector database startups like [chroma](https://github.com/chroma-core/chroma), [weavaite.io](https://weaviate.io) and [pinecone](https://www.pinecone.io) have been built upon existing open source search indices — mainly faiss and [nmslib](https://github.com/nmslib/nmslib) — and added an extra storage for the input texts plus some other tooling lately. ([View Highlight](https://read.readwise.io/read/01hm8q1yemehy921bef4hg0rzc))
- ![](https://miro.medium.com/v2/resize:fit:700/0*Ko_ihY8ecAukf2g1.png) ([View Highlight](https://read.readwise.io/read/01hm8q3jjxgtsry2sa9by1eqs1))
- **Vanilla RAG case** in brief looks the following way: you split your texts into chunks, then you embed these chunks into vectors with some Transformer Encoder model, you put all those vectors into an index and finally you create a prompt for an LLM that tells the model to answers user’s query given the context we found on the search step. 
  In the runtime we vectorise user’s query with the same Encoder model and then execute search of this query vector against the index, find the top-k results, retrieve the corresponding text chunks from our database and feed them into the LLM prompt as context. ([View Highlight](https://read.readwise.io/read/01hm8q3yv8pz24x8x225yq19xx))
- ![](https://miro.medium.com/v2/resize:fit:1000/0*Gr_JqzdpHu7enWG9.png) ([View Highlight](https://read.readwise.io/read/01hm8q5m28cdfdz3zrvq946hgr))
- 1. Chunking & vectorisation
  First of all we want to create an index of vectors, representing our document contents and then in the runtime to search for the least cosine distance between all these vectors and the query vector which corresponds to the closest semantic meaning. ([View Highlight](https://read.readwise.io/read/01hm8q66cpkh816g6heqeg9ck6))
- **1.1 Chunking** 
  Transformer models have fixed input sequence length and even if the input context window is large, the vector of a sentence or a few better represents their semantic meaning than a vector averaged over a few pages of text (depends on the model too, but true in general), so **chunk your data** — split the initial documents in chunks of some size without loosing their meaning (splitting your text in sentences or in paragraphs, not cutting a single sentence in two parts). ([View Highlight](https://read.readwise.io/read/01hm8q6nfmbv61k41pp2bbarcw))
- **The size of the chunk is a parameter to think of** — it depends on the embedding model you use and its capacity in tokens, standard transformer Encoder models like BERT-based Sentence Transformers take 512 tokens at most, OpenAI ada-002 is capable of handling longer sequences like 8191 tokens, but **the compromise here is enough context for the LLM to reason upon vs specific enough text embedding in order to efficiently execute search upon** ([View Highlight](https://read.readwise.io/read/01hm8q7gr1vfx1yvwx150sq9qd))
