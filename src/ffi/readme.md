# FFI Concepts

Currently we're discussing adding a no mangle [attribute](../attribute/readme.md).
This would do exactly what it sounds like, it would maintain it's function name
regardless of the name mangling schema.

We're also thinking about adding some kind of syntax that would allow raw/manual
forward declarations without KSL doing any kind of type predictions.

```c
extern function func_in_another_language(int, float, float) -> void;
```

This is still pretty close to KSL syntax and it's relatively intuitive so it's likely.

This would enable developers to call functions in non-officially supported linked object
files while maintaining the type and memory safety of KSL (assuming they don't get type
translations wrong.)
