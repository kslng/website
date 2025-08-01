# Hello World in KSL

Ah yes, the traditional "hello world" program. Luckily for you, my
dear programmer, we have a fun little cheat for the worlds most basic
program. The hello world program seems to be something that a lot of
developers end up building, and KSL wants to make everything easier.

So we decided to make a standard library module for the hello world program!

```c
using std.t;

function main() -> void {
	std.t.hw();
	return;
}
```

And that's it. The `hw()` function will print "Hello, World!"

---

Ok, but what if I want to actually say "World, Hello?"

Now there we have some innovation! Some progress! You're going to do
incredible things in the future, that's truly some outside the box thinking!

Let's do it!

So first, we're going to need a main function, our entry point.
```c
function main() -> void {}
```

Since we don't need this function to return anything we can just set
the return type to void.

We're also writing to the console, so we're going to need our good old
standard io module. Go ahead and add it with: `using std.io;`

That should give us access to the `writeln` function, so let's finally
finish off your "World, Hello?" program.

```c
using std.io;

function main() -> void {
	std.io.writeln("World, Hello?");
	return;
}
```
