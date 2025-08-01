# While

The syntax for while loops is absurdly easy. All you need is the
`while` keyword with some parenthesis and an expression.

```c
while (<expression>) {
	// Do something? Maybe?
}
```

The only real requirement is that the expression type is a
boolean. KSL will give you a nice error if you don't. If this
is a problem, you can always cast to a boolean.

```c
while (bool'127) {
	// Do something? Probably?
}
```

For those of you focused on performance, look, I get it. You want
the fastest loop option, for loop or while loop? Which is it?

Well, the answer is pretty simple. Both the for loop and while loop
are compiled down to the exact same code. So the speed of your
program mostly lies with the quality of the code.
