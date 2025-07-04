+++
title = "Keeping my YAML sanity"
date = "2025-06-29"

[taxonomies]
tags=["config", "software"]

[extra]
comment = true
+++

I work with a lot of YAML configuration files in my day to day. Although they're convenient most of the time, YAML's pitfalls still wind me up occasionally. So I made some personal rules to follow.

Most of these are motivated by [StrictYAML's motivations for removing YAML's most pitfall-creating features](https://hitchdev.com/strictyaml/features-removed/), and are supposed to mitigate pitfalls introduced by YAML's implicit typing. I don't find automatic typing more human-readable or otherwise helpful, and it opens up all sorts of opportunities for unexpected behavior.

# Always use safe loading

YAML doesn't sanitize inputs, meaning there's a risk that arbitrary code could be executed when loading the YAML unless using safe loading. With Python's `pyyaml` for example, just always load YAML with `yaml.safe_load()`.

# Always put strings in quotes

YAML doesn't require string-typed values to be surrounded in quotes. Both values in the following block read in as strings:

```yml
one: Stuff
two: "Things"
```

If the string contains special characters but isn't surrounded in `""` quotes, YAML might read it in strangely. This also helps ensure number-like strings aren't interpreted as real numbers:

```yml
# Do
version: "1.2"

# Don't
version: 1.2
```

YAML interprets the unquoted value as a number, but you need to pass it as a string you have to quote it and if you forget unexpected results can ensue.

Annoyingly, YAML interprets single quotes `''` and double quotes `""` differently, which is a whole other problem. So unless there's a specific syntactic need, just always use double quotes.

# Use only `true` and `false` for Booleans

See [YAML's Norway problem](https://hitchdev.com/strictyaml/why/implicit-typing-removed/). YAML permits `no`, `No`, and `NO` as acceptable Boolean keywords, translating them to `false`. But `"NO"` is the ISO 639 Alpha-2 code for the Norwegian language. YAML's automatic typing will happily break your configuration because you added better accessibility. So just never use anything but `true` and `false`.

# Use only `null` for null values

YAML permits `null`, `Null`, and `NULL`, along with `~`, for indicating null values. For consistency always use `null`. YAML really seems to love maximalism, I have no idea why.

# Keep anchors and references to a minimum

Anchors can be convenient but if you find yourself using a lot of them that's probably a sign you should re-think your configuration structure and design it better.
