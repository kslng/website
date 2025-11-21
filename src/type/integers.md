# Integers

## Overview

Integers in KSL are a blanket type. The "real" types of integers are `i8`,
`i16`, `i32`, and `i64`. Technically `int` is also an alias for `i64`. Unsigned
integers are not currently supported in KSL. There are no special rules for
interacting with integers. Their space in memory is equal to the type name, e.g.
an `i32` will be stored as an integer 32 in memory during runtime, similarly an
`i8` will be stored an an integer 8.

## Casting Support

Types that can be cast to integers:

- Float (via `<value>'int`)
- Bool (via `<value>'int`)

Types that integers can be cast to:

- Float (via `<value>'float`)
- Bool (via `<value>'bool`)

## Method Support

There are no methods supported for integers.
