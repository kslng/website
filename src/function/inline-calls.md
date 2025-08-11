# Inline Calls

Currently, functions in KSL are defined internally in two ways,
by the function body declaration or a forward declaration. In the
case of a forward declaration, KSL will attempt to interpret the
most likely return type. For example, if a function is called inside
of an integer operation then it's likely to be an integer. In order
to override this behavior and define a return type for an inline
function call you can use the derive keyword (`->`) on the function
call. See below:

Example of inline call:
```c
int x = add(1, 3) + 5;
```

Example of inline call w/ type hint:
```c
int x = add(1, 3) -> int + 5;
```

Sometimes it can be easier to read if you move the type hint to
right after the funciton:
```c
int x = add(1, 3)->int + 5;
```

> [!IMPORTANT]
> You cannot use this syntax to change the function return type. If you wish to use a different type (post-return) then look into type casting. This is only to hint to the compiler what the expected return type is.

> [!CAUTION]
> Using this syntax to claim a function returns `void` for a function that returns an `int` will result in an unresolved symbol. The same applies for other type differences as well.

Similarly, if a function call doesn't appear to have any context
then KSL might assume it returns nothing (`void` or `null`.) This
might cause an error so you can use the type hint syntax outside of
algebraic operations as well.

Example:
```c
add(1, 3) -> int;
```

> [!WARNING]
> Documentation incomplete, pulled from unfinished ksl/ksl_syntax.md file.
