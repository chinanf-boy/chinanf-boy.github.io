# 特性的未来

[回去](toc/default.html)

---

不要急，最重要快

`async` & `await`

---

未来 = 异步计算

- 网络 IO
- 来自其他线程或计算机的消息
- 操作链

---

Rust 没有隐式的运行时事件循环(比如 node.js)

---

## 抽象层

---

`Future<T>`和`Poll<T>`

`libcore`和`libstd`的一部分

---

`futures-rs`是特性的顶层抽象箱

---

`tokio`抽象箱，提供事件循环

---

## 但，这一切都是 ... 不稳定的

需要 nightly 版本 和 `futures_api`特性标志

---

<pre><code data-source="chapters/shared/code/future-futures/1.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

<pre><code data-source="chapters/shared/code/future-futures/2.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

大多数特性不会马上准备好.

相反，准备好，才返回`Poll::Pending`.

`poll()`特性是来自事件循环.

---

![](img/futures-rs-logo.svg)

`futures-rs`营救你

---

这里有`oneshot`

<pre><code data-source="chapters/shared/code/future-futures/3.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

还有特性的组合工具

<pre><code data-source="chapters/shared/code/future-futures/4.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 显式运行时

![](img/tokio.jpg)

`tokio-rs`营救你

---

`tokio`提供异步(async)执行器和运行时

<pre><code data-source="chapters/shared/code/future-futures/5.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## `futures`未来

<br/>

- 两个新关键词
- 编写看起来同步的代码
  - 免费获得异步\*

<small>\*(ISH)</small>

---

<pre><code data-source="chapters/shared/code/future-futures/6.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 我要那个!

---

## 时间线

- RFC 2394(跟踪问题 #50547)
- 在编译器中实现
- 几个阻塞问题(#51719, #53249, #53259, …)
- *不会*包括在《Rust2 018》中
  - 但很快就 (~~2018年末~~ 2019!)
