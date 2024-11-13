---
title: Multi AI agent systems with CrewAI
date: 2024-11-12
tags:
  - literature-note
  - course
  - agents
  - AI
---
## Overview of Multi AI-Agent Systems

Use cases and verticals

![](literature-notes/Courses/attachments/operations-automations.png)

Long tail use cases show general patterns:
- Research
- Analysis
- Summary
- Reporting
- Push to an existing systems
![](literature-notes/Courses/attachments/use-cases-stages.png)

Then it goes with a description of the main elements of CrewAI that you can check from the first course

A new addition is the ability to create Agents and Tasks using yaml files. 

## Automate Project: Planning, Estimation and Allocation


| Agents                | Tasks               |
| --------------------- | ------------------- |
| Project Planner       | Task breakdown      |
| Estimation Analyst    | Time Estimation     |
| Allocation Strategist | Resource allocation |

The output will be a project plan with tasks/allocations and milestones with the people responsible. Eventually we will be able to push the project to Trello or Jira. 

It uses gpt-4o-mini for reduced costs.

It loads the agents and tasks with yaml files. For structured output it uses pydantic classes. 

## Internal and external integrations

Sometimes you will have integrations before calling the Crew, that is regular code.

The problem is when the crew needs to call external systems such as applications, cloud services or internal systems such as databases or internal apps. So they might be needing to search the internet or check a calendar or reply an email. They may also need to rag search, or run an sql query or trigger a side effect. Somtimes you will like to allow agents to write custom code.

Real time reaction and self healing capabilities. If the tool fails, the agents will be able to pick up the error and try differently.

### Building progress report for project

Automates the progress report of a project

| Agents          | Tasks              | Tools       |
| --------------- | ------------------ | ----------- |
| Data collector  | Understand project |             |
| Project Analyst | Analyze progress   | Trello Tool |
| Project Analyst | Compile report     |             |
