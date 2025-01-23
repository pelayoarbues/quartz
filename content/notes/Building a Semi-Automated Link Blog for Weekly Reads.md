---
title: Building a Semi-Automated Link Blog for Weekly Reads
date: 2025-01-21
tags:
  - link-blog
  - permanent-note
---
---

![Link Blogger logo](notes/attachments/link-blogger-logo.webp)

I have always enjoyed sharing my readings. Back when I was more active on Twitter, I used to share almost every post I came across. Since transitioning to [Bluesky](notes/Bluesky%20feels%20like%20a%20breath%20of%20fresh%20air%20for%20data%20folks.md) as a replacement, I’ve continued sharing links there, though [I haven’t been particularly active on social media lately](notes/Wrapped%20list%20of%20Books%20I%20read%20in%202024.md). 

While I’ve reduced my activity on social media, [Readwise’s Reader](notes/My%20workflow%20for%20my%20public%20second%20brain.md) has been instrumental in helping me stay organized and focused. It’s shifted my attention toward reading and [writing on my own platform](notes/POSSE%20against%20Platform%20Nudges%20on%20Content%20Creation.md) rather than sharing on social networks.

For over a year now, I’ve made it a habit to share a curated list of links with my team every Friday, readings I believe they might find valuable, usually accompanied by a very short summary generated with GPT via Readwise’s Ghostreader. Fortunately, some of my colleagues have adopted this practice too, turning Fridays into a sort of collective digest where we exchange links worth highlighting. These digests have become a great way to stay informed as a group.

Initially, this process was manageable since I was only sharing a handful of links each week. All I had to do was copy and paste the links from the _Recently Highlighted_ tab on Reader, along with the short AI-powered summaries and a few personal comments. But as I’ve been diving deeper into various topics lately, curating these lists has started to feel a bit overwhelming. While searching for ways to streamline this process, I came across [Simon Willison’s approach to running a link blog](https://simonwillison.net/2024/Dec/22/link-blog/). Inspired by his setup, I decided to take things a step further and create my own #link-blog here on this site.

As noted in my [AI usage statement](mocs/ai.md), I use AI tools to help improve my English writing. Now, I’m incorporating AI into this new project to automatically summarize my recent readings. I hope this will make it easier for you to discover insightful reads while allowing me to share them more efficiently.

To make this happen, I developed [Link Blogger](https://github.com/pelayoarbues/link-blogger) a small Python program that  uses a Large Language Model to classify articles by topic and summarize the highlights I’ve underlined, conveniently wrapping everything into a Markdown draft file. The input articles are documents synced from Readwise directly to my laptop.

For now, the process remains semi-automated. Every Friday, I review the draft generated by the program, add personal notes where needed, and then share it with all of you. You’ll find these posts by following the #link-blog tag.