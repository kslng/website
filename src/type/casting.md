# Type Casting

KSL has a potentially unintuitive type casting syntax. Just use a
type identifier followed by an apostrophe:

```c
float x = 10.0;
int y = int'x;
```

There are some type casts that will result in errors, for example,
casting to null or void. But why do that anyway? It should be noted
that casting only works for the term immediately right to the cast.
See below:

Example where the entire expression is calcuated *then* cast:
```c
// This turns into 2.0 and is then turned into 2.
int x = int'(1.0 + 1.0);
```

Example where only the first number value is cast:
```c
// This is turned into 1 + 1 then turned into 2.
int x = int'1.0 + 1;
```

> [!NOTE]
> Since the casting syntax uses an apostrophe, string and char support in the future might be a little wonky, haha.

> [!WARNING]
> Documentation incomplete, pulled from unfinished ksl/ksl_syntax.md file.
