# 箱(crates)

[回去](toc/default.html)

---

Rust 叫库为`crates`。 箱的管理通常通过`cargo`完成，但这并不是绝对必要的.

---

## crate 的使用

在 Rust 2015,您需要通过`extern crate`-声明，拿到 crate.

<pre><code data-source="chapters/shared/code/crates/0.rs" data-trim="hljs rust"></code></pre>

这导入"SERialisation/DEserialisation"-框架.

---

在 Rust 2018 ,这不再需要这么做。通过 Cargo 申报的 crate， 可以简单地使用`use`-声明.

<pre><code data-source="chapters/shared/code/crates/1.rs" data-trim="hljs rust"></code></pre>

---

## 宏用法

由于 Rust 2018 不再需要显式地导入宏，它们就像函数一样工作.

简单的宏调用，如下

<pre><code data-source="chapters/shared/code/crates/2.rs" data-trim="hljs rust"></code></pre>

您可能仍然会遇到旧的 Rust 代码,它依赖`#[macro_use]`

---

Crates 可以重命名,就像普通使用语句一样:

<pre><code data-source="chapters/shared/code/crates/3.rs" data-trim="hljs rust"></code></pre>

注意使用之前的`crate`关键字。您使用的是本地别名，而原名变量仍然存在.

---

备选方案:通过 cargo 重命名依赖项:

<pre><code data-source="chapters/shared/code/crates/4.toml" data-trim="hljs toml"></code></pre>

---

## crates.io

发布的可以在[crates.io](https://crates.io)找到，它们的文档也会自动发布到[docs.rs](https://docs.rs).

---

## 箱及其应用

`cargo install my_crate`安装，裹着箱的应用程序.
