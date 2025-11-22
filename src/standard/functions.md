# The `fn`, `->`, & `return` Keywords

04 / 09 / 25

## Objective

The objectives of the fn, ->, and return keywords are to add rich function
support to KSL.

## Dictionary

`fn` - Keyword used to denote the start of a function.  
`->` - Keyword used to denote the return type/derivative of a function.  
`return` - Keyword used to return a value from a function.

## Examples

The fn keyword followed by a single identifier and parenthesis defines a basic
function. Functions also need a defined return type, which can be set using the
derive keyword (`->`.) Once you're done in your function body you can include
a `return` keyword to return a value. It's expected that the returned value
matches the type defined after `derive`. Technically speaking, the return
keyword is optional, KSL will insert one for you automatically if it doesn't see
one.

```cpp
fn main(int a) -> float {
	return 10.0;
}
```

In the example above we can see a function defined, this function has the name
`main`, it takes one integer parameter called `a`, and it returns a float. This
function has the `return` statement defined in it's function body.

Functions can have multiple parameters separated by a comma. They cannot have
multiple return types though.

```cpp
fn main(int a, int b) -> int {
	return a + b;
}
```
