# 功能

[回去](toc/default.html)

---

## 定义

<pre><code data-source="chapters/shared/code/functions/1.rs" data-trim="hljs rust"></code></pre>

---

## 带参数

<pre><code data-source="chapters/shared/code/functions/2.rs" data-trim="hljs rust"></code></pre>

---

## 带返回

返回是可选的。函数签名必须完整.

<pre><code data-source="chapters/shared/code/functions/3.rs" data-trim="hljs rust"></code></pre>

---

## 泛型函数

泛型函数具有`T`类型参数.

<pre><code data-source="chapters/shared/code/functions/4.rs" data-trim="hljs rust"></code></pre>

---

## 带 bounds

泛型函数也可以具有 bounds (另一种写法).

这些是等价的:

<pre><code data-source="chapters/shared/code/functions/5.rs" data-trim="hljs rust"></code></pre>

---

# 注意

- 不具有`Copy`特性，在值传递时，就会被消耗.
- 返回引用，可能涉及明确生命周期(稍后讨论).
