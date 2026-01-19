# Extern/FFI Concepts

> [!NOTE]
> Currently we're discussing adding a `@no_mangle` [attribute](../attribute/).
> This would do exactly what it sounds like, it would maintain it's function
> name regardless of the name mangling schema.

The `extern` keyword allows you to use functions from outside KSL. External
functions are also the only way to use variadic functions. The `extern` keyword
still needs to be followed by the `fn` keyword as well as a full function
signature.

You can define external functions one by one with this syntax:

```ksl
extern fn func_in_another_lang_short(bool) -> void;
```

Or if you need to define a lot of related functions you can use a block syntax
instead.

```ksl
extern {
	fn func_in_another_lang_zero(int) -> void;
	fn func_in_another_lang_one(float) -> int;
	fn func_in_another_lang_two(int) -> float;
}
```

In order to use variadic functions you can add a `...` to the function argument
list in the signature. This can only be used for functions defined with
`extern`. Additionally, you can mix the `...` alongside other known parameter
types. Examples below.

```ksl
/*
 * This will make an external function definition that can be used in your KSL
 * source code. The `str` means that it expects a string parameter and the `...`
 * means that anything after that is totally up to you.
 *
 * This is a working example to access printf within your KSL program.
 */
extern fn printf(str _, ...) -> void;
```

```ksl
extern {
	fn printf(str _, ...) -> void;
	<other_external_function_signatures>
}
```
