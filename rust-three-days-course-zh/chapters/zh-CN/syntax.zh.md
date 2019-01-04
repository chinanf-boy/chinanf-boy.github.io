# 语法

[回去](toc/default.html)

---

Rust 具有受 C 风格的语法，函数语言的影响.

具体的函数将在后面介绍.

---

## 基础

<pre><code data-source="chapters/shared/code/syntax/1.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## `if`

<pre><code data-source="chapters/shared/code/syntax/2.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## `match`

<pre><code data-source="chapters/shared/code/syntax/3.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## `if let`

<pre><code data-source="chapters/shared/code/syntax/4.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## `loop`和`while`

<pre><code data-source="chapters/shared/code/syntax/5.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## `for`和`while let`

<pre><code data-source="chapters/shared/code/syntax/6.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## `struct`,`type`和`enum`

<pre><code data-source="chapters/shared/code/syntax/7.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## `impl`和`trait`

<pre><code data-source="chapters/shared/code/syntax/8.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 借用

<pre><code data-source="chapters/shared/code/syntax/9.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 生命周期

`'foo`可以用来描述，借用项的生命周期.

<pre><code data-source="chapters/shared/code/syntax/10.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 作用域

Rust 是块状语言。区块可以返回值.

<pre><code data-source="chapters/shared/code/syntax/11.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 闭包

<pre><code data-source="chapters/shared/code/syntax/12.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 泛型

<pre><code data-source="chapters/shared/code/syntax/13.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

一般来说，`where`语法优先.

---

## `use`和`mod`

<pre><code data-source="chapters/shared/code/syntax/14.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 属性

Rust 属性用于许多不同的事物。全列表在[参考页面](https://doc.rust-lang.org/reference/attributes.zh.html).

<pre><code data-source="chapters/shared/code/syntax/15.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 分号

没有分号的行，隐式返回。别担心,如果你忘了,编译器会告诉你的.

<pre><code data-source="chapters/shared/code/syntax/16.rs" data-trim="hljs rust" class="lang-rust"></code></pre>
