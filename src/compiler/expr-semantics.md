# Expression Semantics

This page will go over how semantic analysis handles expressions.
It will cover the technical details behind return type prediction
in [inline calls](../function/inline-calls.md) and type promotion.

Currently, KSL will travel the expression in the AST and determine
the smallest possible type for all literals and the types defined
for each variable. It will then cross reference these anywhere there
is an operation between them. It will pick the larger type of the
two and "promote" the entire expression to that type. This way we
can calculate expressions for differing types without losing data
from downcasts.

---

In the future, we're likely to change this system so that the entire
expression recieves a type hint ahead of time. It will attempt to
convert all literals (and potentially variables) to this type. If
the expression ends up with a larger type than the hint it will simply
throw an error.

Additionally, if there is a type that doesn't match the rest that
cannot be implicitly changed it will throw a warning or error to
the programmer explaining that in order to "do this operation" they
must cast to an acceptable type.
