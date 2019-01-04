# 转换

[回去](toc/default.html)

---

Rust 提供了多种方式,来表达一种类型到另一种类型的转换.

这提高了安全性,并表明意图.

---

## `From<T>`,`Into<T>`

一种类型到另一种类型的转换.

如果`X`是来自`From<T>`，然后`T`就是自动到`Into<X>`.

使用取决于上下文.

---

## 例子

<pre><code data-source="chapters/shared/code/conversion-patterns/1.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## `try!`或`?`具体做了什么?

<pre><code data-source="chapters/shared/code/conversion-patterns/2.rs" data-trim="hljs rust"></code></pre>

---

## `AsRef<T>`

引用到引用的转换。指示，一个类型可以容易地生成对其他类型的引用.

---

## 例子

<pre><code data-source="chapters/shared/code/conversion-patterns/3.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## `Borrow<T>`和`BorrowMut<T>`

`Borrow<T>`关于所有权和借用的抽象。`Borrow<T>`表示该类型可以是`T`的一个借用。 类似于`AsRef<T>`，但传达的是不同的意图.
