# 测试

[回去](toc/default.html)

---

测试是 Rust 的基础.

单元测试、集成测试、文档测试全都内置了.

---

## 组织测试

测试通常可能是在下面 4 种可能的位置:

- 紧接着的函数测试。 （单元测试）
- 在测试子模块中。 （私有集成测试）
- 在文档中。 （文档测试）
- 在 `tests/` 目录中。 （公共集成测试）

---

## 单元测试

- 允许在同一个模块和环境中测试功能函数.
- 通常存在于 **函数** 接下来的附近.
- 好的测试,是确保单一的行动*能工作*.

---

## 单元测试

<pre><code data-source="chapters/shared/code/testing/1.rs" data-trim="hljs rust"></code></pre>

---

## 单元测试

<pre><code data-source="chapters/shared/code/testing/2.bash" data-trim="hljs bash"></code></pre>

---

## `tests`子模块

- 允许，函数是用于其他项目的测试.
- 私有 api 和功能测试.
- 好的测试会公开流程和用例.

---

## `tests`子模块

<pre><code data-source="chapters/shared/code/testing/3.rs" data-trim="hljs rust"></code></pre>

---

## `tests`子模块

<pre><code data-source="chapters/shared/code/testing/4.bash" data-trim="hljs bash"></code></pre>

---

## 文档测试

- 允许公共功能函数的测试.
- 会显示在`rustdoc`输出.
- 为了演示，有公开用例和例子.

---

## 文档测试

<pre><code>
/// ```rust
/// use example::Direction;
/// let way_home = Direction::North;
/// ```
pub enum Direction { North, South, East, West }
</code></pre>

---

## 文档测试

<pre><code data-source="chapters/shared/code/testing/5.bash" data-trim="hljs bash"></code></pre>

---

## 集成测试

- 箱(crate)为外部依赖的测试.
- 用于长或全功能的测试.

---

## 集成测试

`/tests/basic.rs`:

<pre><code data-source="chapters/shared/code/testing/6.rs" data-trim="hljs rust"></code></pre>

---

## 集成测试

<pre><code data-source="chapters/shared/code/testing/7.bash" data-trim="hljs bash"></code></pre>
