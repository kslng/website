# Name Mangling Convention

The KSL name mangling convention is designed to prevent
any kind of type confusion. That includes the return type.

This also means that you can provide function overloading
in KSL modules and external object files. The main reason
for the return type being included is so that there can be
functions that serve the same purpose but the KSL return type
predictor doesn't get too broken.

So, for example, at the time of writing both of these
functions exist in the `std.io` module:

```c
// std.io.writeln(int _) -> int
int std__io__writeln____int_int(int num) {
	printf("%d", num);
	return 0;
}

// std.io.writeln(int _) -> null
void std__io__writeln____int_null(int num) {
	printf("%d", num);
	return;
}
```

Functionally they're the exact same, but one returns an
integer and one returns void ("null" in KSL at the time
of writing.)

> [!NOTE]
> `void` is likely going to be added in the near future.

The convention for name mangling in KSL is as follows:

1. Periods in identifiers are translated to two underscores.
2. Space between the function name and types are four underscores.
3. The rest of the name will have all parameter types and the return type all separated by one underscore.

So:
```c
std.io.writeln(int num) -> null
// Becomes
std__io__writeln____i64__null

std.io.writeln(f32 x) -> int
// Becomes
std__io__writeln____f32__i64
```

You'll also see that the type keyword `int` turns into `i64`.
This is because, as explained in [variables](../variable/),
`int` and `float` are just aliases for `i64` and `f64` respectively.
Reasoning for this choice are explained there.
