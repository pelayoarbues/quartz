---
author: [[Simon Willison's Weblog]]
title: "Qwen2-Vl: To See the World More Clearly"
date: 2024-09-08
tags: 
- articles
- literature-note
---
![rw-book-cover](https://simonwillison.net/favicon.ico)

## Metadata
- Author: [[Simon Willison's Weblog]]
- Full Title: Qwen2-Vl: To See the World More Clearly
- URL: https://simonwillison.net/2024/Sep/4/qwen2-vl/#atom-everything

## Highlights
- . Qwen is Alibaba Cloud's organization training LLMs. Their latest model is Qwen2-VL - a vision LLM - and it's getting some really positive buzz. Here's [a r/LocalLLaMA thread](https://www.reddit.com/r/LocalLLaMA/comments/1f4q0ag/qwen2_vl_7b_far_more_impressive_than_i_thought/) about the model. ([View Highlight](https://read.readwise.io/read/01j74e44b07ngwxs7hx1nktgym))
- The original Qwen models were licensed under their custom [Tongyi Qianwen license](https://huggingface.co/Qwen/Qwen2-72B/blob/main/LICENSE), but [starting with Qwen2](https://web.archive.org/web/20240901122941/https://qwenlm.github.io/blog/qwen2/) on June 7th 2024 they switched to Apache 2.0, at least for their smaller models:
  > While Qwen2-72B as well as its instruction-tuned models still uses the original Qianwen License, all other models, including Qwen2-0.5B, Qwen2-1.5B, Qwen2-7B, and Qwen2-57B-A14B, turn to adopt Apache 2.0 ([View Highlight](https://read.readwise.io/read/01j74e4enh74nyt0zd1g59w87m))
- Here's where things get odd: both of the above links are to the Internet Archive, because at some point in the last 24 hours the [Qwen GitHub organization](https://github.com/qwenlm), and their GitHub pages [hosted blog](https://qwenlm.github.io), both disappeared and are now 404s pages. I [asked on Twitter](https://twitter.com/simonw/status/1831392419629425098) but nobody seems to know what's happened to them. ([View Highlight](https://read.readwise.io/read/01j74e4rp2tnrgeegqpvss4b6k))
- Inspired [by Dylan Freedman](https://twitter.com/dylfreed/status/1831075759747723709) I tried the model using [GanymedeNil/Qwen2-VL-7B](https://huggingface.co/spaces/GanymedeNil/Qwen2-VL-7B) on Hugging Face Spaces, and found that it was exceptionally good at extracting text from unruly handwriting: ([View Highlight](https://read.readwise.io/read/01j74e50w7tejtkn7zr2vrt3bb))
- The model apparently runs great on NVIDIA GPUs, and *very slowly* using the MPS PyTorch backend on Apple Silicon. Qwen [previously released MLX builds](https://huggingface.co/Qwen/Qwen2-7B-Instruct-MLX) of their non-vision Qwen2 models, so hopefully there will be an Apple Silicon optimized MLX model for Qwen2-VL soon as well. ([View Highlight](https://read.readwise.io/read/01j74e5fezhqpmvv72t0zkkv0c))
