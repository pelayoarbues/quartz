---
author: [[Eugene Yan]]
title: 'Mechanisms for Effective Machine Learning Projects'
tags: 
- articles
- literature-note
---
# Mechanisms for Effective Machine Learning Projects

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article0.00998d930354.png)

## Metadata
- Author: [[Eugene Yan]]
- Full Title: Mechanisms for Effective Machine Learning Projects
- Category: #articles

## Highlights
- If your team is like most teams I’ve been on, you have 2 - 3 problems for every available person. Thus, each member works on 1 or 2 problems simultaneously, with some folks taking 3 or more. And because everyone’s so busy, we barely have time to check in on each other’s projects outside of standup, planning, retrospective, etc. ([View Highlight](https://read.readwise.io/read/01gqqszg0yetftsg6h4k19ev9d))
- have a pilot and copilot for each project. ([View Highlight](https://read.readwise.io/read/01gqqszv6szhjqpw5cpc39e29y))
- The pilot is the main project owner and is in charge of its success (or failure). They own and delegate the work as required though they’re usually responsible for the bulk of design and critical code paths. ([View Highlight](https://read.readwise.io/read/01gqqt0bsp8v2ka8bjgmrpa5me))
- The copilot helps the pilot stay on track, identify critical flaws, and call out blindspots. ([View Highlight](https://read.readwise.io/read/01gqqt18np1z9vbfh1k8qfc79j))
- For example, the copilot should challenge the pilot if the proposed design doesn’t solve the business problem, or if the train-validation split is invalid ([View Highlight](https://read.readwise.io/read/01gqqt1njz8vqd8wtmvzamat7v))
- For every 10 hours the pilot spends on the project, the copilot can expect to spend an hour on reviews (10% of the pilot’s effort). ([View Highlight](https://read.readwise.io/read/01gqqt25xagwce0jgt22vshwnd))
- Pilots and copilots don’t have to be from the same job family. As an applied scientist, I often partner with an engineer who helps with infrastructure, observability, CI/CD, etc. If both scientist and engineer are sufficiently experienced, they can double up as each other’s copilot. As they review each other’s work, knowledge transfer occurs organically and they learn to be effective copilots for other engineers or scientists in future projects. ([View Highlight](https://read.readwise.io/read/01gqqt3632cx4kdyf9fqm6sk6e))
- For a literature review, I **read papers relevant to the problem** . I’m biased towards [solutions that have been applied in industry](https://click.convertkit-mail2.com/p9unze2olzb9h3lpn93aq/vqh3hrhn6ledrnsw/aHR0cHM6Ly9naXRodWIuY29tL2V1Z2VuZXlhbi9hcHBsaWVkLW1s) though more academic papers have also been helpful ([View Highlight](https://read.readwise.io/read/01gqqtj8c1c6sy8j6hw5r43n8e))
- **similar to a code review but for machine learning prototypes and experiments** . Once I have initial experiment results, I schedule a review with fellow scientists to ensure I haven’t overlooked any blindspots or committed critical errors. ([View Highlight](https://read.readwise.io/read/01gqqtm48mzhan556ydsk66wcr))
- During the review, I focus on understanding the methodology and the potential of the current approach. ([View Highlight](https://read.readwise.io/read/01gqqtpgkx9r75fx7e82ge44je))
- For ([View Highlight](https://read.readwise.io/read/01gqqtn7v4day0gskxvk36bpax))
- conduct methodology reviews asynchronously, like a code review, we could adopt a tool like DagsHub which supports [comments on Jupyter notebooks](https://click.convertkit-mail2.com/p9unze2olzb9h3lpn93aq/n2hohvhn4m6kp8s0/aHR0cHM6Ly9kYWdzaHViLmNvbS9PcGVyYXRpb25TYXZ0YS9TYXZ0YURlcHRoL3NyYy9tYWluL05vdGVib29rcy9TYXZ0YURlcHRoX0NvbGFiLmlweW5i) and [data](https://click.convertkit-mail2.com/p9unze2olzb9h3lpn93aq/48hvheh03v6nepbq/aHR0cHM6Ly9kYWdzaHViLmNvbS9uaXJiYXJhemlkYS9DaGVYTmV0L3NyYy85NWM4NmMyOGZmZTE2ZWU2NDY2NTlhYjE4MGY2MWE0MGNmZDAxOTVkL2RhdGFfbGFiZWxpbmcvZGF0YS9pbWFnZXNfMDAxL2ltYWdlcy8wMDAwMDAwN18wMDAucG5n) ([View Highlight](https://read.readwise.io/read/01gqqtqrfv6khqn4rssew6egxf))
- we **timebox each project phase and task** . Time constraints help us focus on the most important tasks and not get bogged down in the details. Timeboxing for machine learning projects can be challenging, because compared to engineering projects, the work is relatively ill-defined. Furthermore, a large part of the work is research and experimentation which unfortunately leads to many a dead end. ([View Highlight](https://read.readwise.io/read/01gqqtrfg1dx4anaqynhk27dya))
- less extreme approach is to set a timebox that is “comfortable yet challenging”. Thus, instead of halving the timebox, we reduce it by 10 - 20% ([View Highlight](https://read.readwise.io/read/01gqqtsqtp19ca4gshzbwzj3p1))
- for greenfield projects that may be hard to scope, we can adopt standard timeboxes. For example, we might allocate two weeks for a literature review, four to eight weeks to build a prototype, and three to six months to implement it in production. ([View Highlight](https://read.readwise.io/read/01gr9w482wtatz1yv09yvztfmg))
