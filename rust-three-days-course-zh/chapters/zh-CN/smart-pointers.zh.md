# Rust 中的特殊指针

[回去](toc/default.html)

---

Rust 提供了几个特殊的指针来处理不同的场景.

它们都有一些共同点:它们由所有权管理.

---

## `std::rc::Rc<T>`

一个线程内计数的运行时引用.

<pre><code data-source="chapters/shared/code/smart-pointers/1.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 语义

- `Rc`是包含数据的控制
- 控制能被 clone
- 如果最后一个控制消耗了,则同时删除数据
- `Rc<T>`实现了`Deref<Target=T>`

---

## `std::rc::Weak<T>`

指向数据的弱指针.

<pre><code data-source="chapters/shared/code/smart-pointers/2.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 语义

- 类似`Rc`，然而，数据的存在并不能得到保证
- 单线程:保证数据在操作期间可用
- 是*不会*自动解除引用
- `Rc`圆圈是内存泄漏,弱指针可以防止

---

## 用于

- 经常用于需要复杂交叉引用的数据结构中
- 更高的运行时成本，以实现更大的灵活性

---

## `std::sync::Arc<T>`

更耗成本的`Rc`，它跨线程边界工作，因为原子计数器用于递增.

---

## 备注

不要凭直觉使用`Arc`，`rustc`在线程边界上使用`Rc`拒绝代码.

---

## `std::borrow::Cow`

- write 上 Copy
- 关于借用和所有权的抽象
- 仅在必要时，克隆数据
- <https://doc.rust-lang.org/std/borrow/enum.Cow.html#examples>
