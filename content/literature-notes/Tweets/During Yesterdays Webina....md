---
author: [[@ericciarla on Twitter]]
title: "During Yesterdays Webina..."
tags: 
- tweets
- literature-note
---
# During Yesterdays Webina...

![rw-book-cover](https://pbs.twimg.com/profile_images/1616231349718863873/xD7Sjvii.jpg)

## Metadata
- Author: [[@ericciarla on Twitter]]
- Full Title: During Yesterdays Webina...
- Category: #tweets
- URL: https://twitter.com/ericciarla/status/1641527314172223488

## Highlights
- During yesterdays webinar hosted by @LangChainAI and @hwchase17 there were a lot of questions about how https://t.co/qeFS9ot7xH implemented hybrid search. Here is a little explanation on how we did it and increased correct document matching by almost 20%. (1/6) ([View Tweet](https://twitter.com/ericciarla/status/1641527314172223488))
- At first we only used embedding search (text-embedding-ada-002) but we soon found its limitations. That's when we introduced hybrid search, which combines the strengths of both semantic and keyword-based search algorithms. Here are some tips on how to implement. (2/6) ([View Tweet](https://twitter.com/ericciarla/status/1641527315749281802))
- First, finding the right keyword search function for your use case is important. We opted to build our own search function using Postgres full text search, but would love to see hybrid search implemented with something like @meilisearch (3/6) ([View Tweet](https://twitter.com/ericciarla/status/1641527316890132489))
- Next, getting the correct keywords is important. With natural language queries you will have a lot of unnecessary stopwords. Removing these will increase performance, and there are a bunch of packages like “keyword-extractor” that can help. (4/6) ([View Tweet](https://twitter.com/ericciarla/status/1641527317997428746))
- Lastly, filtering the results is a very important. For both the semantic and keyword-based search we set relevance thresholds documents must hit before being included in the prompt context. For each corpus of data some experimentation is needed to find the right thresholds. (5/6) ([View Tweet](https://twitter.com/ericciarla/status/1641527319578681353))
- There is a lot more to the process than I shared here. Follow for more tips and follow @sideguide_dev to keep up to date on our product! (6/6) ([View Tweet](https://twitter.com/ericciarla/status/1641527320644034589))
