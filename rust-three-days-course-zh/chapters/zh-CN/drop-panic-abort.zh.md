# 丢弃,恐慌,中止

> Drop, panic, and abort

[回去](toc/default.html)

---

当丢弃(drop)值时，其中发生的细节是什么?

---

## Drop-顺序

丢弃发生的顺序目前*没有*标准化。不过，有充分的理由将目前的形式作为标准。

[Discussion](https://github.com/rust-lang/rfcs/issues/1857)

---

## Drop-顺序

- 在存在值的代码块结尾，值就会丢弃
- 最终的顺序是*反顺序进行*
- 未绑定的值将立即删除
- 结构字段是从*最后到第一*丢弃

---

## 结构预回收函数(Destructors)

有时,回收之前必须采取某些行动.

为此,可以实现`Drop`trait.

---

<pre><code data-source="chapters/shared/code/drop-panic-abort/1.rs" data-trim="hljs rust"></code></pre>

---

## 警告!

预回收函数不能返回错误.

---

## 也可能

通过所有权-消耗函数，显式销毁值。目前无法静态强制执行。

实现一个`Drop`炸弹（一个失败的预回收函数）可以让错误尽早调用。

---

## 恐慌(Panics)

Rust 也有另一个错误机制:`panic!`

<pre><code data-source="chapters/shared/code/drop-panic-abort/2.rs" data-trim="hljs rust"></code></pre>

---

在恐慌的情况下,下列情况:

- 当前线程立即停止
- 堆栈是展开的
- 删除所有受影响的值，并运行它们的预回收函数

---

恐慌是与 C++异常类似的实现方式,但应该只用于致命错误。他们不能被(通常情况)抓住.

受影响的线程会死掉.

---

## 捕捉恐慌

跨越 FFI 边界的恐慌是未定义的行为。在这些情况下,恐慌*必须*被抓住。对于这样的情况,有[std::panic::catch-unwind](https://doc.rust-lang.org/std/panic/fn.catch_unwind.html)和[std::panic::resume-unwind](https://doc.rust-lang.org/std/panic/fn.resume_unwind.html).

---

## 钩子

[std::panic::set_hook](https://doc.rust-lang.org/std/panic/fn.set_hook.html)允许设置全局处理程序，在展开发生*前*运行.

---

一般来说,如果要处理错误，用`Result`就是传播错误的正确方法.

---

## 中止(Abort)

在某些环境中,展开`panic!`不是很有意义。对于这些情况,`rustc`和`cargo`有一个开关,在恐慌时，立即中止程序.

执行 panic hook.

---

## 双重恐慌

在处理恐慌时，进行恐慌。例如,在预回收函数中，调用了未定义的行为.由于这个原因,程序将立即中止.
