# Futures

[回去](toc/default.html)

---

[`futures-rs`](https://github.com/alexcrichton/futures-rs)箱通常用于构建异步功能。它提供了类似在 Javascript 中，`Promise`功能.

---

## 关于性能和可用性的说明

- Rust 没有像 Node.js 那样的隐式运行时事件循环.
  - Tokio 提供了一个显式的.
- Futures 是一种零成本的抽象.
- `futures-rs`文档被认为是"不好的".
- 异步生态系统还很年轻。耐心点!

---

## 简单看看 oneshot

`futures::sync::oneshot`提供基本的、单次使用的 future.

他们感觉自己像是一个通道，甚至带有一对`tx`和`rx`.

---

## 简单看看 oneshot

<pre><code data-source="chapters/shared/code/futures/1.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 简单看看 oneshot

如果我们交换`rx.wait()`，以及`tx.send()`?

这里**没有**隐式线程,调用`rx.wait()`会阻塞线程，直到接收到数据!

---

## 简单看看 oneshot(线程)

<pre><code data-source="chapters/shared/code/futures/2.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 多个 oneshot

<pre><code data-source="chapters/shared/code/futures/3.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 57 个通道(已没有什么了)

一个`futures::sync::mpsc`表示一个将产生一系列 Futures 的通道.

`mpsc::channel`缓冲区大小是有限的，并且与压力有关。

`mpsc::unbounded`没有限制的大小，可增长，以适应所有内存。

---

## 57 个通道(已没有什么了)

<pre><code data-source="chapters/shared/code/futures/4.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## CPU 池中的 Toes

`futures-rs`随[`futures_cpupool`](https://docs.rs/futures-cpupool/0.1.7/futures_cpupool/)而来，它提供了一种简单、易于使用的 CPU 池类型.

这允许我们调度任意(异构!)作业到一个池中，而不用担心它在哪里(以及何时)执行.

---

## CPU 池中的 Toes

<pre><code data-source="chapters/shared/code/futures/5.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 与 Futures 的交互

大多数时候,你不会创造原始 Futures,并把它们四处发送。

相反,您可能最终会作为箱的一部分与它们进行交互.

与其担心如何处理它们，不如更担心怎么和它们工作，以及如何创建和执行它们.
