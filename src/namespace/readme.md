# Namespaces

Namespaces are defined on a per-file basis. Or they should be at least. They do
not have braces, just define the namespace and put the functions after it, for
example:

```ksl
namespace "food";

fn pizza() -> void {}
fn sauce() -> void {}
fn tacos() -> void {}
```

All of these can then be accessed with `food.<function_name>` (`food.pizza`,
`food.sauce`, etc.) If you're working within the namespace then the `food.` part
is not required.
