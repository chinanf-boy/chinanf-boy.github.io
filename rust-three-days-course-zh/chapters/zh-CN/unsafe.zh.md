## 不安全 Rust

[回去](toc/default.html)

---

Rust 类型系统提供了许多安全保证,但有时,它们使特定的解决方案变得难以工作或不可能.

因此,Rust 具有"不安全代码"的概念.

---

允许使用不安全代码:

- 自由存取内容
- 解引用原始指针
- 调用外部函数
- 声明`Send`和`Sync`值
- 写入非同步全局变量

---

不安全的对面是:

- 转换为原始指针
- 内存泄漏

---

不安全的代码永远不应该:

- 用来管理由不同分配器管理的内存
  - 从不从 C++向量中建造`std:::vec::Vec`和删除它
- 在 borrowck(借用检查器) 上作弊,例如,通过改变类型的生命周期或可变性。这是最常见的"但我确信这样有效"bug 的来源.

---

## Rust 的小秘密

在实现数据结构时，不安全的情况并不少见.

安全 Rust 是实现链接列表最糟糕的语言。有一个完整的[text on this](TODO:%20Link)

---

不安全代码必须*总是*被标记`unsafe`.

<pre><code data-source="chapters/shared/code/unsafe/1.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## `unsafe`陷阱

- 并非所有的例子都那么简单。`unsafe` _必须_ 保证 Rust 所期望的不变量.
- 这*特别是*在所有权和可变借用上
- `unsafe`可以导致具有 2 个所有者的值 -> 双重释放
- `unsafe`可以使不可变数据暂时可变,这会导致 promises 和眼泪的破灭.

---

Rust 让你可以射中自己的脚，仅需要你确定把枪从枪套拿出，和无视安全第一.

---

## 实际例子

由于 Rust 禁止混淆(别名),所以在安全 Rust 中,不可能将一个切片分割成两个不重叠的部分.

<pre><code data-source="chapters/shared/code/unsafe/2.rs" data-trim="hljs rust"></code></pre>
