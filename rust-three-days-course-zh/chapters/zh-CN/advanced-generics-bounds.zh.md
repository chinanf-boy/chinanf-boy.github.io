# 高级泛型:Bounds

[回去](toc/default.html)

---

有时,我们希望将类型约束到某些方面,同时仍然可以编写通用代码.

为了实现这一点,我们可以约束类型参数.

---

这可以在使用类型参数的任何点发生.

---

例子:`println("{:?}")`需要调试

<pre><code data-source="chapters/shared/code/advanced-generics-bounds/1.rs" data-trim="hljs rust"></code></pre>

---

示例:需要内部值实现了`Debug`的泛型结构

<pre><code data-source="chapters/shared/code/advanced-generics-bounds/2.rs" data-trim="hljs rust"></code></pre>

---

Bounds 还可以表示执行目标的界限:

<pre><code data-source="chapters/shared/code/advanced-generics-bounds/3.rs" data-trim="hljs rust"></code></pre>

---

Traits 还可以直接要求先决条件:

<pre><code data-source="chapters/shared/code/advanced-generics-bounds/4.rs" data-trim="hljs rust"></code></pre>

---

Rust 不允许，否定的 Bounds(Trait A 和*不是* Trait B)

---

## 去掉:`Sized`

如果未另外指定,则所有类型参数都带有 bound `Sized`(该类型具有静态已知的内存大小)。可以通过使用`?Sized`抑制.

<pre><code data-source="chapters/shared/code/advanced-generics-bounds/5.rs" data-trim="hljs rust"></code></pre>

---

这有符合人体工程学的原因,因为按值传递类型很常见,并且需要已知的大小.

---

Bounds 可以在任何地方使用,这可以用于实际约束调用点的类型.

<pre><code data-source="chapters/shared/code/advanced-generics-bounds/6.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

这可以是非常实用的,因为这允许在初始化期间和在调用点上，表达不同的 bounds.

---

bounds 在转换函数中非常常见.

<pre><code data-source="chapters/shared/code/advanced-generics-bounds/7.rs" data-trim="hljs rust"></code></pre>

---

## 泛型实现

bounds 可用于约束实现的目标.

<pre><code data-source="chapters/shared/code/advanced-generics-bounds/8.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## Trait 遗传

Traits 还可以请求其他 trait 的实现,并声明依赖该信息的方法的默认实现.

<pre><code data-source="chapters/shared/code/advanced-generics-bounds/9.rs" data-trim="hljs rust" class="lang-rust"></code></pre>
