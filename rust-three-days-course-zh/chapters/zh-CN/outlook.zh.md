# 展望

[回去](toc/default.html)

---

Rust 在不久的将来，会发生什么?

——

# Rust 2018

---

在 2018 年底，这年稳定特性的浪潮，终成`Rust 2018`

---

语言，虽然随着时间而改变.

但是，稳定性和向后兼容性是基本的.

---

在不中断*任何*现有代码的情况下，对语言进行核心更改.

可以这样改变 Rust 版本.

<pre><code data-source="chapters/shared/code/outlook/1.toml" data-trim="hljs toml" class="lang-rust"></code></pre>

---

## 一些变化

---

### 模块系统返工

<pre><code data-source="chapters/shared/code/outlook/1.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

<pre><code data-source="chapters/shared/code/outlook/2.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

### 路径明晰

<pre><code data-source="chapters/shared/code/outlook/3.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

### 不再有`extern crate`

---

### `?`在`main()`里面

<pre><code data-source="chapters/shared/code/outlook/4.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

### 循环可由一个值`break`啦

<pre><code data-source="chapters/shared/code/outlook/5.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

### `impl Trait`vs`dyn Trait`

未命名的类型，是应该实现一个特定的 trait，还是一个动态 trait 对象

<pre><code data-source="chapters/shared/code/outlook/6.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

`dyn Trait`是一种新的语法，给 trait 对象的.

结果显示:原语法`impl T`vs`T`是混乱和不对称.

<pre><code data-source="chapters/shared/code/outlook/7.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

### 还有很多很多东西

列表太长啦。这里有一个简短的列表

- x86 SIMD
- 128-位 原始类型
- \_ 匿名 生命周期
- async & await
- 稳定的 过程宏 (编译器 属性)
- ..= 给 包含的范围
- ... 等等 ...
