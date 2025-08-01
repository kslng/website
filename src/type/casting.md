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

A quick note on casting to booleans:

In some languages casting integers or floats to a boolean may be different.
In KSL all integers other than `0` are cast to `true`. Similarly, all floats
other than `0.0` are cast to `true`:

```c
bool'1;         // true
bool'0;         // false
bool'252466642; // true
bool'-35;       // true

bool'0.0;       // false
bool'135.03111; // true
bool'-135.77;   // true
```

> [!WARNING]
> Documentation incomplete, pulled from unfinished ksl/ksl_syntax.md file.
