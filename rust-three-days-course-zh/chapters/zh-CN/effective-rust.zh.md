# 高效 Rust

[回去](toc/default.html)

---

## 迭代器

习惯 Iterator-API 并使用它们!

迭代器经过大量优化,尤其是它们的组合.

---

## 所有权方面值得注意的问题

如果不立即在集合中放置另一个值，那将数据从集合中移出并不容易.

印第安纳·琼斯(Indiana Jones) 使用`std::mem::swap`或`std::mem::replace`.

---

在某些情况下，可以使用`Drain`，该迭代器从集合中逐个抽取值，并同时缩小值.

---

## 编译时刻

`rustc`它不是最快的编译器，在 LLVM 中会花费大量时间用于代码生成和优化.

`cargo check`只运行类型检查，不编译代码.

将代码分隔在多个箱中可能有帮助，因为箱只能在代码更改时才会重新编译.

减少泛型的使用可以提高编译时间.

---

## 优化二进制大小

- 使用系统分配器(nightly 特性)
- 如果很少用 libstd，那可以替换它
- 减少单态化函数调用的数量

---

## 正确转换

避免传递会被推断为特定类型的泛型参数.

<pre><code data-source="chapters/shared/code/effective-rust/1.rs" data-trim="hljs rust"></code></pre>

---

<pre><code data-source="chapters/shared/code/effective-rust/2.rs" data-trim="hljs rust"></code></pre>

Rust 内联(inlines) 跨库.

---

## 帮手

- GDB 支持 Rust,也支持`rust-gdb`版本
- `valgrind`与 Rust 一起工作还好
- [`afl.rs`](https://github.com/rust-fuzz/afl.rs)允许使用美国 Fuzzy Lop 进行模糊处理
- [`cargo-fuzz`](https://github.com/rust-fuzz/cargo-fuzz)使用`libfuzz`来模糊处理
- [`cargo-kcov`](https://github.com/kennytm/cargo-kcov)能够处理代码覆盖
