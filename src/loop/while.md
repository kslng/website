# While

The syntax for `while` loops is absurdly easy. All you need is the `while`
keyword with some parenthesis and an expression.

```ksl
while (<expression>) {
	// Do something? Maybe? If you want, I guess?
}
```

The only real requirement is that the expression type is a boolean. KSL will
give you a nice error if you don't. If this is a problem, you can always cast to
a boolean.

```ksl
while (bool'127) {
	// Do something? Probably?
}
```
