# Function Returns

In KSL return statements are technically optional for functions that return
primitive types. If a return statement isn't detected it will insert one with a
default value matching the type (e.g. if the return type is an `int` it will
use `0` as the return placeholder.)

This can be really nice for defining void functions, see below:

```ksl
// This function doesn't need to have a return statement because it has a
// primitive return type and we don't care what the return value is.
fn main() -> void {
	// Do something
};
```

You can, of course, still manually define a return statement with `return`. For
some types (e.g. arrays and structs) you will still have to define a return
statement no matter what.

```ksl
// This function must have a return statement because KSL doesn't know what a
// default integer array should be by default.
fn arr() -> int[] {
	int[] my_array = [ 1, 2, 3 ];
	return my_array;
}
```
