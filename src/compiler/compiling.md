# Compiling the Compiler

## On Windows

Requirements:
- KSL Source Code
- Rust 1.87^: Download [Rust](https://www.rust-lang.org/tools/install)
- LLVM 18.1.x: Download [LLVM](https://github.com/llvm/llvm-project/releases/tag/llvmorg-18.1.8)
- The `libxml2` requirement for LLVM seems to be missing on Windows, luckily you can download it with `vcpkg install libxml2:x64-windows`. Once it's downloaded, rename the file from `libxml2` to `libxml2s` and put it in your `llvm/lib` folder.
  - If you need `vcpkg` click [here](https://learn.microsoft.com/en-us/vcpkg/get_started/get-started?pivots=shell-powershell#1---set-up-vcpkg).

You'll want to make sure Rust is installed fully. I've found that
installing it globally just takes care of a lot of potential issues.
Make sure the `LLVM/bin` folder is added to your path as well.
On top of that, you'll want to make a new system variable:

| Variable            | Value                            |
|---------------------|----------------------------------|
| LLVM_SYS_180_PREFIX | &lt;your_llvm_root_directory&gt; |

Once you have Rust and LLVM set up you shouldn't really need anything
else! Just navigate to the ksl source code root directory and run
`cargo build` or `cargo build --release`.

It sounds pretty simple but some of the config stuff can take a while
to figure out, I'd say this process could take anywhere between 30 minutes
and few hours, depending on your technical skills. Don't get discouraged
if it takes a while.

## On Linux

> [!NOTE]
> Documentation help wanted! The Linux build instructions are not finalized and may depend on distro, any contributions would be great!

Requirements:
- KSL Source Code
- Rust 1.87^: Download [Rust](https://www.rust-lang.org/tools/install)
- LLVM 18.1.x: Download [LLVM](https://github.com/llvm/llvm-project/releases/tag/llvmorg-18.1.8)

## On MacOS

> [!NOTE]
> Documentation help wanted! The MacOS build instructions are not finalized. Any contributions toward this section would be super helpful!

Requirements:
- KSL Source Code
- Rust 1.87^: Download [Rust](https://www.rust-lang.org/tools/install)
- LLVM 18.1.x: Download [LLVM](https://github.com/llvm/llvm-project/releases/tag/llvmorg-18.1.8)
