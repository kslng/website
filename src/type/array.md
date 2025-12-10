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

**.length()**  
Will return the length of the array as an integer.

```ksl
fn main() -> void {
	int[] a = [1, 2, 3, 4, 5];
	a.length(); // Returns 5
}
```

**.sample()**  
Will return a random element from the array (return type will depend on array.)

```ksl
fn main() -> void {
	int[] a = [1, 2, 3, 4, 5];
	a.sample(); // Will get a random value from the array `a`
}
```

**.is_empty()**  
Will return a boolean telling you if the array has any elements.

```ksl
fn main() -> void {
	int[] a = [1, 2, 3, 4, 5];
	int[] b = [];
	a.is_empty(); // false
	b.is_empty(); // true
}
```

**.push(&lt;v&gt;)**  
Will push a new element to the end of the array, does not return anything.
Parameter type must be the same as the array base type.

```ksl
fn main() -> void {
	int[] a = [1, 2, 3, 4, 5];
	a.push(6); // Array will be `[1, 2, 3, 4, 5, 6]` now
}
```

**.includes(&lt;v&gt;)**  
Checks if the array includes a value. Returns a boolean and passed value must be
the same as array base type.

```ksl
fn main() -> void {
	int[] a = [1, 2, 3, 4, 5];
	a.includes(3); // true
	a.includes(6); // false
}
```

**.index_of(&lt;v&gt;)**
Gets the index of a value in an array, if the array has multiple instances of a
value then it will only return the index of the first occurrence. Passed value
type must be the same as array base type. Will return an integer.

```ksl
fn main() -> void {
	int[] a = [1, 2, 3, 4, 5];
	a.index_of(6); // -1 (`6` doesn't exist in array)
	a.index_of(2); // 1 (`2` is the second element)
	a.index_of(1); // 0 (`1` is the first element)
}
```

**.get_or_default(&lt;i&gt;, &lt;v&gt;)**  
Attempts to get a value at a specific index, if the index doesn't exist then it
will return the default value (second parameter) instead. Index must be an
integer. Default value and return types are must be the same as the array base
type.

```ksl
fn main() -> void {
	int[] a = [1, 2, 3, 4, 5];
	a.get_or_default(1, 99); // returns `2`
	a.get_or_default(5, 99); // returns `99` (index `5` doesn't exist)
}
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
