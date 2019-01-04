# `std`库旅游

[回去](toc/default.html)

---

是时候参观下，`std`一些有趣的地方了.

我们将集中在，那些我们没有覆盖的部分.

---

## Collections(集合)

[`std::collections`](https://doc.rust-lang.org/std/collections/index.html)

包含许多有价值的数据结构。特别地:

- [`Vec`](https://doc.rust-lang.org/std/vec/struct.Vec.html)用于存储，值序列.
- [`HashMap`](https://doc.rust-lang.org/std/collections/struct.HashMap.html)用于存储，键值对.

在寻求优化代码时,其他选项也可能是合适的.

---

## Entry

[`std::collections::hash_map::Entry`](https://doc.rust-lang.org/std/collections/hash_map/enum.Entry.html)

在一个`HashMap`中调用`.entry()`，后续会有访问 API，允许"插入或更新".

<pre><code data-source="chapters/shared/code/std-lib-tour/1.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## PhantomData

[`std::marker::PhantomData`](https://doc.rust-lang.org/std/marker/struct.PhantomData.html)

零大小的类型用于标记它们拥有`T`。 这对于需要标记、泛型或使用不安全代码的类型很有用.

<pre><code data-source="chapters/shared/code/std-lib-tour/2.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## Command

[`std::process::Command`](https://doc.rust-lang.org/std/process/struct.Command.html)

流程构建器，提供对新流程，应如何生成的细粒度控制。用于与其他可执行文件交互.

<pre><code data-source="chapters/shared/code/std-lib-tour/3.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 原子同步

[`std::sync`](https://doc.rust-lang.org/std/sync/)

提供像，`Mutex`,`RwLock`,`CondVar`,`Arc`和`Barrier`.

<pre><code data-source="chapters/shared/code/std-lib-tour/4.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 读写

[`std::io::Read`](https://doc.rust-lang.org/std/io/trait.Read.html) & [`std::io::Write`](https://doc.rust-lang.org/std/io/trait.Write.html)

对文件、套接字、缓冲区以及它们之间的任何东西的通用读写功能。也是[`std::io::prelude`]\([`std::io::prelude::*`](https://doc.rust-lang.org/std/io/prelude/)的一部分。

<pre><code data-source="chapters/shared/code/std-lib-tour/5.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 文件系统操作

[`std::fs`](https://doc.rust-lang.org/std/fs/) & [`std::path`](https://doc.rust-lang.org/std/path/)

路径处理和文件操作.

<pre><code data-source="chapters/shared/code/std-lib-tour/6.rs" data-trim="hljs rust" class="lang-rust"></code></pre>
