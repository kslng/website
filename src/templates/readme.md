# Templates

KSL templates are super powerful ways to build generic code fast. It is fully
covered by semantic analysis as well.

The basic syntax is as follows:

```ksl
template <$T1, $T2>
struct ExampleTemplate {
	$T1 foo,
	$T2 bar
}
```

You may notice some things right away. For example, the dollar sign. The dollar
sign is used to denote an unknown type that should be figured out by the
template. Let's say in the example above, someone uses
`<int, int>ExampleTemplate`, this will fill out the entire ExampleTemplate with
the type information provided.

You can even attach impl statements to the struct as you normally would!

```ksl
template <$T1, $T2>
struct Map {
	$T1[] keys,
	$T2[] values
}

impl Map {
	fn get($T1 key) -> $T2 {
		for (u64 i = 0; i < this.keys.length(); i++) {
			if (this.keys[i] == key)
				return this.values[i];
		}
		return this.values[0];
	}
}
```

In the example above you may notice that in the `Map` struct there's `$T1[]`.
With KSL templates you can even turn unknown types into arrays or references
like you would with a normal type.

You might initialize the Map struct we just created like this:

```ksl
using std.io;

fn main() -> void {
	Map my_map = Map<int, int> { int'[1, 2, 3], int'[4, 5, 6] };

	io.writeln(my_map.get(2)); // will print 5
}
```

> [!NOTE]
> If the `int'[ ... ]` syntax is unfamiliar to you, check out the array type.
> This is just a way of defining an inline array literal but you can read more
> about it there.
