---
author: [[Argilla S.L.U.]]
title: "Finetuning an LLM: RLHF and Alternatives"
date: 2023-09-12
tags: 
- articles
- literature-note
---
![rw-book-cover](https://www.argilla.io/blog/mantisnlp-rlhf/part-3-banner.png)

## Metadata
- Author: [[Argilla S.L.U.]]
- Full Title: Finetuning an LLM: RLHF and Alternatives
- URL: https://argilla.io/blog/mantisnlp-rlhf-part-3/

## Highlights
- The process may seem a little complex, and very data-greedy. Maybe now you understand why it has been depicted as a Shoggoth monster with a cherry on top. Courtesy of twitter.com/anthrupad
  ![Shoggoth with Smiley Face](https://argilla.io/blog/mantisnlp-rlhf/part-1-sloggoth.png)
  However, we start to see some light at the end of the tunnel, as the community starts working on simplifications of the process. Let’s talk about two of the alternatives to RLHF. ([View Highlight](https://read.readwise.io/read/01ha4aab7ynex263ygm6n1p59n))
- In *Direct Preference Optimization: Your Language Model is Secretly a Reward Model*[[1]](https://arxiv.org/abs/2305.18290) the authors introduce a method called **Direct Preference Optimization (DPO)** for achieving precise control over Large-scale unsupervised Language Models (LLMs). As mentioned above, existing methods rely on Reinforcement Learning from Human Feedback (RLHF) are based on training a **Reward Model** and using **Proximal Policy Optimization (PPO)** (as described in our [second](https://argilla.io/blog/mantisnlp-rlhf-part-2) post)**,** to align the LM’s output with human preferences. But this approach is very complex and unstable. ([View Highlight](https://read.readwise.io/read/01ha4adcy3tdkmkm6yn6rxe9f2))
- DPO solves the constrained reward maximization problem by treating it as a classification problem on human preference data. The algorithm is stable, efficient, and computationally lightweight, eliminating the need for reward model fitting, LM sampling, and extensive hyperparameter tuning. ([View Highlight](https://read.readwise.io/read/01ha4adq4hbvhn6g5gp5nj3hye))
- Unlike existing methods that train a **Reward Model** and then optimizes a **Policy** based on that RM (Reinforcement Learning by Human Feedback using PPO — left of the figure), DPO **directly defines the preference loss as a function of the Policy** (right). In short, it removes the requirement of training first a Reward Model.
  ![Direct Preference Optimization](https://argilla.io/blog/mantisnlp-rlhf/part-3-dpo.png) ([View Highlight](https://read.readwise.io/read/01ha4ae858xyfs712s3ksj4a8f))
- The DPO pipeline has two stages:
  1. Run supervised fine-tuning (SFT) on the dataset(s) of interest.
  2. Run preference learning on the model from step 1, using **Preference Data** (ideally from the same distribution as the SFT examples)
  As you see, **Preference Data** is still required to train the **Policy**. But it gets rid of the complexity of training a Reward Model first to then optimize a LM Policy to then fine-tune a LLM.
  How is that achieved? The idea is using the **very same LLM as a Reward Model.** During fine-tuning time,**DPO** optimizes the policy using a binary cross-entropy objective. It uses the human preference data to determine what responses are preferred and what responses are not. By comparing the model's responses to the preferred ones, it can adjust the policy to improve its performance. ([View Highlight](https://read.readwise.io/read/01ha4agmm1qbf8znetkkrw7ef1))
- In the Chain of Hindsight Aligns Language Models with Feedback [[5]](https://arxiv.org/pdf/2302.02676.pdf) paper another interesting idea is presented, again using the LLM as a means to optimize the Policy. The key idea this time is that humans are capable of learning from rich and detailed feedback in the form of comparisons. ([View Highlight](https://read.readwise.io/read/01ha4ah0vedr0r0tj4jhhbbkvx))
- In this scenario, we use the **Preference Data** to complement the input. The authors use an example with 2 answers in the PD dataset, one is helpful, another is not. The helpful one is added following “A helpful answer:”, and the unhelpful answer too in a similar way, both after the input.
  ![On the left, preference data. On the right, the concatenation of the input, the helpful answer and the unhelpful.](https://argilla.io/blog/mantisnlp-rlhf/part-3-preference.png) ([View Highlight](https://read.readwise.io/read/01ha4ahcb3d23y63axsbxj1rww))
- During training, the model is presented with feedback consisting of the input and the contrastive data (*helpful vs unhelpful, good vs bad*, etc) as we expressed above. The model is conditioned to predict outputs that better match the good alternative. Loss is applied on the corresponding outputs “{a good answer}” and “{a bad answer}”. At inference time, positive feedback “Good:” to instruct the model to generate the desired outputs.
  In conclusion, by applying SFT and PPO on the Human Preference Data in the form of contrastive information, with Chain of Hindsight we can leverage the power of LLM to optimize the Policy without needing to train an external Reward Model. ([View Highlight](https://read.readwise.io/read/01ha4aj18vwqbkxd1p9axg2wwb))
- From the two techniques explained above, we are going to showcase the easy steps of applying Direct Preference optimization to fine-tune a LLM.
  In the following link, you will be able to find the new [DPO Trainer](https://huggingface.co/docs/trl/main/en/dpo_trainer) module, inside the [TRL](https://huggingface.co/docs/trl/main/en/index) (Transformer Reinforcement Learning) library. ([View Highlight](https://read.readwise.io/read/01ha4ajepr1wh5x0nn057c5533))
- The steps to use the DPO Trainer instead RLHF described in the documentation are the following:
  1. About SFT, they indeed mention that it’s the first requirement, as we commented before(...The first step as always is to train your SFT model, to ensure the data we train on is in-distribution for the DPO algorithm). This is also very important since the data in SFT should be in-distribution, to be able to run DPO (or any other technique).
  2. After, they describe the preference data format. They use [Anthropic/hh-rlhf](https://huggingface.co/datasets/Anthropic/hh-rlhf)’s format, which uses, as mentioned above, a binary classification of accepted-rejected:
  ![Anthropic’s hh-rlhf dataset, renderer in Hugging Face Dataset viewer](https://argilla.io/blog/mantisnlp-rlhf/part-3-dataset.png) ([View Highlight](https://read.readwise.io/read/01ha4ajkh4971emanqrb606k11))
- The data and consists of three fields:
  1. *prompt*, containing the context inputs.
  2. *chosen*, containing the corresponding chosen responses
  3. *rejected*, containing the rejected answers.
  ![Fields required by DPO](https://argilla.io/blog/mantisnlp-rlhf/part-3-code-data.png)
  Finally, they describe with a few lines of code, how you can configure a **DPOTrainer** class and run the train. Here is what you will need:
  1. *model*, the fine-tuned version of your model (the result from SFT);
  2. *model_ref*, the non-fine-tuned version of the model that's being fine-tuned. Usually it’s the original checkpoint you used before SFT.
  3. *training_args*, same TrainerArguments class object present in transformers library, containing a list of training parameters such as *per_device_train_batch_size, max_steps, gradient_accumulation_steps, learning_rate, evaluation_strategy, output_dir, etc*.
  4. *beta*, temperature parameter for the DPO loss, typically something in the range of 0.1 to 0.5.
  5. *train_dataset*, the preference data in the format described above inside a Dataset class object.
  6. *tokenizer*, the tokenizer instantiated (usually with Autotokenizer) from the *model*.
  ![Syntax of the DPOTrainer in Hugging Face’s trl](https://argilla.io/blog/mantisnlp-rlhf/part-3-code.png) ([View Highlight](https://read.readwise.io/read/01ha4ak48p96j4735g7m9xm5b0))
- fine-tuning a large language model (LLM) for generating text using specific guidelines can be highly useful in various applications. By providing specific guidelines, we can shape the LLM's output to align with our desired objectives, ensuring more accurate and controlled text generation.
  This process has been historically very complex, requiring to train first a Reward Model to then optimize the Policy of the LLM.
  However, recent approaches, such as Direct Policy Optimization (DPO) and Chain of Hindsight (CoH) have shown how you can use Large Language as Reward Models. ([View Highlight](https://read.readwise.io/read/01ha4akh5y75ty4k5x4wa8e4y5))
---
author: [[Argilla S.L.U.]]
title: "Finetuning an LLM: RLHF and Alternatives"
date: 2024-03-04
tags: 
- articles
- literature-note
---
![rw-book-cover](https://www.argilla.io/blog/mantisnlp-rlhf/part-4-banner.png)

## Metadata
- Author: [[Argilla S.L.U.]]
- Full Title: Finetuning an LLM: RLHF and Alternatives
- URL: https://argilla.io/blog/mantisnlp-rlhf-part-4

## Highlights
- As we have seen in the previous blog post, RLHF is an effective technique for aligning language models to human preferences, but its main obstacle is its dependence on high-quality human preference data. This fact automatically raises the next question in this AI-driven world: can artificially generated labels be a viable substitute? That is what Anthropic first questioned themselves when they devised this method in their publication Constitutional AI: Harmlessness from AI Feedback [(Bai et. al, 2022)](https://arxiv.org/abs/2212.08073), where they experimented with methods for training harmless AI assistants and introduced the concept of Constitutional AI. ([View Highlight](https://read.readwise.io/read/01hr4m7ehgggsyd3zxfkjht06q))
- The only human data used in this method is a constitution, a set of humanly curated principles to influence the behaviour of the AI assistant produced. In this schema, the AI assistant incorporates feedback from another LLM rather than from humans, while being guided by the constitution. They mainly found three benefits: superior performance, less subjectiveness and more scalability. However, in this first approach, the direct comparison between human and AI feedback was not done, leaving the question of whether RLAIF was a suitable alternative.
  Building on top of Anthropic, Google Research [(Lee et al., 2023)](https://arxiv.org/abs/2309.00267) demonstrated that RLAIF achieves superior performance in several NLP tasks and that directly prompting the LLM for reward scores during the Reinforcement Learning phase could outperform the canonical Reward Model setup, making this process less complex. ([View Highlight](https://read.readwise.io/read/01hr4m7hkkkkdj8yeccshm7vc0))
- ![](https://argilla.io/blog/mantisnlp-rlhf/part-4-1.png)*A diagram depicting RLAIF, on top, against RLHF, on the bottom. From Lee et al, 2023.* ([View Highlight](https://read.readwise.io/read/01hr4m7kf1e9mppkf8p325nhqx))
- [How does RLAIF work?](https://argilla.io/blog/mantisnlp-rlhf-part-4#how-does-rlaif-work)
  Contrary to RLHF, this approach generates its own preference dataset. Given one prompt and two responses to that prompt (in prompt-response tuples, duplicating the prompt), the Reward Model from AI Feedback generates a score for each pair in concordance with the constitution. This AI-generated preference data, rather than just deciding which answer is better or worse (what a human annotator would do), offers a numerical value of preference, between 0 and 1. ([View Highlight](https://read.readwise.io/read/01hr4me72t2rpf8rn2m1qyeaa1))
- ![](https://argilla.io/blog/mantisnlp-rlhf/part-4-3.png)*Example of a prompt fed to an LLM to generate AI preference labels for summarization. The preamble effectively serves as the constitution. An example of annotation is also given. Afterwards, Text, Summary 1 and Summary 2 are populated with unlabelled examples, and a preference distribution is obtained by computing the sofmax of the log-probabilities of generating the tokens of the first summary or the second one. From Lee et. al, 2023.*
  The rest of the procedure is similar to RLHF, as the AI-generated preference data is used to train the Reward Model, which is then used to do Reinforcement Learning over the LLM.
  RLAIF is evaluated with three metrics:
  • AI Labeler Alignment, which measures the accuracy of AI preference data concerning human preferences.
  • Win Rate, which evaluates how often one AI-generated policy is preferred over the classic RLHF approach
  • Harmless Rate, which quantifies the percentage of responses that are considered harmless by human evaluators. ([View Highlight](https://read.readwise.io/read/01hr4methqtxak406zyffnjxam))
- [Distilled or Direct RLAIF](https://argilla.io/blog/mantisnlp-rlhf-part-4#distilled-or-direct-rlaif)
  After labelling the preferences through the LLM, in the canonical RLAIF setup, a reward model is trained on the soft labels obtained (numeric, from 0 to 1). Then, cross-entropy loss is applied to the softmax of the reward scores. The softmax converts the scores that the Reward Model outputs into a probability distribution. Finally, Reinforcement Learning is conducted to train the RLAIF policy model, using the RM model to assign rewards to model responses.
  However, an alternative method that is studied by Lee et al. is to directly use the LLM feedback as the reward. The LLM is prompted, then, to rate the quality of the generation between 1 and 10. The dimensions for rating the generation are introduced in the prompt for the LLM to make a better judgment. Then, the likelihood of each score is computed from 1 to 10, and normalised into a probability distribution, to be then used to calculate a weighted score that is again normalised to the range -1, 1. This score can be used as a reward directly. ([View Highlight](https://read.readwise.io/read/01hr4mfhe2zrm2cr1j864p4p3f))
- RLAIF achieves equal or better performance than RLHF in the three tasks analysed (summarisation, helpful dialogue generation and harmless dialogue generation). RLAIF and RLHF policies tend to generate longer responses than SFT policies. The current results in the state-of-the-art research suggest that RLAIF is a viable alternative to RLHF, while not depending on human data. Its main benefit is cost reduction, which is estimated to be 10 times cheaper than getting equivalent human annotations.
  ![](https://argilla.io/blog/mantisnlp-rlhf/part-4-4.png)*Human evaluators prefer RLAIF and RLHF over SFT for summarization and dialogue generation. RLAIF is equally preferred to RLHF. In terms of harmlessness, RLAIF outperforms both* ([View Highlight](https://read.readwise.io/read/01hr4mfynzm8e20dk0jvm2dr2h))
- RLAIF achieves similar or better results than RLHF while keeping the cost at a minimum, and they are preferred at a similar rate by humans. Even if there remain open questions about the potential of RLAIF, right now it is a viable alternative, and in a low-resource environment, can be a key tool for generating state-of-the-art LLM. To keep diving into RLAIF, you can check this evaluation on the current state-of-the-art by [Sharma et. al.](https://arxiv.org/abs/2402.12366). ([View Highlight](https://read.readwise.io/read/01hr4mg9sb6rycj6mhxzysj4np))
