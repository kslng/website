# Booleans

## Overview

Booleans in KSL are represented with `bool`. There are no special rules for
interacting with booleans. They will be stored as a full byte in storage unless
manually tweaked. The only considerations to take into account are how numbers
are casted into booleans as they may differ from other programming languages.

## Casting Support

Types that can be cast to bools:

- Integer (via `<value>'bool`)
- Float (via `<value>'bool`)

Types that bools can be cast to:

- Integer (via `<value>'int`)
- Float (via `<value>'float`)

## Method Support

There are no methods supported for booleans.

## Examples

```ksl
bool x = true;
```

## Notes

A quick note on casting to booleans:

In some languages casting integers or floats to a boolean may be different. In
KSL all integers other than `0` are cast to `true`. Similarly, all floats other
than `0.0` are cast to `true`:

```ksl
bool'1;         // true
bool'0;         // false
bool'252466642; // true
bool'-35;       // true

bool'0.0;       // false
bool'135.03111; // true
bool'-135.77;   // true
```
