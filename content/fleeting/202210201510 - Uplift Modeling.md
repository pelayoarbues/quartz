
---
title: 202210201510 - Uplift Modeling
Date: 2022-10-20
topic:
links:
tags: permanent-note 
---

Uplift modeling tries to capture the difference in the propensity of a subject to performa an action if they have received an intervention vs not receiving the intervention.

"As an example, consider a marketing campaign where customers are sent offers in order to persuade them to purchase a product. In this example, there is a binary treatment (i.e. the customer can either receive the offer or not) and a binary objective (i.e. the customer can either purchase or not). The uplift is the probability of purchasing (if they receive the offer) **minus** the probability of purchasing (if they _do not_ receive the offer). This difference in probabilities is important, because the goal of uplift modeling in such a campaign is to avoid sending offers to customers who would have purchased it anyway." [[How uplift modeling works  Blogs]]

![[Pasted image 20221020114342.png]]

Uplift modeling for a particular individual cannot be measured directly, only estimated based on groups o similar customers. Specifically, uplift is the conversion rate of customers in the treatment group **minus** the conversion rate of customers in the control group.

Uplift modeling might be related to Next Best Action modeling. In the case of Next Best Action we need to consider a number of steps to try increase the probability of succeeding with our models. [[An architecture for enabling next-best-actions for your customers]]:
- Purpose. Consider what we are trying to optimise.
- Data. Consider using offline and online data to improvbe the models
- Model. We might use business rules or Machine learning models
- Orchestration. 
	- Exclusions and action elegibility.
	- Experimentation
		- Explore/Explot trade-off. [[Data access patterns in next-best-action systems]]




