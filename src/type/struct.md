# Structs

## Overview

Structs in KSL are defined with the `struct` keyword. Structs are passed by
pointer by default. This is subject to change with the introduction of the `ref`
keyword, although it likely will not. Structs are the only types in KSL that can
be templated.

## Casting Support

Structs do not support any casting operations. Additionally, casting is not an
operator that you can define custom behavior for. If you want to convert struct
types you'll need to do it manually.

## Method Support

There are no methods supported for structs.

## Examples

```ksl
struct Vector2 {
    int x,
    int y
}

fn main() -> void {
    Vector2 my_position = Vector2 { x: 10, y: 20 };

    // Alternatively you can define a struct without the field
    // names, but you'll have to do it in the correct order.
    Vector2 my_second_position = Vector2 { 10, 20 };

    // Using the field names, you can change the order and KSL
    // will make sure it still works behind the scenes.
    Vector2 superimposed_position = Vector2 { y: 20, x: 10 };
}
```

## Notes

Internally, defined structs are treated as new types and added to the type
system after definition.
