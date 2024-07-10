---
author: [[Stratechery by Ben Thompson]]
title: "Sora, Groq, and Virtual Reality"
date: 2024-02-27
tags: 
- articles
- literature-note
---
![rw-book-cover](https://i0.wp.com/stratechery.com/wp-content/uploads/2018/03/cropped-android-chrome-512x512-1.png?fit=32%2C32&ssl=1)

## Metadata
- Author: [[Stratechery by Ben Thompson]]
- Full Title: Sora, Groq, and Virtual Reality
- URL: https://stratechery.com/2024/sora-groq-and-virtual-reality/

## Highlights
- liked the term Metaverse because it worked like the Internet, but for 3D. It wasn’t about a device or even computing at large, just as the Internet was not about PC nor the client-server model. The Metaverse is a vast and interconnected network of real-time 3D experiences. For passthrough or optical MR to scale, a “3D Internet” is required – which means overhauls to networking infrastructure and protocols, advances in computing infrastructure, and more. This is, perhaps the one final challenge with the term – it describes more of an end state than a transition. ([View Highlight](https://read.readwise.io/read/01hqp14gksqsjevjsf77m2y4fp))
- Soon games included motion as you navigated a sprite through a 2D world; 3D followed, and most of the last 25 years has been about making 3D games ever more realistic. Nearly all of those games, though, are 3D images on 2D screens; virtual reality offers the illusion of being inside the game itself. ([View Highlight](https://read.readwise.io/read/01hqp16hat68ns0xznynbdceyw))
- What is fascinating about DALL-E is that it points to a future where these three trends can be combined. DALL-E, at the end of the day, is ultimately a product of human-generated content, just like its GPT-3 cousin. The latter, of course, is about text, while DALL-E is about images. Notice, though, that progression from text to images; it follows that machine learning-generated video is next. This will likely take several years, of course; video is a much more difficult problem, and responsive 3D environments more difficult yet, but this is a path the industry has trod before. ([View Highlight](https://read.readwise.io/read/01hqp179868gqs41gv3t0n58sq))
- These physics simulations are meant to be the closest possible approximation to reality; if I’m skeptical that a transformer-based architecture can do this simulation, I am by extension skeptical about its ability to “understand and simulate the real world”; this, though, is where I return to Ball’s essay: we are approaching a product worthy of the term “virtual reality.” ([View Highlight](https://read.readwise.io/read/01hqp1ew0jf96m8mg3v44xjk8w))
- In the very long run this points to a metaverse vision that is much less deterministic than your typical video game, yet much richer than what is generated on social media. Imagine environments that are not drawn by artists but rather created by AI: this not only increases the possibilities, but crucially, decreases the costs. ([View Highlight](https://read.readwise.io/read/01hqp1fdzx8sdvdqcc6pnxs45q))
- Groq was founded in 2016 by Jonathan Ross, who created Google’s first Tensor Processing Unit; Ross’s thesis was that chips should take their cue from software-defined networking: instead of specialized hardware for routing data, a software-defined network uses commodity hardware with a software layer to handle the complexity of routing. Indeed, [Groq’s paper](https://wow.groq.com/wp-content/uploads/2023/05/GroqISCAPaper2022_ASoftwareDefinedTensorStreamingMultiprocessorForLargeScaleMachineLearning-1.pdf) explaining their technology is entitled “A Software-defined Tensor Streaming Multiprocessor for Large-scale Machine Learning.” ([View Highlight](https://read.readwise.io/read/01hqp1gecrhrwrvbekend71kx7))
- To that end Groq started with the compiler, the software that translates code into machine language that can be understood by chips; the goal was to be able to reduce machine-learning algorithms into a format that could be executed on dramatically simpler processors that could operate at very high speed, without expensive memory calls and prediction misses that make modern processors relatively slow. ([View Highlight](https://read.readwise.io/read/01hqp1gxb2enqy2avgmrq3y627))
- The end result is that Groq’s chips are purely deterministic: instead of the high-bandwidth memory (HBM) used for modern GPUs or Dynamic Random Access Memory (DRAM) used in computers, both of which need to be refreshed regularly to function (which introduces latency and uncertainty about the location of data at a specific moment in time), Groq uses SRAM — Static Random Access Memory. SRAM stores data in what is called a bistable latching circuitry; this, unlike the transistor/capacitor architecture undergirding DRAM (and by extension, HBM), stores data in a stable state, which means that Groq always knows exactly where every piece of data is at any particular moment in time. This allows the Groq compiler to, in an ideal situation, pre-define every memory call, enabling extremely rapid computation with a relatively simple architecture. ([View Highlight](https://read.readwise.io/read/01hqp1hrq2a7j48vrw5n5a0720))
- It turns out that running inference on transformer-based models is an extremely ideal situation, because the computing itself is extremely deterministic. An LLM like GPT-4 processes text through a series of layers which have a predetermined set of operations, which is perfectly suited to Groq’s compiler. Meanwhile, token-based generation is a purely serial operation: every single token generated depends on knowing the previous token; there is zero parallelism for any one specific answer, which means the speed of token calculation is at an absolute premium. ([View Highlight](https://read.readwise.io/read/01hqp1jnrdefe9p07qs04bscmy))
- This speed-up is so dramatic as to be a step-change in the experience of interacting with an LLM; it also makes it possible to do something like actually communicate with an LLM in real-time, even half-way across the world, [live on TV](https://www.youtube.com/watch?v=pRUddK6sxDg): ([View Highlight](https://read.readwise.io/read/01hqp1k8fydec3kabpahqvnzzk))
- One of the arguments I have made as to [why OpenAI CEO Sam Altman may be exploring hardware](https://stratechery.com/2023/ai-hardware-and-virtual-reality/) is that the closer an AI comes to being human, the more grating and ultimately gating are the little inconveniences that get in the way of actually interacting with said AI. It is one thing to have to walk to your desk to use a PC, or even reach into your pocket for a smartphone: you are, at all times, clearly interacting with a device. Having to open an app or wait for text in the context of a human-like AI is far more painful: it breaks the illusion in a much more profound, and ultimately disappointing, way. Groq suggests a path to keeping the illusion intact. ([View Highlight](https://read.readwise.io/read/01hqp1kyv9p5j903fncfxzmda6))
- Computers are deterministic: if circuit X is open, then the proposition represented by X is true; 1 plus 1 is always 2; clicking “back” on your browser will exit this page. There are, of course, a huge number of abstractions and massive amounts of logic between an individual transistor and any action we might take with a computer — and an effectively infinite number of places for bugs — but the appropriate mental model for a computer is that they do exactly what they are told (indeed, a bug is not the computer making a mistake, but rather a manifestation of the programmer telling the computer to do the wrong thing). ([View Highlight](https://read.readwise.io/read/01hqp1ngtchzhqz2fnweephc2q))
## New highlights added February 28, 2024 at 9:53 AM
- The idea behind *ChatGPT Gets a Computer* is that large language models seem to operate somewhat similarly to the human brain, which is incredible and also imprecise, and just as we need a computer to do exact computations, so does ChatGPT. A regular computer, though, is actually the opposite of Groq: you get deterministic answers from hardware that is, thanks to the design of modern processors and memory, more probabilistic than you might think, running software that assumes the processor will handle endless memory calls and branch prediction. ([View Highlight](https://read.readwise.io/read/01hqp2ew1aj2qhcmnyv6hak7q7))
- Imagine, though, Sora running on Groq (which is absolutely doable): could we have generated videos in real-time? Even if we could not, we are certainly much closer than you might have expected. And where, you might ask, would we consume those videos? How about on a head-mounted display like the [Apple Vision Pro](https://stratechery.com/2024/the-apple-vision-pro/) or Meta Quest? Virtual reality (my new definition) for virtual reality (the old definition). ([View Highlight](https://read.readwise.io/read/01hqp2g4yv55ehw8xpk51vkztd))
- The iPhone didn’t happen in a vacuum. Apple [needed to learn to make low-power devices with the iPod](https://stratechery.com/2022/an-interview-with-father-of-the-ipod-tony-fadell/); flash memory needed to become viable at an accessible price point; Samsung needed to make a good enough processor; 3G networking needed to be rolled out; the iTunes Music Store needed to provide the foundation for the App Store; Unity needed to be [on a misguided mission to build a game engine for the Mac](https://stratechery.com/2023/unitys-business-model-change-unitys-strategy-unity-leadership-questions/). Everything, though, came together in 2007, and the mobile era exploded. ([View Highlight](https://read.readwise.io/read/01hqp2h8c24r8rnm02fw9y23by))
- Three years ago [Facebook changed its name to Meta](https://stratechery.com/2021/meta/), signaling the start of the Metaverse era that quickly fizzled into a punchline; it looked like the company was [pulling too many technologies forward too quickly](https://stratechery.com/2022/musk-makes-twitter-bid-facebook-ar-plans-an-interview-with-adam-mosseri-about-creators-blockchains-and-tiktok/). Apple, though, might have better timing: it’s notable that the Vision Pro and Sora launched in the same month, just as Groq started to show that real-time inferencing might be more attainable than we think. TSMC, meanwhile, is pushing to 2nm, and Intel is making [a credible bid to join them](https://stratechery.com/2024/intels-humbling/), just as the demand for high performance chips is sky-rocketing thanks to large language models generally. ([View Highlight](https://read.readwise.io/read/01hqp2j20a4hbc46cvmr8r72z7))
- I don’t, for the record, think we are at an iPhone moment when it comes to virtual reality, by which I mean the moment where multiple technological innovations intersect in a perfect product. What is exciting, though, is that a lot of the pieces — unlike three years ago — are in sight. Sora might not be good enough, but it will get better; Groq might not be cheap enough or fast enough, but it, and whatever other competitors arise, will progress on both vectors. And Meta and Apple themselves have not, in my estimation, gotten the hardware quite right. You can, however, see a path from here to there on all fronts. ([View Highlight](https://read.readwise.io/read/01hqp2nywwga89szzdrrk98q9d))
- The big question — one that we are only now coming in reach of answering — is if virtual reality will, for a meaningful number of people, be a better reality. ([View Highlight](https://read.readwise.io/read/01hqp2pqmsh6jjahk9p1n77x6n))