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
 Below is a function that returns void,
 and this is a multi-line comment!
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
