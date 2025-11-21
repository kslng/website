# Math

> [!WARNING]
> The std.math module is not stable and/or partially implemented.

```ksl
using std.math;
```

### math.floor

Parameters (one of): { `f64` | `f32` }  
Returns: `i64`

Example:
```ksl
int floored = math.floor(20.5); // becomes 20
```

C Impl:
```c
int64_t math__floor____f64_i64(double num);
int64_t math__floor____f32_i64(float num)
```

### math.round

Parameters: `f64`  
Returns: `i64`

Example:
```ksl
int rounded_1 = math.round(20.5); // becomes 21
int rounded_2 = math.round(20.4); // becomes 20
```

C Impl:
```c
int64_t math__round____f64_i64(double num);
```

### math.min

Parameters: `i64`, and `i64`  
Returns: `i64`

Example:
```ksl
int smallest = math.min(10, 20); // becomes 10
```

C Impl:
```c
int64_t math__min____i64_i64_i64(int64_t a, int64_t b);
```

### math.max

Parameters: `i64`, and `i64`  
Returns: `i64`

Example:
```ksl
int largest = math.max(10, 20); // becomes 20
```

C Impl:
```c
int64_t math__max____i64_i64_i64(int64_t a, int64_t b);
```

### math.clamp

Parameters: { `i64` | `f64` }, { `i64` | `f64` }, and { `i64`, `f64` }  
Return: { `i64` | `f64` }

Example:
```ksl
int clamped_int = math.clamp(100, 10, 20); // Becomes 20
float clamped_float = math.clamp(8.2, 2.5, 4.5); // Becomes 4.5
```

C Impl:
```c
int64_t math__clamp____i64_i64_i64_i64(int64_t val, int64_t min, int64_t max);
double math__clamp____f64_f64_f64_f64(double val, double min, double max)
```

### math.sqrt

Parameters: `i64`  
Returns: `f64`

Example:
```ksl
float sqrted = math.sqrt(100); // Becomes 10.0
```

C Impl:
```c
double math__sqrt____i64_f64(int64_t num);
```
