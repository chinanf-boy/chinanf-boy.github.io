# 基本类型

[回去](toc/default.html)

---

## ints

Rust 带有所有标准的 int 类型,有符号(`i`)和无符号(`u`)

- i8, u8
- i16, u16
- i32, u32
- i64, u64
- i128, u128

---

## 与系统体系结构相关的数字

Rust 具有两种依赖于系统体系结构的数字类型:

- isize, usize

---

## 类型转换

可以在数字之间进行转换,_也缩短类型转换写法_:

<pre><code data-source="chapters/shared/code/basic-types/1.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

如果大小没有给出,或者无法推断,ints 默认为`i32`.

---

## 溢出

溢出触发在调试模式下会捕获,但在发布模式下不触发.可以配置此行为.

---

## 浮点数

Rust 还带有所有标准大小的浮点数:f8、f16、f32、f64

<pre><code data-source="chapters/shared/code/basic-types/2.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 数组

固定大小的数组具有以下符号:

<pre><code data-source="chapters/shared/code/basic-types/3.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 动态大小的数组

Rust 中动态大小的数组表示为切片(slice).

切片携带指向数组和长度的指针.无法调整切片的大小.

<pre><code data-source="chapters/shared/code/basic-types/4.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 单位类型

没有特定返回值的表达式，返回单元类型`()`.

<pre><code data-source="chapters/shared/code/basic-types/5.rs" data-trim="hljs rust" class="lang-rust"></code></pre>
