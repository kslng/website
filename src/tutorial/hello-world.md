# Hello World in KSL

Ah yes, the traditional "hello world" program. The hello world program seems to
be something that a lot of developers end up building, how strange, this should
be investigated...

Let's build it!

So first, we're going to need a main function, our entry point.
```ksl
fn main() -> void {}
```

Since we don't need our `main` function to return anything we can just set the
return type to `void` (notice the `->` after the parenthesis and before `void`?)

We're also writing to the console, so we're going to need our good old standard
io module. Go ahead and add it with: `using std.io;` You really should do this
at the top of the file (it's best practice,) but really anywhere works.

That should give us access to the `writeln` function, so let's finish off your
"World, Hello?" program.

```ksl
using std.io;

fn main() -> void {
	io.writeln("World, Hello?");
	return;
}
```

Isn't that awesome!! If this wasn't torture then you should check out some other
tutorials and learn some more about KSL! It might take some time but don't give
up!!!
