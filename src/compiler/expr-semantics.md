# Expression Semantics

> [!WARNING]
> The methodology explained below is technically accurate but fails to mention all the details.

This page will go over how semantic analysis handles expressions. It will cover
the technical details behind return type prediction in [inline calls](../function/inline-calls.md)
and type promotion.

Currently, the entire expression recieves a type hint ahead of time. It will
attempt to convert all literals (and potentially variables) to this type. If the
expression ends up with a larger type than the hint it will simply throw an
error.

Additionally, if there is a type that doesn't match the rest that cannot be
implicitly changed, it will throw a warning or error to the programmer
explaining that in order to "do this operation" they must cast to an acceptable
type.
