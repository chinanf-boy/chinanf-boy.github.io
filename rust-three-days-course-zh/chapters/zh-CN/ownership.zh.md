# 所有权

[回去](toc/default.html)

---

所有权是 Rust 内存管理的基础.

---

## 规则

- 每个值只有一个所有者(/所有权)
- 所有权可以转让
- 所有者负责在内存中删除自身数据
- 所有者拥有对数据的所有权限,并且可以对其进行更改(`mut`)

---

以上的规则:

- 是 Rust 类型系统的基础
- 在编译时执行
- 在许多其他方面是很实际的

---

## 例子

<pre><code data-source="chapters/shared/code/ownership/1.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

<pre class="diagram" data-source="chapters/shared/diagram/ownership/1.diagram"></pre>

---

我们尝试第二次使用`dot`，会发生什么?

---

<pre><code data-source="chapters/shared/code/ownership/2.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 哎呀!

---

在 Rust-白话 中,称为`consuming(消耗)`。 `pacman`消耗了`dot`.

这个值 **不能** 再使用了.

---

## 幕后

使用该`dot`值，调用`pacman`，`dot`会被"移动"到`pacman`。 此时,所有权移交给`pacman`(这个函数区/代码块). `main`不再是数据的所有者，
因此不允许访问或操作数据(第二次使用).

> 同时，第一次调用`pacman`函数，且运行完毕后，`dot`就被扔掉了，因为它没有返回所有权

---

## 移动方式:显式克隆(clone)

如果这种行为是不受欢迎的,怎么办?我们可以创建数据的第二个副本!

---

<pre><code data-source="chapters/shared/code/ownership/3.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

<pre class="diagram" data-source="chapters/shared/diagram/ownership/2.diagram"></pre>

---

克隆(clone)是一种通用操作,取决于手头数据的复杂性,代价可能高.

---

## 移动方式:复制(copy)而不是移动(move)

<pre><code data-source="chapters/shared/code/ownership/4.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

Copy 是指可以在内存中快速复制(使用 memcopy)，并允许复制的数据(但:不是文件指针).

---

复制的值遵循标准的所有权规则,但是当所有权被传递时,它们被复制.

---

# 警告

围绕移动的术语是相似的,但与 C++中使用的术语不相同，这就是为什么您应该常用 Rust 术语: 所有权、传递和消耗.

---

## 实际例子

<pre><code data-source="chapters/shared/code/ownership/5.rs" data-trim="hljs rust"></code></pre>

如果我们在调用`use_file`之后，使用 `File` 会发生什么?

---

## 小测验

`drop`是立即释放值的函数。实现起来是什么样子的?

<pre><code data-source="chapters/shared/code/ownership/6.rs" data-trim="hljs rust"></code></pre>

---

<pre><code data-source="chapters/shared/code/ownership/7.rs" data-trim="hljs rust"></code></pre>
