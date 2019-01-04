# 实现(impl)和 特征(trait)

[回去](toc/default.html)

---

Rust 提供了将函数(集)，绑定到类型的方法.

---

# 警告

这有时看起来像面向对象的编程,但实际上并非如此.

更不是，运行时多态性、消息、类、子类型和方法重载丢失.

---

## 简单实现:关联函数

<pre><code data-source="chapters/shared/code/traits/1.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 备注

这里的`new`，纯粹是习惯性的.

---

## Python 打声招呼

<pre><code data-source="chapters/shared/code/traits/2.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## `self`的借用和所有权

这跟平常没什么不同,只是刚开始有点不熟悉.

- 借用一个函数*同时借用*self.
- 这特别适用于可变借用!
- `self`若没有`&`，会从调用上下文返回值的所有权.

---

## 常见 OO 的有趣区别

> OO 面向对象

- 值可以替换自己
- 例如,迭代器和构建器可以具有消耗`self`的方法，因此可无效.
- 这解决了使迭代器无效的问题.

---

## 旁白

- 实现(impl)可以多次发生

---

## Self

`Self`是 Rust 中的一种特殊类型。它总是实现参考的引用类型.

> 这下面,`Self`就为`Point`

<pre><code data-source="chapters/shared/code/traits/3.rs" data-trim="hljs rust"></code></pre>

---

## Traits

Traits 是类型之上的 Rusts 抽象变体.

---

我们已经遇到了一个 trait:`Debug`.

---

trait 定义了类型应，实现的函数集。然后方便通用它们.

---

<pre><code data-source="chapters/shared/code/traits/4.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## Self

`Self`是一种特殊类型:它是当前正在实现的类型.

---

## 泛型 traits

Traits 可以有类型参数.

---

<pre><code data-source="chapters/shared/code/traits/5.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

处理泛型 traits 是非常常见的.

---

## traits 推断

trait 的类型推断是非常先进的，但有时也可能出现不可判定的情况.在这种情况下,编译器需要你的帮助，进行决策.

下面介绍多种技巧.

---

## UFCS

统一函数调用语法

<pre><code data-source="chapters/shared/code/traits/6.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 关联类型

关联类型是泛型参数，但在推断期间会忽略它们.

---

<pre><code data-source="chapters/shared/code/traits/7.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## `impl Trait`

`impl Trait`在不需要命名值的类型时，使用.

```rust
fn main() {
    let v = vec![1,2,3];
    let i = make_iter(&v);
}

fn make_iter<'a>(v: &'a Vec<u8>) -> impl Iterator<Item=u8> + 'a {
    v.iter().map(|v| (*v)*2)
}
```

---

```rust
fn main() {
    let v = vec![1,2,3];
    let i = v.iter();
    let i2 = double(i);
}

fn double<'a>(i: impl Iterator<Item=&'a u8> + 'a) -> impl Iterator<Item=u8> + 'a {
    i.map(|v| (*v)*2)
}
```

---

局限性:

-  trait 方法中没有`impl Trait`

---

```rust
trait Foo {}

trait Bar {
    fn fooify(&self) -> impl Foo;
}
```
