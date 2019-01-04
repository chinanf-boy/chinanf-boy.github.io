# 生命周期

[回去](toc/default.html)

---

<pre><code data-source="chapters/shared/code/lifetimes/1.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

<pre><code data-source="chapters/shared/code/lifetimes/2.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

Rust 的生命周期，以难以理解，而臭名远扬.

---

这，真没有必要.

---

## 生命周期

- 生命周期描述，'值'，保留在内存中的时间
- 他们仅描述-他们不能强迫或改变任何事情
- 生命周期就是个类型!

---

## 你已经用过了

<pre><code data-source="chapters/shared/code/lifetimes/3.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 动机

<pre><code data-source="chapters/shared/code/lifetimes/4.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

如果编译这段代码，将违反内存安全.

---

正确的结构定义是:

<pre><code data-source="chapters/shared/code/lifetimes/5.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

包装现在是:

- 类型`T` 上的泛型
- 以及一个生命周期`'a`(自己)
- 借用的值必须存在与该结构*至少一样长*

---

外传:

生命周期描述最小条件

---

## 一个签名的多个生命周期

<pre><code data-source="chapters/shared/code/lifetimes/6.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 子生命周期

<pre><code data-source="chapters/shared/code/lifetimes/7.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

术语:`Input outlives Tokenizer`(输入异常标记器)

---

生命周期不能做*更多*事情，除了描述一下"这个必须比另一个活得更长(或者至少等长)".

---

常见的陷阱:你不能"缩短生命周期(shorten a lifetime)",因为它仅仅描述了已经存在的东西.

---

## `'static`

`'static`生命比其他生命都长。这并不一定是永远的!

---

`'static`数据的实例如下:

- 包含在二进制文件中的数据,例如静态字符串
- 堆分配的值(例如：一个`Box`中的内容)
  - 只要它们不受生命周期较短的值约束!
- 全局的

---

`'static`不是安全舱口。在并发的,尤其是事件式的程序中,`'static`很平常.

这是因为大多数的数据必须位于栈之外.

---

生命周期描述所有类型,不仅是引用,因此它们也是泛型代码中的界限.

<pre><code data-source="chapters/shared/code/lifetimes/8.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 生命周期-省略

对于简单的情况,生命周期会自动插入到签名中.

<pre><code data-source="chapters/shared/code/lifetimes/9.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 生命周期与制约

<pre><code data-source="chapters/shared/code/lifetimes/10.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

<pre><code data-source="chapters/shared/code/lifetimes/11.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 生命与盒子化

对于 boxes,包含的值的默认界限是`'static`. 有时太长了,不过可以被覆盖:

<pre><code data-source="chapters/shared/code/lifetimes/12.rs" data-trim="hljs rust" class="lang-rust" class="lang-rust"></code></pre>
