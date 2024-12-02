---
author: [[@Shaughnessy119 on Twitter]]
title: "Stephen Wolfram of Wolfr..."
tags: 
- tweets
- literature-note
---
# Stephen Wolfram of Wolfr...

![rw-book-cover](https://pbs.twimg.com/profile_images/1600315143367311360/q_sztDhc.jpg)

## Metadata
- Author: [[@Shaughnessy119 on Twitter]]
- Full Title: Stephen Wolfram of Wolfr...
- Category: #tweets
- URL: https://twitter.com/Shaughnessy119/status/1662913924159930368

## Highlights
- Stephen Wolfram of Wolfram Alpha wrote the absolute best post on ChatGPT and Large Language Models.
  It took me about two hours to read, but significantly increased my understanding of what's going on under the hood of ChatGPT.
  A few of my favorite takeaways (helps my process) 
  ![](https://pbs.twimg.com/media/FxPbZi1aAAApXa6.png) ([View Tweet](https://twitter.com/Shaughnessy119/status/1662913924159930368))
- The goal of a large language model is to reasonably continue the text it already has
  ChatGPT's LLM estimates these probabilities
  Temperature is a parameter that determines how often lower ranked words are used, adding randomness.
  LLM's are trained on vast amounts of human text 
  ![](https://pbs.twimg.com/media/FxPbZ8PagAIIwxN.png) 
  ![](https://pbs.twimg.com/media/FxPbaLTaUAI98C-.png) ([View Tweet](https://twitter.com/Shaughnessy119/status/1662913935086080000))
- Where to these probabilities come from?
  ChatGPT is a model that lets people estimate the probabilities which sequences of words should occur.
  Stephen adds an interesting walk through demonstrating the probability of how often letters occur, and then pairs of letters and beyond 
  ![](https://pbs.twimg.com/media/FxPbakFagAEmhD-.png) ([View Tweet](https://twitter.com/Shaughnessy119/status/1662913942228979713))
- Neutral Nets are similar to a human brain
  The brain has 100B neurons and are connected to ~1,000 other Neurons
  A neuron pulses depending on what pulses it gets from other Neurons all with their own connections.
  This contributes to different weights in the model. Viola! ([View Tweet](https://twitter.com/Shaughnessy119/status/1662913945240469504))
- Neural Net Explanation
  - Neurons arranged in layers
  - Each Neuron has a weight (significance)
  - ML is first used to find the weights
  - Neuron evaluates numerical function
  - Input is fed and neurons at each layer evaluate and feeds results to next layer
  - End result is reached 
  ![](https://pbs.twimg.com/media/FxPbbJBaMAE-jPj.png) ([View Tweet](https://twitter.com/Shaughnessy119/status/1662913952140120065))
- Larger networks do better at landing on results.
  In the below image the goal is to take in a point and recognize it in one of the three regions.
  I laughed when Stephen said at the boundaries it has trouble "making up its mind". Much human.
  Unsure results could be dangerous 
  ![](https://pbs.twimg.com/media/FxPbbjmaIAAjpW-.png) ([View Tweet](https://twitter.com/Shaughnessy119/status/1662913959014596609))
- Training Neural Nets
  The goal is to feed a zillion examples, and find weights that reproduce the examples.
  Everytime an example is used, the weights are adjusted throughout the model.
  Training is really expensive and computationally intensive. 
  ![](https://pbs.twimg.com/media/FxPbb9_aEAE2Wxf.jpg) ([View Tweet](https://twitter.com/Shaughnessy119/status/1662913966526574593))
- Now how are the weights adjusted?
  Stephen describes that the model uses a Loss Function.
  The goal of adjusting the weights is to to reduce the loss function, or how far away your output is from the intended result based upon the examples.
  More data, lower loss function 
  ![](https://pbs.twimg.com/media/FxPbcZvagAERczZ.png) ([View Tweet](https://twitter.com/Shaughnessy119/status/1662913974990667776))
- One of the most counterintuitive takeaways that with Neural Nets it's easier to solve more complicated problems than simpler ones.
  That's good too since I'm dumb and need help with the complicated problems in life.
  I'll let Stephen take it from here: 
  ![](https://pbs.twimg.com/media/FxPbc4eaQAE8IoG.png) ([View Tweet](https://twitter.com/Shaughnessy119/status/1662913982053904384))
- ChatGPT has an easier time training since it can conduct "Unsupervised Learning"
  - ChatGPT gets text (masks end)
  - Use probabilities to get the end of the sentence
  - Use this as a training input
  - Output is the complete piece of text
  TLDR it's easier to get examples to train ([View Tweet](https://twitter.com/Shaughnessy119/status/1662913984943775744))
- Summing this all up, Stephen shares an image showing the training process for a neural net and how the loss function should decrease over time.
  If the loss eventually streamlines, yay you have a solid model
  If it not you can't rely on it and it's time to change the architecture 
  ![](https://pbs.twimg.com/media/FxPbdb5aAAABcEF.png) ([View Tweet](https://twitter.com/Shaughnessy119/status/1662913991180685312))
- ChatGPT is often extrapolated as a path to Terminators
  Stephen counters that the magic of LLMs for writing really isn't that hard.
  We're not closer to terminators, writing essays just isn't as hard as we think.
  @stephen_wolfram plz share more on NN's replacing humans (pic 2) 
  ![](https://pbs.twimg.com/media/FxPbd04acAA-zac.png) 
  ![](https://pbs.twimg.com/media/FxPbeEkacAEwdTH.png) ([View Tweet](https://twitter.com/Shaughnessy119/status/1662914003235139584))
- Embeddings
  Embeddings are laying out words, represented by numbers, to those they are commonly associated with
  Probabilities are found using vast amounts of text
  Embeddings give a more natural feel to ChatGPT since words that are commonly associated with each other can be used 
  ![](https://pbs.twimg.com/media/FxPbeh-aIAAvaMt.png) ([View Tweet](https://twitter.com/Shaughnessy119/status/1662914010440957954))
- Onto ChatGPT!
  ChatGPT+ is a giant Neural Net with 100 Trillion Parameters (GPT3 had 175B) focused on language.
  That 1,000x the parameters of the brain. Woof.
  The most important feature is the Transformer https://t.co/D9tpDFhkjO ([View Tweet](https://twitter.com/Shaughnessy119/status/1662914026702278657))
- An interesting side note for the Crypto audience.
  Crypto's own @ilblackdragon, the co-founder of @NEARProtocol, is one of the authors on the original Transformers Paper
  https://t.co/3QqERbv32i
  First let's recap ChatGPT's process: ([View Tweet](https://twitter.com/Shaughnessy119/status/1662914029747331072))
- ChatGPT's Process
  - Takes text
  - Finds embeddings (numbers to represent text)
  - Processes (values go through layers of the NN)
  - New embedding produced (new number array)
  - Takes array and generates 50,000 values for next possible tokens
  - Highest prob produces text (I think) ([View Tweet](https://twitter.com/Shaughnessy119/status/1662914032419115010))
- Transformers are a breakthrough for LLMs.
  An analogy is they allow the model to understand the context of words and the relationship between words that are far apart
  Transformers can read all text at once vs one at a time so are much more efficient and scalable
  Thanks ChatGPT! 
  ![](https://pbs.twimg.com/media/FxPbgOPakAAegCl.jpg) ([View Tweet](https://twitter.com/Shaughnessy119/status/1662914039717187584))
- Meaning Space
  Stephen shares that in ChatGPT, text is represented by an array of numbers in a meaning space.
  He goes on to describe that the trajectory of what words come next is far from a mathematical or physics like law we can rest our hats on. 
  ![](https://pbs.twimg.com/media/FxPbgrLacAE6GQ4.png) 
  ![](https://pbs.twimg.com/media/FxPbg_BaEAAf9-s.png) ([View Tweet](https://twitter.com/Shaughnessy119/status/1662914052266557440))
- So is ChatGPT similar to a human brain?
  His conclusions:
  - The neural net architecture may be similar
  - Training of LLMs way less efficient vs human brain
  - ChatGPT has no loops to go back and recompute data like humans can which severely limits its computational capability ([View Tweet](https://twitter.com/Shaughnessy119/status/1662914055320006656))
- I am not an AI researcher but the post made me realize LLM's are nowhere near the AGI or Terminator level AI intelligence some fear
  Of course it's on the path, but LLM's are probabilistic models focused on continuing sentences.
  They are really good at it, but not AGI (yet) https://t.co/U1iZjYDDW3 ([View Tweet](https://twitter.com/Shaughnessy119/status/1662914067198259200))
- I think it's incredibly cool that a gigabrain like @stephen_wolfram would open source his thinking on ChatGPT
  This has been the single best resource I've found so far on learning about @OpenAI's ChatGPT, LLMs and Neural Nets
  Disc. I def got things wrong
  https://t.co/79I7YQaVzN ([View Tweet](https://twitter.com/Shaughnessy119/status/1662914070062956544))
- Also @stephen_wolfram if you're ever interested in a long form podcast to walk through your thoughts, we'd love to host you on @Delphi_Digital's podcast! ([View Tweet](https://twitter.com/Shaughnessy119/status/1662914072759918592))
