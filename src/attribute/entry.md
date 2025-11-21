# Entry

## Usage

```ksl
@entry
fn new_main_function() -> void {}

fn main() -> void {}
```

## Purpose

The purpose of the `@entry` function attribute is to override the binary entry
point. The primary usage for this would be customization of the code base,
however, in the future there are likely going to be "groups," where you can
define a custom entry point from the command line via compiler arguments. This
would be helpful for setting a custom entry point for testing vs. debug/release.
