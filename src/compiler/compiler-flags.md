# Compiler Flags

Full list of compiler flags and overview of meaning, full list with more details
is shown below.

```
building:
  --output <name>       -o <name>       Set Name of Output Binary
  --optimize            -op             Run Optimization Passes
  --write               -wr             Write Code to Object File
  --link                -lk             Link and Produce an Executable
  --pipeline            -owl            Optimize, Write, and Link
miscillanious:
  --help                -h              Display This List of Arguments
  --dump                -d              Display Version and Environment Information
  --evasion             -ev             Prevent Warnings Related to KSL Code Safety
  --suppress-warns      -sw             Prevent Warnings from Displaying
debugging:
  --tokens              -tk             Display Token Stream(s)
  --llvm-ir             -ir             Display LLVM IR After Codegen
  --assembly            -as             Display Native Assembly After Codegen
  --type-trace          -tt             Track Custom Type Creations (Like Structs)
  --symbol-trace        -st             Track Symbol Lookups as They Occur
  --codegen-trace       -gt             Trace Codegen During AST Walk
  --compiler-trace      -ct             Trace Compiler Operations
  --ast <a,p,s>         -at <a,p,s>     Display Abstract Syntax Tree
         a                                  All Stages [Default]
         p                                  Parsing Stage
         s                                  Semantics Stage
  --symbols <a,p,s,c>   -sm <a,p,s,c>   Display Symbol Table
         a                                  All Stages [Default]
         p                                  Parsing Stage
         s                                  Semantics Stage
         c                                  Code Generation Stage
```

## Building

**`--output <name>`** (shorthand `-o <name>`): Set the name of the output
binary, by default this value is `ksl_child` (with or without `.exe` depending
on your OS.)

**`--optimize`** (shorthand `-op`): Run optimization passes on the generated
code before writing it to a binary or object file.

**`--write`** (shorthand `-wr`): Write the resulting code to an object file, by
default this should be enabled, it's mostly for development currently.

**`--link`** (shorthand `-lk`): Link the resulting object file(s) and product an
executable binary, by default this should be enabled, it's mostly for
development currently.

**`--pipeline`** (shorthand `-owl`, stands for Optimize, Write, Link): this
tells the compiler to optimize generated code, write it to an object file(s),
and link the object file(s) to a binary in this order.

## Miscillanious

**`--help`** (shorthand `-h`): Displays the list of flags and overview shown
above.

**`--dump`** (shorthand `-d`): Displays environment information to the console,
includes version, branch, and operating system; useful for debugging.

**`--suppress-warns`** (shorthand `-sw`): Suppresses all warnings raised by the
compiler, this will prevent them from being displayed during and after the
compiler runs.

## Debugging

**`--tokens`** (shorthand `-tk`): Displays the token stream to the console for
KSL source code files after they've been processed by the lexer.

**`--llvm-ir`** (shorthand `-ir`): Displays the LLVM IR to the console for KSL
binary files after they've been processed by the semantics and codegen stages.
Combining this with the `-op` flag will result in displaying both unoptimized
and optimized IR to the console.

**`--assembly`** (shorthand `-as`): Displays the native assembly to the console
for KSL binary files after they've been processed by the codegen stage.

**`--type-trace`** (shorthand `-tt`): Track custom type creations, like structs,
as they're added to the type registration system.

**`--symbol-trace`** (shorthand `-st`): Track symbol lookups as they occur
throughout the parser, semantic analysis, and codegen stages.

**`--codegen-trace`** (shorthand `-gt`): Trace the code generation stage as it
travels the Abstract Syntax Tree.

**`--compiler-trace`** (shorthand `-ct`): Trace the abstract compiler operations
as they occur (e.g. "Starting Semantic Analysis", "Semantic Analysis Finished",
"Starting Code Generation", etc.)

**`--ast <stages>`** (shorthand `-at <stages>`): Displays the Abstract Syntax
Tree to the console after specified stages. If `<stages>` is left blank it
will default to all stages. Valid `<stages>` options are:
- `a`: All stages (Default)
- `p`: Parsing stage
- `s`: Semantic analysis stage

**`--symbols <stages>`** (shorthand `-sm <stages>`): Displays the Symbol Table
to the console after specified stages. If `<stages>` is left blank it will
default to all stages. Valid `<stages>` options are:
- `a`: All stages (Default)
- `p`: Parsing stage
- `s`: Semantic analysis stage
- `c`: Code generation stage
