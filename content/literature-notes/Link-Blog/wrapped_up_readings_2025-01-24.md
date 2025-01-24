---
title: Wrapped-up Readings 2025-01-24
date: 2025-01-24
tags:
  - link-blog
---

This week’s readings span a mix of AI, data science, real estate, and economics, highlighted by major announcements like Spain’s ALIA project and the U.S.-led Stargate initiative. 

These two efforts underscore contrasting strategies: while the U.S. focuses on scaling infrastructure with private-sector leadership, Spain’s centralized approach aims to tackle linguistic inclusivity in AI. However, ALIA’s closed nature and lack of transparency in its training process raise concerns. I firmly believe the public sector should prioritize defending citizens’ rights by developing rigorous benchmarks tailored to specific population segments, including minority languages, people with disabilities, and unique regional cultures. 

On another note, Trumpcoin appears to be yet another attempt to undermine U.S. institutions—a long-term strategy to devalue the dollar’s power while enabling politicians to consolidate wealth and influence in a shift from nation-states to decentralized systems.

## AI
- [ALIA: Spanish AI models](https://huggingface.co/BSC-LT/ALIA-40b): The article from Hugging Face details the pre-training process for the BSC-LT/ALIA-40b language model, utilizing data from 35 European languages and 92 programming languages. The initial training involved 2.4 trillion tokens, adjusting proportions to emphasize Spain's co-official languages. The model's performance is evaluated using Spanish, Catalan, Basque, Galician, and English tasks from various benchmarks.
- [Announcing the Stargate Project](https://openai.com/index/announcing-the-stargate-project/): OpenAI has announced the Stargate Project, which involves investing $500 billion over the next four years to build AI infrastructure in the U.S. The initiative, starting with an immediate $100 billion investment, aims to support American re-industrialization and national security. Initial equity funders include SoftBank, OpenAI, Oracle, and MGX, with SoftBank and OpenAI leading. Key tech partners like Arm, Microsoft, NVIDIA, Oracle, and OpenAI are involved, with activities starting in Texas. The project emphasizes collaboration with firms in the data center infrastructure sector.
- [Cisco Unveils AI Defense to Secure the AI Transformation of Enterprises](https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2025/m01/cisco-unveils-ai-defense-to-secure-the-ai-transformation-of-enterprises.html?utm_source=www.therundown.ai&utm_medium=newsletter&utm_campaign=ai-pioneer-launches-new-agi-lab&_bhlid=3a266764898ad8b1a9a8ffb3b357f3409cd647ca): Cisco has launched AI Defense, a comprehensive solution designed to secure AI applications and protect enterprises during their AI transformation. This end-to-end solution addresses evolving threats that existing security measures can't handle, such as data leaks and unauthorized use of AI tools. It provides capabilities like model validation and runtime security, offering continuous protection against threats like prompt injection and denial of service. AI Defense also extends visibility and access control, crucial for preventing data leakage and maintaining compliance as AI applications proliferate within organizations.
- [Ask Me Anything: A Simple Strategy for Prompting Language Models](https://arxiv.org/abs/2210.02441): The paper "Ask Me Anything: A Simple Strategy for Prompting Language Models" discusses a method to enhance the performance of large language models (LLMs) on new tasks using natural language prompts. Traditional prompting can be fragile, requiring meticulous design, as minor prompt changes may significantly affect results. The proposed strategy, titled ASK ME ANYTHING (AMA), suggests generating multiple effective yet imperfect prompts and aggregating them. This method leverages question-answering formats, favoring open-ended prompts over restrictive ones. AMA utilizes weak supervision to combine the outputs of these prompts to improve prediction accuracy.
- [Breaking News: AGI Is Not Imminent!](https://garymarcus.substack.com/p/breaking-news-agi-is-not-imminent): In the article by Gary Marcus, there is a surge of claims that artificial general intelligence (AGI) is imminent, with influencers and figures like Sam Altman suggesting rapid progress toward its development. Altman, who recently implied confidence in building AGI, later retracted his statements, reminiscent of deceptive overconfidence seen in figures like Elizabeth Holmes. The excitement and subsequent retraction highlight the ongoing debate and uncertainty about the timeline for achieving AGI.
- [The Rise of Synthetic Respondents in Market Research:](https://nielseniq.com/global/en/insights/education/2024/the-rise-of-synthetic-respondents/)The article discusses the increasing use of synthetic respondents, or machine learning-generated personas, in market research. These artificial respondents can quickly evaluate new product concepts, saving time and resources. However, the rush to develop these tools raises concerns about data integrity and reliability, as not all synthetic outputs are accurate or actionable. Companies, like NIQ, stress the importance of using recent and validated consumer data to ensure accuracy. While synthetic models can enhance ideation, they should not replace human feedback completely. Proper calibration and data protection are crucial in leveraging GenAI effectively in market research, and businesses are advised to cautiously evaluate the capabilities of these models.
- [AI Mistakes Are Very Different From Human Mistakes](https://www.schneier.com/blog/archives/2025/01/ai-mistakes-are-very-different-from-human-mistakes.html): Bruce Schneier discusses the differences between human and AI mistakes, highlighting that while humans make predictable errors based on experience and ignorance, AI mistakes are unpredictable and dispersed across various topics. Unlike humans, AIs, such as large language models (LLMs), err without showing uncertainty, complicating trust in complex tasks. To address this, two research directions include engineering AIs to make more human-like errors and creating tailored error-correction systems. Techniques from alignment research, like reinforcement learning with human feedback, show promise in aligning AI errors with human expectations. Despite similarities in error approaches, AI systems require distinct mistake-mitigation strategies, given their unique characteristics, such as prompt sensitivity and repetition biases.
- [DeepSeek is Coming for OpenAI’s Neck](https://transitions.substack.com/p/deepseek-is-coming-for-openais-neck?utm_source=post-email-title&publication_id=40586&post_id=155258400&utm_campaign=email-post-title&isFreemail=true&r=44mvk&triedRedirect=true&utm_medium=email): In the rapidly evolving AI landscape, new rivals challenge OpenAI's dominance. Initially, Anthropic, led by ex-OpenAI members prioritizing AI safety, seemed the main competitor, especially with its advanced coding model, Claude Sonnet-3.5. Mistral later emerged by focusing on open-source models but faded due to a strategic shift. Currently, DeepSeek has gained prominence with its cost-effective, open-source models, such as DeepSeek-V3, surpassing GPT-4o and Claude 3.5 Sonnet. DeepSeek's open approach contrasts with OpenAI's more closed model, further intensifying the competition.
- [Pipelines and Prompt Optimization With DSPy](https://www.dbreunig.com/2024/12/12/pipelines-prompt-optimization-with-dspy.html): Drew Breunig's article discusses the DSPy framework, which enhances the efficiency of building applications powered by language models by optimizing prompt generation. DSPy reduces the time spent on crafting prompts by using "signatures" to define input-output tasks, allowing more focus on task specification rather than detailed prompt engineering. Modules in DSPy, such as `Predict`, generate appropriate prompts using these signatures, facilitating tasks like categorizing historic events. Though initial results can be imperfect, DSPy allows for prompt optimization using training data and metrics, potentially involving different models for task performance and prompt generation. This approach minimizes the dependency on extensive manual prompt engineering and leverages DSPy's capabilities for creating scalable, complex pipelines.

## Data Science

- [Don't Use Cosine Similarity Carelessly](https://p.migdal.pl/blog/2025/01/dont-use-cosine-similarity?utm_campaign=Data_Elixir&utm_source=Data_Elixir_519): Piotr Migdał highlights the pitfalls of relying on cosine similarity for text or vector comparisons. While cosine similarity is a favored tool due to its simplicity—measuring the cosine of the angle between two vectors—it may not capture nuanced semantic relationships, often conflating different types of similarity. Migdał criticizes the assumption that cosine similarity values accurately represent probabilities or meaningful metrics, urging caution as models usually aren't trained on cosine similarity, leading to unreliable insights. He suggests using task-specific embeddings, fine-tuning, transfer learning, and prompt engineering to derive meaningful comparisons, aligning more closely with specific needs rather than relying on generic metrics. Preprocessing text can also mitigate superficial similarities. Though efficient embeddings can be useful, they should be adapted or optimized for specific tasks, recognizing the limitations and intricacies of high-dimensional data spaces.
- [The Rise of the Data Platform Engineer](https://databased.pedramnavid.com/p/the-rise-of-the-data-platform-engineer): In Pedram Navid's article. he describes the evolution of the data field from the prominence of Data Scientists in the late 2010s to the current emerging role of the Data Platform Engineer. Initially, Data Scientists were revered but faced challenges due to inadequate data infrastructure. This led to the rise of Data Engineers, who facilitated data ingestion and transformation. However, with advancements like cloud data warehouses and tools like dbt, the focus shifted from traditional ETL pipelines to more flexible data platforms. Data Platform Engineers are now tasked with creating frameworks that allow users to build their own data solutions efficiently. This shift reflects a broader trend towards empowering smaller, cross-functional teams to deliver business value, moving away from a top-heavy approach with numerous data scientists. This transition marks a new phase in data engineering, with improved tooling and methodologies enabling productivity without increasing the data engineering workforce.

## Real estate

- [Cuatro Observaciones (Y Tres Preguntas) Sobre El Nuevo Índice De Referencia Para La Actualización Del Alquiler De Vivienda](https://nadaesgratis.es/admin/cuatro-observaciones-y-tres-preguntas-sobre-el-nuevo-indice-de-referencia-para-la-actualizacion-del-alquiler-de-vivienda): The article discusses the implications of the "Índice de Referencia para la Actualización del Alquiler de Vivienda" (IRAV), introduced to prevent disproportionate rent increases in Spain amid rising housing costs. The IRAV, mandated by the 2023 housing law, limits rent updates based on the lower of four inflation measures. This has significant impacts on rental prices, particularly in "zonas tensionadas" (stressed areas), where it could lead to a long-term decrease in real rental prices and potentially reduce housing supply. The regulation poses challenges and complex implications for the rental market, impacting both small landlords and housing availability.
- [Sareb Fracasa en Su Primer Plan Para Construir Viviendas Destinadas a Alquiler Asequible](https://www.epe.es/es/activos/20250121/sareb-fracasa-plan-construir-alquiler-asequible-113579092): Sareb, Spain's "bad bank," failed in its initial effort to build affordable rental housing under its Plan Viena, as its first tender to promote 3,770 homes drew no investor interest. Despite backing from the European Investment Bank, the project lacked investor appeal due to unprofitable prospects. This setback comes amid uncertain times for Sareb, with plans to transfer its properties to Spain's new Public Housing Company. Sareb aims to reevaluate and relaunch its strategy in collaboration with industry stakeholders.

## Economics

- [Trumpcoin and TikTok](https://kyla.substack.com/p/trumpcoin-and-tiktok?utm_source=post-email-title&publication_id=91531&post_id=155187443&utm_campaign=email-post-title&isFreemail=true&r=44mvk&triedRedirect=true&utm_medium=email): Kyla Scanlon's article "Trumpcoin and TikTok" explores the dramatic rise of Trumpcoin, a memecoin spearheaded by Trump, which amassed billions in paper wealth thanks to attention-based speculation around the time of his second presidential inauguration. Trumpcoin exemplifies the new era of narrative-driven wealth creation, distinct from traditional value generation which followed tangible business improvements. The article also touches on the TikTok dynamics, linking Trump's potential acquisition of a stake in the platform to amplify the coin’s value and power dynamics. This new paradigm, described as the "Attention Singularity," illustrates how political power, platform influence, and speculative wealth creation converge, challenging the conventional regulatory and value narratives. Scanlon warns of the growing dominance of attention as a measurable market driver, urging both investors and consumers to consider their strategies in this rapidly evolving landscape.
- [El Pensamiento De Suma Cero](https://nadaesgratis.es/antonia-diaz/el-pensamiento-de-suma-cero): Antonia Díaz discusses the "zero-sum thinking" prevalent in economic and political decision-making, where one party's gain is seen as another's loss, often overshadowing policies with net benefits. This mindset influences attitudes towards immigration, where partisan divides emphasize either collective gain or feed xenophobic fears. Economic inequality, exacerbated by concentrated wealth and limited state capacity to impose fair taxes, fuels this thinking. Díaz suggests mitigating this through public goods investment, effective fiscal systems, and addressing market imperfections like monopsony power to encourage fairer income distribution and reduce zero-sum perceptions.
