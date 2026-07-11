---
author: Garland Culbreth
pubDatetime: 2026-07-08T17:30:00Z
modDatetime: 2026-07-08T17:35:00Z
title: Long tails
slug: long-tails
featured: false
draft: false
tags:
  - probability
  - writing
description:
  A rant about jargon where it doesn't belong
---

## Orwell's rules

Orwell wrote his essay [Politics and the English Language](https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/politics-and-the-english-language/) in 1946. In it he gives some rules for good English writing:

1. Never use a metaphor, simile or other figure of speech which you are used to seeing in print.
2. Never use a long word where a short one will do.
3. If it is possible to cut a word out, always cut it out.
4. Never use the passive where you can use the active.
5. Never use a foreign phrase, a scientific word or a jargon word if you can think of an everyday English equivalent.
6. Break any of these rules sooner than say anything outright barbarous.

I've been seeing people online breaking rule 5, often along with rules 1 and 3, in a new and annoying way with some frequency.

## Long tail jargon

The term [long tail](https://en.wikipedia.org/wiki/Long_tail) comes from probability theory, specifically from [heavy-tailed probability distributions](https://en.wikipedia.org/wiki/Heavy-tailed_distribution). In probability theory, a distribution is called heavy-tailed if its tail decreases slower than an exponential distribution. The long tail specifically refers to the tail region where that is true; some heavy-tailed distributions can have other shapes before that region, such as [log-normal](https://en.wikipedia.org/wiki/Log-normal_distribution) or [Weibull](https://en.wikipedia.org/wiki/Weibull_distribution).

I see the term misused a lot online. I guess that many people's first introduction to the term may have been the [Kaplan et al., 2020](https://arxiv.org/abs/2001.08361) paper on LLM scaling, in which the authors demonstrate some power law scaling but don't get into power laws themselves – understandably, it's beyond the scope of that paper. Having read it in a very influential paper by very accomplished authors, and maybe knowing that power laws have profound connections in many areas of science, people think they'll use it to telegraph their own knowledge.

So, a bunch of people heard of a new term that's profound and has many connections in deep and surprising places but they didn't take the time or trouble to read deeper and understand the term's meaning and formalism. A sorry example of first-order surface-level thinking. Couple that with people's habit for sprinkling fancy sounding jargon into regular talk to make themselves sound smarter and you have a recipe for bad communication.

## Some examples

Taken from recent Hacker News comments:

> ... Anthropic is subsidizing subscriptions as a loss leader to lock market share. IMHO this is a doomed strategy since open models will get into a long tail of parity ...

This has nothing to do with probability distributions. I guess it kind of connects with scaling laws, in that future open-weight models would presumably be scaled up from today's, but none of that is actually said here. You could replace "get into a long tail of parity" with "reach parity" with no change in meaning, and fewer words.

Another example:

> Systems on the Internet might be SunOS or IRIX of HP-UX or AIX (if you were weird), or even a VAX, or any of a long tail of smaller lesser-known manufacturers.

Here you could replace "long tail" with "long list" and the meaning would be unchanged. The jargon adds nothing.

Yet another:

>Both mobile Safari and Chrome Android do a ton of weird things that their desktop siblings don't, and play loose and fast with standards, so getting things to work correctly there tends to involve a long tail of hacks.

The probability connection adds nothing here. You might just as well say "long list" again.

And another:

> I’m saying there is basically no way to both make vlms able to understand the long tail of PDFs where the layout conveys information (like charts and tables) and to make it as token efficient as text formats

At first this sounds like a reasonable use of the term. But this author apparently thinks that layout conveys information only in display items, charts and tables they say, which reveals a failure to realize that the layout of each page itself conveys information too – copy this post into a text editor without word wrapping and see how annoying it is to read then! The author also seems not to realize that the entire reason people use PDFs is to ensure layout remains the same everywhere. So layout conveying information isn't a rare event anyway.

Lastly:

> Apple and Google have excellent chips, yet they needed to invest a lot in long-tail software projects to make those chips do actual premium work.

Here you could omit "long-tail" altogether with no change in meaning. It's redundant, only present because the author read it once and thought it would sound smart here.

All these examples are egregious violations of Orwell's rules 3 and 5. I think most of them violate his rule 1 too.

## /rant

This is long enough and not really going anywhere other than to say please read Orwell's essay. If you follow his rules, or even just try to, you'll be a better communicator.
