# 可变性

[回去](toc/default.html)

---

现代编程语言对数据可变性的态度不同.

Rust又是如何呢?

---

## 一个错误例子

<pre><code data-source="chapters/shared/code/mutability/1.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 这样才对

<pre><code data-source="chapters/shared/code/mutability/2.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

在Rust中,必须声明数据，为可变的(`mut`).

读取代码，哪些是可变性，就显而易见了.

---

可变性是Rust的基础，也是普遍要考虑的因素.

---

可变性是变量和引用的属性，而不是绑定数据的属性!
