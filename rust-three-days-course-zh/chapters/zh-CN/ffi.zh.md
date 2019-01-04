# FFI

[回去](toc/default.html)

---

## 效率!

<small>(这是德国)</small>

_»高效 C 绑定库«_

---

Rust ABI 是*不*稳定.

---

Rust 支持 platform-ABI.

---

能与共享/静态库交互.

或*是*其中一个.

---

_»高效 C 绑定库«_

<br/>

没有转换成本

---

## 从 Rust 使用 C

---

## 基本的例子

C 语言的 Hello world

---

让我们假设你*真的*想要使用 `printf`

<pre><code data-source="chapters/shared/code/ffi/hello.c" data-trim="hljs rust"></code></pre>

<pre><code data-source="chapters/shared/code/ffi/hello.h" data-trim="hljs rust"></code></pre>

---

## 要做的事项

- 在 header 中 结合函数
- 链接外部代码库
- 用`unsafe { ... }`调用它们
- 为 C 函数转化数据

---

## 在我们开始之前

<pre><code data-source="chapters/shared/code/ffi/1.rs" data-trim="hljs rust"></code></pre>

禁用一些生 Rust 的命名限制

<small>(在 C 代码 很常见)</small>

---

## 绑定函数

<pre><code data-source="chapters/shared/code/ffi/hello.h" data-trim="hljs rust"></code></pre>

<pre><code data-source="chapters/shared/code/ffi/2.rs" data-trim="hljs rust"></code></pre>

---

## 原始类型

一些类型转换可以由编译器推导出的.

- `c_uint`·以`u32`
- `c_int`·以`i32`
- `c_void`·以`()`
- 等……

---

## 调用这个

<pre><code data-source="chapters/shared/code/ffi/3.rs" data-trim="hljs rust"></code></pre>

---

## Cargo(构建系统)支持

- 通过 build-dependency 箱，建立原生代码
  - `gcc`, `clang`, `cmake`,……
- `build.rs`文件负责链接代码

---

## 结构

枚举和结构的布局由编译器负责.

`#[repr(C)]`指导编译器使用平台布局.

<pre><code data-source="chapters/shared/code/ffi/4-1.rs" data-trim="hljs rust"></code></pre>

---

## 枚举

<pre><code data-source="chapters/shared/code/ffi/4-3.rs" data-trim="hljs rust"></code></pre>

---

## 不透明的类型

当不知道(或)关心内部的布局,可以使用不透明的结构.

<pre><code data-source="chapters/shared/code/ffi/4-2.rs" data-trim="hljs rust"></code></pre>

---

## 回调

`extern "C"`也适用于，将函数指针给外面的函数.

<pre><code data-source="chapters/shared/code/ffi/6.rs" data-trim="hljs rust"></code></pre>

---

## 真实的例子

绑定 imagemagick 到 Rust!

<small>(有人已经做了,但让我们再做一次)</small>

---

## bindgen

`imagemagick`有一个*很多*的函数。不要自己写所有这些`extern "C"` - 生成他们

<pre><code data-source="chapters/shared/code/ffi/7.rs" data-trim="hljs rust"></code></pre>

---

在这一点上,包括 bindings 很简单\*

<pre><code data-source="chapters/shared/code/ffi/8.rs" data-trim="hljs rust"></code></pre>

---

## 建筑层

<pre><code data-source="chapters/shared/code/ffi/9.rs" data-trim="hljs rust"></code></pre>

---

## 建筑层级

<pre><code data-source="chapters/shared/code/ffi/10.rs" data-trim="hljs rust"></code></pre>

---

## 在安全 Rust 中包装不安全代码

---

## 内存管理

<pre><code data-source="chapters/shared/code/ffi/11.rs" data-trim="hljs rust"></code></pre>

---

**结构的一个字段在运行时消失.**

剩下的代码，隔离生命周期管理的指针.

---

## C 中使用 Rust

---

像你已经看到的那样工作。

使用逆向 platform-ABI - 发出一个原生库

---

## 例如:`weechat`的插件

---

## Cargo 的设置

<pre><code data-source="chapters/shared/code/ffi/12.toml" data-trim="hljs toml"></code></pre>

---

其他类似的概念.

- `extern "C"`函数.
- `#[repr(C)]`结构/枚举.
- 使数据 C 兼容.

---

<pre><code data-source="chapters/shared/code/ffi/13.rs" data-trim="hljs toml"></code></pre>

<small>你早些看到函数的其他部分</small>

---

现在怎么办呢?

---

## 创建绑定

<small>(不,这不是一个似曾相识的)</small>

C 代码需要`.h`文件，在其中定义 Rust 函数.

`cbindgen`是一个很好的工具，来自动生成它们.

---

但是:这不是必需的,因为可通过 weechat 指定，插件 API !

---

<pre><code data-source="chapters/shared/code/ffi/14.rs" data-trim="hljs toml"></code></pre>

---

完整代码:[spacekookie/weechat-rs](https://github.com/spacekookie/weechat-rs/tree/master/examples/hello_weechat)

随时运行,玩、测试……

---

## 有些事情没有照顾到

---

---
