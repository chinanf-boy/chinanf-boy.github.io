# 迭代器(Iterators)

[回去](toc/default.html)

---

Rust 迭代器是:

- 懒惰
- 普遍的
- 潜力无限

---

## 它们来自哪里?

- 集合`Vec<T>`有一个`iter()`，这是个可产生迭代器的函数.
- 诸如`std::net::TcpListener`，它通过`incoming()`提供了`TcpStreams`的迭代器.
- 迭代器也可以在其他结构上实现.

---

## 常用用途

---

## `next()`

可以手动推动迭代器:

<pre><code data-source="chapters/shared/code/iterators/1.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## `map()`

在执行 items 时，对每个 item 进行转换:

<pre><code data-source="chapters/shared/code/iterators/2.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## `filter()`

过滤掉不需要的值,跳过对它们的进一步计算:

<pre><code data-source="chapters/shared/code/iterators/3.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## `fold()`

将一系列值缩减为单个值:

<pre><code data-source="chapters/shared/code/iterators/4.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## `cycle()` & `take()`

使迭代器重复,并提前结束:

<pre><code data-source="chapters/shared/code/iterators/5.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## `zip()` & `unzip()`

加入迭代器,并再次将它们分开:

<pre><code data-source="chapters/shared/code/iterators/6.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## `max()` & `min()`

<pre><code data-source="chapters/shared/code/iterators/7.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 果茶(Gotcha)

这行不通:

<pre><code data-source="chapters/shared/code/iterators/8.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

为什么?(考虑下范围和所有权!)
