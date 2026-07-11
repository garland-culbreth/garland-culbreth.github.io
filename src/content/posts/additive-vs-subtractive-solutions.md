---
author: Garland Culbreth
pubDatetime: 2026-03-25T23:02:00Z
modDatetime: 2026-03-22T23:03:00Z
title: When to add and when to subtract
slug: additive-vs-subtractive-solutions
featured: false
draft: false
tags:
  - llms
  - genai
  - bias
description:
  Humans and LLMs love to make and add, but sometimes cutting and removing is better
---

In April 2021 this wonderful article appeared in _Nature_: [Adams, G.S., Converse, B.A., Hales, A.H., Klotz, L.E., 2021. People systematically overlook subtractive changes. _Nature 592_, 258–261.](https://doi.org/10.1038/s41586-021-03380-y)

The abstract explains:

> We investigated whether people are as likely to consider changes that subtract components from an object, idea or situation as they are to consider changes that add new components. ... Here we show that people systematically default to searching for additive transformations, and consequently overlook subtractive transformations.

The authors explored how this bias presented and how people responded when prompted differently or when the problems were posed under different conditions. When people were in a hurry, or had limited information, the additive preference became stronger. When people were prompted to take their time and think of different ways to solve the problem, they started to see subtractive solutions more. It's an excellent read.

Ever since reading that article I try to catch myself when I think "what could I add that would fix this?" and try to remind myself to also think, "what could I remove that would fix this?" The bias to think first of adding things is tough to break.

Solving a problem by removing parts requires understanding the problem more deeply. Why is it a problem? What's the goal behind fixing it? What does fixing it even mean? Since LLMs have no comprehension, only statistical description and heuristics, they respond to prompts with the statistically most likely output given the input and their training data. And since their training data come from humans, their training teaches them the human pattern of preferring to solve by adding. 

It's possible to give an LLM a large body of material and have it generate a smaller, more condensed, more streamlined version of it. But to do that you must first realize that the material would be better if it were smaller. You must know that before you can tell the agents to do it. They won't do it when left to run on their own, especially not over time.

The dangerous thing is using LLMs to generate more and more without heed for how any of it works or why. Then when there's so much complexity the LLMs can't handle something, what will you do?

The best answer is to not let things get to that point. Use agents mindfully and guide the generation deliberately. Understand what they generate, why it works, if it works, and whether it's really what you want. Understand the evaluation metrics you use to measure them. Pause a moment and ask yourself whether adding more is really best. Know when to stop adding and start subtracting.

Less isn't more, but it can be better.

