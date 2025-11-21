# Function Definition

For now, functions will be defined with the `fn` keyword, then comes the
function identifier and typed parameters (inside parenthesis). As KSL is a
strongly typed language, you will also need to define the function return type
(or function derivative.) This can be done with `->` and then the type
identifier.

```ksl
fn main(int a) -> int {
	return a;
}
```
