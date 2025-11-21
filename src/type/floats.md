# Floats

## Overview

Floats in KSL are a blanket type. The "real" types of floats are `f32` and
`f64`. Techincally `float` is also an alias for `f64`. There is no f16 support
because realistically, they won't be used often enough to justify it. There are
no special rules for interacting with floats. Their space in memory is equal to
the type name, e.g. a `f32` will be stored as a float 32 in memory during
runtime, similarly a `f64` will be stored as a float 64.

## Casting Support

Types that can be cast to floats:

- Integer (via `<value>'float`)
- Bool (via `<value>'float`)

Types that floats can be cast to:

- Integer (via `<value>'int`)
- Bool (via `<value>'bool`)

## Method Support

There are no methods supported for floats.
