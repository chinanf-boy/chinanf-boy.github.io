# 标准类型

[回去](toc/default.html)

---

在 Rust 中有几种普遍存在的类型.

他们利用强大的类型系统，来完成基本任务.

---

## 概述

- `Option<T>`-消除对原始`null`的需要
- `Result<T,E>`-消除对例外的需要.
- `Vec<T>`-可生长数组.
- `HashMap<K,V>`-键值对存储.

---

## `Option<T>`

<pre><code data-source="chapters/shared/code/standard-types/1.rs" data-trim="hljs rust"></code></pre>

Option 是包装器类型，需要展开才能使用.

---

## `Option<T>`

任何不总是返回值的函数，可选择返回`Option<T>`.

<pre><code data-source="chapters/shared/code/standard-types/2.rs" data-trim="hljs rust"></code></pre>

---

## `Option<T>`: 好处都有啥

程序员*总是*能知道哪里有`None`出现，并决定如何处理这种情况.

这个特性有助于编码过程中，*消除神秘*和帮助建立自信心.

---

## `Option<T>`: 展开来

如果值为`None`，使用`unwrap()`会让应用 panic

这只推荐写在测试和原型.

<pre><code data-source="chapters/shared/code/standard-types/3.rs" data-trim="hljs rust"></code></pre>

---

## `Option<T>`: 安全

`match`是与`Option`安全工作的几种方法之一.

<pre><code data-source="chapters/shared/code/standard-types/4.rs" data-trim="hljs rust"></code></pre>

无论怎么样，`maybe_a_value`这个程序永远不会崩溃.

---

## `Option<T>`: 提问

这种类型是否完全消除了对原始`null`的需要?

这有什么好处?

---

## `Result<T,E>`

<pre><code data-source="chapters/shared/code/standard-types/5.rs" data-trim="hljs rust"></code></pre>

Result 是包含 **成功值或错误值** 的包装器类型.

---

## `Result<T,E>`: 用法

Result 可以可通过`unwrap()`处理，就像`Option`类型，并且可以按照相同的方式进行处理.

<pre><code data-source="chapters/shared/code/standard-types/6.rs" data-trim="hljs rust"></code></pre>

在后面的章节中，将讨论处理复杂的错误场景.

---

## `Result<T,E>`: 提问

这种类型是否完全消除了对异常的需求?

这有什么好处?

---

## `Vec<T>`

拥有、可变、可生长的数组。位于堆上.

<pre><code data-source="chapters/shared/code/standard-types/7.rs" data-trim="hljs rust"></code></pre>

---

## `Vec<T>`: 创造

用`Vec::new()`或`vec![]`宏创建.

<pre><code data-source="chapters/shared/code/standard-types/8.rs" data-trim="hljs rust"></code></pre>

---

## `Vec<T>`: 作为切片

`Vec<T>`实现了`Deref<Target=[T]`，因此,它很容易用作切片.

<pre><code data-source="chapters/shared/code/standard-types/9.rs" data-trim="hljs rust"></code></pre>

---

## `HashMap<K,V>`

HashMaps 是键值对存储。键必须实现了`Hash`.

<pre><code data-source="chapters/shared/code/standard-types/10.rs" data-trim="hljs rust"></code></pre>

---

## `HashMap<K,V>`:`entry()`

在适当的位置，操纵键的响应.

<pre><code data-source="chapters/shared/code/standard-types/11.rs" data-trim="hljs rust"></code></pre>
