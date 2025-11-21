# Time

> [!WARNING]
> The std.time module is not stable and/or partially implemented.

```ksl
using std.time;
```

### time.get_ns

Parameters: *N|A*  
Returns: `i64`

Example:
```ksl
int nanoseconds = time.get_ns();
```

C Impl:
```c
int64_t time__get_ns_____i64();
```
