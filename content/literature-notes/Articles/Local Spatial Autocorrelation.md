---
author: [[Luc Anselin]]
title: "Local Spatial Autocorrelation"
date: 2023-10-10
tags: 
- articles
- literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)

## Metadata
- Author: [[Luc Anselin]]
- Full Title: Local Spatial Autocorrelation
- URL: https://geodacenter.github.io/workbook/6c_local_multi/lab6c.html

## Highlights
- The degree of overlap can be visualized by means of a cardinality map (a special case of a unique values map), where each location indicates how many neighbors the two weights matrices have in common. In addition, different p-value cut-offs can be employed to select the *significant* locations, i.e., where the probability of a given number of common neighbors falls below the chosen p. ([View Highlight](https://read.readwise.io/read/01hcd5d9mth981ddph57kfx33n))
## New highlights added October 10, 2023 at 10:04 PM
- concept of local spatial autocorrelation to the multivariate domain. This turns out to be particularly challenging due to the difficulty in separating pure attribute correlation among multiple variables from the spatial effects. ([View Highlight](https://read.readwise.io/read/01hcdjqg3785cqhx1agqtcg6cf))
- Designing a spatial autocorrelation statistic in a multivariate setting is fraught with difficulty. The most common statistic, Moran’s I, is based on a cross-product association, which is the same as a bivariate correlation statistic. As a result, it is difficult to disentangle whether the correlation between multiple variables at adjoining locations is due to the correlation among the variables, or a similarity due to being neighbors in space. ([View Highlight](https://read.readwise.io/read/01hcdjshntajf18wy848136qj0))
- Early attempts at extending Moran’s I to multiple variables focused on principal components, as in the suggestion by Wartenberg ([1985](https://geodacenter.github.io/workbook/6c_local_multi/lab6c.html#ref-Wartenberg:85)), and later work by Dray, Saïd, and Débias ([2008](https://geodacenter.github.io/workbook/6c_local_multi/lab6c.html#ref-Drayetal:08)). However, these proposals only dealt with a global statistic. A more local perspective along the same lines is presented in Lin ([2020](https://geodacenter.github.io/workbook/6c_local_multi/lab6c.html#ref-Lin:20)), although it is primarily a special case of a geographically weighted regression, or GWR (Fotheringham, Brunsdon, and Charlton [2002](https://geodacenter.github.io/workbook/6c_local_multi/lab6c.html#ref-Fotheringhametal:02)). ([View Highlight](https://read.readwise.io/read/01hcdjsynytzhz82x9a5ghz09e))
- In Anselin ([2019](https://geodacenter.github.io/workbook/6c_local_multi/lab6c.html#ref-Anselin:18)), the idea is proposed to focus on the distance between observations in both attribute and geographical space and to construct statistics that assess the match between those distances. In general, the squared multi-attribute distance between a pair of observations i,ji,ji, j on kkk variables is given as:
  d2ij=||xi−xj||=∑h=1k(xih−xjh)2,dij2=||xi−xj||=∑h=1k(xih−xjh)2,
  d_{ij}^2 = || x_i - x_j || = \sum_{h=1}^k (x_{ih} - x_{jh})^2, with xixix_i and xjxjx_j as vectors of observations. In some expressions, the squared distance will be preferred, in others, the actual distance (dijdijd_{ij}, its square root) will be used. The overall idea is to identify observations that are both *close* in multiattribute space and close in geographical space. ([View Highlight](https://read.readwise.io/read/01hcdjv63ftcbcdqa0n49xzbzd))
- The treatment of the bivariate Local Moran’s I closely follows that of its global counterpart (see also Anselin, Syabri, and Smirnov [2002](https://geodacenter.github.io/workbook/6c_local_multi/lab6c.html#ref-Anselinetal:02b)). In essence, it captures the relationship between the value for one variable at location iii, xixix_i, and the average of the neighboring values for *another variable*, i.e., its spatial lag ∑jwijyj∑jwijyj\sum_j w_{ij} y_j. Apart from a constant scaling factor (that can be ignored), the statistic is the product of xixix_i with the spatial lag of yiyiy_i (i.e., ∑jwijyj∑jwijyj\sum_j w_{ij}y_j), with both variables standardized, such that their means are zero and variances equal one:
  IBi=cxi∑jwijyj,IiB=cxi∑jwijyj,
  I_{i}^B = c x_i \sum_j w_{ij} y_j, where wijwijw_{ij} are the elements of the spatial weights matrix. ([View Highlight](https://read.readwise.io/read/01hcdjwyskd8ty0ry25gskq2ax))
- his statistic needs to be interpreted with caution, since it ignores in-situ correlation between the two variables (see the discussion of global bivariate spatial autocorrelation for details). ([View Highlight](https://read.readwise.io/read/01hcdjx95akhtfb8kra2f3pksw))
- A special case of the bivariate Local Moran statistic is comparing the same variable at two points in time. The most meaningful application is where one variable is for time period ttt, say ztztz_t, and the other variable is for the neighbors in the previous time period, say zt−1zt−1z_{t-1}. This formulation measures the extent to which the value at a location in a given time period is correlated with the values at neighboring locations in a previous time period, or an inward influence. ([View Highlight](https://read.readwise.io/read/01hcdjy2mwrv58r7bf48yk54ny))
- As mentioned, the interpretation of the bivariate Local Moran cluster map warrants some caution, since it does not control for the correlation between the two variables at each location (i.e., the correlation between xixix_i and yiyiy_i). ([View Highlight](https://read.readwise.io/read/01hcdk1b38ar7g6acyf6216sx8))
