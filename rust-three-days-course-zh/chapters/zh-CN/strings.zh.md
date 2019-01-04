# Strings

[回去](toc/default.html)

---

Rust 中有几种不同的 字符串.

最常见的是`String`和`&str`.

---

## `String`

- *拥有*它存储的数据,并且可以自由地进行改变.
- 作为指向一些字节、长度和容量的 **指针** 而存在.
- 存在于*堆*.
- 不实现`Copy`，但是实现了`Clone`.

---

## `&str`

- 对字符串切片的不可变引用.
- 只看作借用的值.
- 可以在堆、栈或程序内存中的任何位置.

---

## 创建

<pre><code data-source="chapters/shared/code/strings/1.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 什么时候使用哪个?

- `String`是出发时*最容易的*用法，后面再细化.
- `String`拥有它的数据,因此它可以是`struct`或枚举的一个字段.

- `&'static str`对常量值，工作良好.
- `&str`通常在函数参数中使用.

---

## `Deref`强制

仅仅因为存在多种类型，并不意味着它们不能和谐工作.

<pre><code data-source="chapters/shared/code/strings/2.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

这就是因为`String` 实现了`Deref<Target=str>`.

---

## 异国字符串类型

- `OsStr`和`OsString`在使用文件系统或系统调用时可能出现.

- `CStr`和`CString`在与 FFI 一起工作时，可能会出现.

`*Str`和`*String`之间的区别，一般与正常类型相同.

---

## `OsString` & `OsStr`

这些类型表示*原生平台*字符串。这是必要的,因为 Unix 和 Windows 字符串具有不同的特征.

---

## `OsString`场景下

- Unix 字符串通常是任意的非零序列,通常解释为 UTF-8.
- Windows 字符串通常是任意的非零序列,通常解释为 UTF-16.
- Rust 字符串总是有效的 UTF-8,并且可能包含零.

`OsString`和`OsStr`弥合这一差距,允许廉价的`String`和`str`往返转换.

---

## `CString` & `CStr`

这些类型表示有效的 C 兼容字符串.

主要被外部代码进行 FFI 时使用.

强烈建议您使用这些类型之前，阅读*全部的*文档.

---

## 常见字符串任务

Split:

<pre><code data-source="chapters/shared/code/strings/3.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 常见字符串任务

Concat:

<pre><code data-source="chapters/shared/code/strings/4.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 常见字符串任务

Replace:

<pre><code data-source="chapters/shared/code/strings/5.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 接受`String`或`str`

可以毫不痛苦地接受两者:

<pre><code data-source="chapters/shared/code/strings/6.rs" data-trim="hljs rust" class="lang-rust"></code></pre>
