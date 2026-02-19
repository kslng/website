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

Type    | Identifier         | Size (Bits) | Size (Bytes)
--------|--------------------|-------------|-------------
int8    | `i8`               | 8           | 1
int16   | `i16`              | 16          | 2
int32   | `i32`              | 32          | 4
int64   | `i64` \|\| `int`   | 64          | 8
uint8   | `u8`               | 8           | 1
uint16  | `u16`              | 16          | 2
uint32  | `u32`              | 32          | 4
uint64  | `u64` \|\| `uint`  | 64          | 8
float32 | `f32`              | 32          | 4
float   | `f64` \|\| `float` | 64          | 8
char    | `char`             | 8           | 1
bool    | `bool`             | 1           | 1
void    | `void`             | N\|A        | N\|A
enum    | `enum`             | ??          | ??
struct  | `struct`           | ??          | ??

> [!NOTE]
> You can make virtually any type an array by adding `[]` to the initialization
> type (e.g. `int[]` will create an int array.)

> [!NOTE]
> Defining structs via the `struct` keyword will register an entierly new type
> to the type system, it can be treated like most other types, which means you
> can also make an array of structs using the struct name (e.g. `my_struct[]`
> will create an array of `my_struct` structs.)

KSL supports variable shadowing, so you can use multiple variables with the same
name as long as they don't cross scopes. For example:

```ksl
using std.io;

fn main() -> void {
	int i = 400;

	if (true) {
		int i = 30;
		io.writeln(i); // will write 30 to console
	}

	io.writeln(i); // will write 400 to console
}
```
