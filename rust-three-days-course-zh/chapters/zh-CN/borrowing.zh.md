# 借用

[回去](toc/default.html)

---

## 你所拥有的,你可以借给人

---

所有权提供了坚实的语义基础，但从长远来看变得不切实际.

---

如果被调用的函数没有再次将所有权返回到值,那么在函数调用后的重用数据操作是不可能的.

---

那，我们改为 **借用** 吧!

---

<pre><code data-source="chapters/shared/code/borrowing/1.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

<pre class="diagram" data-source="chapters/shared/diagram/borrowing/1.diagram"></pre>

---

简单的借用可以随时发生.

---

如果我们想要改变值呢?

---

<pre><code data-source="chapters/shared/code/borrowing/2.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

可变借用具有唯一性(只能有一个，消耗之后，才能又建一个可变借用)!

---

## 借用规则

借用值可以是:

- 不可变借用，要多少就借多少
- 或者可变引用仅一次

在调用上下文中，所有权会保留，最后解分配。

---

这能拯救我们吗?

---

## 你看到潜在的问题了吗?

<pre><code data-source="chapters/shared/code/borrowing/3.rs" data-trim="hljs rust"></code></pre>

---

如下:

- 每种类型`T`有一种类型`&T`
- 每种类型`T`有一种类型`&mut T`
- `&&T`是有效类型
- `& &mut T`不是有效类型。为什么?

---

## 借用其实为引用(reference)

这意味着我们需要不时地去 dereference 它们.

<pre><code data-source="chapters/shared/code/borrowing/4.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 借用是单一性的.

<pre><code data-source="chapters/shared/code/borrowing/5.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 这才行

<pre><code data-source="chapters/shared/code/borrowing/6.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 借用与匹配

有时您希望引用枚举的内部值,但不希望使用它.

<pre><code data-source="chapters/shared/code/borrowing/7.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 非单一的生命周期

<https://github.com/rust-lang/rust/issues/43234>
