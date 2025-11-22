# Templates

04 / 09 / 25

## Objective

The objective of templates is to achieve an effect similar to polymorphism.
For example, defining baseline logic (the template) without static types, then
during compile time a clone of the template with static types is generated
for each unique call.

## Dictionary

`template` - A keyword denoting the definition of a template function.  
`$[a-zA-Z]` - Syntax denoting the use of an unknown type, single letters only.

## Examples

In the example below you can see a template add function, it takes two
parameters of unknown types. The parameter names are `x` and `y` with types `$A`
and `$B`, respectively. Templates must return/derive a single type.

```cpp
template add($A x, $B y) -> int {
	return int'(x + y);
}
```

If this template was called here is an example generated function:

```cpp
fn add(float x, int y) -> int {
	return int'(x + y);
}

add(10.0, 5);
```

Notice how in this example the template call (`add(10.0, 5)`) uses a float and
an integer? This will dictate how to template generates the function. A template
can also be used for multiple function calls with multiple dynamic types, ex:

```cpp
fn add(float x, int y) -> int {
	return int'(x + y);
}

fn add(float x, float y) -> int {
	return int'(x + y);
}
```

Templates can also reference the dynamic types multiple times in it's function
body as long as the result/derivitive of the function remains constant, ex:

```cpp
template multiply($A x) -> int {
	$A amount = 2;
	$A result = x * amount;
	return int'result;
}
