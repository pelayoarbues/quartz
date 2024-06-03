---
author: [[Lilian Weng]]
title: "LLM Powered Autonomous Agents"
date: 2024-06-03
tags: 
- articles
- literature-note
---
![rw-book-cover](https://lilianweng.github.io/favicon-32x32.png)

## Metadata
- Author: [[Lilian Weng]]
- Full Title: LLM Powered Autonomous Agents
- URL: https://lilianweng.github.io/posts/2023-06-23-agent/

## Highlights
- In a LLM-powered autonomous agent system, LLM functions as the agent’s brain, complemented by several key components:
  • **Planning**
  • Subgoal and decomposition: The agent breaks down large tasks into smaller, manageable subgoals, enabling efficient handling of complex tasks.
  • Reflection and refinement: The agent can do self-criticism and self-reflection over past actions, learn from mistakes and refine them for future steps, thereby improving the quality of final results.
  • **Memory**
  • Short-term memory: I would consider all the in-context learning (See [Prompt Engineering](https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/)) as utilizing short-term memory of the model to learn.
  • Long-term memory: This provides the agent with the capability to retain and recall (infinite) information over extended periods, often by leveraging an external vector store and fast retrieval.
  • **Tool use**
  • The agent learns to call external APIs for extra information that is missing from the model weights (often hard to change after pre-training), including current information, code execution capability, access to proprietary information sources and more.
  ![](https://lilianweng.github.io/posts/2023-06-23-agent/agent-overview.png) ([View Highlight](https://read.readwise.io/read/01hz9nbpq0mhz6b3v1s28zd4zs))
- Component One: Planning[#](https://lilianweng.github.io/posts/2023-06-23-agent#component-one-planning)
  A complicated task usually involves many steps. An agent needs to know what they are and plan ahead. ([View Highlight](https://read.readwise.io/read/01hz9ne4tqqwfda5nz9j1yyk61))
- Task Decomposition[#](https://lilianweng.github.io/posts/2023-06-23-agent#task-decomposition)
  [**Chain of thought**](https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/#chain-of-thought-cot) (CoT; [Wei et al. 2022](https://arxiv.org/abs/2201.11903)) has become a standard prompting technique for enhancing model performance on complex tasks. The model is instructed to “think step by step” to utilize more test-time computation to decompose hard tasks into smaller and simpler steps. CoT transforms big tasks into multiple manageable tasks and shed lights into an interpretation of the model’s thinking process.
  **Tree of Thoughts** ([Yao et al. 2023](https://arxiv.org/abs/2305.10601)) extends CoT by exploring multiple reasoning possibilities at each step. It first decomposes the problem into multiple thought steps and generates multiple thoughts per step, creating a tree structure. The search process can be BFS (breadth-first search) or DFS (depth-first search) with each state evaluated by a classifier (via a prompt) or majority vote.
  Task decomposition can be done (1) by LLM with simple prompting like `"Steps for XYZ.\n1."`, `"What are the subgoals for achieving XYZ?"`, (2) by using task-specific instructions; e.g. `"Write a story outline."` for writing a novel, or (3) with human inputs.
  Another quite distinct approach, **LLM+P** ([Liu et al. 2023](https://arxiv.org/abs/2304.11477)), involves relying on an external classical planner to do long-horizon planning. This approach utilizes the Planning Domain Definition Language (PDDL) as an intermediate interface to describe the planning problem. In this process, LLM (1) translates the problem into “Problem PDDL”, then (2) requests a classical planner to generate a PDDL plan based on an existing “Domain PDDL”, and finally (3) translates the PDDL plan back into natural language. Essentially, the planning step is outsourced to an external tool, assuming the availability of domain-specific PDDL and a suitable planner which is common in certain robotic setups but not in many other domains. ([View Highlight](https://read.readwise.io/read/01hz9nesfsdwfd4aqmtbdp8sy6))
- Self-Reflection[#](https://lilianweng.github.io/posts/2023-06-23-agent#self-reflection)
  Self-reflection is a vital aspect that allows autonomous agents to improve iteratively by refining past action decisions and correcting previous mistakes. It plays a crucial role in real-world tasks where trial and error are inevitable.
  **ReAct** ([Yao et al. 2023](https://arxiv.org/abs/2210.03629)) integrates reasoning and acting within LLM by extending the action space to be a combination of task-specific discrete actions and the language space. The former enables LLM to interact with the environment (e.g. use Wikipedia search API), while the latter prompting LLM to generate reasoning traces in natural language.
  The ReAct prompt template incorporates explicit steps for LLM to think, roughly formatted as:
  Thought: ...
  Action: ...
  Observation: ...
  ... (Repeated many times)
  ![](https://lilianweng.github.io/posts/2023-06-23-agent/react.png) ([View Highlight](https://read.readwise.io/read/01hz9nezw9nq41dxs83xyjaxdv))
- **Reflexion** ([Shinn & Labash 2023](https://arxiv.org/abs/2303.11366)) is a framework to equips agents with dynamic memory and self-reflection capabilities to improve reasoning skills. Reflexion has a standard RL setup, in which the reward model provides a simple binary reward and the action space follows the setup in ReAct where the task-specific action space is augmented with language to enable complex reasoning steps. After each action at, the agent computes a heuristic ht and optionally may *decide to reset* the environment to start a new trial depending on the self-reflection results.
  ![](https://lilianweng.github.io/posts/2023-06-23-agent/reflexion.png)
  Fig. 3. Illustration of the Reflexion framework. (Image source: [Shinn & Labash, 2023](https://arxiv.org/abs/2303.11366)) ([View Highlight](https://read.readwise.io/read/01hz9ngdxwtg358c6ap8sgzzd4))
