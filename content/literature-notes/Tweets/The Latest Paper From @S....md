---
author: [[@vimota on Twitter]]
title: "The Latest Paper From @S..."
date: 2023-09-18
tags: 
- tweets
- literature-note
---
![rw-book-cover](https://pbs.twimg.com/profile_images/1640096235746119680/MYltGyx4.jpg)

## Metadata
- Author: [[@vimota on Twitter]]
- Full Title: The Latest Paper From @S...
- URL: https://twitter.com/vimota/status/1702503466994982914

## Highlights
- The latest paper from @salesforce AI, et al. discovers a new prompt called Chain of Density (CoD) that produces more dense and human-preferable summaries compared to vanilla GPT-4.
  I gave it a try for a few articles and it's really solid. Pasted it here if you want to try it 👇
  ---
  Article: {{ ARTICLE }}
  You will generate increasingly concise, entity-dense summaries of the above article. 
  Repeat the following 2 steps 5 times. 
  Step 1. Identify 1-3 informative entities (";" delimited) from the article which are missing from the previously generated summary. 
  Step 2. Write a new, denser summary of identical length which covers every entity and detail from the previous summary plus the missing entities. 
  A missing entity is:
  - relevant to the main story, 
  - specific yet concise (5 words or fewer), 
  - novel (not in the previous summary), 
  - faithful (present in the article), 
  - anywhere (can be located anywhere in the article).
  Guidelines:
  - The first summary should be long (4-5 sentences, ~80 words) yet highly non-specific, containing little information beyond the entities marked as missing. Use overly verbose language and fillers (e.g., "this article discusses") to reach ~80 words.
  - Make every word count: rewrite the previous summary to improve flow and make space for additional entities.
  - Make space with fusion, compression, and removal of uninformative phrases like "the article discusses".
  - The summaries should become highly dense and concise yet self-contained, i.e., easily understood without the article. 
  - Missing entities can appear anywhere in the new summary.
  - Never drop entities from the previous summary. If space cannot be made, add fewer new entities. 
  Remember, use the exact same number of words for each summary.
  Answer in JSON. The JSON should be a list (length 5) of dictionaries whose keys are "Missing_Entities" and "Denser_Summary".
  ``` ([View Tweet](https://twitter.com/vimota/status/1702503466994982914))
- @salesforce https://t.co/cbZfWt44pa
  They show that there's an interesting tradeoff between density and readability, where the last (most dense) step is not necessarily the most voted for. 
  ![](https://pbs.twimg.com/media/F6CCk5AawAAO08O.jpg) 
  ![](https://pbs.twimg.com/media/F6CCzJOaQAASHJY.png) ([View Tweet](https://twitter.com/vimota/status/1702504524123148710))
- If you use Postgres and you're interested in adding AI features to your existing application in 30 minutes give Embedding Sync a try:
  https://t.co/A5SdPjFNs1 ([View Tweet](https://twitter.com/vimota/status/1702723300458221662))
