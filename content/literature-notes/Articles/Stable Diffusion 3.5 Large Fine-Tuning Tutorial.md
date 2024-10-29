---
author: [[Notion]]
title: "Stable Diffusion 3.5 Large Fine-Tuning Tutorial"
date: 2024-10-24
tags: 
- articles
- literature-note
---
![rw-book-cover](https://www.notion.so/images/meta/default.png)

## Metadata
- Author: [[Notion]]
- Full Title: Stable Diffusion 3.5 Large Fine-Tuning Tutorial
- URL: https://stabilityai.notion.site/Stable-Diffusion-3-5-Large-Fine-tuning-Tutorial-11a61cdcd1968027a15bdbd7c40be8c6

## Highlights
- ![](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4e8dae13-2612-4518-91a4-53485ccdba7c%2F2af8625c-11c7-4d36-b6a3-1a5d1d3aaa6f%2Fimage.png?table=block&id=12561cdc-d196-802f-b08d-d43522ea4341&spaceId=4e8dae13-2612-4518-91a4-53485ccdba7c&width=660&userId=&cache=v2) ([View Highlight](https://read.readwise.io/read/01jaxh45mgjtvybvb0tfnvefyc))
- Most of this guide is catered towards training LoRA models on SD3.5 Large. However, I also provide [configurations](https://stabilityai.notion.site/11a61cdcd1968027a15bdbd7c40be8c6?pvs=25#12461cdcd19680788a23c650dab26b93) that will allow you to perform full fine-tuning (with the help of DeepSpeed). This is still pretty experimental, but I can at least help you get the training up and running. The environment setup and training script should remain agnostic of which model (SD3.5 M/L) is being trained. ([View Highlight](https://read.readwise.io/read/01jaxh4rct7fgmnnrkd17xc1qz))
- Once again, out of the tools available, I’ve chosen to go with [SimpleTuner](https://github.com/bghira/SimpleTuner) toolkit from [bghira](https://github.com/bghira) (developer of SimpleTuner) as it gave me the best results. As such, I won’t be covering tools from kohya-ss ([sd-scripts](https://github.com/kohya-ss/sd-scripts)), Nerogar ([OneTrainer](https://github.com/Nerogar/OneTrainer)), or Hugging Face ([diffusers](https://huggingface.co/docs/diffusers/en/index)). ([View Highlight](https://read.readwise.io/read/01jaxh509hjq0z78jp5pe3vae3))
- Just for reference, SimpleTuner uses the diffusers library as a backend, and that’s how I was able to fine-tune SD3.5 Large using a recent commit of SimpleTuner and a custom version of diffusers. ([View Highlight](https://read.readwise.io/read/01jaxh56pnq4c2em7cahfbfa40))
- If you need help automatically pre-cropping your images, this is a lightweight, barebones [script](https://github.com/kasukanra/autogen_local_LLM/blob/main/detect_utils.py) I wrote to do it. It will find the best crop depending on:
  1. Is there a human face in the image? If so, we’ll do the cropping oriented around that region of the image.
  2. If there is no human face detected, we’ll do the cropping using a saliency map, which will detect the most interesting region of the image. Then, a best crop will be extracted centered around that region. ([View Highlight](https://read.readwise.io/read/01jaxh89b1qkxq3j7whycbryyj))
- I’ll be showing results from several fine-tuned LoRA models of varying dataset size to show that the settings I chose generalize well enough to be a good starting point for fine-tuning LoRA. ([View Highlight](https://read.readwise.io/read/01jaxh8zf509y0mv7py7306ze7))
- repeats duplicates your images (and optionally rotates, changes the hue/saturation, etc.) and captions as well to help generalize the style into the model and prevent overfitting. While SimpleTuner supports caption dropout (randomly dropping captions a specified percentage of the time), it doesn’t support shuffling tokens (tokens are kind of like words in the caption) as of this moment, but you can simulate the behavior of kohya’s [sd-scripts](https://github.com/kohya-ss/sd-scripts) where you can [shuffle tokens](https://github.com/kohya-ss/sd-scripts/blob/25f961bc779bc79aef440813e3e8e92244ac5739/docs/config_README-en.md?plain=1#L146) while [keeping](https://github.com/kohya-ss/sd-scripts/blob/25f961bc779bc79aef440813e3e8e92244ac5739/docs/config_README-en.md?plain=1#L143) an n amount of tokens in the beginning positions. Doing so helps the model not get too fixated on extraneous tokens. ([View Highlight](https://read.readwise.io/read/01jaxh98s0f7qgkzmq93mqsves))
- There are 476 images in the fantasy art dataset. Add on top of the 5 repeats from multidatabackend.json . I chose a train_batch_size of 6 for two reasons:
  1. This value would let me see the progress bar update every second or two.
  2. It’s large enough in that it can take 6 samples in one iteration, making sure that there is more generalization during the training process. ([View Highlight](https://read.readwise.io/read/01jaxha809d2q9waajy5jrpqjf))
- If I wanted 30 or something epochs, then the final calculation would be this:
  Max training steps=(476×56)×30\text{Max training steps} = \left(\frac{\text{476} \times \text{5}}{\text{6}}\right) \times \text{30}Max training steps=(6476×5​)×30
  This equals 11,900 steps, more or less. ([View Highlight](https://read.readwise.io/read/01jaxhagk5awq5bt6hr35zr7a9))
- Personally, I received very satisfactory results using a higher LoRA rank and alpha. You can watch the more recent videos on my YouTube [channel](https://youtube.com/@kasukanra) for a more precise heuristic breakdown of how image fidelity increases the higher you raise the LoRA rank (in my opinion). ([View Highlight](https://read.readwise.io/read/01jaxhb3zwk7hpwrh7d3vsb8f9))
- Anyway, If you don’t have the VRAM, storage capacity, or time to go so high, you can choose to go with a lower value such as 256 or 128 . ([View Highlight](https://read.readwise.io/read/01jaxhbe4g6m151hqvn9tq4w67))
- ![](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4e8dae13-2612-4518-91a4-53485ccdba7c%2Fa5f404ff-e50b-455d-8153-fb6ef7ed2c78%2Fimage.png?table=block&id=12361cdc-d196-8072-9d93-ff90661fcf46&spaceId=4e8dae13-2612-4518-91a4-53485ccdba7c&width=1420&userId=&cache=v2) ([View Highlight](https://read.readwise.io/read/01jaxhbqjkm7sfnx5mx6xea9e0))
- With the settings of batch size of 6 and a lora rank/alpha of 768, the training consumes about 32 GB of VRAM. ([View Highlight](https://read.readwise.io/read/01jaxhdjfqnzkcx3bz7mqa0x7p))
- Understandably, this is out of the range of consumer 24 GB VRAM GPUs. As such, I tried to decrease the memory costs by using a batch size of 1 and lora rank/alpha of 128 . ([View Highlight](https://read.readwise.io/read/01jaxhdpsrac09qvf5pzrtpj51))
- To be safe, you might have to decrease the lora rank/alpha even further to 64. If so, you’ll consume around 18.83 GB of VRAM during training. ([View Highlight](https://read.readwise.io/read/01jaxhdxdf2t21kfs4y801te8f))
- These are the figures that I received from my fantasy art LoRA training. Loss is decreasing and hasn’t converged yet. However, if you have some experience with fine-tuning diffusion models, minimizing loss has almost nothing to do with maximizing aesthetics. Also, I noticed that near the peaks of the loss curve, pixelation or degradation in validation images may occur, if using a high learning rate. This makes sense as training reaches a learning rate that the model weights aren’t comfortable with. ([View Highlight](https://read.readwise.io/read/01jaxhek88t00ww6f0tcfskw7c))
- ![](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4e8dae13-2612-4518-91a4-53485ccdba7c%2Fa896482a-4e3a-4bc5-9600-a78b32f49b28%2Fimage.png?table=block&id=12561cdc-d196-8091-a5a3-f4df89c4ae3d&spaceId=4e8dae13-2612-4518-91a4-53485ccdba7c&width=1420&userId=&cache=v2) ([View Highlight](https://read.readwise.io/read/01jaxheyzjbnb2mygev1eyvjx4))
- ![](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4e8dae13-2612-4518-91a4-53485ccdba7c%2F58bd3b25-ab8e-45e0-8847-34d624204229%2Fimage.png?table=block&id=12561cdc-d196-803d-a6b5-e6410402d5f5&spaceId=4e8dae13-2612-4518-91a4-53485ccdba7c&width=1420&userId=&cache=v2) ([View Highlight](https://read.readwise.io/read/01jaxhf18c69e1gjd7pfw0qma5))
- Once you’ve found the LoRA checkpoint that gives you the best aesthetic results, you can further improve it with APG scaling. APG scaling stands for adaptive projected guidance. ([View Highlight](https://read.readwise.io/read/01jaxhfdzqpsnajqkj1nxtxb7c))
- Our approach, termed adaptive projected guidance (APG), retains the quality-boosting advantages of CFG while enabling the use of higher guidance scales without oversaturation. APG is easy to implement and introduces practically no additional computational overhead to the sampling process. ([View Highlight](https://read.readwise.io/read/01jaxhfwr2gxg9ah9j04p67zrx))
- ![](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4e8dae13-2612-4518-91a4-53485ccdba7c%2Fc41e4924-19db-4f5b-aa4c-ef1aa87d840e%2FComfyUI_temp_okvik_00013_.png?table=block&id=12561cdc-d196-8069-8e9b-f9e476a42ecf&spaceId=4e8dae13-2612-4518-91a4-53485ccdba7c&width=410&userId=&cache=v2) ([View Highlight](https://read.readwise.io/read/01jaxhg1gz6xvg7s4mmkw46yxg))
- ![](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4e8dae13-2612-4518-91a4-53485ccdba7c%2Fc41e4924-19db-4f5b-aa4c-ef1aa87d840e%2FComfyUI_temp_okvik_00013_.png?table=block&id=12561cdc-d196-8069-8e9b-f9e476a42ecf&spaceId=4e8dae13-2612-4518-91a4-53485ccdba7c&width=410&userId=&cache=v2) ([View Highlight](https://read.readwise.io/read/01jaxhg1peqr1aseg87hfvv2cv))
- ![](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4e8dae13-2612-4518-91a4-53485ccdba7c%2F9f2673ce-47f1-490a-b43b-59b70a07f85f%2Fimage.png?table=block&id=12561cdc-d196-80d1-a785-feb08d6db09b&spaceId=4e8dae13-2612-4518-91a4-53485ccdba7c&width=410&userId=&cache=v2) ([View Highlight](https://read.readwise.io/read/01jaxhg4j0vx8ram4ga3qe0n8c))
- ![](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4e8dae13-2612-4518-91a4-53485ccdba7c%2F9f2673ce-47f1-490a-b43b-59b70a07f85f%2Fimage.png?table=block&id=12561cdc-d196-80d1-a785-feb08d6db09b&spaceId=4e8dae13-2612-4518-91a4-53485ccdba7c&width=410&userId=&cache=v2) ([View Highlight](https://read.readwise.io/read/01jaxhg4qkbkxzr2t2bpqrz4es))
- ![](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4e8dae13-2612-4518-91a4-53485ccdba7c%2Ff197b2f2-bd22-43b3-9aa2-aa0104c89ab1%2Fimage.png?table=block&id=12561cdc-d196-80a2-b456-db872938970d&spaceId=4e8dae13-2612-4518-91a4-53485ccdba7c&width=410&userId=&cache=v2) ([View Highlight](https://read.readwise.io/read/01jaxhg8ghkykk7vnf8xags9nf))
- ![](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4e8dae13-2612-4518-91a4-53485ccdba7c%2Ff197b2f2-bd22-43b3-9aa2-aa0104c89ab1%2Fimage.png?table=block&id=12561cdc-d196-80a2-b456-db872938970d&spaceId=4e8dae13-2612-4518-91a4-53485ccdba7c&width=410&userId=&cache=v2) ([View Highlight](https://read.readwise.io/read/01jaxhg8k2nt9xfm7s1xny6v3f))
- A commonly believed heuristic that we verified once again during the construction of the SD3.5 family of models is that later/higher layers (i.e. 30 - 37)* impact tertiary details more heavily. Conversely, earlier layers (i.e. 12 - 24 )* influence the overall composition/primary form more. ([View Highlight](https://read.readwise.io/read/01jaxhhm1tjzah37vgat5j3qvk))
- In preliminary testing, we observed that freezing the last few layers of the architecture significantly improved model training when using a photorealistic dataset, preventing detail degradation introduced by small dataset from happening. ([View Highlight](https://read.readwise.io/read/01jaxhhpggsfe2pebznv1ww58v))
- To dampen any possible degradation of anatomy, training only the attention layers and not the adaptive linear layers could help. For reference, below is one of the transformer blocks. ([View Highlight](https://read.readwise.io/read/01jaxhhzcnhf5kc0z4t2nbts8r))