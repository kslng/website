# Random

> [!WARNING]
> The std.random module is not stable and/or partially implemented.

```ksl
using std.random;
```

### random.seed

Parameters: { *N|A* | `i64` }  
Returns: `void`

Example:
```ksl
random.seed(); // Pick a seed automatically based on system time
random.seed(246); // Pick a custom seed
```

C Impl:
```c
void random__seed_____null();
void random__seed____i64_null(int64_t ss);
```

### random.rand

Parameters: *N|A*  
Returns: { `i64` | `f64` }

Example:
```ksl
int random_int = random.rand(); // KSL will detect int context and select that version for you
float random_float = random.rand(); // KSL will detect float context and select that version for you
```

C Impl:
```c
int64_t random__rand_____i64();
double random__rand_____f64();
```

### random.randint

Parameters: `i64`, and `i64`  
Returns: `i64`

Example:
```ksl
int random_int_in_range = random.randint(10, 20); // Random integer between 10 and 20
```

C Impl:
```c
int64_t random__randint____i64_i64_i64(int64_t min, int64_t max);
```
