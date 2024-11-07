---
author: [[poloclub.github.io]]
title: "What is a Transformer?"
date: 2024-11-07
tags: 
- articles
- literature-note
---
![rw-book-cover](https://poloclub.github.io/transformer-explainer/favicon.png)

## Metadata
- Author: [[poloclub.github.io]]
- Full Title: What is a Transformer?
- URL: https://poloclub.github.io/transformer-explainer/

## Highlights
- Transformer is a neural network architecture that has fundamentally changed the approach to Artificial Intelligence. Transformer was first introduced in the seminal paper ["Attention is All You Need"](https://dl.acm.org/doi/10.5555/3295222.3295349) in 2017 and has since become the go-to architecture for deep learning models, powering text-generative models like OpenAI's **GPT**, Meta's **Llama**, and Google's **Gemini**. Beyond text, Transformer is also applied in [audio generation](https://huggingface.co/learn/audio-course/en/chapter3/introduction), [image recognition](https://huggingface.co/learn/computer-vision-course/unit3/vision-transformers/vision-transformers-for-image-classification), [protein structure prediction](https://elifesciences.org/articles/82819), and even [game playing](https://www.deeplearning.ai/the-batch/reinforcement-learning-plus-transformers-equals-efficiency/), demonstrating its versatility across numerous domains. ([View Highlight](https://read.readwise.io/read/01jc368vqxhyb3cbkf028y1xw7))
- text-generative Transformer models operate on the principle of **next-word prediction**: given a text prompt from the user, what is the *most probable next word* that will follow this input? The core innovation and power of Transformers lie in their use of self-attention mechanism, which allows them to process entire sequences and capture long-range dependencies more effectively than previous architectures. ([View Highlight](https://read.readwise.io/read/01jc369agfzx5wzv2743d76y1s))
- GPT-2 family of models are prominent examples of text-generative Transformers. Transformer Explainer is powered by the [GPT-2](https://huggingface.co/openai-community/gpt2) (small) model which has 124 million parameters. While it is not the latest or most powerful Transformer model, it shares many of the same architectural components and principles found in the current state-of-the-art models making it an ideal starting point for understanding the basics. ([View Highlight](https://read.readwise.io/read/01jc369hnpp9vgrxbnp6gzqqm3))
- Every text-generative Transformer consists of these **three key components**:
  1. **Embedding**: Text input is divided into smaller units called tokens, which can be words or subwords. These tokens are converted into numerical vectors called embeddings, which capture the semantic meaning of words.
  2. **Transformer Block** is the fundamental building block of the model that processes and transforms the input data. Each block includes:
  • **Attention Mechanism**, the core component of the Transformer block. It allows tokens to communicate with other tokens, capturing contextual information and relationships between words.
  • **MLP (Multilayer Perceptron) Layer**, a feed-forward network that operates on each token independently. While the goal of the attention layer is to route information between tokens, the goal of the MLP is to refine each token's representation.
  3. **Output Probabilities**: The final linear and softmax layers transform the processed embeddings into probabilities, enabling the model to make predictions about the next token in a sequence. ([View Highlight](https://read.readwise.io/read/01jc369y61fbqvh1169b184gtg))
- Let's say you want to generate text using a Transformer model. You add the prompt like this one: `“Data visualization empowers users to”`. This input needs to be converted into a format that the model can understand and process. That is where embedding comes in: it transforms the text into a numerical representation that the model can work with. To convert a prompt into embedding, we need to 1) tokenize the input, 2) obtain token embeddings, 3) add positional information, and finally 4) add up token and position encodings to get the final embedding. Let’s see how each of these steps is done. ([View Highlight](https://read.readwise.io/read/01jc36c3yc18zckjqg0e3xsp4d))
