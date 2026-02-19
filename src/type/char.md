# Chars

## Overview

Internally the `char` type is represented as an `i8`.

## Casting Support

Chars do not directly support any casting operations. However, since they're
treated as integers as soon as the semantic step, you technically can do all
integer operations on them, including casting.

## Method Support

**.is_digit()**  
Will return true if the character is one of `0123456789`.

```ksl
fn main() -> void {
	'a'.is_digit(); // false
	'4'.is_digit(); // true
}
```

**.is_alpha()**  
Will return true if the character is one of
`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`.

```ksl
fn main() -> void {
	'2'.is_alpha(); // false
	'a'.is_alpha(); // true
	'Q'.is_alpha(); // true
}
```

**.is_alnum()**  
Will return true if the character is one of
`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`.

```ksl
fn main() -> void {
	'2'.is_alnum(); // true
	'a'.is_alnum(); // true
	'Q'.is_alnum(); // true
	'$'.is_alnum(); // false
}
```

**.is_whitespace()**  
Will return true if the character is one of: Horizontal Tab (ASCII 9), Line Feed
(ASCII 10), Vertical Tabulation (ASCII 11), Form Feed (ASCII 12), Carriage
Return (ASCII 13), File Separator (ASCII 28), Group Separator (ASCII 29), Record
Separator (ASCII 30), Unit Separator (ASCII 31), Space (ASCII 32), NBSP
(Non-Breaking Space) (ASCII 160).

```ksl
fn main() -> void {
	' '.is_whitespace(); // true
	'\n'.is_whitespace(); // true
	'\t'.is_whitespace(); // true
	'\r'.is_whitespace(); // true
	'a'.is_whitespace(); // false
	'2'.is_whitespace(); // false
	'$'.is_whitespace(); // false
}
```

## Examples

```ksl
using std.io;

fn main() -> void {
	char a = 'a';
	io.writeln(int'a); // ascii a
	io.writeln(a); // will print the character 'a'
}
```

## Notes

In KSL the casting operator is also an apostrophe. So KSL will scan ahead by one
character (including any escape sequence) and check for another apostrophe to
classify something as a character. Otherwise if KSL sees an apostrophe without a
closing apostrophe, it will assume you want to cast.
