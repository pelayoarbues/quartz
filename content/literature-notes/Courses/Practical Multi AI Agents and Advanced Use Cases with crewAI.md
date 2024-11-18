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

# Complex crew setups

In this video the instructor shares how in this lesson we will talk about connecting multiple crews together using conditional logic, and when to pass information between crews. 

ADD Screenshot of crews of agents

Say you want to research on different topics, these could be done in parallel, as the multiple sources dont depend on each other. For instance on a company and in an industry. Then you want to do some analysis using data from both rsearchers, using context attribute. Then you can do a summary. In the final full report we might want to take into account all analysis and summarization. 

Flows unlocks many use cases. Flows allows you to have crews and executing python code before, during or after crew running. 

## Agentic sales pipeline

![](literature-notes/Courses/attachments/types-of-crews.png)
We will use flows to build and agentic sales pipleine. We are going to have lead information, enrich it, score it and then write an email for this lead.

![](literature-notes/Courses/attachments/flows.png)

We will be starting loading leads from a database with regular python. Then we weill use a Lead scoring crew. This crew will search information about this lead, is going to understand how to be scoring and how good of a match this is for the product and business youa are trying to sell them. Then we are going to save this data to another database which can be non-agentic python. Then we might want to have another crew devoted to write an email to the high scored leads. We will wrap all of this within a flow, that will go thorugh all the steps and it also has a state where it can store information that it can use during the flow execution or after the execution. The sales pipelines would be:
- Research a potential lead
- Score them given the person and company
- If a qualified lead then a proper initial email

We could create a diagram of this flow as follows:

![](literature-notes/Courses/attachments/agentic-sales-flow%201.png)

The lead scoring crew will pass a highly structured output for the high score leads so the email writing crew is able to draft and optimize an email for engagement. 

Intro to flows. Two functions:
- Listen
- Start

The start annotation will be the initial function, for instance pulling leads from a database. 

Following the data fetching a new function for lead scoring will be listening to the fetch_leads start function. It also shows how the score_leads function is calling a kickoff_for_each of the fetched leads. The functions may also save information in a self.state variable. 

```python
from crewai import Flow
from crewai.flow.flow import listen, start

class SalesPipeline(Flow):
    @start()
    def fetch_leads(self):
        # Pull our leads from the database
        leads = [
            {
                "lead_data": {
                    "name": "João Moura",
                    "job_title": "Director of Engineering",
                    "company": "Clearbit",
                    "email": "joao@clearbit.com",
                    "use_case": "Using AI Agent to do better data enrichment."
                },
            },
        ]
        return leads

    @listen(fetch_leads)
    def score_leads(self, leads):
        scores = lead_scoring_crew.kickoff_for_each(leads)
        self.state["score_crews_results"] = scores
        return scores
	#The following 2 functions will run in parallel
	# We will store the scored leads and we will filter
	# those above a 70 score
    @listen(score_leads)
    def store_leads_score(self, scores):
        # Here we would store the scores in the database
        return scores

    @listen(score_leads)
    def filter_leads(self, scores):
        return [score for score in scores if score['lead_score'].score > 70]

    @listen(filter_leads)
    def write_email(self, leads):
        scored_leads = [lead.to_dict() for lead in leads]
        emails = email_writing_crew.kickoff_for_each(scored_leads)
        return emails

    @listen(write_email)
    def send_email(self, emails):
        # Here we would send the emails to the leads
        return emails

flow = SalesPipeline()
```

You can plot flows to understand the flow execution plan.

For complex flows we may want to use annotations such as:
- and_: Waits for two functions to finish before executing the other. 
```python
  @listen(and_(filter_leads, store_leads_score))
  def log_leads(self, leads):
    print(f"Leads: {leads}")
```
- router: it allows you to choose different paths for the flow, executing different functions for each path
```python
 @router(filter_leads, paths=["high", "medium", "low"])
  def count_leads(self, scores):
    if len(scores) > 10:
      return 'high'
    elif len(scores) > 5:
      return 'medium'
    else:
      return 'low'

  @listen('high')
  def store_in_salesforce(self, leads):
    return leads

  @listen('medium')
  def send_to_sales_team(self, leads):
    return leads

  @listen('low')
  def write_email(self, leads):
    scored_leads = [lead.to_dict() for lead in leads]
    emails = email_writing_crew.kickoff_for_each(scored_leads)
    return emails

  @listen(write_email)
  def send_email(self, emails):
    # Here we would send the emails to the leads
    return emails
```

## Performance optimization