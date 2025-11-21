# Conditionals

Currently if/if else/else statements are supported. Expressions must be
surrounded by parenthesis and return a boolean type.

```ksl
if (<expression_one>) {
	io.writeln("Do Something");
} else if (<expression_two>) {
	io.writeln("Do Something Else");
} else {
	io.writeln("Neither Condition Was Met");
}
```

You can chain as many `else if`'s as you want.
