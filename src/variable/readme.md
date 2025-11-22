# Variables

Variable declarations are extremely simple. Simply pick a variable type and
identifier, then set it to a value.

```ksl
int x = 20;
```

> [!NOTE]
> You cannot defined a variable with no value, for example: `int x;` is not
> valid syntax. However, variables are treated as mutable, so to achieve the
> same effect just initialize the variable with dummy data.

Currently the supported types in KSL are:

Type    | Identifier         | Size (Bits)
--------|--------------------|-----
int8    | `i8`               | 8
int16   | `i16`              | 16
int32   | `i32`              | 32
int64   | `i64` \|\| `int`   | 64
float32 | `f32`              | 32
float   | `f64` \|\| `float` | 64
bool    | `bool`             | 1
null    | `null`             | N\|A
void    | `void`             | N\|A

> [!NOTE]
> KSL is designed for programmers of all skill levels. Some programmers might
> not care (or know) about int's of different sizes, so `int` and `float` are
> aliases for the largest supported int and float types. It makes it easier for
> beginners to understand and it's more readable for simple projects that don't
> need to worry about tight memory constraints.

> [!NOTE]
> You can make virtually any type an array by adding `[]` to the initialization
> type (e.g. `int[]` will create an int array.)

> [!NOTE]
> Defining structs via the `struct` keyword will register an entierly new type
> to the type system, it can be treated like most other types, which means you
> can also make an array of structs using the struct name (e.g. `my_struct[]`
> will create an array of `my_struct` structs.)
