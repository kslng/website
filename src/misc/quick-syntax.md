# Quick Syntax Guide

> [!WARNING]
> If you do not have a background in programming it is highly recommended to
> return to the normal documentation, this is a syntax guide for users who
> already understand programming fundamentals.

## Valid Types

Int Types:
- `i8`
- `i16`
- `i32`
- `i64` (has `int` alias)

Float Types:
- `f32`
- `f64` (has `float` alias)

Other Types:
- `str`
- `bool`
- `void`

## Creating Functions

`fn` = Function Keyword  
`->` = Declare Return Type

The entry function will need to be called `main`.  
Function bodies are denoted by the braces `{` and `}`.

Example:
```ksl
fn main() -> void {}
```

Functions should return with the `return` keyword, if you don't include one KSL
will insert one for you automatically (with a default value) for any function
that returns a primitive type.

## Creating Variables

`=` = Assignment Operator

Variable names must follow: `[a-zA-Z][a-zA-Z0-9_]+`.  
Variable names cannot be the same as a type name.

Example:
```ksl
int my_int = 20;
f32 my_float = 20.5;
```

## Creating Complex Types (Arrays & Structs)

Create structs with the `struct` keyword and braces (`{` and `}`), struct fields
are `<type> <field_name>` and comma separated. Examples:

```ksl
struct Vector2 { int x, int y }
struct Vector3 {
	int x,
	int y,
	int z
}
```

Arrays can be created by adding `[]` to any type when defining a new variable:

```ksl
int[] my_int_arr = [];
Vector2[] my_custom_struct_arr = [];
bool[] my_bool_arr = [];
```

n'dimensional arrays can be created by adding more `[]` to the type definition:

```ksl
int[][] my_2d_int_arr = [[]];
Vector2[][] my_2d_Vector2_arr = [[]];
bool[][] my_2d_bool_arr = [[]];
```

## Using Other Files & Modules

The `using` keyword makes it easy to include other source files and link modules
against your project.

The using keyword followed by a string will search for other source files:
```ksl
using "my_second_file.k";
using "my_third_file.k";
```

The using keyword followed by a qualified identifier will search for object
files to link your project against:
```ksl
using std.io;
using std.fs;
```

> [!NOTE]
> Standard Library reference can be found [here](../std/)

## Getting and Setting Things

In KSL pretty much everything is mutable and you can do some pretty cool things
when attempting to get or set values, for example:

```ksl
using std.io;

struct Vec2 { int x, int y }

Vec2[][] my_2d_Vec2_arr = [[ Vec2 { x: 10, y: 20 } ]];
my_2d_Vec2_arr[0][0].y++; // Increment the y value in the 2d struct array
my_2d_Vec2_arr[0][0].y = 40; // Overwrite the y value in the 2d struct array

io.writeln(my_2d_Vec_arr[0][0].y); // Get the y value in the 2d struct array
```

## Loops

The two loops in KSL are the `for` and `while` loops.

While example:
```ksl
while (true) {
	// Do something
}
```

For example:
```ksl
for (int i = 0; i < 100; i++) {
	// Do something
}
```

## Conditionals

`if`, `else if`, and `else` are all supported in KSL, see example:
```ksl
if (<condition_1>) {
	// Do something (1)
} else if (<condition_2>) {
	// Do something (2)
} else {
	// Do something (3)
}
```

You can chain as many `else if` statements as you want.

## Casting

Casting in KSL may be confusing for newcomers. All you need is the type name, an
apostrophe, and the primary part of your expression you want to cast. Example:

```ksl
float'20; // will cast this int to a float

int x = 2000;
bool'x; // will cast the int variable to a bool

/*
The next example will add 20 + 30 then cast the result
to a float. Notice the parenthesis? Casting will only
work for the symbol directly after the apostrophe, so
in order to cast the *result* of the expression they
must be wrapped in parenthesis.
*/
float y = float'(20 + 30);
```

Casting will not work for complex types like arrays or structs.

## Namespaces

Namespaces in KSL are typically defined on a per-file basis.  
They do not use braces.

Example:
```ksl
namespace my_namespace;
```

Functions defined after the namespace `my_namespace` can then be accessed by
other parts of the program at `my_namespace.my_function()`.

## Function Attributes

Function attributes modify the behavior of functions in KSL, for example, the
`@inline` attribute will tell the compiler to inline the following function if
possible.

Example:
```ksl
@inline
fn my_func() -> void {};
```

> [!NOTE]
> Function Attribute reference can be found [here](../attribute/)
