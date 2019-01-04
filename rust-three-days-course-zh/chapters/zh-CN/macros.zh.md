# 宏指令

[回去](toc/default.html)

---

Rust 是一个 有宏 的 语言。见[关于 宏指令 的 小抄](https://danielkeep.github.io/tlborm/book/README.html).

---

## 重要的宏

- `try!(result)`，结果的处理
- `println!(pattern, [values])`，将格式化字符串轻松打印到 stdout
- `format!(pattern, [values])`，喜欢`println!`但是返回字符串
- `write!(buf, pattern, string)`，将格式化数据简单地写入缓冲区

---

## 他们能做什么?

宏可以用于诸如:

- 生成重复代码.
- 创造 DSL.
- 写一些没有宏，会很困难的东西.

---

## 他们提供什么?

宏是:

- **清洁**，扩展会在不同的"语法上下文"中进行
- **正确**，它们不能扩展为无效代码.
- **局限**，例如,它们不能污染它们的扩展站点.

---

## 宏的组成部分

宏有三个部分。

- 名字，例如`println`。
- 输入部分，定义宏的接受。
- 输出部分，定义如何张开宏。

---

## 宏:语法

让我们看看它们看起来怎么样:

<pre><code data-source="chapters/shared/code/macros/1.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 宏:语法

这个`($value:expr)`部分说:

> 宏接受一个参数,该参数是一个表达式(expression)。

可以限制参数类型。

例如,`$foo:ty`只接受一个类型(type)。

---

## 宏:语法

参数前面加上`$`，以区分它们。

输入和输出都有。

---

## 宏:重复

<pre><code data-source="chapters/shared/code/macros/2.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 宏:重复

当我们看到`$(...)*`这是重复的信号。它传达的意思是:

> 宏的这个部分接受，可变数量的参数。

输入中的每个重复在输出中应该有一个匹配的重复。

---

## 宏:自定义语法

<pre><code data-source="chapters/shared/code/macros/3.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 宏:自定义语法

宏允许有限形式的自定义语法，并且可以用来构建简单的 DSL。

关于这个示例，请参见[clap-rs](https://github.com/kbknapp/clap-rs)

---

## 宏的劣势

宏指令:

- 可能很难调试。
- 阅读和理解可能令人困惑。
- 具有笨拙的导入语义。

---

## 你什么时候，应该使用宏?

在没有其他好选择的地方，使用宏。

避免过度使用宏。
