---
author: [[Celeb-A HQ and FFHQ]]
title: "Train Your ControlNet With Diffusers"
date: 2023-10-17
tags: 
- articles
- literature-note
---
![rw-book-cover](https://huggingface.co/blog/assets/136_train-your-controlnet/thumbnail.png)

## Metadata
- Author: [[Celeb-A HQ and FFHQ]]
- Full Title: Train Your ControlNet With Diffusers
- URL: https://huggingface.co/blog/train-your-controlnet

## Highlights
- [ControlNet](https://huggingface.co/blog/controlnet) is a neural network structure that allows fine-grained control of diffusion models by adding extra conditions. The technique debuted with the paper [Adding Conditional Control to Text-to-Image Diffusion Models](https://huggingface.co/papers/2302.05543), and quickly took over the open-source diffusion community author's release of 8 different conditions to control Stable Diffusion v1-5, including pose estimations, depth maps, canny edges, sketches, [and more](https://huggingface.co/lllyasviel). ([View Highlight](https://read.readwise.io/read/01hcyh7b2jj6hrad2rcvqtn125))
- Training your own ControlNet requires 3 steps:
  1. **Planning your condition**: ControlNet is flexible enough to tame Stable Diffusion towards many tasks. The pre-trained models showcase a wide-range of conditions, and the community has built others, such as conditioning on [pixelated color palettes](https://huggingface.co/thibaud/controlnet-sd21-color-diffusers).
  2. **Building your dataset**: Once a condition is decided, it is time to build your dataset. For that, you can either construct a dataset from scratch, or use a sub-set of an existing dataset. You need three columns on your dataset to train the model: a ground truth `image`, a `conditioning_image` and a `prompt`.
  3. **Training the model**: Once your dataset is ready, it is time to train the model. This is the easiest part thanks to the [diffusers training script](https://github.com/huggingface/diffusers/tree/main/examples/controlnet). You'll need a GPU with at least 8GB of VRAM. ([View Highlight](https://read.readwise.io/read/01hcyh7rxnwrg2kbkjv1gc8pb2))
