---
author: Garland Culbreth
pubDatetime: 2026-07-14T18:40:00Z
modDatetime: 2026-07-14T17:40:00Z
title: It isn't always a power law
slug: it-isnt-always-a-power-law
featured: false
draft: false
tags:
  - powerlaws
  - scaling
  - complexity
  - physics
description:
  Other distributions can make straight lines on loglog plots
---

This is a short exposition of [Clauset, A., Shalizi, C.R., Newman, M.E.J., 2009. Power-Law Distributions in Empirical Data. SIAM Rev. 51, 661–703.](https://doi.org/10.1137/070710111) ([arXiv](https://doi.org/10.48550/arXiv.0706.1062)). I studied this paper extensively for [work I did on entropy analysis of diffusion processes](https://doi.org/10.48550/arXiv.2311.11453) and I believe it's an important paper to study for anyone who has exposure to power laws. With power laws once again getting much attention it may be more important than ever.

The article was motivated by an influx of statistical physics papers in the 1990s and 2000s claiming to discover power laws all over the place. Often the articles would simply plot a histogram in log-log scale, observe a straight line, and declare it a power law. Power laws do appear in many varied places, but, as Clauset et al. demonstrate, there are other distributions that make straight lines when plotted on a log-log scale. For example, log-normally distributed data will also follow a straight line on a log-log plot. So will log-logistic distributions, certain Lévy distributions, and certain Weibull distributions, among others.

_A straight line on a log-log plot isn't sufficient to prove that data are power law distributed_.

After seeing a straight line of a log-log histogram, researchers would then often perform a least-squares linear regression over the log-log plot to estimate the power law exponent. Clauset et al. explain that although this method dates back to the work of [Pareto](https://doi.org/10.1201/b18141), [Auerbach](https://www.vwl.uni-mannheim.de/media/Lehrstuehle/vwl/Ciccone/auerbach_1913_translated_with_introduction_March_2021.pdf), and [Zipf](https://archive.org/details/in.ernet.dli.2015.90211) it has a severe pitfall: when applied on log-log scale data the errors of a least-squares linear regression are systematically biased and non-Gaussian.

_Even when the data are power law distributed, least-squares fitting isn't satisfactory for finding the power index_.

It's also common for researchers plotting log-log histograms to simply log the axes and do nothing with the bin widths, resulting in bin widths that vary rather than bin edges spaced evenly in log scale. The varying bin widths further compound the problem for least-squared regression, as table 3.1 in the article illustrates.

Clauset et al. take twenty-four instances of reported power laws and reanalyze the data. They provide a maximum likelihood estimator for robustly estimating a power law's scaling parameter and fit other heavy-tailed distributions to each case for comparison. Some empirical power laws are confirmed but others are rejected for other distributions which turned out to be better fits.

The most important takeaways from the article are the points emphasized:

1. _A straight line on a log-log plot isn't sufficient to prove that data are power law distributed_.
2. _Even when the data are power law distributed, least-squares fitting isn't satisfactory for finding the power index_.

In their article, Clauset et al. explain how to rigorously confirm whether your data really follow a power law and how to robustly estimate the scaling parameter if it does. [Alstott, J., Bullmore, E., Plenz, D., 2014. powerlaw: A Python Package for Analysis of Heavy-Tailed Distributions. PLoS ONE 9, e85777.](https://doi.org/10.1371/journal.pone.0085777) ([arXiv](https://doi.org/10.48550/arXiv.1305.0215)) built on their work and published the [powerlaw Python package](https://github.com/powerlaw-devs/powerlaw), so the power law fitting and comparison methods established by Clauset et al. are easily accessible to everyone.

For more analysis of power laws, their properties, and some more empirical examples see also [Newman, M.E.J., 2005. Power laws, Pareto distributions and Zipf’s law. Contemporary Physics 46, 323–351.](https://doi.org/10.1080/00107510500052444) ([arXiv](https://doi.org/10.48550/arXiv.cond-mat/0412004)).
