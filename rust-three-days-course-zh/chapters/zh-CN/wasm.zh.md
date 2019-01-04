# WebAssembly

[回去](toc/default.html)

---

## 什么东西?

WebAssembly 支持在 Web 浏览器等 Javascript 环境中运行 Rust(以及其他).

它在许多方面都是 asm.js 的继承者.

它目前是一个开发标准,并且默认情况下,不启用.

---

## Gotcha

WebAssembly 仍然没有得到广泛的支持，并且有许多粗糙的边缘。

---

## 安装

目前,安装程序有些未细化,但是将来应该改进.

- 从[emscripten](http://kripken.github.io/emscripten-site/docs/getting_started/downloads.html)取得`emsdk`.
- 在明智的地方把它拆开.
- `cd`到终端中的目录.

---

## 安装:`emcc`

<pre><code data-source="chapters/shared/code/wasm/1.bash" data-trim="hljs bash"></code></pre>

第三个命令的输出，将提供添加指令，指明如果需要`$PATH`要添加什么。

> 我们使用`incoming`，用最新的改进.

---

## 安装:`emcc`

工具链的版本非常重要。验证没有运行以下错误:

<pre><code data-source="chapters/shared/code/wasm/2.bash" data-trim="hljs bash"></code></pre>

---

## 安装:`rustup`目标

`rustup`允许安装多个编译目标.

<pre><code data-source="chapters/shared/code/wasm/3.bash" data-trim="hljs bash"></code></pre>

---

# 独立可执行文件

---

## 独立可执行文件

<pre><code data-source="chapters/shared/code/wasm/4.bash" data-trim="hljs bash"></code></pre>

<pre><code data-source="chapters/shared/code/wasm/5.rs" data-trim="hljs rust"></code></pre>

---

## 独立可执行文件

<pre><code data-source="chapters/shared/code/wasm/6.bash" data-trim="hljs bash"></code></pre>

这将创建一个目录结构,如下所示:

<pre><code data-source="chapters/shared/code/wasm/7.output" data-trim="hljs bash"></code></pre>

---

## 独立可执行文件

一旦我们生成`wasm`和`js`文件，我们想把它们放进`site`文件夹。为此，我们可以使用`Makefile`。

<pre><code data-source="chapters/shared/code/wasm/8.makefile" data-trim="hljs makefile"></code></pre>

---

## 独立可执行文件

新建`site/index.html`:

<pre><code data-source="chapters/shared/code/wasm/9.html" data-trim="hljs html"></code></pre>

---

## 独立可执行文件

运行`python -m SimpleHTTPServer`或者等同的,浏览`localhost:8000/site`，并且打开控制台会产生以下输出:

<pre><code data-source="chapters/shared/code/wasm/10.output" data-trim="hljs bash"></code></pre>

---

# 来自 JS 的 Rust

---

## 来自 JS 的 Rust

导出用于 Javascript 的函数要复杂一些.

此外,必须像与 C 的交互一样处理交互.

---

## 来自 JS 的 Rust

当前需要 nightly 来使这个正常工作:

<pre><code data-source="chapters/shared/code/wasm/11.bash" data-trim="hljs bash"></code></pre>

---

## 来自 JS 的 Rust

<pre><code data-source="chapters/shared/code/wasm/12.bash" data-trim="hljs bash"></code></pre>

<pre><code data-source="chapters/shared/code/wasm/13.rs" data-trim="hljs rust"></code></pre>

---

## 来自 JS 的 Rust

我们可以像以前一样使用 Makefile.

<pre><code data-source="chapters/shared/code/wasm/8.makefile" data-trim="hljs makefile"></code></pre>

---

## 来自 JS 的 Rust

`Module`定义的这个`onRuntimeInitialized`钩子，是在加载 WebAssembly 之后要调用的内容.

<pre><code data-source="chapters/shared/code/wasm/14.html" data-trim="hljs html"></code></pre>

---

## 来自 JS 的 Rust

运行`python -m SimpleHTTPServer`或者等同于,浏览`localhost:8000/site`并且打开控制台产生以下输出:

<pre><code data-source="chapters/shared/code/wasm/15.output" data-trim="hljs bash"></code></pre>

---

# 来自 Rust 的 JS

---

## 来自 Rust 的 JS

Rust 调用 JS 代码也有类似的复杂性.

它主要通过在链接时间，传递`--js-library`标志,这需要 nightly Rust.

传递数字相对比较简单,但是传递更复杂的东西(比如字符串)需要额外的努力.

---

## 来自 Rust 的 JS

返回 Rust 代码的字符串:

<pre><code data-source="chapters/shared/code/wasm/17.js" data-trim="hljs javascript"></code></pre>

---

## 来自 Rust 的 JS

调用 Javascript 函数:

<pre><code data-source="chapters/shared/code/wasm/18.rs" data-trim="hljs rust"></code></pre>

---

## DOM 交互

有一个[WebPlatform 箱](https://github.com/tcr/rust-webplatform)探索，并做出贡献.

<pre><code data-source="chapters/shared/code/wasm/19.rs" data-trim="hljs rust"></code></pre>

---

## 未来

WebAssembly 正在迅速变得更加精炼和成熟。Rust 的整合工作也在进行中.

你应该多多关注,获得更多,更好的支持!
