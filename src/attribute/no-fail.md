# No Fail

## Usage:

```ksl
@no_fail
fn function_that_cannot_fail() -> int {
	return 20 / 0;
}
```

In the example above, the function will throw a "cannot divide by 0" error,
however, because we have the `@no_fail` attribute it will catch the error and
return a default constant based on the defined return type of the function. For
integers the default constant is `0` so this function will return `0`, even
though technically it failed.

You can also define custom return values via `@no_fail=<value>`, for example:

```ksl
@no_fail=-1
fn function_that_cannot_fail() -> int {
	return 40 / 0;
}
```

In this new example the `@no_fail` function attribute has a value assigned to it
(`-1`), so when this function fails due to the aforementioned "divide by 0"
error, it will instead return `-1`.

## Purpose:

The purpose of the `@no_fail` function attribute is to provide a better error
catching system that doesn't rely on large code blocks. Additionally, by using
the `@no_fail` function you can prevent potentially fatal crashes while
minimizing undefined behavior.
