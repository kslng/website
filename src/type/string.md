# Strings

## Overview

Strings in KSL are pointers to memory locations, meaning they can't easily be
modified. Attempting to modify a string in KSL will result in an entirely new
string being created. To "dynamically" handle strings use a character array
(`char[]`) and then turn it into a string with `char[].to_string()` or similar.

String literals must be defined with double quotes.

## Casting Support

Strings do not support any casting operations. Additionally, casting is not an
operator that you can define custom behavior for. If you want to convert string
types you'll need to do it manually.

## Method Support

**.length()**  
Will return the length of the string as an integer.

Will not mutate string.

```ksl
fn main() -> void {
	str a = "Hello World!";
	a.length(); // returns 12
}
```

**.is_empty()**  
Will return a boolean telling you if the string is empty or not.

Will not mutate string.

```ksl
fn main() -> void {
	str a = "Hello World!";
	a.is_empty(); // false

	str b = "";
	b.is_empty(); // true

	str c = "    ";
	c.is_empty(); // true
}
```

## Examples

```ksl
str message = "Hello World!";
```

## Notes

Internally, strings can be pointers to different spots in memory. In most cases
they point to memory within the binary where literals have already been defined.
In the case of a modified string the pointer may be to a malloc'd memory space.
Strings should be automatically reference counted by KSL so you don't need to
worry about this unless you're building a KSL translation layer or C library.
