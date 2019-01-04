# Deref-转换

[回去](toc/default.html)

---

## 动机

为什么要进行以下工作?

<pre><code data-source="chapters/shared/code/deref-coersions/1.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

Box(`boxed_p`) 并没有名为"x"的字段!

---

## 自动解引用

在某些情况下,Rust 自动解引用。正如其他事情一样,必须明确要求:

- 通过使用`.`操作，调用或访问字段
- 通过显式地`*`解引用
- 通过`&`借用
- 这有时，会导致丑陋`&*`-模式

---

这使得包装类型，非常符合人体工程学和易于使用!

---

解引用由`Deref`和`DerefMut`-Traits 描述.

<pre><code data-source="chapters/shared/code/deref-coersions/2.rs" data-trim="hljs rust"></code></pre>

当请求解引用时,该调用被引入.

---

## 重要的 deref 行为

- `String -> &str`
- `Vec -> &[T]`

不修改有长度的字符串或向量的函数应该接受切片。选择内存布局以便*无成本*.

---

<pre><code data-source="chapters/shared/code/deref-coersions/3.rs" data-trim="hljs rust" class="lang-rust"></code></pre>
