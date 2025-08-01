# Expressions

## Operations (Binary and Unary)

Higher precedences are executed first.

Supported Binary Operations (and Precedence):
| Operation        | Symbol | Precedence |
| ---------------- | ------ | ---------- |
| Multiply         | *      | 80         |
| Divide           | /      | 80         |
| Add              | +      | 70         |
| Subtract         | -      | 70         |
| Less or Equal    | <=     | 60         |
| Greater or Equal | >=     | 60         |
| Less Than        | <      | 50         |
| Greater Than     | >      | 50         |
| Equal            | ==     | 40         |
| Not Equal        | !=     | 40         |
| Not (Bool)       | !      | 30         |
| And (Bool)       | &&     | 20         |
| Or (Bool)        | \|\|   | 10         |

Supported Unary Operations:
| Operation        | Symbol                             |
| ---------------- | ---------------------------------- |
| Negative         | -&lt;num&gt;                       |
| Not              | !&lt;bool&gt;                      |
| Cast             | &lt;type&gt;'&lt;expr&gt;          |

Operations are only allowed between supported types. KSL may
automatically promote expressions (ex. 12 + 300 will turn into
i16) but it will not demote them, in order to set a variable
to a value smaller than the type size in the resulting expression
please downcast.

Other examples of expression promotion:
```c
// Since we're working with an integer
// and a float, we promote to a float
float x = 10.0 + 5;
```
```rust
// Since we're working with an i8 (10)
// and an i16 (400) the expression is
// promoted to an i16, we can still assign
// the expression result to an i32 though
// because the variable storage type is
// larger. If `x` was an i8 it would cause
// an error.
i32 x = 10 + 400;
```

> [!WARNING]
> Information and methodology about expression promotion is subject to change as we evaluate other type safety and memory safety strategies.

> [!WARNING]
> Documentation incomplete, pulled from unfinished ksl/ksl_syntax.md file.
