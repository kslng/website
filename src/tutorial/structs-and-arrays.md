# Structs, Arrays, and Assignment Shenanigans

The main purpose of this tutorial is to show what's possible with KSL regarding
structs and arrays, especially regarding assignment/mutations.

For example, below is a completely valid KSL file that works!

```ksl
struct Vector2 { int x, int y }

fn main() -> void {
    Vector2[] positions = [
        Vector2 { x: 10, y: 20 },
        Vector2 { x: 30, y: 40 },
        Vector2 { x: 50, y: 60 },
        Vector2 { x: 70, y: 80 },
        Vector2 { x: 90, y: 99 }
    ];
    // Lets say you wanted to change the `x` field
    // of the first item in the positions array.
    positions[0].x = <new_value>;
    // Increment and decrement shorthands also work
    positions[0].x++; // Increment
    positions[0].x--; // Decrement
}
```

If you want to needlessly add complexity, this will also work:

```ksl
using std.io;

struct Vector2 { int x, int y }

fn main() -> void {
    Vector2[][] positions = [[
        Vector2 { x: 10, y: 20 }, // Will be at [0][0]
        Vector2 { x: 30, y: 40 }  // Will be at [0][1]
    ], [
        Vector2 { x: 50, y: 60 }, // Will be at [1][0]
        Vector2 { x: 70, y: 80 }  // Will be at [1][1]
    ]];
    // Lets add one to the positions[0][0].y struct field!
    positions[0][0].y++;
    // Should we check if it's value was actually changed?
    // It was originally 20, so it should be 21 now.
    io.writeln(positions[0][0].y);
}
```
