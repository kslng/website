# For

The syntax for `for` loops is pretty simple. Just like in most languages with a
`for` loop actually.

You'll need an initialization statement (which is run once at the beginning), an
expression to check if the `for` loop should continue, and finally an iterative
expression (which is run at the end of every iteration.)

```ksl
//       +------------------ Initial Statement
//       |        +--------- Check/Continue(?) Expression
//       |        |      +-- Iterative Expression
//       |        |      |
for (int i = 0; i < 30; i++) {
	io.writeln(i);
}
```
