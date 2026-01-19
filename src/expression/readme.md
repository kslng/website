# Expressions

## Operations (Binary and Unary)

Higher precedences are executed first.

Supported Binary Operations (and Precedence):
| Operation        | Symbol   | Precedence |
| ---------------- | -------- | ---------- |
| Modulus          | %        | 100        |
| Multiply         | *        | 90         |
| Divide           | /        | 90         |
| Add              | +        | 80         |
| Subtract         | -        | 80         |
| Left Shift       | &lt;&lt; | 70         |
| Right Shift      | &gt;&gt; | 70         |
| Less or Equal    | &lt;=    | 60         |
| Greater or Equal | &gt;=    | 60         |
| Less Than        | &lt;     | 50         |
| Greater Than     | &gt;     | 50         |
| Equal            | ==       | 40         |
| Not Equal        | !=       | 40         |
| Not              | !        | 30         |
| And              | &&       | 20         |
| Xor              | ^        | 12         |
| Or               | \|\|     | 10         |

Supported Unary Operations:
| Operation        | Symbol                             |
| ---------------- | ---------------------------------- |
| Negative         | -&lt;num&gt;                       |
| Not              | !&lt;bool&gt;                      |
| Cast             | &lt;type&gt;'&lt;expr&gt;          |
