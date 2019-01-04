# 动态和静态库

[回去](toc/default.html)

---

让我们尝试使用 C 语言中的 Rust.

---

## 库

<pre><code data-source="chapters/shared/code/dynamic-and-static-libs/1.rs" data-trim="hljs rust"></code></pre>

---

## C-Header(摘录)

<pre><code data-source="chapters/shared/code/dynamic-and-static-libs/2.c" data-trim="hljs c"></code></pre>

---

## Cargo

<pre><code data-source="chapters/shared/code/dynamic-and-static-libs/3.toml" data-trim="hljs toml"></code></pre>

- `cargo build`现在将构建静态库，而不是 rlib。
- `cdylib`s 是一种特殊的 dylib，它也可以删除所有特定于 Rust 的元数据.

---

## 用法

<pre><code data-source="chapters/shared/code/dynamic-and-static-libs/4.c" data-trim="hljs c"></code></pre>

<pre><code data-source="chapters/shared/code/dynamic-and-static-libs/5.sh" data-trim="hljs sh"></code></pre>

---

## 执行

<pre><code data-source="chapters/shared/code/dynamic-and-static-libs/6.sh" data-trim="hljs sh"></code></pre>

---

## 哎呀!

照顾好所有权!

<pre><code data-source="chapters/shared/code/dynamic-and-static-libs/7.rs" data-trim="hljs rust"></code></pre>

---

## 帮手

- Cheddar ：从 Rust-Libs 生成 C-Header.
