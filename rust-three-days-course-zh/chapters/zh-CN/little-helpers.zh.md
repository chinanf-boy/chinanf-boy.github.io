# 从一点帮助，开始

[回去](toc/default.html)

---

Rust 中的字符串本身就是一个主题.

因此,稍后将在一个单独章节中全面介绍它们.

---

## 没有杂念的 Strings

<pre><code data-source="chapters/shared/code/little-helpers/1.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 代码风格

- 4 空格
- 无 Tab
- 代码结束块符号，独占单行.

---

## println!()

<pre><code data-source="chapters/shared/code/little-helpers/2.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 使用所有权,卢克!

下面，我们第一步使用:

- `String`
- `Vec<T>`(向量)
- 普通`struct`们

<pre><code data-source="chapters/shared/code/little-helpers/3.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## `#[derive(Debug)]`

<pre><code data-source="chapters/shared/code/little-helpers/4.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

(宏应用)适用于所有数据结构.
