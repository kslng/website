# Error Codes

First, let's learn to understand error messages. They're comprised of three
parts:

The first letter (message type):
- E = Error
- W = Warning

The second letter (error compiler location):
- L = Lexer Stage
- P = Parser Stage
- S = Semantic Analysis
- T = Symbol Table
- N = Linking Stage
- C = Command Line

The third part, the error number. This denotes the actual message inside of the
message type and compiler location. Occasionally in `alpha` or `debug` builds an
error number might show up as `xxxx`, this means that it hasn't been assigned an
official number yet.

```
[EL0000]
 ^^^
 |||
 ||+-- Message Number
 |+--- Compiler Location
 +---- Message Type
```

> [!WARNING]
> The current error code list is incomplete, a more comprehensive list will be
> made when the compiler is closer to a stable release.

## EL0000

**Message:**  
Unexpected End-of-File Immediately After Comment Opening

**Meaning:**  
The compiler expected a message after the opening of a comment but the file
ended instead.

## EL0001

**Message:**  
Unexpected End-of-File While Lexing Comment

**Meaning:**  
The lexer expected a comment to extend to a newline character but the file ended
instead

## EL0002

**Message:**  
Unexpected End-of-File Immediately After Comment Opening

**Meaning:**  
The compiler ran into the end of the file while parsing a block comment

## EL0003

**Message:**  
Unexpected End-of-File In Closing of Multi-Line Comment

**Meaning:**  
The compiler was in the process of closing a block comment when it ran into the
end of the file

## EL0004 [DUPLICATE] [FLAG]

## EL0005

**Message:**  
Unexpected End-of-File Immediately After Identifier Opening

**Meaning:**  
The compiler started processing an identifier and ran into the end of the file
unexpectedly

## EL0006

**Message:**  
Unexpected End-of-File While Lexing Identifier

**Meaning:**  
The compiler ran into the end of the file while still in the process of lexing
an identifier

## EL0007

**Message:**  
Unexpected End-of-File Immediately After Number Opening

**Meaning:**  
The compiler ran into the end of the file while still in the process of lexing
a number

## EL0008

**Message:**  
Unexpected End-of-File While Lexing Number

**Meaning:**  
The compiler ran into the end of the file while still in the process of lexing
a number

## EL0009

**Message:**  
Unexpected End-of-File Immediately After String Opening

**Meaning:**  
The compiler ran into the end of the file while still in the process of lexing
a string

## EL0010

**Message:**  
Unexpected End-of-File While Lexing String

**Meaning:**  
The compiler ran into the end of the file while still in the process of lexing
a string

## EP0000

**Message:**  
Expected &lt;token&gt; but got &lt;token&gt;

**Meaning:**  
The parser was expecting a specific token, but a different one was in the spot

## EP0001

**Message:**  
Expected identifier, found &lt;token&gt;

**Meaning:**  
The parser was expecting an identifier but found a different token in the spot

## EP0002 [DUPLICATE] [FLAG]

## EP0003 [FLAG]

**Message:**  
Unexpected end-of-file while parsing block

**Meaning:**  
The compiler ran into the end of the file while parsing a block of statements

## EP0004

**Message:**  
Function &lt;name&gt; parameter &lt;param name&gt; must be a valid type,
currently &lt;invalid type name&gt;

**Meaning:**  
One of a functions parameters isn't a valid type

## EP0005

**Message:**  
Function &lt;name&gt; must derive valid type, currently &lt;invalid
type name&gt;

**Meaning:**  
The provided function doesn't have a valid return type

## EP0006

**Message:**  
Invalid statement used to initialize for loop

**Meaning:**  
The provided for loop initialization statement is not valid

## EP0007 [FLAG]

**Message:**  
Invalid statement used in for loop

**Meaning:**  
A provided statement in the body of a for loop is invalid

## EP0008

**Message:**  
Namespace Declaration without a Name

**Meaning:**  
A namespace was declared without a valid name afterwards

## EP0009

**Message:**  
Expected identifier or string after `using` but got &lt;token&gt;

**Meaning:**  
An invalid token sequence was provided after the `using` keyword

## EP0010

**Message:**  
Unexpected Token in Expression, Found &lt;token&gt;

**Meaning:**  
When parsing an expression the parser ran into a token that isn't supported in
expressions

## EP0011

**Message:**  
Expected Literal in Expression, Found &lt;token&gt;

**Meaning:**  
When parsing an expression the parser expected a literal but found a different
token in the spot

## ES0000

**Message:**  
Expected variable &lt;name&gt; to be &lt;type&gt; but it's &lt;type&gt;, maybe
cast?

**Meaning:**  
When using a variable in a specific type context, the variable had an
incompatible type

## ES0001

**Message:**  
Reference to undefined variable &lt;name&gt;

**Meaning:**  
An undefined variable was used somewhere in an expression

## ES0002

**Message:**  
Invalid Binary Operation Types, Cannot use &lt;type&gt; With &lt;type&gt;,
Consider Casting

**Meaning:**  
Two types used in a binary operation are not compatible with each other

## ES0003

**Message:**  
Inline Function Call with Type Hint Doesn't Match Function Return Type (Hint:
&lt;type&gt;, Returns &lt;type&gt;)

**Meaning:**  
A function call used a type hint but the type hint doesn't match a possible
return type of the function

## ES0004

**Message:**  
Unexpected Number of Parameters to Function &lt;name&gt;, Expected &lt;value&gt;
but got &lt;value&gt;

**Meaning:**  
The number of parameters passed in a function call and the number of parameters
in the function definition are different

