# 示例

---

## Python 3
```python
print("Hello, World!")
```

## Node.js
```javascript
console.log("Hello, World!")
```

## Lua
```lua
print("Hello, World!")
```

## C++
```cpp
#include <iostream>
using namespace std;
int main()
{
    cout << "Hello, world!" << endl;
    return 0;
}
```

## C#
```cs
using System;
namespace HelloWorldApplication
{
    class HelloWorld
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
            Console.ReadKey();
        }
    }
}
```

## C
```c
#include <stdio.h>
int main()
{
    printf("Hello, World! \n");
    return 0;
}
```

## Java
```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```
::: tip 注意
类名必须为 **Main**。
:::

## PHP
```php
<?php
echo "Hello, World!";
?>
```

## Kotlin
```kotlin
fun main() {
    println("Hello, World!")
}
```

## Kotlin Script
```kotlin
println("Hello, World!")
```

## Rust
```rs
fn main() {
    println!("Hello, World!");
}
```

## Golang
```go
package main;
import "fmt";
func main() {
    fmt.Println("Hello, World!");
}
```

## F#
```fs
printfn "Hello, World!"
```

## R
```r
print("Hello, World!")
```

## Pascal
```pascal
program Hello;
begin
  writeln ('Hello, world!')
end.
```

## Lisp
```lisp
(write-line "Hello, World")
```

## Erlang
```erlang
% escript will ignore the first line

main(_) ->
    io:format("Hello, World!~n").
```

## Swift
```swift
print("Hello, World!")
```

## Brainfuck
```brainfuck
>++++++++++[<+++++++>-]<++.>++++++++++[<++>-]<+++++++++.+++++++..+++.>++++++++++[<------>-]<-------.>++++++++++[<->-]<--.>++++++++++[<+++++>-]<+++++.>++++++++++[<++>-]<++++.+++.------.--------.>++++++++++[<------>-]<-------.
```

## Groovy
```groovy
println 'Hello, World!'
```

## Bash
```bash
echo "Hello, World!"
```

## NASM（64 位）
```asm
segment .data
    msg db "Hello, world!", 0xA
    len equ $ - msg

section .text
global _start
_start:
    mov edx, len
    mov ecx, msg
    mov ebx, 1
    mov eax, 4
    int 0x80

    mov ebx, 0
    mov eax, 1
    int 0x80
```