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
uint8   | `u8`               | 8
uint16  | `u16`              | 16
uint32  | `u32`              | 32
uint64  | `u64` \|\| `uint`  | 64
float32 | `f32`              | 32
float   | `f64` \|\| `float` | 64
char    | `char`             | 8
bool    | `bool`             | 1
void    | `void`             | N\|A
enum    | `enum`             | ??
struct  | `struct`           | ??

> [!NOTE]
> You can make virtually any type an array by adding `[]` to the initialization
> type (e.g. `int[]` will create an int array.)

> [!NOTE]
> Defining structs via the `struct` keyword will register an entierly new type
> to the type system, it can be treated like most other types, which means you
> can also make an array of structs using the struct name (e.g. `my_struct[]`
> will create an array of `my_struct` structs.)
