# 文档

[回去](toc/default.html)

---

## `rustdoc`

Rust 提供了一个标准文档工具,称为`rustdoc`. 主要通过`cargo doc`使用.

因为这个，Rust 代码的文档几乎总是以一种通用格式呈现.

---

## `std`文档

标准库文档，托管在<https://doc.rust-lang.org/std/>.

本地脱机版本可以通过以下操作打开:

<pre><code data-source="chapters/shared/code/documentation/1.bash" data-trim="hljs bash"></code></pre>

---

## 箱 文档

箱的文档主页为<http://crates.io/>，而其代码的详细文档可以在<https://docs.rs/>找到.

一些箱子，还可以通过其列表上的"Documentation"链接，在<http://crates.io/>找到其他文档.

---

## 示例:一个模块(Module)

<iframe src="https://doc.rust-lang.org/std/vec/" width="100%" height="400">
</iframe>

---

## 示例:一个模块(模块)

这个页面记录了`vec`模块.

它从一些示例开始,然后列出该模块导出的，`struct`、`trait`或函数.

---

## 它是如何生成的?

`rustdoc`可以读取 Rust 代码和 Markdown 文档.

`//!`和`///`注释是 Markdown 格式.

<pre><code data-source="chapters/shared/code/documentation/2.rs" data-trim="hljs rust"></code></pre>

---

## 示例:组件(Components)

<iframe src="https://doc.rust-lang.org/std/string/#structs" width="100%" height="400">
</iframe>

---

## 示例:函数(Functions)

<iframe src="https://doc.rust-lang.org/std/string/struct.String.html#method.new" width="100%" height="400">
</iframe>

---

## 代码示例

默认情况下,会测试，文档注释中的代码块.

<pre><code data-trim="hljs rust">
/// ```rust
/// assert_eq!(always_true(), true)
/// ```
fn always_true() -> bool { true }
</code></pre>

---

## 不会运行的示例

此代码将不会运行,因为它不会终止.

<pre><code data-trim="hljs rust">
/// ```rust,no_run
/// serve();
/// ```
fn serve() -> ! { loop {} }
</code></pre>

---

## 说明:文档页面导航

函数的参数和返回类型,是到它们各自类型的链接(网络).

左侧的侧边栏提供到模块其他部分的快速导航.

---

## Cargo 集成

此命令构建，并打开当前项目的文档:

```sh
$ cargo doc --open
```

---

```sh
$ cargo doc --document-private-items --open
```
