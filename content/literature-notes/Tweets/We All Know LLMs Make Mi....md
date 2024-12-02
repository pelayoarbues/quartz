---
author: [[@sh_reya on Twitter]]
title: "We All Know LLMs Make Mi..."
date: 2024-01-17
tags: 
- tweets
- literature-note
---
![rw-book-cover](https://pbs.twimg.com/profile_images/1342529111839944705/hzr44mb5.jpg)

## Metadata
- Author: [[@sh_reya on Twitter]]
- Full Title: We All Know LLMs Make Mi...
- URL: https://twitter.com/sh_reya/status/1747304364103041296

## Highlights
- We all know LLMs make mistakes. One simply cannot deploy LLM pipelines without assertions, yet writing good assertions is tedious & hard. So, we built SPADE, a system that analyzes prompts & auto-generates custom assertions in low-data settings: https://t.co/kWW3vsdEEM ([View Tweet](https://twitter.com/sh_reya/status/1747304364103041296))
- I have 2 favorite contributions. First, we use prompt version history to seed candidate assertions. From studying prompt datasets, we discovered a novel insight: people implicitly encode failure criteria in revisions of their prompts, e.g., “do not say X.” 
  ![](https://pbs.twimg.com/media/GD-q3OSboAAR6p_.jpg) ([View Tweet](https://twitter.com/sh_reya/status/1747304365353001263))
- We analyzed 19 LLM pipelines from <a href="https://twitter.com/LangChainAI">@LangChainAI</a>, creating a taxonomy of prompt changes to develop assertions around. For example, if a developer adds an “exclusion instruction,” we synthesize assertion(s) to check for this. 
  ![](https://pbs.twimg.com/media/GD-q_iraAAAwWy6.jpg) ([View Tweet](https://twitter.com/sh_reya/status/1747304367752114343))
- Second, we filter bad & redundant candidate assertions without sampling lots of data or training custom evaluators. We formulate this as a problem of selecting a minimal set of non-overlapping and accurate assertions while maintaining coverage. ([View Tweet](https://twitter.com/sh_reya/status/1747304369513800031))
- With small datasets (~50-80) of LLM pipeline inputs & outputs, we demonstrate solutions that work for 9 LLM pipelines across various domains (e.g., finance, software, writing). The data and pipelines are open-sourced for further research on deployed LLMs. ([View Tweet](https://twitter.com/sh_reya/status/1747304370683977803))
- Personally, I’m grateful to work on a project with fun research problems and practical potential. Our community has only scratched the surface of what LLMs can do & what to deploy. I’m excited by the work we’re all doing to make them more reliable for automated use. ([View Tweet](https://twitter.com/sh_reya/status/1747304371841577110))
- Currently, we’re exploring how to put SPADE in an interactive system for anyone to use. Thanks to Haotian Li, <a href="https://twitter.com/pgasawa">@pgasawa</a>, <a href="https://twitter.com/MadelonHulsebos">@MadelonHulsebos</a>, Yiming Lin, <a href="https://twitter.com/jdzamfi">@jdzamfi</a>, <a href="https://twitter.com/hwchase17">@hwchase17</a>, <a href="https://twitter.com/WHinthorn">@WHinthorn</a>, <a href="https://twitter.com/adityagp">@adityagp</a>, and <a href="https://twitter.com/sirrice">@sirrice</a> for a fun collaboration---looking forward to our future work! 🥳 ([View Tweet](https://twitter.com/sh_reya/status/1747304373087277141))
