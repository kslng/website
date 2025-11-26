# Arrays

## Overview

Arrays in KSL are dynamically allocable, meaning you don't have to worry about
memory management when using them. If you push an item longer than the array
capacity it will reallocate more space for the array and continue the push
operation.

## Casting Support

Arrays do not support any casting operations. Additionally, casting is not an
operator that you can define custom behavior for. If you want to convert array
types you'll need to do it manually.

## Method Support

```ksl
<arr>.length()->int;
<arr>.is_empty()->bool;
<arr>.push(<value>)->void;
<arr>.includes(<value>)->bool;
<arr>.index_of(<value>)->int; // (-1 means not in array)
```

## Examples

```ksl
int[] x = [10, 20, 30];
float[] y = [1.1, 2.2, 3.3];
bool[] z = [true, false, true];
```

## Notes

Internally, arrays are handled as a struct, this will only be important if
you're building an interface for KSL in another language. You can find the
current definition details in [std/runtime/generic_array.h](https://github.com/kslng/ksl/blob/main/std/runtime/generic_array.h).
