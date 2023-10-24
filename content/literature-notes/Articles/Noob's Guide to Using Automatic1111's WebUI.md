---
author: [[reddit.com]]
title: "Noob&#39;s Guide to Using Automatic1111&#39;s WebUI"
date: 2023-10-04
tags: 
- articles
- literature-note
---
![rw-book-cover](https://external-preview.redd.it/6jfLFLGrv0tqHGcFPRSZ-b5cOzSdb57pftUvJ3YPkYU.jpg?auto=webp&v=enabled&s=d43280d51781266bdeaa8dee5dcc0297787a6a49)

## Metadata
- Author: [[reddit.com]]
- Full Title: Noob's Guide to Using Automatic1111's WebUI
- URL: https://www.reddit.com/r/StableDiffusion/comments/yz2tbo/noobs_guide_to_using_automatic1111s_webui/

## Highlights
- There's a few things you can add to your launch script to make things a bit more efficient for budget/cheap computers. These are `--precision full --no-half` which appear to enhance compatbility, and `--medvram --opt-split-attention` which make it easier to run on weaker machines. You can also use --lowvram instead of --medvram if you're still having issues. ([View Highlight](https://read.readwise.io/read/01hbwz0611fb048tp1ngva28wf))
- At the top of the page you should see "Stable Diffusion Checkpoint". This is a drop down for your models stored in the "models/Stable-Diffusion" folder of your install. Use the "refresh" button next to the drop-down if you aren't seeing a newly added model. Models are the "database" and "brain" of the AI. They contain what the AI knows. Different models will have the AI draw differently and know about different things. You can train these using "dreambooth".
  Below that you have two fields, the first is your "positive prompt" and the second your "negative prompt". The positive prompt is what you want the AI to draw, and the negative prompt is what you want it to avoid. You *can* use plain natural english to write out a prompt such as "a photo of a woman". However, the AI doesn't "think" like that. Instead, your words are converted into "tags" or "tokens", and the AI understands each word as such. For example, "woman" is one, and so is "photo". In this sense, you can write your prompt as a list of tags. So instead of `a photo of a woman` you can use `photo, woman` to get a similar result. If you've ever used a booru site, or some other site that has tagged images, it works remarkably similar. Words like "a", "the", etc. can be comfortably ignored. ([View Highlight](https://read.readwise.io/read/01hbwz1g1pz9f1jzxqrzt11h11))
- You can also increase emphasis on particular words, phrases, etc. You do this by putting them in parenthesis. `photo, (woman)` will put more emphasis on the image being of a woman. Likewise you can do `(woman:1.2)` or some other number, to specify the exact amount. Or add extra parenthesis to add emphasis without that. IE `((woman))` is more emphasized than `(woman)`. You can decrease emphasis by using [] such as `[woman]` or `(woman:0.8)` (numbers lower than 1). Words that are earlier in the prompt are automatically emphasized more. So word order is important. Some models understand "words" that are more like tags. This is especially true of anime-focused models trained on the booru sites. For example "1girl" is not a word in english, but it's a tag used on the sites, and thus will behave accordingly, however it will not work in the base SD model (or it might, but with undesired results). Certain models will provide a "prompt" that helps direct the style/character. Be sure to use them if you want to replicate the results. ([View Highlight](https://read.readwise.io/read/01hbwz2d9gapn99tfxzqqpd9et))
- "Sampling Steps" is how much "work" you want the AI to put into the the generated picture. The AI makes several "passes" or "drafts" and iteratively changes/improves the picture to try and make your prompt. At something like 1 or 2 steps you're just going to get a blurry mess (as if the foundational paint was just laid). Whereas higher step counts will be like continually adding more and more paint, which may not really create much of an impact if it's too high. Likewise, each "step" increases the time it takes to create the image. I found that 20 steps is a good starting and default amount. ([View Highlight](https://read.readwise.io/read/01hbwz3nrs90mpbq9tkjxhv6bp))
- Sampling Method" is essentially which AI artist you want to create the picture. Euler A is the default and is honestly decent at 20 steps. Different methods can create coherent pictures with fewer or more steps, and will do so differently. I find that the method isn't super important as many still give great results, but I tend to use Euler A, LMS, or DPM++ 2M Karras. ([View Highlight](https://read.readwise.io/read/01hbwz3v7asvnbm6e3425v25ny))
- The three tick boxes of "restore faces", "tiling", and "high res fix" are extra things you can tell the AI to do. "restore faces" runs it through a face generator to help fix up faces (I tend to not use this though). Tiling makes the image tile (be able to seamlessly repeat). High res fix I'm not quite sure of, but it makes the image run through a second pass. For regular image generating, I keep these off. ([View Highlight](https://read.readwise.io/read/01hbwz4a5ktt1g8d1saj32w3j0))