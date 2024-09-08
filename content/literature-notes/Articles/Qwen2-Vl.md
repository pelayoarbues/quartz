---
author: [[Qwen2]]
title: "Qwen2-Vl"
date: 2024-09-08
tags: 
- articles
- literature-note
---
![rw-book-cover](https://qwen2.org/wp-content/uploads/2024/09/Qwen2-VL.png)

## Metadata
- Author: [[Qwen2]]
- Full Title: Qwen2-Vl
- URL: https://qwen2.org/vl/

## Highlights
- **Qwen2-VL** is the latest addition to the vision-language models in the Qwen series, building upon the capabilities of Qwen-VL. Compared to its predecessor, Qwen2-VL offers:
  • **State-of-the-Art Image Understanding:** Qwen2-VL excels in visual understanding across various resolutions and aspect ratios, achieving top performance on benchmarks like MathVista, DocVQA, RealWorldQA, and MTVQA.
  • **Extended Video Comprehension:** Capable of analyzing videos over 20 minutes long, Qwen2-VL supports high-quality video-based question answering, dialog, and content creation.
  • **Advanced Agent Capabilities:** With its complex reasoning and decision-making skills, Qwen2-VL can be integrated with devices such as mobile phones and robots to perform automated tasks based on visual and textual inputs.
  • **Multilingual Support:** To cater to a global audience, Qwen2-VL understands text in images across multiple languages, including most European languages, Japanese, Korean, Arabic, and Vietnamese, in addition to English and Chinese. ([View Highlight](https://read.readwise.io/read/01j74d7hpssbad5men8smdj8ky))
- 1. **Enhanced Recognition Capabilities**
  Qwen2-VL now features advanced object recognition, moving beyond basic plants and landmarks to understand complex relationships between multiple objects within a scene. The model’s ability to recognize handwritten text and multiple languages in images has also been significantly improved, making it more versatile and accessible to a global audience. ([View Highlight](https://read.readwise.io/read/01j74d7rhzvajqjmhnjtpqdhcc))
- 2. **Visual Reasoning: Solving Real-World Problems**
  In this update, Qwen2-VL’s mathematical and coding skills have been greatly enhanced. The model can analyze images to solve problems, interpret complex mathematical challenges through chart analysis, and accurately interpret highly distorted images. Enhanced capabilities in extracting information from real-world images and charts, coupled with improved instruction-following skills, enable the model to address practical issues, linking abstract concepts with actionable solutions. ([View Highlight](https://read.readwise.io/read/01j74d7y2rr1d6yyzj6rvkb0dm))
- 3. **Video Understanding and Live Chat**
  Qwen2-VL extends its capabilities to video content, offering features such as video summarization, question answering, and real-time conversational support. This makes it a valuable personal assistant that provides insights and information directly from video content, enriching user interaction and support. ([View Highlight](https://read.readwise.io/read/01j74d82rvc2e4shn8j3qs2pjr))
- 4. **Visual Agent Capabilities: Function Calling and Visual Interactions**
  As a visual agent, Qwen2-VL excels in Function Calling, allowing it to access real-time data through external tools by interpreting visual cues, such as flight statuses, weather updates, or package tracking. This integration of visual understanding with functional execution enhances its utility for information management and decision-making.
  Additionally, Visual Interactions represent a significant leap towards emulating human perception. By engaging with visual stimuli as humans do, Qwen2-VL offers more intuitive and immersive interactions, acting not just as an observer but as an active participant in visual experiences.
  Despite these advancements, the model has limitations, including an inability to extract audio from videos, knowledge updates only up to June 2023, and potential inaccuracies in handling complex instructions or scenarios. It also has some weaknesses in tasks involving counting, character recognition, and 3D spatial awareness. ([View Highlight](https://read.readwise.io/read/01j74dgw6vry2fpzem2e6ankhr))
- Qwen Dev Team built upon the Qwen-VL architecture, continuing to utilize a Vision Transformer (ViT) model in combination with Qwen2 language models. Across all variants, we employed a ViT with approximately 600 million parameters, designed to handle both image and video inputs seamlessly. To enhance the model’s ability to perceive and comprehend visual information in videos, we introduced several key upgrades:
  One significant improvement in Qwen2-VL is the implementation of Naive Dynamic Resolution support. Unlike its predecessor, Qwen2-VL can handle arbitrary image resolutions, dynamically mapping them into a varying number of visual tokens. This ensures a consistent relationship between the model’s input and the inherent information within images, closely mimicking human visual perception. This upgrade allows the model to process images of any clarity or size effectively. ([View Highlight](https://read.readwise.io/read/01j74d8sc79e4dvcfzws9sh727))
- Another key architectural enhancement is the introduction of Multimodal Rotary Position Embedding (M-ROPE). This innovation deconstructs the original rotary embedding into three components, representing temporal and spatial (height and width) information. M-ROPE allows the model to simultaneously capture and integrate 1D textual, 2D visual, and 3D video positional information, enhancing the model’s ability to process and understand complex multimodal data. ([View Highlight](https://read.readwise.io/read/01j74d93wbc9tq9649nhptn7hs))
- The 2B and 7B models of the Qwen2-VL series are open-sourced and available on Hugging Face and ModelScope. You can explore their model cards for detailed usage instructions, features, and performance metrics. Below is a simple usage example with HF Transformers.
  Ensure you install Transformers from the source using `pip install git+https://github.com/huggingface/transformers`, as the Qwen2-VL codes were just merged into the main branch. Without this, you may encounter a `KeyError: 'qwen2_vl'`.
  To handle various visual inputs more conveniently, we offer a toolkit that supports base64, URLs, and interleaved images and videos. Install it with: ([View Highlight](https://read.readwise.io/read/01j74dabv62rj31jeynwz2zryv))
- The code for Qwen2-VL is now included in the latest version of Hugging Face Transformers. We recommend building from source using the following command: `pip install git+https://github.com/huggingface/transformers`, as failing to do so might result in the error: `KeyError: 'qwen2_vl'`. ([View Highlight](https://read.readwise.io/read/01j74daj8925fhqqbe0bw61vta))
- Image Resolution for Performance Boost
  The model accommodates a broad spectrum of resolution inputs, utilizing native resolution by default. Higher resolutions can improve performance but require more computational resources. Users can adjust the minimum and maximum number of pixels to optimize their configuration, such as setting a token count range between 256 and 1280, to balance speed and memory usage effectively. ([View Highlight](https://read.readwise.io/read/01j74darktck5ztm47kcvppat8))
- Limitations
  While Qwen2-VL excels in various visual tasks, it is crucial to acknowledge its limitations:
  1. **Lack of Audio Support**: The model does not process audio information within videos.
  2. **Data Timeliness**: The image dataset is current only up to June 2023, so information after this period may not be included.
  3. **Constraints in Recognizing Individuals and Intellectual Property (IP)**: The model’s ability to identify specific individuals or IPs is limited and may not comprehensively cover all well-known personalities or brands.
  4. **Limited Capacity for Complex Instructions**: The model struggles with understanding and executing intricate multi-step instructions.
  5. **Insufficient Counting Accuracy**: Object counting, particularly in complex scenes, lacks high accuracy and needs improvement.
  6. **Weak Spatial Reasoning Skills**: The model struggles with accurately inferring object positions in 3D spaces, making it difficult to judge relative spatial relationships.
  These limitations highlight areas for ongoing model optimization, and we are committed to continually enhancing Qwen2-VL’s performance and capabilities. ([View Highlight](https://read.readwise.io/read/01j74dftxrx1yp3yv2v1bw525p))
