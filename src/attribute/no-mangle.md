# No Mangle

## Usage

```ksl
@no_mangle
fn non_mangled_function() -> void {}

fn mangled_function() -> void {}
```

## Purpose

The purpose of the `@no_mangle` function attribute is to prevent function names
from becoming mangled in a binary/object file outputted by KSL. This supports
better cross-language development efforts.
