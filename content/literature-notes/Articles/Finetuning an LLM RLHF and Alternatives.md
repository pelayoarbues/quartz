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
## New highlights added March 4, 2024 at 2:03 PM
- Unfortunately, **SFT** alone is often insufficient for refining the large language models to meet specific requirements.
  With it, you can complement the lack of information you may have in pretrained LLM, change the style, structure, teach to answer differently to different outputs.
  However, there will always be multiple ways you can answer a question. State-of-the-art conversational models, such as ChatGPT, have been traditionally requiring an additional step called **Reinforcement Learning by Human Feedback (RLHF).** ([View Highlight](https://read.readwise.io/read/01hr4krn4sn2rq6s1yf7k467br))
- Reinforcement learning is a paradigm in which an agent learns to make decisions by receiving feedback from its environment. In the context of language models, this feedback is provided by human reviewers who assess and rate the model's responses. By leveraging human expertise and judgments, reinforcement learning facilitates the iterative improvement of the model's performance and fine-tunes its responses.
  The process of reinforcement learning by human feedback involves several important steps:
  1. **Guidelines** are defined to guarantee unique criteria when deciding what is a good and a bad answer to an input.
  2. A **Reward Model (RM)** should be trained, which will evaluate each of the responses in terms of accuracy, relevance, and adherence to guidelines.
  3. To train the RM, some prompts are selected and sent to human reviewers. We call them **Preference Data (PD)**
  4. The reviewers then interact with the model and manually evaluate and rate the corresponding outputs.
  5. The collected feedback, in the form of ratings or rankings, is used to train the RM.
  6. With the RM trained, we can train a **Policy Optimizer**, a required component which will guide the fine-tuning of the LLM.
  7. We fine-tune the LLM with Policy Optimization.
  8. This iterative feedback loop allows the model to gradually learn from human guidance and refine its behavior accordingly. ([View Highlight](https://read.readwise.io/read/01hr4ksgc97a56qyxc5px2pv7a))
- [Preference Data](https://argilla.io/blog/mantisnlp-rlhf-part-2#preference-data)
  The main requirement at this point is having **Preference Data (PD)**. Preference Data is a collection of options / alternatives to a prompt, which can be sent to a group of Annotators and/or Subject Matter Experts (SME) so that they rate it, given some annotation guidelines, from the best to the worst. ([View Highlight](https://read.readwise.io/read/01hr4ksty4vazgmn8cd5bxme0p))
- Several approaches have been used to create the Preference Data.
  1. For selecting the best prompts, you can either have a predefined set of them, have a predefined template and generate some on the fly, and or combine/those with random prompts from a database, for example.
  2. For selecting the answers, you can send the prompt to one specific version of the model (the last one you have fine-tuned) or to different checkpoints. Decide how many answers you want to rank: you can use just 2 and have a binary ranking schema of best-worst or have your annotators ranking from 1 to 5, as an example.
  3. Always define first the Annotation Guidelines for the different ranking levels, to minimize individual interpretations and standardize the answers. ([View Highlight](https://read.readwise.io/read/01hr4kt7k3nsagvdskk73bjxa1))
- Preference data implies ranking outputs from best to worst, as mentioned above. Argilla introduced `RankingQuestion` in version 1.12.0 to the `FeedbackDataset`s that can be used for this kind of ranking.
  As a quick recap, `FeedbackDataset`s in Argilla require both a list of fields and a list of questions so that the annotators can provide answers to those. In this case, to rank the answers for a dataset as the one mentioned above, we would need the following:
  • `TextField`s to define both the prompts and the answers generated for those prompts.
  • `RankingQuestion` to ask the annotators to rank the responses for a given prompt from best to worst, following the pre-defined annotation guidelines. ([View Highlight](https://read.readwise.io/read/01hr4kv938jahh1tw7bvwy4rad))
- Preference Data can contain several alternatives to be ranked from 0 to N. ChatGPT used 4 alternatives ranked from A to D (see figure below). However, simplified methodologies, as Direct Preference Optimization, will just require a binary classification of *chosen vs rejected*. With that, you could set up Argilla to just show, for example, two responses (*Response-1* and *Reponse-2*) and choose the best as *Chosen* and the least preferred as *Rejected.* ([View Highlight](https://read.readwise.io/read/01hr4kvvcnbmtjhsfy05qqxhgz))
