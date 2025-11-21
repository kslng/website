# Entry

## Usage

```ksl
@inline
fn small_function() -> bool {}

fn main() -> void {}
```

## Purpose

The purpose of the `@inline` function attribute is to hint to the compiler that
you want this function inlined. Using the inline function attribute does not
guarantee that your function will be inlined. Typically this would be used for
performance reasons. Occasionally the compiler will decide to inline a function
that does not explicitly have the inline function attribute.
