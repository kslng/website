# Error Codes

A list of error codes in the KSL compiler, where the originate, why they were triggered, etc.

---

ES-CTO = Error \[Semantics\]: Cannot use &lt;type&gt; in the context of &lt;type&lt; (attempted literal upcast)

ES-CTS = Error \[Semantics\]: Cannot use &lt;type&gt; in the context of &lt;type&gt; (attempted type conversion)

ES-CID = Error \[Semantics\]: Cannot implicitly convert &lt;type&gt; to &lt;type&gt; (would lose fractional data)

ES-CIC = Error \[Semantics\]: Cannot implicity convert &lt;type&gt; to &lt;type&gt;

ES-PAI = Error \[Semantics\]: Expected &lt;literal&gt; to be Parsed as an Integer

ES-PAF = Error \[Semantics\]: Expected &lt;literal&gt; to be Parsed as a Float

ES-TCB = Error \[Semantics\]: Expected variable &lt;name&gt; to be &lt;type&gt; but it's &lt;type&gt;, maybe cast?

ES-RUV = Error \[Semantics\]: Reference to undefined variable &lt;name&gt;

ES-IBT = Error \[Semantics\]: Invalid Binary Operation Types, Cannot use &lt;type&gt; With &lt;type&gt;, Consider Casting

ES-CTH = Error \[Semantics\]: Inline Function Call with Type Hint Doesn't Match Function Return Type (Hint: &lt;type&gt;, Returns &lt;type&gt;)

ES-UNP = Error \[Semantics\]: Unexpected Number of Parameters to Function &lt;name&gt;, Expected &lt;value&gt; but got &lt;value&gt;

ES-ATM = Error \[Semantics\]: Type mismatch passed to function &lt;name&gt; in arg slot &lt;value&gt;, expected &lt;type&gt; but got &lt;type&gt;

ES-DTM = Error \[Semantics\]: Different types passed to forward declared function &lt;name&gt; in arg slot &lt;value&gt;, previously used &lt;type&gt; but &lt;type&gt; was passed, verify this is correct

ES-VTM = Error \[Semantics\]: Type mismatch in variable declaration &lt;name&gt;, expected &lt;type&gt; but got &lt;type&gt;

ES-RTM = Error \[Semantics\]: Type mismatch in variable reassignment &lt;name&gt;, expected &lt;type&gt; but got &lt;type&gt;

ES-VNA = Error \[Semantics\]: Attempted to reassign variable that does not exist &lt;name&gt;

ES-RTM = Error \[Semantics\]: Type mismatch in function return, expected &lt;type&gt; but got &lt;type&gt;

ES-FBT = Error \[Semantics\]: Condition in if statement must be of type Boolean, got &lt;type&gt;

ES-WBT = Error \[Semantics\]: Condition in while statement must be of type Boolean, got &lt;type&gt;

ES-OBT = Error \[Semantics\]: Condition in for statement must be of type Boolean, got &lt;type&gt;

EP-LIX = Error \[Parser\]: Expected Literal in Expression, Found &lt;token&gt;

EP-UTE = Error \[Parser\]: Unexpected Token in Expression, Found &lt;token&gt;

EP-NSN = Error \[Parser\]: Namespace Declaration without a Name

EP-FIT = Error \[Parser\]: Function &lt;name&gt; must derive valid type, currently &lt;invalid type name&gt;

EP-FPT = Error \[Parser\]: Function &lt;name&gt; parameter &lt;param name&gt; must be a valid type, currently &lt;invalid type name&gt;

EP-BOF = Error \[Parser\]: Unexpected end-of-file while parsing block

EP-UIE = Error \[Parser \[Qden\]\]: Expected identifier, found &lt;token&gt;

EP-UIX = Error \[Parser \[Iden\]\]: Expected identifier, found &lt;token&gt;

EP-EUX = Error \[Parser\]: Expected &lt;token&gt; but got &lt;token&gt;
