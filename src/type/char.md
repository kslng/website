# Chars

## Overview

Internally the `char` type is represented as an `i8`.

## Casting Support

Chars do not directly support any casting operations. However, since they're
treated as integers as soon as the semantic step, you technically can do all
integer operations on them, including casting.

## Method Support

Currently there are no methods supported for chars.

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
