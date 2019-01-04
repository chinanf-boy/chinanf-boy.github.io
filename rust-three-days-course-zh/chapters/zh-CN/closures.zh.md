# 闭包

[回去](toc/default.html)

---

Rust 有闭包。甚至是 多样的

- **优势:**高度的优化，只使用绝对必要的运行时资源，大多数情况下甚至没有.
- **缺点:**了解特定的闭包类型，并不总是容易的.

---

## 记住啦

<pre><code data-source="chapters/shared/code/closures/1.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

<pre><code data-source="chapters/shared/code/closures/2.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 闭包类型

FnOnce

- 消耗其环境的闭包

FnMut

- 获取可变的借用值所以可以改变其环境

Fn

- 从其环境获取不可变的借用值.

---

`rustc`自动推断类型,但是类型签名需要它!

---

闭包类型之间的关系是: Fn 是一个 不变的 FnMut,FnMut 是 FnOnce 的 supertrait.

---

## 闭包参数的符号

<pre><code data-source="chapters/shared/code/closures/3.rs" data-trim="hljs rust"></code></pre>

---

## 移动和闭包

由于闭包环境是隐式的,所以将类型移动到闭包中，是应显式表示的.

<pre><code data-source="chapters/shared/code/closures/4.rs" data-trim="hljs rust"></code></pre>
