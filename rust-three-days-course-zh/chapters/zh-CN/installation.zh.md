# 工具链

[回去](toc/default.html)

---

旧网站:<https://prev.rust-lang.org/zh-CN/install.html>

新网站:<https://www.rust-lang.org/tools/install>

---

## Rustup

Rustup 是管理 Rusts 编译器工具链的标准工具.

```bash
curl https://sh.rustup.rs -sSf | sh
```

<http://rustup.rs/>

---

## 重要命令

<pre><code data-source="chapters/shared/code/installation/1.sh" data-trim="hljs bash"></code></pre>

---

# 第一步

执行以下命令:

<pre><code data-source="chapters/shared/code/installation/2.sh" data-trim="hljs sh"></code></pre>

这将加载默认库和文档的源，以便完成和脱机使用.

---

## 工具链的内容

- rustc
- cargo
- rustdoc
- rust-(lldb|gdb)
- libcore/libstd

安装的调试器依赖对应平台.

---

## rustc

<pre><code data-source="chapters/shared/code/installation/3.sh" data-trim="hljs sh"></code></pre>

Rust 编译器构建，并链接 Rust 代码.

`rustc`几乎完全是用《Rust》写的.

---

## 函数测试

<pre><code data-source="chapters/shared/code/installation/4.rs" data-trim="hljs rust"></code></pre>

---

<pre><code data-source="chapters/shared/code/installation/5.sh" data-trim="hljs sh"></code></pre>

---

## Cargo

<pre><code data-source="chapters/shared/code/installation/6.sh" data-trim="hljs sh"></code></pre>

---

Cargo 是 Rust 构建和包管理工具.

Cargo 随同`rustc`一起被安装，但不是与`rustc`版本紧密绑定.

---

## 再一次 Cargo

<pre><code data-source="chapters/shared/code/installation/7.sh" data-trim="hljs sh"></code></pre>

---

## 环顾四周

- Cargo.toml 里有什么?
- Cargo.lock 里有什么?

有关详细信息,请查看[Cargo 清单 文档](http://llever.com/cargo-book-zh/reference/manifest.zh.html).

---

## Cargo 也管理工具

<pre><code data-source="chapters/shared/code/installation/8.sh" data-trim="hljs sh"></code></pre>
