---
author: [[@MajmudarAdam on Twitter]]
title: "I&#39;ve Spent the Past ~3 W..."
date: 2024-05-25
tags: 
- tweets
- literature-note
---
![rw-book-cover](https://pbs.twimg.com/profile_images/1760836465742012416/tIAcxSix.jpg)

## Metadata
- Author: [[@MajmudarAdam on Twitter]]
- Full Title: I've Spent the Past ~3 W...
- URL: https://twitter.com/MajmudarAdam/status/1794190796411027791

## Highlights
- I've spent the past ~3 weeks going through the entire history of deep learning and reimplementing all the core breakthroughs.
  It has completely changed my beliefs about deep learning progress and where we're headed.
  Progress tracker in thread (all resources at the end) 👇
  ![](https://pbs.twimg.com/media/GOY9Th7a4AAPpR6.png) ([View Tweet](https://twitter.com/MajmudarAdam/status/1794190796411027791))
- Step #1 ✅: Learning the fundamentals of deep learning from papers
  I wanted to learn about the fundamentals of deep learning directly from the source of progress: the critical papers that have gotten us from simple feed-forward networks to models like GPT-4o.
  I suspected that this would show me broader trends and intuitions that aren't obvious when learning about AI through popular courses, textbooks, or public narratives.
  This approach turned out to be critical.
  I focused on learning about the following trail of breakthroughs that led us to where we are today:
  (the repo later in this thread includes my in-depth explanations of core intuitions, math, and implementations (when relevant) for each of these, for anyone curious)
  Early Neural Networks & CNNs
  > Backpropagation - The foundational algorithm that enabled deep-learning and gradient descent
  > LeNet - An early convolutional neural net that showed signs of beating traditional ML models at digit recognition
  > AlexNet - Completely changed the history of deep learning and brought new focus onto the field by beating the state-of-the-art for image classification. This is where the broader community started taking deep learning seriously.
  > U-Net - An effective image-to-image architecture based on the CNN that's now used in all diffusion models
  Optimization & Regularization
  > Weight Decay - The earliest improvement to make models generalize by penalizing them for large weights
  > ReLU - Game-changing activation function that enabled sparse representations in neural networks for the first time
  > Residuals - Solved the vanishing and exploding gradient problems, enabling deeper networks
  > Dropout - Solved regularization by forcing neurons to learn robust representations (via blocking the effects of random neurons during training)
  > BatchNorm - Solved the "internal covariate shift" problem which also enabled deeper networks
  > LayerNorm - Made BatchNorm usable for sequential models
  > GELU - A modern activation function merging the value of ReLU & Dropout and used in most models today
  > Adam - Adding momentum to stochastic gradient-descent to make models converge faster
  Sequence Modeling
  > RNN - Introduced the idea of sequence-modeling, which started the path that led us to the transformer
  > LSTM - Made RNNs actually useful by introduced "gated" memory to learn long-term relationships between inputs
  > The Forget Gate - Added the ability for LSTMs to "learn to forget" which made them capable of processing long sequences of text
  > Word2Vec (& Phrase2Vec) - Introduced the first popular text embedding models, starting the trend that led us to the creation of CLIP
  > Encoder-Decoder & Seq2Seq - Powerful text models built on RNNs and LSTMs (for machine translation) that directly set the stage for the transformer
  > Attention - The core inductive bias behind transformers. It was initially built on-top of RNN/LSTM based models. Hence, "attention is all you need" showed that you could remove everything else
  > Mixture of Experts - The first effective implementation of "conditional computation" for neural networks that led to one of the advancements behind GPT-4
  Transformers
  > Transformer - The critical paper that completely changed the history of deep learning again, introducing an architecture capable of learning complex relationships & (importantly) highly parallelizable in training.
  > BERT (& RoBERTa) - The first model to successfully execute the pre-training & fine-tuning paradigm, showing us what transformers were capable of
  > T5 - Introduced the idea of the general "text-to-text" learning task that now underlies all LLMs
  > GPT-2 & GPT-3 - No explanation needed. Most interesting here was their hard bet on the scaling laws (before they were consensus) and being right.
  > LoRA - An efficient method for fine-tuning models (which also showed us something interesting about
  > RLHF & InstructGPT - GPT-3 didn't really reach the mainstream until the creation of ChatGPT, enabled by the successful fine-tuning of an "assistant mode" introduced by these papers
  > Vision Transformer - Introduced the ability for transformers to process images in "patches" which became critical for multi-modality
  Image Generation
  > GAN - The first effective approach to image synthesis, using the game-theoretic "adversarial" optimization of a generator and discriminator network
  > VAE (& VQ-VAE, VQ-VAE-2) - Probabilistic approach to image synthesis that constrains the model to form low-dimensional representations of images, forcing the separation of high-level features and details
  > Diffusion (& Denoising Diffusion, etc.) - Enabled the best current state-of-the-art image synthesis
  > CLIP - The embedding model that first introduced the possibility for multi-modality, by compressing understanding of images and captions into a single representation space
  > DALL E (& DALL E 2) - Building on VAEs, CLIP, and diffusion models to create state-of-the-art controlled image synthesis models
  ![](https://pbs.twimg.com/media/GOY93QNbEAIRmT6.jpg) ([View Tweet](https://twitter.com/MajmudarAdam/status/1794190799544143887))
- Step #2 ✅: Building core intuitions from each paper
  I started by trying to understand the core intuitions and math for each paper.
  Going through the early CNN, optimization, and regularization papers, this process was straightforward.
  Each of these papers builds directly on top of the core of DNNs, and shows empirically the approaches that solved specific problems with scaling neural networks. Assuming a strong fundamental understanding of backpropagation, they were mostly intuitive.
  Specifically, the framework of thinking about each advancement in-terms of how it affects gradient flow in a neural network was particularly effective.
  The specific math behind RNNs & LSTMs was a bit more challenging (took some time to fully understand how gradient-flow are manipulated by LSTM gates), but aside from that, the sequence modeling and transformer sections were also intuitive.
  Many of the advancements in transformers after the original Attention Is All You Need paper are about modifying training objectives, small implementation details, and just scaling up the models.
  However, when I got to the generative models section, I got hit with a completely new level of difficulty.
  Getting through the papers for Variational Auto Encoders and Diffusion models was brutal. Diffusion alone took me a few days to fully wrap my head around all the math (especially the equations in the original thermo diffusion & denoising diffusion papers).
  Because these models draw their inspiration from thermodynamics (Langevin dynamics), they deal with concepts far more complex than the remaining history of deep learning.
  It was painful getting through this part, but felt great at the end when I was finally able to grasp the math.
  ![](https://pbs.twimg.com/media/GOY-DYLasAAmK4U.jpg) ([View Tweet](https://twitter.com/MajmudarAdam/status/1794190801813319918))
- Step #3 ✅: Creating & training my own models
  Going into this deep-dive, I was expecting that the implementation level would be one of the most interesting & important parts (similar to my chip dive, where I first learned the fundamentals, then build a GPU).
  But, as I continued to go through papers & re-implement, my perspective on this changed.
  I focused on creating my own DNN, CNN, and Transformer initially, and then also wanted to build a VAE & Diffusion model because of how hard they were to understand conceptually.
  I created my own (and trained with A100):
  > DNN
  > CNN
  > Transformer
  > Vision Transformer (you can see a visualization of attention from this model below)
  > GAN
  > VAE
  > Diffusion (you can see a result of the diffusion process below)
  I was expecting the software layer of building these models to be equally complex.
  But through the implementation process, it became more clear that writing minimal software implementations of deep learning architectures removes the most interesting part (in hind-sight, this should have been obvious)
  The complexities of training models get introduced with scale - so writing minimal architecture implementations, while somewhat useful for intuition, doesn't really offer as much learning value or challenge.
  This is also magnified by the fact that in contrast to my GPU project, there are so many available resources to learn to build ML models.
  So, instead of focus my learning on implementation (where there are tons of implementations available online), I wanted to create something new.
  ![](https://pbs.twimg.com/media/GOY-M9WbEAARsrW.jpg) ([View Tweet](https://twitter.com/MajmudarAdam/status/1794190804287959528))
- Step #4 ✅: Reframing the history of deep learning with the 7 constraints of deep learning progress (the most interesting part)
  The most interesting part of my deep-dive came from noticing a clear trend across all the key advancements, which has completely reframed how I understand deep learning -
  There are 7 simple constraints that limit the capacity of digital intelligence:
  (1) data
  (2) parameters
  (3) optimization & regularization
  (4) architecture
  (5) compute
  (6) compute efficiency
  (7) energy
  The entire history of deep learning can be seen as the series of advancements that have gradually raised the ceiling on these constraints, enabling the creation of increasingly intelligent systems.
  By framing each of the key breakthroughs in-terms of these constraints, it becomes clear exactly how the field has evolved over time, and it also becomes more clear where we're headed in the future.
  Specifically, the goal of deep learning is to produce accurate models of reality by:
  (1) Treating the true models that describe reality as complex probability distributions
  (2) Creating neural networks capable of modeling complex probability distributions
  (3) Training these networks to learn to model the probability distributions that underlie reality
  In this view, the intelligence of a neural network is determined by how well it models the true distributions of reality.
  This is fundamentally bottlenecked by each of the constraints:
  (1) Data - The cap on how well a model can approximate the true distributions of reality is determined by how much information about the true distribution is contained within the dataset. This is why increasing data quality & data quantity have consistently pushed forward deep learning
  (2) Parameters - A models ability to accurately approximate the distribution of the dataset is bounded by it's representational capacity. The representational capacity of a model is bounded by the number of parameters it contains.
  (3) Optimization & Regularization - The number of parameters (especially depth) a model can have while still effectively converging is constrained by the efficacy of optimization & regularization approaches.
  (4) Architecture - The representational capacity of a model with a given number of parameters is constrained by it's architecture.
  (5) Compute - The total available compute constraints the maximum number of trainable parameters a model can have.
  (6) Compute Efficiency - The software implementations of the model for training constrain the efficiency of compute utilization.
  (7) Energy - The energy available to draw from the grid in a single location constrains the amount of compute that can be used for a training run.
  You can then reframe the entire history of deep learning in terms of these 7 constraints (which I have done in the repo linked in this thread), and it reveals many interesting trends.
  I've found that thinking in terms of these 7 constraints is also particularly helpful for thinking reasonably about where AI will head in the future.
  Currently, we're in the "Scaling Laws" paradigm where the current constraints appear to be compute & parameters.
  However, this is not just because scaling compute & parameters is always fundamentally the best approach to increasing intelligence.
  Instead, it's a result of the fact that the current data distribution we're trying to model (internet scale datasets) has far more information available to model than current neural networks are capable of learning - in other words, neural networks still don't have enough representation capacity to store this data.
  However, it's inevitable that at some point, models will grow large enough to effectively learn the information the datasets have to offer - the question is how far off will that point be, and how good will models be.
  In fact, energy & data may in fact become the dominating constraints again at some point, shifting the paradigm of focus away from scaling laws (temporarily).
  The fundamental law that explains all progression toward increasing intelligence is the continual increase of the ceiling of these 7 constraints.
  In the repository linked in the next post, I wrote my complete reframing of the history of deep learning in terms of the 7 constraints, and what it can tell us about:
  (1) How is progress made in deep learning?
  (2) Where do the ideas that drive progress in deep learning come from?
  (3) How have our narratives about digital intelligence changed over time?
  (4) What does deep learning teach us about our own intelligence?
  (5) Where is the future of deep learning headed?
  ![](https://pbs.twimg.com/media/GOY-ge8acAAcDOL.jpg) ([View Tweet](https://twitter.com/MajmudarAdam/status/1794190807429443859))
- Here's the full repository of my effort, with an explanation of conceptual & mathematical intuitions for each paper, and my implementations where relevant.
  Most importantly, the README has my complete reframing of the history of deep learning progress in terms of the 7 constraints.
  https://t.co/73G8D5xpr4 ([View Tweet](https://twitter.com/MajmudarAdam/status/1794190809262354800))
- For people curious, here's the complete list/links to all the papers that I used to learn about the history of deep learning.
  I designed this list to include only the most critical breakthroughs & advancements that led us on the path we're on today (naturally, many great papers are excluded)
  Early Neural Networks & CNNs
  > Backpropagation - https://t.co/gaXq3UGWW5
  > CNN - https://t.co/az5E5Qg5NM
  > LeNet - https://t.co/bprAPZnvi4
  > AlexNet - https://t.co/uQnQkwuVB6
  > U-Net - https://t.co/JsoEH3dGNR
  Optimization & Regularization
  > Weight Decay - https://t.co/v7KwTqGlcv
  > ReLU - https://t.co/syD4PdkIUI
  > Residuals - https://t.co/eCact6VkJ5
  > Dropout -https://t.co/XrKNo1qjF8
  > BatchNorm - https://t.co/SqjmNE71c1
  > LayerNorm - https://t.co/AGE1cq173r
  > GELU - https://t.co/hqoW53WAMU
  > Adam - https://t.co/ofFsu3fpAR
  Sequence Modeling
  > RNN - https://t.co/Fs9Lr1og40
  > LSTM - https://t.co/mySRmuTKcY
  > Learning to Forget - https://t.co/KdN4fBeHRD
  > Word2Vec - https://t.co/nVSmkipZAd
  > Phrase2Vec - https://t.co/FwnG7CDd8g
  > Encoder-Decoder - https://t.co/B75S0qlWhB
  > Seq2Seq - https://t.co/64FwWhkQk2
  > Attention - https://t.co/HXC5TIznYq
  > Mixture of Experts - https://t.co/w4aEq4Lj6O
  Transformers
  > Transformer - https://t.co/f0pxHuh9zd
  > BERT - https://t.co/cz9tYm2CBq
  > RoBERTa - https://t.co/xykamExJUI
  > T5 - https://t.co/dAJloIWIsz
  > GPT-2 - https://t.co/VrpAzyaimN
  > GPT-3 - https://t.co/Oo8msr9A1Z
  > LoRA - https://t.co/7dbKvSYPAU
  > RLHF - https://t.co/yYWFTNRPv3
  > PPO - https://t.co/xDHl4ySjPp
  > InstructGPT - https://t.co/2xx5HF28ru
  > Helpful & Harmless - https://t.co/SJwmeUjZOb
  > Vision Transformer - https://t.co/5STDMzvlhg
  Generative Models
  > GAN - https://t.co/NOfT6E2Ecb
  > VAE - https://t.co/1rG10rPk3s
  > VQ VAE - https://t.co/FFL06RiU37
  > VQ VAE 2 - https://t.co/5e4OVbuuE4
  > Diffusion - https://t.co/hWGPPHrClX
  > Denoising Diffusion - https://t.co/k9mwlDT9W8
  > Denoising Diffusion 2 - https://t.co/u7JywJszTz
  > Diffusion Beats GANs - https://t.co/TkIVrYa4Vs
  > CLIP - https://t.co/lLZ7wG66m0
  > DALL E - https://t.co/u2MiEdXkzW
  > DALL E 2 - https://t.co/cavR7d3syl ([View Tweet](https://twitter.com/MajmudarAdam/status/1794190811120451986))
- Here’s the GitHub link again since the previous embed doesn’t show:
  https://t.co/iBdxuMHTpt ([View Tweet](https://twitter.com/MajmudarAdam/status/1794199153016557951))
