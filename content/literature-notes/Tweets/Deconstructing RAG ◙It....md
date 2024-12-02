---
author: [[@RLanceMartin on Twitter]]
title: "Deconstructing RAG 
It..."
date: 2023-11-22
tags: 
- tweets
- literature-note
---
![rw-book-cover](https://pbs.twimg.com/profile_images/1655101667908677632/uCrwcWfO.jpg)

## Metadata
- Author: [[@RLanceMartin on Twitter]]
- Full Title: Deconstructing RAG 
It...
- URL: https://twitter.com/RLanceMartin/status/1727019896394207624

## Highlights
- Deconstructing RAG 
  It can be hard to follow all of the RAG strategies that have come out over the past months. 
  I created a few guides to organize them into major themes and show how to build multi-modal / semi-structured RAG on complex docs (w/ images, tables).
  Here's a few of the major themes:
  1. Query Transformations - User questions may not be well-posed / -worded for retrieval. There's a host of methods that re-write and / or expand (fan-out into multiple sub-questions) questions that maximize the chance of retrieving relevant documents. See blog: https://t.co/38Pbrhw1Zf
  2. Routing - Queries may need to be routed to different data sources depending on what is being asked. Recent blog reviewing OpenAI's RAG strategies provides some guidance on question routing: https://t.co/QnjjtZ77sp
  3. Query Construction - To access structured data, natural language needs to be converted into specific a query syntax. Various approaches can access data in SQL, SQL w/ semantic columns (pgvector), graph DBs, vectorDB w/ metadata filters, etc. See blog: https://t.co/Z5ynzlzmWK
  4. Index Building - One of the most useful tricks I've been using is multi-representation indexing: decouple what you index for retrieval (e.g., table or image summary) from what you pass to the llm for answer synthesis (e.g., the raw image, a table). See blog: 
  https://t.co/dUlYZHP9b9
  4a. Multi-Modal -
  This cookbook show how I used this approach for RAG on a substack (<a href="https://twitter.com/jaminball">@jaminball</a>'s Clouded Judgement) that has many images of densely packed tables, graphs:
  https://t.co/ANJ1PhrvRw
  4b. Semi-Structured -
  This cookbook show how I used this for RAG on a docs (papers) with tables, which can be split using naive RAG text-splitting (that does not explicitly preserve them):
  https://t.co/00jLXU05i1
  5. Post-processing - Given retrieved documents, there are various way to rank / filter them. Recent blog reviewing OpenAI's RAG strategies provides a few ideas on applying post-processing: https://t.co/QnjjtZ77sp<img src='https://pbs.twimg.com/media/F_eXTlZaMAEh2Nh.jpg'/> ([View Tweet](https://twitter.com/RLanceMartin/status/1727019896394207624))
