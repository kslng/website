# Comments

Comments in KSL are similar to any other modern language.
For a single line comment you can do `//` and for a multi-
line comment, the usual `/*` `*/` syntax.

```c
// Below is a function, and this is a comment!
function main() -> void {
	return;
}
```

```c
/*
 Below is a function that returns void,
 and this is a multi-line comment!
*/
function main() -> void {
	return;
}
```

You can even use this inline! (If you're crazy...)

```c
function /* create a function */ main /* call it `main` */ () /* no args */ -> void /* return nothing */ {
	return /* see, nothing! */;
}
```

> [!NOTE]
> Due to some current limitations, KSL has a hard time handling nested multi-line comments.
