# For

The syntax for `for` loops is pretty simple. Just like in most languages with a
`for` loop actually.

You'll need an initialization statement (which is run once at the beginning), an
expression to check if the `for` loop should continue, and finally an iterative
expression (which is run at the end of every iteration.)

```ksl
//       +------------------ Initial Statement
//       |        +--------- Check/Continue(?) Expression
//       |        |             +-- (Must Result in a Boolean)
//       |        |      +-- Iterative Expression
//       |        |      |
for (int i = 0; i < 30; i++) {
    io.writeln(i);
}
```

The output of the above code will be the numbers 0 through 29, each on a new
line in the console.

Let's say you want to iterate over elements in an array though, what then?  
Combine the for loop with your array and the `length()` array method!

```ksl
using std.io;

fn main() -> void {
    int[] my_arr = [35, 62, 84, 44, 27, 46, 85];
    for (int i = 0; i < my_arr.length(); i++) {
        io.writeln(my_arr[i]);
    }
}
```
