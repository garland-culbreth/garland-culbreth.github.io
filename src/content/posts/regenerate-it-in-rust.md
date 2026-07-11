---
author: Garland Culbreth
pubDatetime: 2026-07-09T18:43:00Z
modDatetime: 2026-07-10T17:43:00Z
title: Regenerate it in Rust
slug: regenerate-it-in-rust
featured: false
draft: false
tags:
  - rust
  - llms
  - genai
description:
  It's much easier for a machine to do it after all
---

I love rust, and using software written in rust gives me a warm fuzzy feeling, but even I laugh at rewrite it in rust memes. It's a running gag because you'll see someone propose rewriting some battle-hardened library or other in rust as if it's easy. Its a joke because of how rarely necessary it is, how unknown the ultimate benefits would be, and how infeasible it usually is. "How hard could it be?" Famous last words.

Rust is also a popular language for LLMs. Since the compiler forces code to follow strong guardrails code generating tools are forced to follow those too, in the end you get much better code. Plus, since rust is blazing fast after all, you also get its beloved performance without the pain of fighting the compiler yourself. A perfect match!

No surprise then that the two have come together. First [Bun](https://github.com/oven-sh/bun/pull/30412/changes/68a34bf8ed550ed69f4a0c18cff5ca9bd41d36ef) and now [Postgres](https://github.com/malisper/pgrust) have vibe-ported their massive codebases to rust. Instead of rewriting it in rust, [a Herculean task](https://github.com/uutils/coreutils), let's have an LLM regenerate it in rust instead.

Both commit histories show hundreds of commits per day, millions of lines changed in a week, and are totally intractable for human review. Both bet on the idea that in the future LLMs will generate all the code and humans won't even look at it anymore. Both rest on the hope that the test suite is sufficient to guarantee nothing breaks and everything works the way it used to and should. And both regenerations are indeed passing their test suites, which is a major milestone! But when I read about both I felt strangely regretful. Like there was an opportunity missed to revisit old ideas and make improvements deeper than direct translation.

Seeing how many `unsafe` or `static mut` calls were present in the rust translations is what really made me feel like an opportunity was missed. So much of the benefit promised by rewrite it in rust really comes revisiting existing designs and doing things in ways leverage rust's strengths. It also makes me wonder to what extent an LLM translation like this becomes "tests-as-a-spec," and whether some analog of over-fitting could manifest.

It's like translating literally versus comprehensively. Literal translation can be correct but we all know how much better translations can be than that.

I guess, but I don't know, that the idea was to get the translation done first and then go back in and clean things up after. Neither port is the official version yet so hopefully they will. I'd love to see them rebuild things to suit rust's sensibilities, remake things in ways that leverage rust's strengths, get rid of  `unsafe`, and deliver on the true promise of rewrite it in rust.

## Update: 10 July 2026

After posting this I learned about DARPA's [TRACTOR](https://www.darpa.mil/research/programs/translating-all-c-to-rust) program, researching automatic translation of all C to safe rust, in collaboration with [MIT Lincoln Laboratory](https://www.ll.mit.edu/r-d/projects/translating-all-c-rust-tractor-benchmarks). I hadn't heard of this before but I'll be following it with great interest now!