Example:
```ksl
// Function Definition (3 Parameters)
fn testing(int a, int b, int c) -> void;

// Function Call (2 Parameters)
testing(10, 20);
```

## ES0005

**Message:**  
Type mismatch passed to function &lt;name&gt; in arg slot &lt;value&gt;,
expected &lt;type&gt; but got &lt;type&gt;

**Meaning:**  
One of the parameters passed to a function doesn't match the expected type based
on the function definition

Example:
```ksl
// Function Definition (bool, int)
fn testing(bool a, int b) -> void;

// Function Call (float, int)
testing(10.0, 10);
```

## ES0006 [FLAG]

**Message:**  
Different types passed to forward declared function &lt;name&gt; in arg slot
&lt;value&gt;, previously used &lt;type&gt; but &lt;type&gt; was passed, verify
this is correct

**Meaning:**  
Two different calls to the same forward declared function have different types
in the same parameter position

## ES0007 [FLAG]

**Message:**  
Empty array literal, verify this is correct

**Meaning:**  
There is an empty array literal.

## ES0008

**Message:**  
Array literal initialized with type &lt;type&gt; was passed a &lt;type&gt;

**Meaning:**  
An array created with one type contains an element of an incompatible type

## ES0009

**Message:**  
Missing type hint for array literal declaration

**Meaning:**  
A required type hint for array literal declarations is missing

## ES0010

**Message:**  
Invalid array index type, must be in the integer family, got &lt;type&gt;

**Meaning:**  
Attempted to use a non-integer type to index into an array, this obviously will
not work

## ES0011

**Message:**  
Expected &lt;literal&gt; to be Parsed as an Integer

**Meaning:**  
The compiler expected a literal to be parsed as an integer but it was not

## ES0012

**Message:**  
Expected &lt;literal&gt; to be Parsed as a Float

**Meaning:**  
The compiler expected a literal to be parsed as a float but it was not

## ES0013

**Message:**  
Cannot use &lt;type&gt; in the context of &lt;type&lt; (attempted literal
upcast)

**Meaning:**  
The type of a literal cannot be used in the context of a different incompatible
type

## ES0014

**Message:**  
Cannot use &lt;type&gt; in the context of &lt;type&gt; (attempted type
conversion)

**Meaning:**  
A type cannot be used in the context of a different incompatible type

## ES0015

**Message:**  
Cannot implicitly convert &lt;type&gt; to &lt;type&gt; (would lose fractional
data)

**Meaning:**  
The compiler has detected that it needs to change types in order to work in an
expression but will not implicitly convert it due to data loss, a cast is
required in this situation

## ES0016

**Message:**  
Cannot implicity convert &lt;type&gt; to &lt;type&gt;

**Meaning:**  
The compiler has detected that it needs to change types in order to work in an
expression but will not implicitly convert it for some reason

## ES0017

**Message:**  
Type mismatch in variable declaration &lt;name&gt;, expected &lt;type&gt; but
got &lt;type&gt;

**Meaning:**  
A variable was defined with a specific type but the assignment expression
resulted in a different type

## ES0018

**Message:**  
Type mismatch in variable reassignment &lt;name&gt;, expected &lt;type&gt; but
got &lt;type&gt;

**Meaning:**  
A variable was defined with a specific type but the re-assignment expression
resulted in a different type

## ES0019

**Message:**  
Attempted to reassign variable that does not exist &lt;name&gt;

**Meaning:**  
Really?

## ES0020

**Message:**  
Type mismatch in function return, expected &lt;type&gt; but got &lt;type&gt;

**Meaning:**  
The return type of a function was expecting a specific type but got a different
incompatible type

## ES0021

**Message:**  
Type mismatch in function return, expected &lt;type&gt; but got none

**Meaning:**  
The return type of a function was expected to be a specific type but wasn't
anything

## ES0022

**Message:**  
Condition in if statement must be of type Boolean, got &lt;type&gt;

**Meaning:**  
The conditional expression inside of an if statement was expecting to result in
a boolean type but instead resulted in a different incompatible type

## ES0023

**Message:**  
Condition in while statement must be of type Boolean, got &lt;type&gt;

**Meaning:**  
The conditional expression inside of a while statement was expecting to result
in a boolean type but instead resulted in a different incompatible type

## ES0024

**Message:**  
Condition in for statement must be of type Boolean, got &lt;type&gt;

**Meaning:**  
The conditional expression inside of a for statement was expected to result in a
boolean type but instead resulted in a different incompatible type

## ET0000

**Message:**  
Scope &lt;scope_name&gt; not found in path

## ET0001

**Message:**  
Symbol &lt;name&gt; already exists in current scope

## ET0002

**Message:**  
Symbol &lt;name&gt; exists and is not a scope

## ET0003

**Message:**  
Symbol &lt;name&gt; already exists in specified scope

## ET0004

**Message:**  
Invalid scope in path &lt;scope_name&gt;

## ET0005

**Message:**  
Cannot enter scope &lt;scope_name&gt; because it's occupied by a
non-scope-containing symbol

## EN0000

**Message:**  
KSL requires &lt;os_linker&gt; for linking, install it or add it to path

## EN0001

**Message:**  
Failed to run linker: &lt;linker_error&gt;

**Meaning:**  
The linker failed to run for some reason unknown to KSL

## EN0002

**Message:**  
Linker failed with status code &lt;linker_status&gt;&lt;linker_error&gt;

**Meaning:**  
The linker failed to run for some reason unknown to KSL
