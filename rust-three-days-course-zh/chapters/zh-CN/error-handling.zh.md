# 错误处理

[回去](toc/default.html)

---

错误处理在 Rust 中是显式的.

具有已知错误条件的任何函数返回`Result<T,E>`.

**没有例外.**

---

<pre><code data-source="chapters/shared/code/error-handling/1.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 必须使用 Results

<pre><code data-source="chapters/shared/code/error-handling/2.output" data-trim="hljs output"></code></pre>

---

## 可使用`match`

<pre><code data-source="chapters/shared/code/error-handling/3.rs" data-trim="hljs rust"></code></pre>

---

## 可使用带条件的 Results

用成功`is_ok()`与错误`is_err()`判断:

<pre><code data-source="chapters/shared/code/error-handling/4.rs" data-trim="hljs rust"></code></pre>

---

## 可使用`?`

在具有多个可能的故障的函数中，使用`?`.

<pre><code data-source="chapters/shared/code/error-handling/5.rs" data-trim="hljs rust"></code></pre>

---

## 上面使用`?`的结果

输出:

<pre><code data-source="chapters/shared/code/error-handling/6.output" data-trim="hljs output"></code></pre>

注意提前退出，`println!("After 2nd potential error.");`是没有执行的.

---

## 在`main`里面，使用`?`

- `main`可以返回`Result`
- 自 Rust 稳定`1.26`版本开始.

<pre><code data-source="chapters/shared/code/error-handling/6.rs" data-trim="hljs rust"></code></pre>

---

## Results 是包装类型

可以更改`Result<T,E>`变成一个`Result<U,E>`，而不用打开它.

将一个`Result<T,E>`变成一个`Result<T,X>`，也是可能的.

<pre class="diagram" data-source="chapters/shared/diagram/error-handling/1.diagram"></pre>

---

## 映射 Result 值

<pre><code data-source="chapters/shared/code/error-handling/7.rs" data-trim="hljs rust"></code></pre>

也可用`map_err()`.

---

## 只报告错误

如果只需要报告错误，但不要有意义的返回值，请使用`Result<(), Error>`.
