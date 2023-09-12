---
author: [[Argilla S.L.U.]]
title: "Finetuning an LLM: RLHF and Alternatives"
date: 2023-09-12
tags: 
- articles
- literature-note
---
![rw-book-cover](https://www.argilla.io/blog/mantisnlp-rlhf/part-1-banner.png)

## Metadata
- Author: [[Argilla S.L.U.]]
- Full Title: Finetuning an LLM: RLHF and Alternatives
- URL: https://argilla.io/blog/mantisnlp-rlhf-part-1/

## Highlights
- RLHF ”*...is a complex and often unstable procedure, first fitting a reward model that reflects the human preferences, and then fine-tuning the large unsupervised LM using reinforcement learning to maximize this estimated reward without drifting too far from the original model.*” ([View Highlight](https://read.readwise.io/read/01ha49d0pzt8ks6pw7844v2ex6))
- Large language models are typically pre-trained on massive amounts of text data, enabling them to learn the statistical regularities of language. However, they do not possess specific knowledge about particular domains or exhibit a comprehensive understanding of context. To bridge this gap, fine-tuning is employed, which involves training the model on domain-specific or task-specific datasets. **Fine-tuning** allows the model to acquire specialized knowledge and adapt its behavior to better serve specific applications, making it more useful and reliable. ([View Highlight](https://read.readwise.io/read/01ha49hhkfv0tfswnja9q6vq6j))
- **Supervised fine-tuning (SFT)** is a more focused approach that involves training a model on a labeled dataset that directly maps inputs to desired outputs. SFT, including *instruction-tuning*, teaches a model to respond based on what humans define. ([View Highlight](https://read.readwise.io/read/01ha49hy9w16s6g2k0wgavdehf))
- In order to have your LLMs produce texts which match your style and content guidelines, you need to fine-tune them using Supervised fine-tuning. ([View Highlight](https://read.readwise.io/read/01ha49k68k6badqhzygf4dzhcp))
- [Supervised fine-tuning (SFT) based on Instructions](https://argilla.io/blog/mantisnlp-rlhf-part-1#supervised-fine-tuning-sft-based-on-instructions)
  To carry out SFT on an LLM, you need data. More specifically, if you want to fine-tune a chatbot to successfully answer user requests, you need **instruction data**. There are many open source datasets (most of them with a non-commercial license!) which are instruction-based and you can use. ([View Highlight](https://read.readwise.io/read/01ha49kxxsacdwyj142zhjxexe))
- This is what the [GPT4all fine-tuning dataset](https://huggingface.co/datasets/nomic-ai/gpt4all-j-prompt-generations) looks like in the Hugging Face Datasets Viewer. It’s pretty simple: it consists of a series of prompts (first column) and expected answers / responses (second column) to fine-tune the model answers to. ([View Highlight](https://read.readwise.io/read/01ha49mxfmr7yp56xs1j4cbj84))
- Although they may be used as a starting point, those datasets may not fit to your specific use case. If you want to have answers with your own formatting, as the one included in the previous section, you will need to create your own dataset. The data collection and reviewing mechanism can be very complex if you don’t have the proper tools. ([View Highlight](https://read.readwise.io/read/01ha49n6yvhgt2q0d179xyhjvf))
## New highlights added September 12, 2023 at 11:56 AM
- Since most of those datasets have a non-commercial license, and while we can use them for fine-tuning with no commercial usage, we can use [Argilla](https://argilla.io/) to create and curate our own instruction following dataset.
  We can even synthetically generate a dataset to start with using existing LLMs, as Stanford did with Alpaca (reference at [https://huggingface.co/datasets/tatsu-lab/alpaca](https://huggingface.co/datasets/tatsu-lab/alpaca)), where they used OpenAI’s `text-davinci-003` to collect the responses for a collection of prompts. However, always check the Terms of Services first before doing that - if it’s not for research, OpenAI TOS (as an example) explicitly prohibits *using the "...output from the Services to develop models that compete with OpenAI;"* (2.c.iii). ([View Highlight](https://read.readwise.io/read/01ha49qb10z3a51j17ryxhpn5h))
- As of Argilla 1.8.0, the `FeedbackDataset` was introduced to allow users to create datasets to specifically collect feedback for LLMs, introducing more flexibility to the dataset fields definition and to allow multiple different annotations over the same records.
  In this case, we will focus on instruction following datasets, but you can find more information about the latest Argilla updates and the `FeedbackDataset` specifically at [https://argilla.io/blog/argilla-for-llms](https://argilla.io/blog/argilla-for-llms).
  To create a `FeedbackDataset` for instruction following we should define the fields that would be present in our dataset, and also the question we want the annotators to answer to collect their feedback prior to the fine-tuning. So on, in this case we’ll need:
  • `TextField`s for the input.
  • `TextQuestion` to ask the annotator to provide either a complete response or a response edit if any. These would come fulfilled with an existing suggestion if any, to help the annotator with the annotation process.
  Finally, we should write down the annotation guidelines which will be required for the annotator to know what they should provide as a response in terms of style, politeness, etc. as mentioned above. ([View Highlight](https://read.readwise.io/read/01ha49s6q9ddkt0wfzpdstjt54))
- Translated to code, it would look like this:
  ![How to prepare data for fine-tunning using Argilla](https://argilla.io/blog/mantisnlp-rlhf/part-1-dataset.png)
  Running the above in Argilla, would generate the following dataset in the Argilla UI, ready for the annotators to start providing or editing the existing responses if any, to later on be collected to fine-tune our own instruction following LLM.
  ![Argilla’s UI, generated from the code above](https://argilla.io/blog/mantisnlp-rlhf/part-1-ui.png) ([View Highlight](https://read.readwise.io/read/01ha49senp9d4qsh4q7k5kxr8c))
