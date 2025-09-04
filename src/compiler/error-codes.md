# Error Codes

A list of error codes in the KSL compiler, where the originate, why they were triggered, etc.

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

---

ET0000 = Error \[Symbols\]: Scope &lt;scope_name&gt; not found in path

ET0001 = Error \[Symbols\]: Symbol &lt;name&gt; already exists in current scope

ET0002 = Error \[Symbols\]: Symbol &lt;name&gt; exists and is not a scope

ET0003 = Error \[Symbols\]: Symbol &lt;name&gt; already exists in specified scope

ET0004 = Error \[Symbols\]: Invalid scope in path &lt;scope_name&gt;

ET0005 = Error \[Symbols\]: Cannot enter scope &lt;scope_name&gt; because it's occupied by a non-scope-containing symbol

---

EN0000 = Error \[Linker\]: KSL requires &lt;os_linker&gt; for linking, install it or add it to path

EN0001 = Error \[Linker\]: Failed to run linker: &lt;linker_error&gt;

EN0002 = Error \[Linker\]: Linker failed with status code &lt;linker_status&gt;&lt;linker_error&gt;
