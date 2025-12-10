# Enums

## Overview

Enums in KSL are defined with the `enum` keyword. Internally they're replaced
with the smallest integer size that fits all enum elements before code
generation or even semantics. That means that enums will be treated the same way
that integers are.

## Casting Support

Enums do not directly support any casting operations. However, since they're
treated as integers as soon as the semantic step, you technically can do all
integer operations on them, including casting.

## Method Support

There are no methods supported for enums.

## Examples

```ksl
using std.io;

enum Status {
	Running,
	Failed,
	Passed
}

fn main() -> void {
	Status state = Status.Running;
	io.writeln(state); // will print 0
	io.writeln(state == Status.Running); // true
	io.writeln(state == Status.Failed); // false
}
```
