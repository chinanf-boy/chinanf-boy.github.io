# 动态调度

[回去](toc/default.html)

---

有时,我们希望决定在运行时使用哪个实现,而不是让编译器对代码进行单一态化.

有两条路可以走.

---

## 通过 Enums 调度

如果可能的选择数量有限,可以使用 Enum:

<pre><code data-source="chapters/shared/code/dynamic-dispatch/1.rs" data-trim="hljs rust"></code></pre>

---

## 另一种形式

<pre><code data-source="chapters/shared/code/dynamic-dispatch/2.rs" data-trim="hljs rust"></code></pre>

---

## 推荐

如果不是严格必要的话，尽量减少 Enum 上的重复匹配.

---

## Trait 对象

关于 traits 的引用或原始指针,也称为 boxes，描述为所谓的"特征对象".

Trait 对象是一对指向虚拟函数表格和数据的指针.

---

## 局限性

- 每个对象只能使用一个 trait
- 这种 trait 必须满足某些条件.

---

## 对象安全 traits 的规则

- 对象安全的 traits 是*不*允许请求`Self: Sized`
- 所有方法都是对象安全的
  - 它们没有类型参数
  - 他们不使用`Self`

---

## 增进属性

- 由于 trait 对象在运行时，知道它们的确切类型，因此它们支持向下推断.

<pre><code data-source="chapters/shared/code/dynamic-dispatch/3.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## Trait 对象和闭包

闭包 trait 满足对象安全规则.

<pre><code data-source="chapters/shared/code/dynamic-dispatch/4.rs" data-trim="hljs rust"></code></pre>
