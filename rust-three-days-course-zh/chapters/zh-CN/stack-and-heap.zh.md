# 栈和堆

[回去](toc/default.html)

---

Rust 默认 在栈(stack)上执行分配

---

## 栈分配

<pre><code data-source="chapters/shared/code/stack-and-heap/1.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## Box

堆分配由以下`Box`类型表示.

<pre><code data-source="chapters/shared/code/stack-and-heap/2.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 所有权与借用

`Box`是拥有者,但是可以借用其中包含的值.

<pre><code data-source="chapters/shared/code/stack-and-heap/3.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 其他堆分配

其他可能在堆上分配的类型,最值得注意的是`Vec`和`String`.

---

## 放置在

目前*不*可以在自选位置分配值。缺少的特性称为"placement in".

[详细的讨论在这里](https://internals.rust-lang.org/t/lang-team-minutes-feature-status-report-placement-in-and-box/4646)

---

在大多数情况下,LLVM 已经优化了栈分配，随后移到堆的直接堆分配。
