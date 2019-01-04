# 与 nightly 工作

[回去](toc/default.html)

> nightly 是 Rust 具有不稳定特性选项的版本

---

## 为什么?

- 依赖项可能需要 nightly
- 编译时间和错误消息有时是更好的(有时不是)
- 有几个特性尚未稳定
- 编译器插件

---

## 使用 nightly

使用`rustup`在一个特定的目录中，覆盖使用的版本.

<pre><code data-source="chapters/shared/code/working-with-nightly/1.bash" data-trim="hljs bash"></code></pre>

or

全局

```bash
rustup default nightly
```

---

## 特性

特性(Features)是门控，控制着能扩宽项目的"特性标志"

一些例子:

- `asm`它提供了内联汇编支持
- `no_std`禁用隐含`extern crate std`
- `inclusive_range`,类似于稳定的`exclusive_range`

---

## 支持的特性

要启用特性，在`src/main.rs`(可执行文件),或`src/lib.rs`(库)添加以下行:

<pre><code data-source="chapters/shared/code/working-with-nightly/2.rs" data-trim="hljs rust"></code></pre>

---

## 编译器插件

编译器插件为 Rust 添加额外能力。例如:

- (以前)自定义派生(derive)
- Linters(代码风格检测)
- 库，像[`regex_macros`](https://github.com/rust-lang/regex#usage-regex-compiler-plugin)

---

## 启用编译器插件

启用编译器插件，在`src/main.rs`(可执行文件),或`src/lib.rs`(库)添加以下行:

<pre><code data-source="chapters/shared/code/working-with-nightly/3.rs" data-trim="hljs rust"></code></pre>

---

## 警告

它是未知的，当或且在 编译器-插件 稳定 之前

---

## 在 nightly 中稳定开发

值得推荐使用的编译器，要使用的接近发布的版本.
