# Name Mangling Convention

> [!WARNING]
> The name mangling convention has changed and is slightly more detailed in
> recent versions of the compiler. Documentation will be changed to reflect this
> in the near future.

The KSL name mangling convention is designed to prevent any kind of type
confusion. That includes the return type.

This also means that you can provide function overloading in KSL modules and
external object files. The main reason for the return type being included is so
that there can be functions that serve the same purpose but the KSL return type
predictor doesn't get too broken.

The general rules for name mangling in KSL are as follows:

1. Periods in identifiers are translated to two underscores.
2. Space between the function name and types are four underscores.
3. The rest of the name will have all parameter types and the return type all
   separated by one underscore.

You'll also see that the type keyword `int` turns into `i64`. This is because,
as explained in [variables](../variable/), `int` and `float` are just aliases
for `i64` and `f64` respectively. Reasoning for this choice are explained there.

## Functions

```ksl
fn main(i64 a, i64 b) -> i64 {}
//  ^    ^      ^         ^
//  |    |      |         |
//  |    |      |         +---- Return Type
//  |    |      +-------------- Parameter Type
//  |    +--------------------- Parameter Type
//  +-------------------------- Function Name
```

`<namespace>__<function_name>____<parameter_types>_<return_type>`

Where:
- `namespace` is the current namespace of the function
- `function_name` is the name of the function
- `parameter_types` are the type identifiers of all parameters concatenated with
  a `_`
- `return_type` is the function return type

So:
```ksl
fn main(i64 a, i64 b) -> i64  // Becomes: __main____i64_i64_i64

namespace api;
fn add(f64 a, f64 b) -> f64   // Becomes: api__add____f64_f64_f64
fn getFloat() -> f64          // Becomes: api__getFloat_____f64

namespace ipa;
fn not(bool val) -> bool      // Becomes: ipa__not____bool_bool
fn testing() -> void          // Becomes: ipa__testing_____null
```

## Methods

> [!WARNING]
> As of writing, the official conventions for methods have not been finalized.

```ksl
    i64[] a = [10, 20];
    a.push(30);
//  ^  ^   ^
//  |  |   |
//  |  |   +----------- Parameter
//  |  +--------------- Method Name
//  +------------------ Variable Name
```

`t<variable_type>_method_<method_name>____<parameter_types>`

Where:
- `variable_type` is the type (int, float, arr) of the variable being operated on
- `method_name` is the name of the method
- `parameter_types` are the type identifiers of all parameters concatenated with
  a `_`

Since methods do not have a return type and are expected to always mutate a
variable directly, there is no need for there to be a return type in the mangled
name.

So:
```ksl
str a = "Hello, ";
a.join("World!");   // Becomes: tstr_method_join____str

i64[] b = [10, 20];
b.push(30);         // Becomes: tarr_method_push____i64
```

## Variables

> [!WARNING]
> As of writing, the official conventions for variables have not been decided.
