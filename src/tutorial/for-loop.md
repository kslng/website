# For Loops

If you're here you probably want to learn how to make a for loop in KSL. If
that's the case, welcome! Otherwise, uh, [check this out](../compiler/name-mangling.md)??

So, we want to make something interesting that expresses how KSL works. A great
idea for that would be to make a simple program that generates a random decimal
value, we'll then round that and count the number of 1's and 0's in a sample
number!

The first thing we need to do, is consider our requirements. We need to generate
a random number, round it, and we'll want to display the results at the end. So
we need `std.random`, `std.math`, and `std.io`.

Let's start our new file, you can call it whatever you want but I'll call mine
`super_awesome_epic_for_loop_example_4_the_ksl_docs_tutorial.k`! Without further
adieu, let's begin.

```ksl
using std.io;
using std.math;
using std.random;
```

This should get all our needs taken care of in regards to the standard library
modules! Now we need to define our entry point.

```ksl
fn main() -> int {
	return 0;
}
```

As covered in some other tutorials (hopefully) the `main` function is the entry
point and the `-> int` defines the function derivative (basically the expected
function return type, but KSL has to be *sooooo* special and call it something
*different* because it wants to be like the cool kids.)

Now let's define our zero and one counts. By default all variables in KSL are
mutable, this is great news for us because that means we don't have to do any
extra work to update these values!

```ksl
fn main() -> int {
	int zeros = 0;
	int ones = 0;
	return 0;
}
```

We've made so much progress so far! Go ahead and get a drink of water, because
this is where it gets real.

We need to add the famed for loop now.

```ksl
fn main() -> int {
	int zeros = 0;
	int ones = 0;
	for (int i = 0; i < 100; i++) {

	}
	return 0;
}
```

So, let's disect this a little bit. The first statement is our initializer,
we're setting the i variable to an integer with a value of 0. The next is an
expression, it's expected to be a boolean. If the value is true then it will
run again, otherwise it will move on in the program. Finally, we have the
iterative statement, the i++, which is just a shorthand to increase the variable
i by 1 in this case.

Great, that was a lot, but it only gets better from here! Let's add the random
number generation function!

```ksl
fn main() -> int {
	int zeros = 0;
	int ones = 0;
	for (int i = 0; i < 100; i++) {
		f64 random_float = random.rand()->f64;
	}
	return 0;
}
```

This line of code actually covers a lot of topics in KSL, for now most of them
aren't super necessary to know. If you want to read more later check out
[inline function calls](../function/inline-calls.md), specifically inline hints.
All you need to know for this tutorial is that this is getting a random number
and saving it to the `random_float` variable, which we have set to a `f64`.

Now we need to round this value to figure out if it will be a `1` or a `0`!

We can do this with the following code, go ahead and add it after the
`random_float` variable line.

```ksl
int random_rounded = math.round(random_float)->int;
```

If you've figured that out we can move on to the if statement, which will be the
part of our program that actually tells us which variable to increment (ones or
zeros, if you've already forgotten.)

```ksl
if (random_rounded == 1) {
	ones++;
} else {
	zeros++;
}
```

What this is doing is checking if the `random_rounded` variable is equal to `1`,
if it is, then we increment the `ones` variable (remember that shorthand from
earlier?) Otherwise, we add `1` to the `zeros` variable. Luckily, since the
result of our random number rounding can only be `1` or `0` in this situation,
we don't have to add any other logic for counting!

If you ran this code right now it would work! But you wouldn't be able to see
the results :( and that's kind of the point of this whole thing. So, let's use
our awesome `io` module from the standard library to show our counts!

```ksl
io.writeln(zeros);
io.writeln(ones);
```

Great, now it will print our counts to the console!

For those of you that don't care about learning the language and just want to
make something quickly without thinking of the potential consequences, here is
the full code:

```ksl
using std.io;
using std.math;
using std.random;

fn main() -> int {
	int zeros = 0;
	int ones = 0;
	for (int i = 0; i < 100; i++) {
		f64 random_float = random.rand()->f64;
		int random_rounded = math.round(random_float)->int;
		if (random_rounded == 1) {
			ones++;
		} else {
			zeros++;
		}
	}
	io.writeln(zeros);
	io.writeln(ones);
	return 0;
}
```

Oh yeah, if you wanted to check your work that's also good, no hate on that.
