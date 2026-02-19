# Expressions

## Operations (Binary and Unary)

Higher precedences are executed first.

Supported Binary Operations (and Precedence):
| Operation        | Symbol   | Precedence |
| ---------------- | -------- | ---------- |
| Not              | !        | 130        |
| Modulus          | %        | 120        |
| Multiply         | *        | 110        |
| Divide           | /        | 110        |
| Add              | +        | 100        |
| Subtract         | -        | 100        |
| Left Shift       | &lt;&lt; | 90         |
| Right Shift      | &gt;&gt; | 90         |
| Less or Equal    | &lt;=    | 80         |
| Greater or Equal | &gt;=    | 80         |
| Less Than        | &lt;     | 70         |
| Greater Than     | &gt;     | 70         |
| Equal            | ==       | 60         |
| Not Equal        | !=       | 60         |
| Bitwise And      | &        | 50         |
| Bitwise Xor      | ^        | 40         |
| Bitwise Or       | |        | 30         |
| Logical And      | &&       | 20         |
| Logical Or       | \|\|     | 10         |

Supported Unary Operations:
| Operation        | Symbol                             |
| ---------------- | ---------------------------------- |
| Negative         | -&lt;num&gt;                       |
| Not              | !&lt;bool&gt;                      |
| Cast             | &lt;type&gt;'&lt;expr&gt;          |
