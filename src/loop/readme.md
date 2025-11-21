# Loops

- [While Loops](./while.md)
- [For Loops](./for.md)

A note on for loops: KSL does not have a `for item in array` loop, or a
`for i in 0..n` loop. Both of these are cool abstractions, but totally
unnecessary. It's unlikely that KSL will ever have these.

Also, for technically minded people. The `for` loop does have more instructions
than the while loop (assuming you aren't using the optimization flag via `-op`,
with the optimization flag they're virtually the same.)
