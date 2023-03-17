---
author: [[lesters]]
title: "Efficient Open-Domain Question-Answering on Vespa.ai"
tags: 
- articles
- literature-note
---
# Efficient Open-Domain Question-Answering on Vespa.ai

![rw-book-cover](https://blog.vespa.ai/assets/2020-09-30-efficient-open-domain-question-answering-on-vespa/QA.png)

## Metadata
- Author: [[lesters]]
- Full Title: Efficient Open-Domain Question-Answering on Vespa.ai
- Category: #articles
- URL: https://blog.vespa.ai/efficient-open-domain-question-answering-on-vespa/

## Highlights
- Open-domain question-answering has emerged as a benchmark for measuring a system’s capability to read, represent, and retrieve general knowledge. ([View Highlight](https://read.readwise.io/read/01gvp267cmsy34kwgadv6evh5j))
- The current retrieval-based state-of-the-art is the [Dense Passage Retrieval system](https://github.com/facebookresearch/DPR), as described in the [Dense Passage Retrieval for Open-Domain Question Answering paper](https://arxiv.org/abs/2004.04906). It consists of a set of python scripts, tools, and models developed primarily for research. There are a lot of parts in such a system. These include two BERT-based models for encoding text to embedding vectors, another BERT-based model for extracting answers, approximate nearest-neighbor similarity search and text-based BM25 methods for retrieving candidates, tokenizers, and so on ([View Highlight](https://read.readwise.io/read/01gvp27rk8s6px2d6was5b67av))
- We thought it would be interesting to consolidate these different parts and demonstrate how to build an open-domain question-answering serving system with Vespa.ai that achieves state-of-the-art accuracy. ([View Highlight](https://read.readwise.io/read/01gvp28gav3f7qq1rjw8gnnz92))
- Vespa is designed as a highly performant and scalable production-ready system. Thus, it offers a simplified path to deployment in production without coping with the complexity of maintaining many different subsystems. That makes Vespa an attractive package. ([View Highlight](https://read.readwise.io/read/01gvp290ygrrqe4gpb07r33dd6))
- • Fast approximate-nearest neighbors for semantic, dense vector retrieval.
  • Term-based (BM25) retrieval for sparse vector retrieval.
  • Importing of multiple pre-trained BERT-based models in Vespa for encoding embedding vectors and extracting answers.
  • Custom logic for tokenization and other things. ([View Highlight](https://read.readwise.io/read/01gvp299tr8w4njt20pay2kk6f))
- The Natural Questions benchmark consists of natural language questions and answers. How to retrieve and represent the knowledge required to answer the questions is up to each system. There are two main approaches to this: retrieval and parametric. ([View Highlight](https://read.readwise.io/read/01gvp2a23kvt8gykn19b9p7ahf))
