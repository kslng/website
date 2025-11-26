# Strings

## Overview

Strings in KSL are dynamically allocable, meaning you don't have to worry about
memory management when using them. If you join a string longer than the original
capacity it will reallocate more space for the string and continue.

Due to the casting operator being an apostrophe, strings can only be defined
with double quotes. Currently there is no `char` support.

## Casting Support

Strings do not support any casting operations. Additionally, casting is not an
operator that you can define custom behavior for. If you want to convert string
types you'll need to do it manually.

## Method Support

```ksl
<str>.length()->int;
<str>.is_empty()->bool;
```

## Examples

```ksl
str message = "Hello World!";
```

## Notes

Internally, strings use the KSL array implementation. This will only be
important if you're building an interface for KSL in another language. You can
find the current definition details in [std/runtime/generic_array.h](https://github.com/kslng/ksl/blob/main/std/runtime/generic_array.h).
