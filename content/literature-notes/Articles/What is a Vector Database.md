---
author: [[Frank Liu]]
title: "What is a Vector Database?"
tags: 
- articles
- literature-note
---
# What is a Vector Database?

![rw-book-cover](https://assets.zilliz.com/Apr_15_Vector_Database_A_Complete_Introduction8_index_types_95e80455d6.png)

## Metadata
- Author: [[Frank Liu]]
- Full Title: What is a Vector Database?
- Category: #articles
- URL: https://zilliz.com/learn/what-is-vector-database

## Highlights
- Being able to search across images, video, text, audio, and other forms of unstructured data via their content rather than human-generated labels or tags is exactly what vector databases were meant to solve. ([View Highlight](https://read.readwise.io/read/01h4dm9103rerbqscn8b75c0ae))
- An increasing number of traditional relational databases, and search systems such as Clickhouse and Elasticsearch are including built-in vector search plugins. Elasticsearch 8.0, for example, includes vector insertion and ANN search functionality that can be called via restful API endpoints. The problem with vector search plugins should be clear as night and day - **these solutions do not take a full-stack approach to embedding management and vector search**. Instead, these plugins are meant to be enhancements on top of existing architectures, thereby making them limited and unoptimized. Developing an unstructured data application atop a traditional database would be like trying to fit lithium batteries and electric motors inside a the frame of a gas-powered car - not a great idea! ([View Highlight](https://read.readwise.io/read/01h4dm55eer75vyrwhgerpdy55))
- ikewise, vector databases are composed of a number of evolving software components. Roughly speaking, these can be broken down into the storage, the index, and the service. Although these three components are tightly integrated[[2]](https://zilliz.com/learn/what-is-vector-database#fn2), companies such as Snowflake have shown the broader storage industry that "shared nothing" database architectures are arguably superior to the traditional "shared storage" cloud database models. Thus, the first technical challenge associated with vector databases is *designing a flexible and scalable data model*. ([View Highlight](https://read.readwise.io/read/01h4dm6jsx3nvpzrdqtvjante8))
- With data already stored in a vector database, being able to search across that data, i.e. querying and indexing, is the next important component. The compute-heavy nature of machine learning and multi-layer neural networks has allowed GPUs, NPUs/TPUs, FPGAs, and other general purpose compute hardware to flourish. Vector indexing and querying is also compute-heavy, operating at maximum speed and efficiency when run on accelerators. This diverse set of compute resources gives way to the second main technical challenge, *developing a heterogeneous computing architecture*. ([View Highlight](https://read.readwise.io/read/01h4dm6zt5zd3yr2waj06ecn25))
- he last step is making sure your application can, well, read from the database - this ties closely into the API and user interface bullet points mentioned in the first section. While a new category of database necessitates a new architecture in order to extract maximal performance at minimal cost, the majority of vector database users are still acclimated to traditional CRUD operations (e.g. `INSERT`, `SELECT`, `UPDATE`, and `DELETE` in SQL). Therefore, the final primary challenge is *developing a set of APIs and GUIs that leverage existing user interface conventions* while maintaining compatibility with the underlying architecture. ([View Highlight](https://read.readwise.io/read/01h4dm780p35nbs54839815djg))
- • High-dimensional search: Vector databases can efficiently perform similarity searches on high-dimensional vectors, commonly used in machine learning and AI applications, such as image recognition, natural language processing, and recommendation systems.
  • Scalability: Vector databases can scale horizontally, efficiently storing and retrieving large amounts of vector data. Scalability is significant for applications that require real-time search and retrieval of large amounts of data.
  • Flexibility: Vector databases can handle various vector data types, including sparse and dense vectors. They can also handle multiple data types, including numerical, text, and binary.
  • Performance: Vector databases perform similarity searches efficiently, often providing faster search times than traditional databases.
  • Customizable indexing: Vector databases allow custom indexing schemes for specific use cases and data types. ([View Highlight](https://read.readwise.io/read/01h4dm7j9bnzx1v3fvtzfz835w))
