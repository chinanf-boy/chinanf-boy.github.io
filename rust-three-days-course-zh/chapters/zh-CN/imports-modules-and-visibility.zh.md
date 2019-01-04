# 导入、模块和可见性

[回去](toc/default.html)

---

## 导入

所有要使用的项目必须声明。这类似于 Java 或 Haskell.

<pre><code data-source="chapters/shared/code/imports-modules-and-visibility/1.rs" data-trim="hljs sh" class="lang-sh"></code></pre>

---

## 模块导入

相应的，也可以导入这模块，规范每次的使用.

<pre><code data-source="chapters/shared/code/imports-modules-and-visibility/2.rs" data-trim="hljs sh" class="lang-sh"></code></pre>

---

## Glob(全球) 导入

您还可以从模块导入所有内容.

<pre><code data-source="chapters/shared/code/imports-modules-and-visibility/3.rs" data-trim="hljs sh" class="lang-sh"></code></pre>

但，这*通常*不允许

---

## Prelude

该规则的一个例外是"Prelude":这是标准库中的一个特殊模块,自动完全导入。

---

## 其他 Prelude

其他库有提供`prelude`-模块,最常见的一种是`std::io`.

<pre><code data-source="chapters/shared/code/imports-modules-and-visibility/4.rs" data-trim="hljs rust" class="lang-"></code></pre>

这里，glob 导入可以接受.

---

## 结构导入

您可以组合多个事物,它们也是嵌套的.

<pre><code data-source="chapters/shared/code/imports-modules-and-visibility/4-5.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 重命名导入

<pre><code data-source="chapters/shared/code/imports-modules-and-visibility/5.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 局部导入

导入可以在函数内部进行。它们仅在函数内生效.

<pre><code data-source="chapters/shared/code/imports-modules-and-visibility/6.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 模块

Rust 的模块系统类似于 Python.

---

- 每个源文件都是一个模块
- 子模块可以位于同一个文件中,也可以位于另一个文件中
- 库被称为"箱(crates)",并包含模块

---

按照惯例,库的根模块在`src/lib.rs`.

单个应用程序(二进制)的根模块为`src/main.rs`.

用于多个应用程序的根模块，在`src/bin/*.rs`.

---

## 例子

<pre><code data-source="chapters/shared/code/imports-modules-and-visibility/7.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 将模块移动到单独的文件

我们的应用程序，还可以具有以下布局:

<pre><code data-source="chapters/shared/code/imports-modules-and-visibility/8.rs" data-trim="hljs sh"></code></pre>

---

## 一个更大的模块作为目录

只需添加一个同名的新文件夹

<pre><code data-source="chapters/shared/code/imports-modules-and-visibility/9-2.rs" data-trim="hljs rust"></code></pre>

---

## 一个更大的模块作为目录

或者,通过`mod.rs`描述一个模块

<pre><code data-source="chapters/shared/code/imports-modules-and-visibility/9.rs" data-trim="hljs rust"></code></pre>

---

在这两种情况下,模块都必须在根模块注册.

<pre><code data-source="chapters/shared/code/imports-modules-and-visibility/10.rs" data-trim="hljs rust"></code></pre>

---

使用最后一个方法,您可以创建相对于`mod.rs`的额外模块.

---

## 可见性

在 Rust 中,默认情况下一切都是私有的。公开可用的类型要标记为`pub`.

公共类型和函数，可通过到达公共模块路径，来导出.

---

## 例子

<pre><code data-source="chapters/shared/code/imports-modules-and-visibility/11.rs" data-trim="hljs rust"></code></pre>

---

在使用 Traits 之前，必须是公开并导入 .

编译器将检测您是否使用未导入的 Traits.

---

## 结构

结构稍微复杂一些。他们不导出字段，这使得他们的使用和初始化不可能。这是有意而为之.

此外,默认情况下，不导出结构函数.

---

<pre><code data-source="chapters/shared/code/imports-modules-and-visibility/12.rs" data-trim="hljs rust"></code></pre>

---

<pre><code data-source="chapters/shared/code/imports-modules-and-visibility/13.rs" data-trim="hljs rust"></code></pre>

---

一般来说,应避免导出字段:

- 结构中的任何改变，都会导致 API 破坏

- 由于优化，访问函数通常与字段直接访问一样快.

---

## Pub 资格

<pre><code data-source="chapters/shared/code/imports-modules-and-visibility/14.rs" data-trim="hljs rust"></code></pre>
