---
title: Why You Should Dive into Data Labeling Yourself
date: 2024-09-02
tags:
  - permanent-note
  - data
  - labeling
---

![](notes/attachments/minor-threat-cover.png)

Recently, my team has been engaged in projects that require data labeling, a task often perceived as mundane. However, I willingly take on this role for several reasons.

Firstly, my schedule is typically filled with consecutive meetings, leaving me with brief 15 to 30-minute intervals in between. Instead of wasting this time, I use it to take notes from the previous meeting or prepare for the next one. More often than not though, I utilize these mini slots to decompress and clear my [headspace](notes/Headspace%20for%20managers.md) with tasks that don't demand intense mental effort - such as data labeling. 

I also highly value my team's time. Their focus should be solely directed towards solving the project at hand. If I can lessen their workload or remove obstacles by taking up tasks like these, I consider it time well spent.

However, the main reason that propels me towards hand-labeling data is the abundance of knowledge one can acquire from it. It provides an estimate of how difficult a problem might be for a human to solve. Having led numerous Data Science projects, I've developed an intuitive understanding of how human difficulty translates into challenges for an automated system.

Furthermore, labeling also helps identify those tricky corner cases - the outliers that can potentially make or break your project's success. While analyzing a project and estimating its potential risks and complexities, it's easy to overlook these corner cases and focus on the average inference call instead. But remember - the devil lies in the details! By annotating data yourself, you gain a clear understanding of how ambiguous these corner cases can be if they overlap between different classes and what types of corner cases you might encounter in real-world scenarios (production). 

Now let's tackle another aspect: convincing your team about the significance of data labeling. They may agree or disagree with you but seeing you dive headfirst into the task is likely to encourage them to follow suit. The question then arises - how many instances should you label yourself before delegating the task to a labeling team? There's no one-size-fits-all answer as it largely depends on the problem at hand. My rule of thumb is to label until the task starts feeling monotonous. For instance, in one of our recent projects involving a text classifier, I tagged over 10k instances but discovered that I stopped gaining new insights after about 7k text bodies.

So, the next time you or your Data Science team embarks on a new project, don't hesitate to get your hands dirty with data labeling.

---

PS: A little tip from my personal experience - listening to Minor Threat, or any other classic punk bands while labeling data provides an extra boost!