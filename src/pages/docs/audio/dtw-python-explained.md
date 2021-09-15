---
title: lorem-ipsum
weight: 0
excerpt: lorem-ipsum
seo:
  title: ''
  description: ''
  robots: []
  extra: []
template: docs
---
**1. Introduction**![](https://miro.medium.com/max/60/1\*WEe7LQivzU4YOvDCe0\_P_A.png?q=20)![](https://miro.medium.com/max/630/1\*WEe7LQivzU4YOvDCe0\_P_A.png)![](https://miro.medium.com/max/52/1\*jDuu7XE8XitCTBSythQICw.png?q=20)![](https://miro.medium.com/max/630/1\*jDuu7XE8XitCTBSythQICw.png)![](https://miro.medium.com/max/60/1\*HQleh0-1HlGsLkVlcaFRLw.png?q=20)![](https://miro.medium.com/max/630/1\*HQleh0-1HlGsLkVlcaFRLw.png)![](https://miro.medium.com/max/60/1\*6Yzt8SiQ-kTRx8pFqDZXkw.png?q=20)![](https://miro.medium.com/max/630/1\*6Yzt8SiQ-kTRx8pFqDZXkw.png)![](https://miro.medium.com/max/60/1\*x8-vv9W3cfmdd0mW\_1MLTg.png?q=20)![](https://miro.medium.com/max/630/1\*x8-vv9W3cfmdd0mW\_1MLTg.png)![](https://miro.medium.com/max/60/1\*MrjHYFHyeeE3aiBEA-E5cw.png?q=20)![](https://miro.medium.com/max/630/1\*MrjHYFHyeeE3aiBEA-E5cw.png)![](https://miro.medium.com/max/60/1\*hhpagt7BEeFU22X83Q76yQ.png?q=20)![](https://miro.medium.com/max/630/1\*hhpagt7BEeFU22X83Q76yQ.png)![](https://miro.medium.com/max/60/1\*bHaMHM9eBfLc6q166iiI9g.png?q=20)![](https://miro.medium.com/max/630/1\*bHaMHM9eBfLc6q166iiI9g.png)![](https://miro.medium.com/max/60/1\*dzBbhICP6wqwtmW-GGwGmg.png?q=20)![](https://miro.medium.com/max/630/1\*dzBbhICP6wqwtmW-GGwGmg.png)![](https://miro.medium.com/max/60/1\*7pphf0WWYElhtohnQPFPNA.png?q=20)![](https://miro.medium.com/max/630/1\*7pphf0WWYElhtohnQPFPNA.png)![](https://miro.medium.com/max/60/1\*p6hJxIcUjOzgpTINBHLdmQ.png?q=20)![](https://miro.medium.com/max/630/1\*p6hJxIcUjOzgpTINBHLdmQ.png)![](https://miro.medium.com/max/60/1\*RnqvEKdMmWklx5m59YiP3g.png?q=20)![](https://miro.medium.com/max/630/1\*RnqvEKdMmWklx5m59YiP3g.png)![](https://miro.medium.com/max/60/1\*mjtlGiB44Zz2pALmMiYNLQ.png?q=20)![](https://miro.medium.com/max/630/1\*mjtlGiB44Zz2pALmMiYNLQ.png)![](https://miro.medium.com/max/60/1\*WaC_xFSpJi-2GlF7OG37CA.png?q=20)![](https://miro.medium.com/max/630/1\*WaC_xFSpJi-2GlF7OG37CA.png)![](https://miro.medium.com/max/60/1\*6M_cotyKNao7xo03zsMLZQ.png?q=20)![](https://miro.medium.com/max/385/1\*6M_cotyKNao7xo03zsMLZQ.png)![](https://miro.medium.com/max/60/1\*CLSlk3qD0Hil2H4XBBeE3Q.png?q=20)![](https://miro.medium.com/max/630/1\*CLSlk3qD0Hil2H4XBBeE3Q.png)![](https://miro.medium.com/max/60/1\*Wx823zTAqUkrSbX1ivMAlg.png?q=20)![](https://miro.medium.com/max/630/1\*Wx823zTAqUkrSbX1ivMAlg.png)



In this world which is getting dominated by Internet of Things (IoT), there is an increasing need to understand signals from devices installed in households, shopping malls, factories and offices. For example, any voice assistant detects, authenticates and interprets commands from humans even if it is slow or fast. Our voice tone tends to be different during different times of the day. In the early morning after we get up from bed, we interact with a slower, heavier and lazier tone compared to other times of the day. These devices treat the signals as time series and compare the peaks, troughs and slopes by taking into account the varying lags and phases in the signals to come up with a similarity score. One of the most common algorithms used to accomplish this is *Dynamic Time Warping (DTW)*. It is a very robust technique to compare two or more Time Series by ignoring any shifts and speed.

As part of Walmart Real Estate team, I am working on understanding the energy consumption pattern of different assets like refrigeration units, dehumidifiers, lighting, etc. installed in the retail stores.This will help in improving quality of data collected from IoT sensors, detect and prevent faults in the systems and improve energy consumption forecasting and planning. This analysis involves time series of energy consumption during different times of a day i.e. different days of a week, weeks of a month and months of a year. Time series forecasting often gives bad predictions when there is sudden shift in phase of the energy consumption due to unknown factors. For example if the defrost schedule, items refresh routine for a refrigeration unit, or weather changes suddenly and are not captured to explain the phase shifts of energy consumption, it is important to detect these change points.

In the example below, the items refresh routine of a store has shifted by 2 hours on Tuesday leading the shift in peak energy consumption of refrigeration units and this information was not available to us for many such stores.

The peak at 2 am got shifted to 4 am. DTW when run recursively for consecutive days can identify the cases for which phase shift occurred without much change in shape of signals.

The training data can be restricted to Tuesday onwards to improve the prediction of energy consumption in future in this case as phase shift was detected on Tuesday. The setup improved the predictions substantially ( > 50%) for the stores for which the reason of shift was not known. This was not possible by traditional ways of one to one comparison of signals.

In this blog, I will explain how DTW algorithm works and throw some light on the calculation of the similarity score between two time series and its implementation in python. Most of the contents in this blog have been sourced from this [paper](https://ieeexplore.ieee.org/document/1163055), also mentioned in the references section below.

**2. Why do we need DTW ?**

Any two time series can be compared using euclidean distance or other similar distances on a one to one basis on time axis. The amplitude of first time series at time T will be compared with amplitude of second time series at time T. This will result into a very poor comparison and similarity score even if the two time series are very similar in shape but out of phase in time.

DTW compares amplitude of first signal at time T with amplitude of second signal at time T+1 and T-1 or T+2 and T-2. This makes sure it does not give low similarity score for signals with similar shape and different phase.

**3.** **How it works?**

Let us take two time series signals P and Q

Series 1 (P) : 1,4,5,10,9,3,2,6,8,4

Series 2 (Q): 1,7,3,4,1,10,5,4,7,4

***Step 1 :***** Empty Cost Matrix Creation**

Create an empty cost matrix M with x and y labels as amplitudes of the two series to be compared.

***Step 2: Cost Calculation***

Fill the cost matrix using the formula mentioned below starting from left and bottom corner.

**M(i, j) = |P(i) — Q(j)| + min ( M(i-1,j-1), M(i, j-1), M(i-1,j) )**

where

M is the matrix

i is the iterator for series P

j is the iterator for series Q

Let us take few examples (11,3 and 8 ) to illustrate the calculation as highlighted in the below table.

for 11,

|10 –4| + min( 5, 12, 5 )

\= 6 + 5

\= 11

Similarly for 3,

|4 –1| + min( 0 )

\= 3+ 0

\= 3

and for 8,

|1 –3| + min( 6)

\= 2 + 6

\= 8

The full table will look like this:

***Step 3:***** Warping Path Identification**

Identify the warping path starting from top right corner of the matrix and traversing to bottom left. The traversal path is identified based on the neighbour with minimum value.

In our example it starts with 15 and looks for minimum value i.e. 15 among its neighbours 18, 15 and 18.

The next number in the warping traversal path is 14. This process continues till we reach the bottom or the left axis of the table.

The final path will look like this:

Let this warping path series be called as d.

d = \[15,15,14,13,11,9,8,8,4,4,3,0]

***Step 4:***** Final Distance Calculation**

Time normalised distance , D

where k is the length of the series d.

k = 12 in our case.

D = ( 15 + 15 + 14 + 13 + 11 + 9 + 8 + 8 + 4 + 4 + 3 + 0 ) /12

\= 104/12

\= 8.63

Let us take another example with two very similar time series with unit time shift difference.

Cost matrix and warping path will look like this.

DTW distance ,D =

( 0 + 0 + 0 + 0 + 0 +0 +0 +0 +0 +0 +0 ) /11

\= 0

Zero DTW distance implies that the time series are very similar and that is indeed the case as observed in the plot.
