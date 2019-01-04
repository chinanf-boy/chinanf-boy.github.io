# 内变性

[回去](toc/default.html)

---

在 Rust 中,默认情况下值是不可变的.

我们可以用`mut`关键字.

如果我们只想要部分可变怎么办? 我们能做到这一点吗?

---

我们当然可以!

我们的主要法宝是`Cell<T>`和`RefCell<T>`.

---

## 一个鼓舞人心的例子

我们的文章，有一些具有不可变的内容，但观看数量不断增加.

理想情况下,我们会有`fn view(&self) -> &'static str`返回内容,并增加观看计数.

---

## 没有`Cell`s

<pre><code data-source="chapters/shared/code/inner-mutability/1.rs" data-trim="hljs rust"  class="lang-rust"></code></pre>

---

## 没有`Cell`s

这不是理想的! `view`采取了`&mut self`，这意味着这行不通:

<pre><code data-source="chapters/shared/code/inner-mutability/2.rs" data-trim="hljs rust"  class="lang-rust"></code></pre>

---

## 没有`Cell`s

<pre><code data-source="chapters/shared/code/inner-mutability/3.rs" data-trim="hljs rust"  class="lang-rust"></code></pre>

---

## 把我们的观看(views)，加到`Cell`

- `Cell`让我们移动和拿到里部**值**.
- `RefCell`通过"动态借用"，可与**引用**一起工作.

让我们再看看前面的示例，带上`Cell`.

---

## 把我们的观看(views)，加到`Cell`

<pre><code data-source="chapters/shared/code/inner-mutability/4.rs" data-trim="hljs rust"  class="lang-rust"></code></pre>

---

## 再一次，但带上`RefCell`

<pre><code data-source="chapters/shared/code/inner-mutability/5.rs" data-trim="hljs rust"  class="lang-rust"></code></pre>

---

> ...内部可变性是最后的手段.

<iframe src="https://doc.rust-lang.org/std/cell/index.html#when-to-choose-interior-mutability"  width="100%" height="400"></iframe>
