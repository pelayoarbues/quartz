---
title:  "The Rise of the Dataset Engineer"
date: 2024-04-25
tags: 
- fleeting 
---

Act as a personal blog editor. I want you to review the grammar and expressions of the text. If necessary provide corrections and try to make the post easier to read, and appealing for a technical audience. Use more engaging language to capture the reader's interest. Also, consider breaking up longer sentences into shorter ones for easier reading. If you really think it is worth it you may expand the ideas in the paragraphs by writing them between three dollar signs.

Text:



THE RISE OF THE DATASET ENGINEER. 

The work of Data Scientists, and later of Machine Learning Engineers, have always involved preparing the right datasets for training and evaluating [[00.Inbox/Successful models]]. For a couple of years I have witnessed how this work of curating the right datasets is gaining more and more importance within the data function. 

Large pretrained models have become available making it easier to build custom versions tailored to solve domain business problems. In this regard, we cannot underappreciate the role that [Hugging Face](https://huggingface.co/) has played democratising the access to highly capable models. In addition, Hugging Face libraries such as [Datasets](https://huggingface.co/docs/datasets/index) and [🤗 Transformers](https://huggingface.co/docs/transformers/index)  have made possible an easier access to huge datasets, models and also applying transfer learning, fine tuning, and efficiently adapting particular Deep Learning architectures to the problem at hand. 

A few years ago, training a Deep Learning model took highly specialized people, those who are keen to read Computer Science papers, and are able to implement them using [TensorFlow](https://www.tensorflow.org/?hl=es-419), [PyTorch](https://pytorch.org/) or pure [CUDA](https://developer.nvidia.com/cuda-toolkit) (see tweet below). Other high level programming languages such as [Keras](https://keras.io/)****, [fastai](https://docs.fast.ai/) or [PyTorch Lightning](https://lightning.ai/pytorch-lightning) made training easier, allowing not-so-academic Data Scientists to train models. 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">🔥llm.c update: Our single file of 2,000 ~clean lines of C/CUDA code now trains GPT-2 (124M) on GPU at speeds ~matching PyTorch (fp32, no flash attention)<a href="https://t.co/ze4LKbnHKV">https://t.co/ze4LKbnHKV</a><br><br>On my A100 I&#39;m seeing 78ms/iter for llm.c and 80ms/iter for PyTorch. Keeping in mind this is fp32,… <a href="https://t.co/Ep8MwJFoWV">pic.twitter.com/Ep8MwJFoWV</a></p>&mdash; Andrej Karpathy (@karpathy) <a href="https://twitter.com/karpathy/status/1781387674978533427?ref_src=twsrc%5Etfw">April 19, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Nowadays, it is even easier than that, as you can upload a dataset to a fine tuning service, and [fine tune Stable Diffussion LoRAs ](https://replicate.com/guides/stable-diffusion/fine-tuning), [Computer Vision Deep Learning networks](https://encord.com/blog/learn-how-to-fine-tune-the-segment-anything-model-sam/)  or even fine tune [Large Language Models](https://platform.openai.com/docs/guides/fine-tuning) or a [Large Vision Model](https://www.v7labs.com/) without much knowledge required. 

So we are in a moment when we witness how fellow tech people, and even business roles, join the Data Science teams building Artificial Intelligence Solutions. This is great news for companies as they might leverage cutting-edge technology to solve business problems without having to face bottlenecks posed by understaffed datateams. The usually missing ingredients to make these new initiatives successful is good evaluation practices and [high quality data](notes/Ideal%20data%20to%20solve%20a%20problem.md). Good evaluation techniques can be taught, helping non-data roles to understand their importance and how evaluation fits in the Data Science  [iterative cycle](notes/Agile%20for%20Data%20Science.md).

> [!note]
> Building an optimal, unbiased, high quality dataset takes an engineering, statistical and operations mindset.

Regarding high quality data, in the past it took a lot of manual work to have labelled and heavily curated data. Right now we have great data annotation and data curation tools. Data annotation tools are focused on supervised problems and assist annotators adding metadata to data observations. It may take the form of NER spans, segmented images or preferences in chat interactions. Data curating tools, on the other hand, allows us to assess and curate the data, for instance, assuring that we have an unbiased dataset that represent the population we are trying to solve for or that we avoid adding near duplicate samples to our train set.

Besides a more mature ecosystem of annotation and curating tools, now it is also feasible to leverage the outstanding capabilities of LLMs, YOLOs and SAMs to do an impressive job preannotating the data. In this fashion, creating a dataset does not start from a blank page. And that is how an important part of the job has switched from programming algorithms to be able to efficiently label data using few shot learning (setfit), [Active Learning](https://docs.argilla.io/en/latest/practical_guides/annotation_workflows/active_learning.html) or any other form of models in the loop. 

We can rely on tools such as [argilla](https://argilla.io/), [CVAT](https://www.cvat.ai/) and [FiftyOne — FiftyOne 0.23.8 documentation](https://docs.voxel51.com/) in partnership with preannotated or synthetic data for training, evaluating and monitoring our own models. In this scenario, it takes an engineer mindset who understands the Data Science process of constantly iterating on data so that he is able to optimize the process of building or generating [synthetic data](https://distilabel.argilla.io/latest/). 

In fact, powerful voices in the industry such as Andrew Ng has long advocated for data centric approach to modeling. And recently, Chip Huyen has even claimed that a new role is being born: The dataset Engineer.

I am not completely sure that we need another name for disintangling the Data Science umbrella term. What it is clear is that we are all thinking about how to obtain high-end datasets for training our models, so it seems that the we like it or not, there is a new function rising. At the beginning it is quite likely that this function is tackled by existing roles, such as aforementioned Data Scientists or Machine Learning engineers, but taking a look at the rear mirror, we have witnessed how the roles are constantly evolving and new highly paid and specialized positions appeared. So, probably in the near future we might be including Dataset Engineering as the desired skills when opening a new position. 

 

THE EMERGENCE OF THE DATASET ENGINEER.

Data Scientists and Machine Learning Engineers have long been involved in preparing the ideal datasets for training and evaluating successful models. However, over the past few years, I've observed a significant increase in the importance of curating these datasets within the data function.

The availability of large pretrained models has simplified the process of creating custom versions to address specific business problems. In this context, we can't overlook the significant role played by [Hugging Face](https://huggingface.co/) in democratizing access to highly competent models. Furthermore, Hugging Face libraries like [Datasets](https://huggingface.co/docs/datasets/index) and [🤗 Transformers](https://huggingface.co/docs/transformers/index) have facilitated easier access to vast datasets and models. They've also simplified transfer learning, fine-tuning, and efficient adaptation of specific Deep Learning architectures to current problems.

A few years back, training a Deep Learning model required highly specialized individuals—those who were passionate about reading Computer Science papers and implementing them using TensorFlow, PyTorch or pure CUDA. However, high-level programming languages like Keras, fast.ai or PyTorch Lightning have simplified training processes. This has enabled Data Scientists who aren't necessarily academically inclined to train models. Today's landscape is even more user-friendly; you can simply upload a dataset to a fine-tuning service and fine-tune Stable Diffusion LoRAs, Computer Vision Deep Learning networks (SAM, YOLO), or even Large Language Models or Large Vision Models with minimal knowledge required.

We are currently witnessing an influx of tech enthusiasts and business roles joining Data Science teams to build Artificial Intelligence solutions. This is fantastic news for companies as they can leverage cutting-edge technology to solve business problems without encountering bottlenecks caused by understaffed data teams. The key ingredients often missing from these initiatives are sound evaluation practices and high-quality data. Fortunately, good evaluation techniques can be taught, which helps non-data roles comprehend their importance and how evaluation fits into the Data Science iterative cycle.

> [!note]
> Constructing an optimal, unbiased, high-quality dataset requires an engineering, statistical and operations mindset.

Regarding high-quality data, it previously required significant manual labor to obtain labeled and heavily curated data. However, we now have excellent data annotation and curation tools at our disposal. Data annotation tools focus on adding metadata to data observations—this could take the form of NER spans, segmented images or preferences in chat interactions. Data curation tools allow us to assess and curate the data—for instance, ensuring that we have an unbiased dataset representing our target population or avoiding the addition of near duplicate samples to our training set.

In addition to a more mature ecosystem of annotation and curation tools, it's now possible to utilize the exceptional capabilities of LLMs, YOLOs and SAMs for pre-annotating data. Consequently, creating a dataset no longer starts from scratch. This shift has resulted in a significant portion of work moving from programming algorithms towards efficiently labeling data using techniques such as few-shot learning (setfit), active learning or other forms of models in the loop.

Tools like Argilla, CVAT and Fiftyone can be used alongside pre-annotated or synthetic data for training, evaluating and monitoring our models. In this scenario, an engineering mindset is crucial—one that understands the iterative nature of the Data Science process—to optimize dataset construction or generation (distillabel).

Industry leaders like Andrew Ng have long advocated for a data-centric approach to modeling. Recently Chip Huyen even suggested that a new role is emerging: The Dataset Engineer.

While I'm not entirely convinced about introducing another term under the broad umbrella of Data Science roles just yet, it is clear that we're all thinking about how to procure high-quality datasets for training our models. Like it or not, a new function is emerging. Initially, this function may be tackled by existing roles such as Data Scientists or Machine Learning Engineers. However, considering the constant evolution of roles and the [emergence](notes/Data%20Science%20job%20crafting.md) emergence of highly specialized and well-compensated positions, we may soon see Dataset Engineering listed as a desired skill in [job postings](notes/Como%20contratar%20DS%20y%20no%20desesperar%20en%20el%20intento.md).





