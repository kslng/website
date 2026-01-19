# Comments

Comments in KSL are similar to any other modern language. For a single line
comment you can do `//` and for a multi-line comment, the usual `/*` `*/` syntax.

```ksl
// Below is a function, and this is a comment!
fn main() -> void {
	return;
}
```

```ksl
/*
 * Below is a function that returns void,
 * and this is a multi-line comment!
 */
fn main() -> void {
	return;
}
```

You can even use this inline! (If you're crazy...)

```ksl
fn /* create a function */ main /* call it `main` */ () /* no args */ -> void /* return nothing */ {
	return /* see, nothing! */;
}
```

## Best Practices

It's good to keep some consistency when using comments. Here's a good pattern to
follow:

- `//` for code or text comments, typically short bits (1-3 lines)
  - Quick one-off comments or single line descriptions

```ksl
// A quick comment telling someone that this will break legacy code
fn some_random_esoteric_function() -> void {
	// some function body
}
```

- `/* ... */` for code, typically large sections of code (5-20 lines)
  - Best used for test code or sections of code that are temporarily removed

```ksl
/*
fn some_dummy_function_that_needs_to_be_removed_temporarily() -> void {
	// some function body
}
*/
```

- `/* * * */` for text, typically large sections of text (5-20 lines)
  - The best example would be a complex function that needs a lot of explaining

```ksl
/*
 * Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex
 * sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis
 * convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
 * fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada
 * lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti
 * sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
 */
fn another_random_esoteric_function() -> void {
	// seriously who keeps adding these ??
}
```
