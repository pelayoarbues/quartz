---
author: [[explosion.ai]]
title: "From PDFs to AI-ready Structured Data: A Deep Dive"
date: 2024-12-03
tags: 
- articles
- literature-note
---
![rw-book-cover](https://explosion.ai/blog/pdfs_social.jpg)

## Metadata
- Author: [[explosion.ai]]
- Full Title: From PDFs to AI-ready Structured Data: A Deep Dive
- URL: https://explosion.ai/blog/pdfs-nlp-structured-data

## Highlights
- PDFs are ubiquitous in industry and daily life. Paper is scanned, documents are sent and received as PDF, and they’re often kept as the archival copy. Unfortunately, processing PDFs is hard. In this blog post, I’ll present a new modular workflow for converting PDFs and similar documents to structured data and show how to build end-to-end document understanding and information extraction pipelines for industry use cases. ([View Highlight](https://read.readwise.io/read/01je4j6xsyecxpwr88ddm963am))
- With more powerful Vision Language Models (VLMs), it’s finally become viable to complete many end-to-end tasks using PDFs as inputs, like question answering or more classic information extraction. This makes it tempting to consider PDF processing “solved” and treat PDF documents like yet another data type. I’ve even heard from people now *converting* plain text to PDFs because their AI-powered tool of choice was designed for PDFs. (Note: Don’t do this!) ([View Highlight](https://read.readwise.io/read/01je4j7100zx1p9ea123jnr06c))
- When working with data, you typically want to operate from a “source of truth” with a structure you can rely on and develop against. This is a big reason why we use relational databases. The problem is, saying “I have the data in a PDF” is about as meaningful as saying “I have it on my computer” – it can mean anything. It may be plain text, scanned photos of text with varying image quality, or a combination of both. The layout properties and images embedded in the document may be extremely relevant, or they may not. All of these things fundamentally change the approach required to extract useful information. Machine learning rarely happens in a vacuum. There’s always an end goal: a product feature or a business question you want to answer. ([View Highlight](https://read.readwise.io/read/01je4j77epmzqtgxdj4w0stevj))
- So I believe it’s crucial to get your data *out of* PDFs as early as possible. If you’re dealing with text, it shouldn’t matter whether it came from a PDF, a Word document or a database. All of these formats are used interchangeably to store the same information. ([View Highlight](https://read.readwise.io/read/01je4j7g0hssxrgm15sg4e3qzs))
- If you use PDFs as the “source of truth” for machine learning, you end up with a monolithic and operationally complex approach. For example, to sort PDFs into different categories, the model has to do many things at once: process the document, find text, extract it where necessary, embed it all, and predict a classification label. And in the case of Retrieval-Augmented Generation (RAG), additionally parse the question, find the relevant document, find the relevant slice of the document and formulate a response. If we remove the document format PDF and its intricacies from the equation, the task suddenly becomes fairly straightforward: text classification, with optional layout features. ([View Highlight](https://read.readwise.io/read/01je4j7jd91ybwy1xjqj3rk52r))
- At their core, many NLP systems consist of relatively flat classifications. You can shove them all into a single prompt, or you can decompose them into smaller pieces that you can work on independently. A lot of classification tasks are actually very straightforward to solve nowadays – but they become vastly more complicated if one model needs to do them all at once. ([View Highlight](https://read.readwise.io/read/01je4j7svmfn5kghfv4t12bfh9))
- These are all considerations that went into developing some of our own workflows for handling PDFs, specifically in the context of Natural Language Processing (NLP) and large-scale information extraction. It’s been one of the bigger missing pieces for smooth, end-to-end NLP in industry and will hopefully be useful for teams working with various input formats, including PDFs, Word documents and scans. ([View Highlight](https://read.readwise.io/read/01je4j7zgadzydjyw9szha8y3n))
- [Docling](https://ds4sd.github.io/docling/) is developed by a team at IBM Research, who have also trained their own layout analysis and table recognition [models](https://huggingface.co/ds4sd/docling-models). It takes a pipeline approach, combining modules for file parsing, layout analysis, Optical Character Recognition (OCR), table structure recognition and postprocessing to generate a unified, structured format. This makes it a great complement to [spaCy](https://spacy.io), which is designed around the structured [`Doc`](https://spacy.io/api/doc) object, a container for linguistic annotations that always map back into the original document. ([View Highlight](https://read.readwise.io/read/01je4j82bcgrsncz1t4d8hwq6e))
- [`spacy-layout`](https://github.com/explosion/spacy-layout) extends spaCy with document processing capabilities for PDFs, Word documents and other formats, and outputs clean, text-based data in a structured format. Document and section layout features are accessible via a `layout` [extension attribute](https://spacy.io/usage/processing-pipelines#custom-components-attributes) and can be [serialized](https://spacy.io/usage/saving-loading#docs) in an efficient binary format. ([View Highlight](https://read.readwise.io/read/01je4j8c47pzycf1ate48vbe76))
- Tables are an interesting case, because conceptually, they’re exactly what we like: structured information, mostly stripped from natural language. However, if we come across them in documents, they typically need to be interpreted *in relation* to the rest of the contents. It’s important to remember here that humans often struggle with interpreting figures, too. We also can’t trust them to [present data well](https://www.reddit.com/r/dataisugly/top/?t=all). ([View Highlight](https://read.readwise.io/read/01je4j8rvk56dmjqf6r23ywqwr))
- Docling uses the [TableFormer](https://arxiv.org/abs/2203.01017) model developed by its team, and tables are integrated into [`spacy-layout`](https://github.com/explosion/spacy-layout) via the layout spans, and the shortcut `doc._.tables`. Each table is anchored into the original document text and also accessible as a [`pandas.DataFrame`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html), a convenient data structure for storing and manipulating tabular data. ([View Highlight](https://read.readwise.io/read/01je4j9509gca44t6yt2kz2pke))
- An important consideration is how to represent the tabular data in the document text, i.e. the `doc.text`, which is plain unicode that’s tokenized and then used by further components in the spaCy [processing pipeline](https://spacy.io/usage/processing-pipelines) for predictions like linguistic attributes, named entities and text categories. By default, a placeholder `TABLE` is used, but this can be customized via a callback function that receives the `DataFrame` and returns its textual representation: ([View Highlight](https://read.readwise.io/read/01je4j9dx3j50h3fbh0zdcs28a))
- This offers many opportunities for preprocessing tabular data to make it easier for a model to to extract information. One hypothesis we want to test is whether we can achieve better results by using a Large Language Model (LLM) to *rephrase* the tabular data as natural language, i.e. sentences, so it becomes more accessible for tasks like question answering or classification. ([View Highlight](https://read.readwise.io/read/01je4j9mbwajdz3a6cjw7vtwtg))
- With a workflow for extracting PDF contents as structured `Doc` objects, we can now choose from an array of NLP techniques, [components](https://spacy.io/usage/processing-pipelines) and pretrained [pipelines](https://spacy.io/models), and fine-tune our own for specific business use cases. We can also take advantage of LLMs and other models to automate data creation and use [human-in-the-loop distillation](https://explosion.ai/blog/human-in-the-loop-distillation) to produce smaller, faster and fully private task-specific components. ([View Highlight](https://read.readwise.io/read/01je4j9zf8a5ev2ynkwg8eds9g))
- Transfer learning is a robust and very scalable method to improve performance with examples specific to your use case. Even just a few hundred task-specific examples can make a meaningful impact, but these examples need to be of high quality and apply the label scheme consistently. In any case, you’ll always want a stable [evaluation](https://explosion.ai/blog/applied-nlp-thinking#utility-vs-accuracy) – as a rule of thumb, we typically recommend 10 samples [per significant figure](https://speakerdeck.com/honnibal/practical-tips-for-bootstrapping-information-extraction-pipelines?slide=76) to avoid reporting meaningless precision. Using models as judges can give you a helpful estimation, but it won’t replace testing your system against questions that you know the answer to. ([View Highlight](https://read.readwise.io/read/01je4ja5mk64q33sdx0epyv41r))
- The [`prodigy-pdf`](https://prodi.gy/docs/plugins#pdf) plugin adds text- and image-based workflows for annotating and transcribing PDF documents, including for selecting document sections, correcting OCR results and adding or correcting spans in the document text. ([View Highlight](https://read.readwise.io/read/01je4jamm0cd09y332tva010sz))
- The [`pdf.spans.manual`](https://prodi.gy/docs/plugins#pdf-spans.manual) recipe extracts the PDF contents as text and presents it side-by-side with the original document layout. This example uses “focus mode” and walks through the document section by section. The original layout span and its bounding box coordinates are preserved in the data, in case you need to reference them later on. ([View Highlight](https://read.readwise.io/read/01je4jaqm2qan7hygs79jcktfh))
- An alternative approach to PDF annotation is to take the pre-selection one step further and start by highlighting the relevant parts of the document visually using a recipe like [`pdf.image.manual`](https://prodi.gy/docs/plugins#pdf). This can be helpful if the documents contain a lot of information that’s not relevant for the task, like design elements or images. The bounding boxes don’t have to be exact, making the process relatively quick, and can later be extracted individually, e.g. to correct the OCR transcription. ([View Highlight](https://read.readwise.io/read/01je4jax0qm2n1pyqc44vmak7a))
- While multi-step workflows may sound like more work, experiments have shown that breaking down tasks into simpler questions can make overall annotation up to [10 times faster](https://explosion.ai/blog/sp-global-commodities#workflow), even if it means making more than one pass over the data. This makes sense: you’re reducing the cognitive load and helping the human focus, thus making them significantly faster in total. ([View Highlight](https://read.readwise.io/read/01je4jb1gnexmxm64j7a6fjbqw))
- When designing efficient workflows to handle documents with layout information, it’s important to examine the role the layout plays in the overall context. Layout and visual cues help us humans convey and understand information, which makes them feel very important. But it helps to take a step back and ask if it *actually* matters for the task at hand. In many cases, you’ll find that it’s much less relevant for the model than you think. ([View Highlight](https://read.readwise.io/read/01je4jb7kw98c905m8qg9z6vq5))
- It’s also worth considering that learning from layout features will make the model worse at generalizing to new documents. If you want the model to make the same predictions on two documents that are formatted differently, it’s best to *abstract away* the layout. The less incidental information you can give to the model, the better. However, for cases where documents mostly follow the same structure, incorporating layout information can be very beneficial to the model. Doing your own annotation early on can help you make this decision, so it’s a vital part of the development process. ([View Highlight](https://read.readwise.io/read/01je4jbavvk697e913vptrnzyr))
- With this modular approach, you’re able to separately improve the information extraction components and train them on data extracted from PDFs, or other sources to increase the size of your training corpus. You can also work on only the PDF extraction logic by adding fix-up rules and modifying the `Doc` before it is processed by the model. ([View Highlight](https://read.readwise.io/read/01je4jbjebqjrsstm8hs2y0wb2))
- Robust extraction workflows should ideally be *non-destructive*: the result should represent the original document as accurately as possible and at any stage of the process, you should be able to relate annotations back to the original input. This is also a core principle of spaCy’s data structures and [tokenization](https://spacy.io/usage/linguistic-features#tokenization), and is reflected in the `Doc` object and layout spans created by `spaCyLayout`. ([View Highlight](https://read.readwise.io/read/01je4jbm52tt3cs1v53pkra1zv))
- For instance, when you process the `Doc` with a [named entity recognition](https://spacy.io/usage/linguistic-features#named-entities) component, the created entity spans are pointers into the document and can be matched up with layout sections, which are also pointers to document slices: ([View Highlight](https://read.readwise.io/read/01je4jbzghm34tnmjc9ck808xk))
- Docling runs at 1-3 pages per second on CPU, which makes it feasible to do PDF extraction in the loop during annotation and at runtime. Processing speeds will likely improve further once support for GPU is added. spaCy is very fast, so the overhead it adds is absolutely minimal. ([View Highlight](https://read.readwise.io/read/01je4jc4pt0bp1b7e8n76j5p3s))
- Accuracy on your specific task will depend on the document type. Docling’s layout analysis model is based on their [DocLayNet](https://dl.acm.org/doi/10.1145/3534678.3539043) corpus, a human-annotated dataset for document-layout segmentation, as well as other proprietary datasets. There’s a high representation of scientific and financial documents, as well as company reports, which indicates that it’ll translate well to many common industry use cases. ([View Highlight](https://read.readwise.io/read/01je4jcgm8mmk0af2z7crev59m))

