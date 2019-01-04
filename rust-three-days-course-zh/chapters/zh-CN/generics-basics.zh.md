# 简单泛型

[回去](toc/default.html)

---

泛型是 Rust 的基本.

---

## 泛型结构

<pre><code data-source="chapters/shared/code/generics-basics/1.rs" data-trim="hljs rust"></code></pre>

---

## 类型推断

Rust 需要足够的信息，找到所有变量和泛型的类型.

这仅适用于有限函数的*里部*.

必须始终完整地输入签名.

---

## 泛型枚举

<pre><code data-source="chapters/shared/code/generics-basics/2.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 下面，介绍下：重要泛型枚举

---

## Option

<pre><code data-source="chapters/shared/code/generics-basics/3.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

描述不必存在的值.

`None`是一个值,不应该与`null`混淆.

---

## Result

<pre><code data-source="chapters/shared/code/generics-basics/4.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

描述操作是否成功并返回值或错误.

---

## 典型 Result

<pre><code data-source="chapters/shared/code/generics-basics/5.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 泛型函数

泛型函数具有类型参数.

<pre><code data-source="chapters/shared/code/generics-basics/6.rs" data-trim="hljs rust" class="lang-rust"></code></pre>
