# The `using` Keyword

04 / 09 / 25

## Objective

The objective of the using keyword is to enable multi-file projects to be compiled
without manually defining all included files from the command line, it also serves
as a way to disclose which existing object files should be linked after codegen.

## Dictionary

`using` - The using keyword

## Examples

The using keyword can change it's meaning depending on the syntax that follows.
Following a using keyword with a string will tell the compiler to include another
source file at the path provided, relative paths are preferred, example:

```cpp
/* file: main.k */
using "./api/weather.k";
```

This syntax will include the source of `./api/weather.k` in the compiler. It's
worth noting that each source file is compiled individually using a shared symbol
table. The resulting object files for each individual source file are then linked
together to produce the final executable.

The second way to use the using keyword is with identifiers. This syntax will tell
the compiler to link an object file following the path of the identifier. For
example:

```cpp
/* file: main.k */
using std.io;
```

This example will tell the compiler to link `std/io.o` with the resulting object
files at the end of compilation. By default the compiler will search it's own
working directory for object files to link, however if it does not find any then
it will switch to the project working directory. Periods in the syntax will denote
folders, for example:

```cpp
/* file: main.k */
using os.api.platform;
```

This example will attempt to link `os/api/platform.o` with your KSL code.
