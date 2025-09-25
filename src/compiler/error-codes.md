# Error Codes

A list of error codes in the KSL compiler, where the originate, why they were triggered, etc.

---

EC0000 = Error \[Compiler Driver\]: Failed to read source file `{}`: `{}`

---

EL0000 = Error \[Lexer\]: Unexpected End-of-File Immediately After Comment Opening

EL0001 = Error \[Lexer\]: Unexpected End-of-File While Lexing Comment

EL0002 = Error \[Lexer\]: Unexpected End-of-File Immediately After Comment Opening

EL0003 = Error \[Lexer\]: Unexpected End-of-File In Closing of Multi-Line Comment

EL0004 = Error \[Lexer\]: Unexpected End-of-File While Lexing Comment

EL0005 = Error \[Lexer\]: Unexpected End-of-File Immediately After Identifier Opening

EL0006 = Error \[Lexer\]: Unexpected End-of-File While Lexing Identifier

EL0007 = Error \[Lexer\]: Unexpected End-of-File Immediately After Number Opening

EL0008 = Error \[Lexer\]: Unexpected End-of-File While Lexing Number

EL0009 = Error \[Lexer\]: Unexpected End-of-File Immediately After String Opening

EL0010 = Error \[Lexer\]: Unexpected End-of-File While Lexing String

---

EP0000 = Error \[Parser\]: Expected &lt;token&gt; but got &lt;token&gt;

EP0001 = Error \[Parser \[Iden\]\]: Expected identifier, found &lt;token&gt;

EP0002 = Error \[Parser \[Qden\]\]: Expected identifier, found &lt;token&gt;

EP0003 = Error \[Parser\]: Unexpected end-of-file while parsing block

EP0004 = Error \[Parser\]: Function &lt;name&gt; parameter &lt;param name&gt; must be a valid type, currently &lt;invalid type name&gt;

EP0005 = Error \[Parser\]: Function &lt;name&gt; must derive valid type, currently &lt;invalid type name&gt;

EP0006 = Error \[Parser\]: Invalid statement used to initialize for loop

EP0007 = Error \[Parser\]: Invalid statement used in for loop

EP0008 = Error \[Parser\]: Namespace Declaration without a Name

EP0009 = Error \[Parser\]: Expected identifier or string after using but got &lt;token&gt;

EP0010 = Error \[Parser\]: Unexpected Token in Expression, Found &lt;token&gt;

EP0011 = Error \[Parser\]: Expected Literal in Expression, Found &lt;token&gt;

EP0012 = Error \[Parser\]: Struct appears to have more fields in literal than in definition

---

ES0000 = Error \[Semantics\]: Expected variable &lt;name&gt; to be &lt;type&gt; but it's &lt;type&gt;, maybe cast?

ES0001 = Error \[Semantics\]: Reference to undefined variable &lt;name&gt;

ES0002 = Error \[Semantics\]: Invalid Binary Operation Types, Cannot use &lt;type&gt; With &lt;type&gt;, Consider Casting

ES0003 = Error \[Semantics\]: Inline Function Call with Type Hint Doesn't Match Function Return Type (Hint: &lt;type&gt;, Returns &lt;type&gt;)

ES0004 = Error \[Semantics\]: Unexpected Number of Parameters to Function &lt;name&gt;, Expected &lt;value&gt; but got &lt;value&gt;

ES0005 = Error \[Semantics\]: Type mismatch passed to function &lt;name&gt; in arg slot &lt;value&gt;, expected &lt;type&gt; but got &lt;type&gt;

ES0006 = Error \[Semantics\]: Different types passed to forward declared function &lt;name&gt; in arg slot &lt;value&gt;, previously used &lt;type&gt; but &lt;type&gt; was passed, verify this is correct

ES0007 = Error \[Semantics\]: Empty array literal, verify this is correct

ES0008 = Error \[Semantics\]: Array literal initialized with type &lt;type&gt; was passed a &lt;type&gt;

ES0009 = Error \[Semantics\]: Missing type hint for array literal declaration

ES0010 = Error \[Semantics\]: Invalid array index type, must be in the integer family, got &lt;type&gt;

ES0011 = Error \[Semantics\]: Expected &lt;literal&gt; to be Parsed as an Integer

ES0012 = Error \[Semantics\]: Expected &lt;literal&gt; to be Parsed as a Float

