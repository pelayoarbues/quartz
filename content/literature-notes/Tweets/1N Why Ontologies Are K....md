---
author: [[@IntuitMachine on Twitter]]
title: "1/N Why Ontologies Are K..."
date: 2024-05-25
tags: 
- tweets
- literature-note
---
![rw-book-cover](https://pbs.twimg.com/profile_images/1740015728105832448/fRPNehGE.png)

## Metadata
- Author: [[@IntuitMachine on Twitter]]
- Full Title: 1/N Why Ontologies Are K...
- URL: https://twitter.com/IntuitMachine/status/1794089047985390033

## Highlights
- 1/n Why Ontologies are Key to Accurate LLM Question Answering
  LLMs, trained on vast text data, struggle to grasp the intricate relationships and constraints embedded within structured databases. This limitation hinders their ability to accurately translate natural language questions into SQL queries, leading to unreliable answers and hindering the adoption of LLM-powered question answering systems in business settings.
  The paper "Increasing the LLM Accuracy for Question Answering: Ontologies to the Rescue!" tackles this challenge head-on. Instead of treating the LLM as a simple text-to-SQL converter, the authors propose a more nuanced approach: incorporating knowledge graphs and their ontologies as a bridge between natural language and structured data.
  Knowledge graphs, unlike relational databases, represent data in a way that mirrors human understanding, capturing entities and their relationships in a graph structure. Ontologies, the backbone of these graphs, define the types of entities and relationships allowed, imposing a layer of semantic understanding that LLMs inherently lack.
  The paper introduces a two-pronged approach to leverage this semantic knowledge: Ontology-based Query Check (OBQC) and LLM Repair. OBQC acts as a vigilant guardian, scrutinizing the LLM-generated SPARQL queries (the language used to query knowledge graphs) for inconsistencies with the ontology. It ensures that the query adheres to the domain's rules and logic, preventing nonsensical or inaccurate results. If an error is detected, LLM Repair steps in. Utilizing the same LLM that generated the flawed query, it attempts to repair the query based on the feedback provided by OBQC. This iterative process refines the query until it aligns with the ontology's constraints.
  The results of their experiments are compelling. By incorporating this knowledge-aware approach, the accuracy of the LLM-powered question answering system soared to 72.55%, a significant leap from the 54.2% accuracy achieved when using only a knowledge graph and a fourfold improvement over using no knowledge graph at all. This improvement is particularly noteworthy in scenarios involving complex data schemas, where LLMs traditionally struggle.
  The paper's findings underscore a crucial point: LLMs alone are not enough for accurate and reliable question answering on structured data. Knowledge graphs and their ontologies are not just optional add-ons; they are essential components for bridging the gap between natural language and the structured world of data. By embedding semantic understanding and reasoning into the question answering process, we can unlock the true potential of LLMs, enabling businesses to confidently converse with their data and extract meaningful insights. As we venture further into the era of AI-driven decision making, this synergistic relationship between language models and knowledge graphs will be paramount in ensuring accuracy, building trust, and ultimately, empowering businesses to make better decisions.
  ![](https://pbs.twimg.com/media/GOXid0JWoAEXHLE.jpg) ([View Tweet](https://twitter.com/IntuitMachine/status/1794089047985390033))
- 2/n Here is the relevant experimental data: https://t.co/eK1G5TmHRU ([View Tweet](https://twitter.com/IntuitMachine/status/1794089422855536903))
