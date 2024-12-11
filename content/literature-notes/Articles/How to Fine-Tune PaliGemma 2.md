---
author: [[Piotr Skalski]]
title: "How to Fine-Tune PaliGemma 2"
date: 2024-12-11
tags: 
- articles
- literature-note
---
![rw-book-cover](https://blog.roboflow.com/content/images/2024/12/img-blog-fine-tune-paligemma2-v3.png)

## Metadata
- Author: [[Piotr Skalski]]
- Full Title: How to Fine-Tune PaliGemma 2
- URL: https://blog.roboflow.com/fine-tune-paligemma-2/

## Highlights
- [PaliGemma 2](https://arxiv.org/abs/2412.03555?ref=blog.roboflow.com), released by Google on December 5th, 2024, is an updated and significantly enhanced version of the [PaliGemma](https://blog.roboflow.com/how-to-fine-tune-paligemma/) vision-language model (VLM) introduced earlier this year. ([View Highlight](https://read.readwise.io/read/01jetpvg371haterbjbekr453x))
- PaliGemma 2 combines a SigLIP-So400m vision encoder with a Gemma 2 language model to process images and text. The SigLIP-So400m encoder processes an image at various resolutions (224px, 448px, or 896px) and outputs a sequence of image tokens. These tokens are then linearly projected and combined with input text tokens.
  Finally, the Gemma 2 language model, ranging in size from 2B to 27B parameters, processes these combined tokens and autoregressively generates output text tokens.
  ![](https://blog.roboflow.com/content/images/2024/12/Screenshot-2024-12-10-at-19.43.34.png) ([View Highlight](https://read.readwise.io/read/01jetpvm6rwngf1k7578h5g5zh))
- Annotate Data for PaliGemma 2 Fine-Tuning
  For this example, we'll train PaliGemma 2 to analyze pallet manifests, which are documents that provide detailed information about the contents of a shipment on a pallet. We used 50 such documents to create [this dataset](https://universe.roboflow.com/roboflow-jvuqo/pallet-load-manifest-json?ref=blog.roboflow.com), allocating 30 to the training set, 10 to the validation set, and 10 to the test set.
  ![](https://blog.roboflow.com/content/images/2024/12/download---2024-12-10T172159.937.png) ([View Highlight](https://read.readwise.io/read/01jetpvtyjnbh8bfjcq38jxhwc))
- The documents in the training set were printed and then photographed at different angles, under various lighting conditions, and with varying degrees of damage. Each document in the training set was used 5 times, resulting in 150 images in the training set.  Each document in the test and validation sets was photographed once, but under different lighting conditions and with varying degrees of damage.  
  The photos were then uploaded to Roboflow, where we created a [multi-modal](https://blog.roboflow.com/multimodal-dataset-labeling/) project and performed the annotations. The label at this point is a string representing a valid JSON containing all the information found on the document, such as route ID, shipment ID, delivery address, and product list. ([View Highlight](https://read.readwise.io/read/01jetpw56e44hj2j3tm4mxz2nq))
- The downloaded dataset includes three subsets: train, test, and valid. Each subset contains images and an `annotations.jsonl` file. Regardless of the task, each dataset should be prepared in the [JSONL format](https://roboflow.com/formats/paligemma-jsonl?ref=blog.roboflow.com), where each line of the file is a valid JSON object. 
  Each JSON object has three keys: image, prefix, and suffix. The image key holds the name of the image file associated with the data entry. The prefix key contains the prompt that will be sent to PaliGemma2, while the suffix key stores the expected output.
  ![](https://blog.roboflow.com/content/images/2024/12/GeHsEd1WcAAtRf3.jpeg) ([View Highlight](https://read.readwise.io/read/01jetpwgrtq619qh0qbeab5c84))
- To utilize our dataset during training, we need to load it. We'll build a `JSONLDataset` class based on the [PyTorch Dataset](https://pytorch.org/tutorials/beginner/basics/data_tutorial.html?ref=blog.roboflow.com) class, implementing the required methods. ([View Highlight](https://read.readwise.io/read/01jetpwrafrc2gza6beg52fxg1))
- PaliGemma 2 offers 9 pre-trained models with sizes of 3B, 10B, and 28B parameters, and resolutions of 224px, 448px, and 896px pixels. Choosing the appropriate baseline checkpoint is crucial for optimal performance and depends on several key factors: ([View Highlight](https://read.readwise.io/read/01jetpwy12f3dcpse5zjn81ykc))
- - Specific vision-language task: For tasks involving text, document, chart, or screen understanding, like ST-VQA, TallyQA, TextCaps, and TextVQA, prioritize higher resolution checkpoints (448px or 896px). These tasks benefit from the enhanced visual detail. If your task requires complex reasoning or multilingual capabilities, opt for checkpoints with larger language models (10B or 28B) even if it involves using a lower resolution.
  - Available hardware: The table below provides insights into the relative training cost for various model sizes and resolutions. Increasing either factor significantly increases the computational demand. Select a checkpoint that aligns with your hardware's capabilities.
  - Amount of data you have: Larger language models typically require more data for effective fine-tuning. Starting with a smaller model might be more appropriate if you have a limited dataset.
  ![](https://blog.roboflow.com/content/images/2024/12/Screenshot-2024-12-10-at-19.52.21.png) ([View Highlight](https://read.readwise.io/read/01jetpxag4xsw4wkba2jmge8zn))
- Fine-tuning large [vision-language models](https://roboflow.com/model-task-type/vision-language?ref=blog.roboflow.com) like PaliGemma 2 can be resource-intensive. To put this into perspective, the largest variant of the recent [YOLOv11](https://blog.roboflow.com/yolov11-how-to-train-custom-data/) object detection model (YOLOv11x) has 56.9M parameters. In contrast, PaliGemma 2 models range from 3B to 28B parameters, making them significantly larger and more demanding to train. Employing memory optimization techniques is crucial for reducing costs associated with high-end hardware. Here are some strategies to consider: ([View Highlight](https://read.readwise.io/read/01jetpxmt6ze32tctefmdtw6vt))
- LoRA (Low-Rank Adaptation)
  LoRA is a technique that makes fine-tuning large language models more efficient. Instead of adjusting all the parameters in the model, LoRA focuses on optimizing a smaller set of parameters. 
  LoRA adds a smaller matrix to the large matrix representing the model's weights. This smaller matrix is easier to train and requires less memory. By adjusting only this smaller matrix, LoRA can effectively fine-tune the model while significantly reducing the memory footprint during training. 
  This method often achieves performance close to full fine-tuning, where all parameters are adjusted, but with much less memory usage. ([View Highlight](https://read.readwise.io/read/01jetpxx8rkkc8zy48fqf2yrph))
- QLoRA (Quantized LoRA)
  QLoRA combines LoRA with 4-bit quantization, further reducing memory usage. It quantizes the pre-trained model weights to 4-bit precision, keeping only the LoRA parameters in full precision. This allows for training even larger models on limited hardware.
  ![](https://blog.roboflow.com/content/images/2024/12/Screenshot-2024-12-10-at-19.53.52.png) ([View Highlight](https://read.readwise.io/read/01jetpy0pb0v9ykqm6w7tqmww2))
- Freezing the Vision Encoder
  For tasks primarily focused on language processing with visual input, consider freezing the weights of the vision encoder (SigLIP). This prevents the vision encoder's weights from being updated during training, reducing the number of trainable parameters and memory requirements. ([View Highlight](https://read.readwise.io/read/01jetpy9d60pap8fhfpx7h6004))
- Here are some key hyperparameters:
  - `num_train_epochs`: The number of times the model will iterate over the entire training dataset. Increasing this value may improve performance but also increase training time and potentially lead to overfitting.
  - `per_device_train_batch_size`: The number of training examples used in each iteration on each device. Increasing this value can improve training speed and stability, but it requires more memory.
  - `gradient_accumulation_steps`: The number of steps to accumulate gradients before performing a weight update. This effectively increases the batch size without requiring more memory. Increasing this value can improve stability with smaller batch sizes but may slow down training.
  - `learning_rate`: Controls the step size taken during optimization. Increasing this value may speed up learning but can lead to instability or overshooting the optimal solution.
  - `weight_decay`: A regularization technique that prevents overfitting by adding a penalty to the model's weights. Increasing this value can help prevent overfitting but may also limit the model's ability to learn complex patterns. ([View Highlight](https://read.readwise.io/read/01jetpyr52f68ss3eamx1k9wdt))
- Extra: Preparing Data for PaliGemma 2 Object Detection Training
  To fine-tune PaliGemma 2 for object detection, the overall structure of the dataset remains the same, but the prefix and suffix fields within the JSONL files require adjustments. 
  In the prefix, use the keyword detect followed by a semicolon-separated list of the object classes you want to detect. For example, `detect person; car; bicycle`. The suffix should contain the detection results, with each object represented by its bounding box and class name. The bounding box is formatted as `<loc{Y1}><loc{X1}><loc{Y2}><loc{X2}>`, where `X1`, `Y1`, `X2`, and `Y2` are the normalized coordinates of the top-left and bottom-right corners of the box, respectively. These coordinates are normalized to an image size of 1024x1024 and each value should have 4 digits (padded with zeros if necessary) ([View Highlight](https://read.readwise.io/read/01jetpz7gdnxd7wba3mf3hxdsy))
- For a detailed walkthrough of the object detection fine-tuning process, refer to our PaliGemma object detection fine-tuning tutorial recorded a few months ago. This tutorial provides a step-by-step guide to fine-tuning PaliGemma 2 for object detection, including data preparation, model training, and evaluation. ([View Highlight](https://read.readwise.io/read/01jetpzd1jtt7es7x13gf6jsdq))
- Fine-tuning PaliGemma2 for instance segmentation requires a slightly different approach to data preparation. In addition to the standard image and annotation data, we utilize a specialized encoding scheme for the segmentation masks.
  Gemma2's encoder has been expanded with 128 new entries (`<seg000>` to `<seg127>`) representing codewords. These codewords are used by a lightweight referring-expression segmentation vector-quantized variational auto-encoder (VQ-VAE) to efficiently represent segmentation masks. This VQ-VAE model acts as a separate, smaller model solely for converting annotation masks into text labels. ([View Highlight](https://read.readwise.io/read/01jetpzzwz96wvb0wbxsfmmd10))
- This tutorial provided a comprehensive guide to fine-tuning PaliGemma 2 for extracting JSON data from images. We addressed key steps including dataset preparation in the JSONL format, efficient model loading with techniques like LoRA and QLoRA, and the training process. 
  PaliGemma 2's architecture, combining a vision encoder with a language model, enables adaptation to diverse tasks through fine-tuning. The availability of various model sizes and resolutions allows for selecting a checkpoint that balances performance with computational constraints.
  Further examples of fine-tuning PaliGemma 2 for tasks such as object detection, LaTeX OCR, and more can be found in the accompanying notebooks. These resources demonstrate how to leverage PaliGemma 2's capabilities for different computer vision problems. For streamlined [training and experimentation with VLMs](https://blog.roboflow.com/fine-tune-florence-2-vqa/), consider utilizing tools like Roboflow and the open-source [`maestro`](https://github.com/roboflow/maestro?ref=blog.roboflow.com) package. ([View Highlight](https://read.readwise.io/read/01jetq09j626ef3g7kqtps32ca))


