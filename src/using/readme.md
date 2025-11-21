# Libraries

The syntax for this is strange so pay attention. Both libraries and
files use the `using` keyword to be imported, but what follows the
`using` keyword is different.

In order to import another .k or .ksl file, follow up the `using`
keyword with a **string** that contains the relative path to the file:
```cpp
using "src/api.k"; // Imports the contents of src/api.k to be used.
using "src/abi.k"; // Imports the contents of src/abi.k to be used.
using "lib/ffi.k"; // Imports the contents of lib/ffi.k to be used.
```

To use a library (like a standard-lib module) the syntax is a
little different, follow up the `using` keyword with an extended
identifier instead:
```cpp
using std.io;  // Links the standard io library.
using std.fs;  // Links the standard file system library.
using std.env; // Links the standard environment library.
```

> [!NOTE]
> The biggest difference is that imports (using "") are .k or .ksl files, most likely part of your own codebase. Links, on the other hand (using &lt;iden&gt;) link object files to your final executable. These object files are expected to be in the same directory as the compiler itself, but project-specific support may be added in the future. Each period represents a directory. So `std.io` would link the `std/io.o` object file into the final executable.