ES0013 = Error \[Semantics\]: Cannot use &lt;type&gt; in the context of &lt;type&lt; (attempted literal upcast)

ES0014 = Error \[Semantics\]: Cannot use &lt;type&gt; in the context of &lt;type&gt; (attempted type conversion)

ES0015 = Error \[Semantics\]: Cannot implicitly convert &lt;type&gt; to &lt;type&gt; (would lose fractional data)

ES0016 = Error \[Semantics\]: Cannot implicity convert &lt;type&gt; to &lt;type&gt;

ES0017 = Error \[Semantics\]: Type mismatch in variable declaration &lt;name&gt;, expected &lt;type&gt; but got &lt;type&gt;

ES0018 = Error \[Semantics\]: Type mismatch in variable reassignment &lt;name&gt;, expected &lt;type&gt; but got &lt;type&gt;

ES0019 = Error \[Semantics\]: Attempted to reassign variable that does not exist &lt;name&gt;

ES0020 = Error \[Semantics\]: Type mismatch in function return, expected &lt;type&gt; but got &lt;type&gt;

ES0021 = Error \[Semantics\]: Type mismatch in function return, expected &lt;type&gt; but got none

ES0022 = Error \[Semantics\]: Condition in if statement must be of type Boolean, got &lt;type&gt;

ES0023 = Error \[Semantics\]: Condition in while statement must be of type Boolean, got &lt;type&gt;

ES0024 = Error \[Semantics\]: Condition in for statement must be of type Boolean, got &lt;type&gt;

ES0025 = Error \[Semantics\]: Attempted a method call on a non-existant symbol &lt;name&gt;

ES0026 = Error \[Semantics\]: Attempted to access array that doesn't exist &lt;name&gt;

ES0027 = Error \[Semantics\]: Number of struct literal fields (&lt;count&gt;) do not match the number of fields in struct definition (&lt;count&gt;)

ES0028 = Error \[Semantics\]: Struct field &lt;name&gt; expected type &lt;type&gt; but recieved &lt;type&gt;

ES0029 = Error \[Semantics\]: Struct definition does not have expected field name &lt;name&gt;

ES0030 = Error \[Semantics\]: Expected struct field &lt;name&gt; to be &lt;type&gt; but it's &lt;type&gt;, maybe cast?

ES0031 = Error \[Semantics\]: Attempted to access struct field &lt;name&gt; but struct &lt;name&gt; doesn't have it

ES0032 = Error \[Semantics\]: Attempted to access struct that doesn't exist &lt;name&gt;

ES9000 = Warning \[Semantics\]: Break statement outside of loop will be ignored

ES9001 = Warning \[Semantics\]: Continue statement outside of loop will be ignored

---

ET0000 = Error \[Symbols\]: Path segment `{}` exists but is not a block or namespace and cannot be traversed

ET0001 = Error \[Symbols\]: Path segment `{}` does not exist in the current path

ET0002 = Error \[Symbols\]: Overload index `{}` for function `{}` is out of bounds

ET0003 = Error \[Symbols\]: Path segment `{}` exists but is not a function or function group and cannot be traversed

ET0004 = Error \[Symbols\]: Symbol `{}` not found while traversing path segments

ET0005 = Error \[Symbols\]: Unexpected symbol type when attempting to overload function `{}`

ET0006 = Error \[Symbols\]: Cannot insert non-function symbol into FunctionGroup `{}`

ET0007 = Error \[Symbols\]: Symbol `{}` already exists and is not overloadable

ET0008 = Error \[Symbols\]: Cannot traverse into FunctionGroup segment `{}` under the current context

ET0009 = Error \[Symbols\]: Scope segment `{}` exists but cannot be traversed

ET0010 = Error \[Symbols\]: No overload of function `{}` matches the provided parameters `{}`

---

ENL001 = Error \[Linker-Linux\]: Looks Like `gcc` Doesn't Exist or Isn't in Path. KSL Requires it to Build Binaries on Linux

ENL001 = Error \[Linker-Linux\]: Linker failed with status code `{}`

ENW000 = Error \[Linker-Windows\]: Linker failed with status code `{}`

ENW001 = Error \[Linker-Windows\]: Expected Linker to be part of MSVC on Windows

ENW002 = Error \[Linker-Windows\]: Unable to find Linker Resources for `{}`, Is MSVC Installed?
