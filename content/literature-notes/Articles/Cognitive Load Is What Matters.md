---
author: [[Simon Willison's Weblog]]
title: "Cognitive Load Is What Matters"
date: 2025-01-09
tags: 
- articles
- literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison's Weblog]]
- Full Title: Cognitive Load Is What Matters
- URL: https://simonwillison.net/2024/Dec/26/cognitive-load-is-what-matters/#atom-everything

## Highlights
- This all rings very true to me. I judge the quality of a piece of code by how easy it is to change, and anything that causes me to take on more cognitive load - unraveling a class hierarchy, reading though dozens of tiny methods - reduces the quality of the code by that metric.
  Lots of accumulated snippets of wisdom in this one.
  > Mantras like "methods should be shorter than 15 lines of code" or "classes should be small" turned out to be somewhat wrong. ([View Highlight](https://read.readwise.io/read/01jh5mvn2g3v89385smnwjqkad))


---
author: [[Artem Zakirullin]]
title: "Cognitive load is what matters"
date: 2025-01-09
tags: 
- articles
- literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_691412/cat.webp)

## Metadata
- Author: [[Artem Zakirullin]]
- Full Title: Cognitive load is what matters
- URL: https://minds.md/zakirullin/cognitive

## Highlights
- There are so many buzzwords and best practices out there, but most of them have failed. We need something more fundamental, something that can't be wrong.
  Sometimes we feel confusion going through the code. Confusion costs time and money. Confusion is caused by high *cognitive load*. It's not some fancy abstract concept, but rather **a fundamental human constraint**. It's not imagined, it's there and we can feel it. ([View Highlight](https://read.readwise.io/read/01jh5mwgqv0bvax96vsr4czfe2))
- > Cognitive load is how much a developer needs to think in order to complete a task.
  When reading code, you put things like values of variables, control flow logic and call sequences into your head. The average person can hold roughly [four such chunks](https://github.com/zakirullin/cognitive-load/issues/16) in working memory. Once the cognitive load reaches this threshold, it becomes much harder to understand things. ([View Highlight](https://read.readwise.io/read/01jh5mx5py3sd7haraskdaasfn))
- *Let's say we have been asked to make some fixes to a completely unfamiliar project. We were told that a really smart developer had contributed to it. Lots of cool architectures, fancy libraries and trendy technologies were used. In other words, **the author had created a high cognitive load for us.***
  ![Cognitive Load](https://github.com/zakirullin/cognitive-load/blob/main/img/cognitiveloadv6paper.png?raw=true)
  We should reduce the cognitive load in our projects as much as possible. ([View Highlight](https://read.readwise.io/read/01jh5mxm8mt0psfjzbt8na808p))
- [Types of cognitive load](https://minds.md/zakirullin/cognitive/#types)
  **Intrinsic** - caused by the inherent difficulty of a task. It can't be reduced, it's at the very heart of software development.
  **Extraneous** - created by the way the information is presented. Caused by factors not directly relevant to the task, such as smart author's quirks. Can be greatly reduced. We will focus on this type of cognitive load.
  ![Smart author](https://github.com/zakirullin/cognitive-load/blob/main/img/smartauthorv15paperthanksmari.png?raw=true) ([View Highlight](https://read.readwise.io/read/01jh5my2vc5vqkqjv7p8dz41xg))
- Prefer composition over inheritance. We won't go into detail - there's [plenty of material](https://www.youtube.com/watch?v=hxGOiiR9ZKg) out there. ([View Highlight](https://read.readwise.io/read/01jh5mzg6tvk4mtad4tdm0bdc9))
- Mantras like "methods should be shorter than 15 lines of code" or "classes should be small" turned out to be somewhat wrong.
  **Deep module** - simple interface, complex functionality 
  **Shallow module** - interface is relatively complex to the small functionality it provides
  ![Deep module](https://github.com/zakirullin/cognitive-load/blob/main/img/deepmodulev8paper.png?raw=true) ([View Highlight](https://read.readwise.io/read/01jh5mzzctdwgzg832h71z51tz))
- Having too many shallow modules can make it difficult to understand the project. **Not only do we have to keep in mind each module responsibilities, but also all their interactions**. To understand the purpose of a shallow module, we first need to look at the functionality of all the related modules. `🤯`
  > Information hiding is paramount, and we don't hide as much complexity in shallow modules. ([View Highlight](https://read.readwise.io/read/01jh5n09qrhs3aw3v92zyy3awx))
- [Too many shallow microservices](https://minds.md/zakirullin/cognitive/#shallow-microservices)
  This shallow-deep module principle is scale-agnostic, and we can apply it to microservices architecture. Too many shallow microservices won't do any good - the industry is heading towards somewhat "macroservices", i.e., services that are not so shallow (=deep). ([View Highlight](https://read.readwise.io/read/01jh5n110hnkkbem9qnr3bf5v5))
- Is this the right way to approach the uncertainty of a new system? It's enormously difficult to elicit the right logical boundaries in the beginning. The key is to make decisions as late as you can responsibly wait, because that is when you have the most information on which to base the decision. By introducing a network layer up front, we make our design decisions hard to revert right from the start. The team's only justification was: "The FAANG companies proved microservices architecture to be effective". *Hello, you got to stop dreaming big.* ([View Highlight](https://read.readwise.io/read/01jh5n1drmm653m6ybb2v33h81))
- A well-crafted monolith with truly isolated modules is often much more flexible than a bunch of microservices. It also requires far less cognitive effort to maintain. It's only when the need for separate deployments becomes crucial, such as scaling the development team, that you should consider adding a network layer between the modules, future microservices. ([View Highlight](https://read.readwise.io/read/01jh5n1jzmn5w42141v9ymsscq))
- [Feature-rich languages](https://minds.md/zakirullin/cognitive/#lang)
  We feel excited when new features got released in our favourite language. We spend some time learning these features, we build code upon them.
  If there are lots of features, we may spend half an hour playing with a few lines of code, to use one or another feature. And it's kind of a waste of time. But what's worse, **when you come back later, you would have to recreate that thought process!**
  **You not only have to understand this complicated program, you have to understand why a programmer decided this was the way to approach a problem from the features that are available.** `🤯` ([View Highlight](https://read.readwise.io/read/01jh5n1z4wcxzegxye40qznwq5))
- Reduce cognitive load by limiting the number of choices. ([View Highlight](https://read.readwise.io/read/01jh5n20sm21nz6mq51tfqvbar))
- Abstraction is supposed to hide complexity, here it just adds [indirection](https://fhur.me/posts/2024/thats-not-an-abstraction). Jumping from call to call to read along and figure out what goes wrong and what is missing is a vital requirement to quickly solve a problem. With this architecture’s layer uncoupling it requires an exponential factor of extra, often disjointed, traces to get to the point where the failure occurs. Every such trace takes space in our limited working memory. `🤯` ([View Highlight](https://read.readwise.io/read/01jh5n2qwbmqsfn2pxz0jys4h6))
- This architecture was something that made intuitive sense at first, but every time we tried applying it to projects it made a lot more harm than good. In the end, we gave it all up in favour of the good old dependency inversion principle. **No port/adapter terms to learn, no unnecessary layers of horizontal abstractions, no extraneous cognitive load.** ([View Highlight](https://read.readwise.io/read/01jh5n30kdsxtm9t5x46bj438y))
- If you think that such layering will allow you to quickly replace a database or other dependencies, you're mistaken. Changing the storage causes lots of problems, and believe us, having some abstractions for the data access layer is the least of your worries. At best, abstractions can save somewhat 10% of your migration time (if any), the real pain is in data model incompatibilities, communication protocols, distributed systems challenges, and [implicit interfaces](https://www.hyrumslaw.com). ([View Highlight](https://read.readwise.io/read/01jh5n37m96rgqhbnkekjadfjh))
- [Cognitive load in familiar projects](https://minds.md/zakirullin/cognitive/#familiar)
  > The problem is that **familiarity is not the same as simplicity**. They *feel* the same — that same ease of moving through a space without much mental effort — but for very different reasons. Every “clever” (read: “self-indulgent”) and non-idiomatic trick you use incurs a learning penalty for everyone else. Once they have done that learning, then they will find working with the code less difficult. So it is hard to recognise how to simplify code that you are already familiar with. This is why I try to get “the new kid” to critique the code before they get too institutionalised!
  > 
  > It is likely that the previous author(s) created this huge mess one tiny increment at a time, not all at once. So you are the first person who has ever had to try to make sense of it all at once.
  > 
  > In my class I describe a sprawling SQL stored procedure we were looking at one day, with hundreds of lines of conditionals in a huge WHERE clause. Someone asked how anyone could have let it get this bad. I told them: “When there are only 2 or 3 conditionals, adding another one doesn’t make any difference. By the time there are 20 or 30 conditionals, adding another one doesn’t make any difference!”
  > 
  > There is no “simplifying force” acting on the code base other than deliberate choices that you make. Simplifying takes effort, and people are too often in a hurry.
  > 
  > *Thanks to [Dan North](https://dannorth.net) for his comment*.
  If you've internalized the mental models of the project into your long-term memory, you won't experience a high cognitive load.
  ![Mental Models](https://github.com/zakirullin/cognitive-load/blob/main/img/mentalmodelsv15paper.png?raw=true)
  The more mental models there are to learn, the longer it takes for a new developer to deliver value.
  Once you onboard new people on your project, try to measure the amount of confusion they have (pair programming may help). If they're confused for more than ~40 minutes in a row - you've got things to improve in your code.
  If you keep the cognitive load low, people can contribute to your codebase within the first few hours of joining your company. ([View Highlight](https://read.readwise.io/read/01jh5n45yfgh50xrhf9gyd1m5e))
- [Conclusion](https://minds.md/zakirullin/cognitive/#conclusion)
  Imagine for a moment that what we inferred in the second chapter isn’t actually true. If that’s the case, then the conclusion we just negated, along with the conclusions in the previous chapter that we had accepted as valid, might not be correct either. `🤯`
  Do you feel it? Not only do you have to jump all over the article to get the meaning (shallow modules!), but the paragraph in general is difficult to understand. We have just created an unnecessary cognitive load in your head. **Do not do this to your colleagues.**
  ![Smart author](https://github.com/zakirullin/cognitive-load/blob/main/img/smartauthorv15paperthanksmari.png?raw=true) ([View Highlight](https://read.readwise.io/read/01jh5n4gbntqd51mz18mxqne42))


