# IO

> [!WARNING]
> The std.io module is not stable and/or partially implemented.

```ksl
using std.io;
```

### io.writeln

Parameters (one of): { `i64` | `f64` | `bool` | `string` | `int[]` }  
Returns (one of): { `i64` | `void` }

Example:
```ksl
io.writeln(10)->int;
io.writeln(10); // ->void equivalent

io.writeln(2.5)->int;
io.writeln(2.5); // ->void equivalent

io.writeln(false)->int;
io.writeln(false); // ->void equivalent

io.writeln("Testing")->int;
io.writeln("Testing"); // -> void equivalent

int[] x = [1, 2, 3, 4, 5];
io.writeln(x)->int;
io.writeln(x); // -> void equivalent
```

C Impl:
```c
int64_t io__writeln____i64_i64(int64_t a);
void io__writeln____i64_null(int64_t a);

int64_t io__writeln____f64_i64(double a);
void io__writeln____f64_null(double a);

int64_t io__writeln____bool_i64(bool a);
void io__writeln____bool_null(bool a);

int64_t io__writeln____str_i64(generic_array* arr);
void io__writeln____str_null(generic_array* arr);

int64_t io__writeln____i64arr_i64(generic_array* arr);
void io__writeln____i64arr_null(generic_array* arr);
```

### io.write

Parameters: `str`  
Returns: `void`

Example:
```ksl
io.write("Testing); // ->void equivalent
```

C Impl:
```c
void io__write____str_null(generic_array* arr);
```

### io.getln

Parameters: *N|A*  
Returns: `str`

Example:
```ksl
str input = io.getln();
```

C Impl:
```c
generic_array* io__getln_____str();
```
