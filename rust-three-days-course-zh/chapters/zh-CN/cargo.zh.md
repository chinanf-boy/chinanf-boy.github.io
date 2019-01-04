# Cargo

[回去](toc/default.html)

---

Cargo 是 Rust 标准 的构建工具链.

每次`rustc`的发布都，装运有 Cargo 的特定版本.

一般来说,Cargo 的版本与你使用的`rustc`版本是分开的.

---

## 项目

Cargo 项目包含(至少):

- 一个清单(Cargo.toml)
- 在`src`文件夹的一个源文件(默认目录)

---

此外,Cargo 项目可以包括:

- 测试(默认目录)`tests`)
- 基准(默认目录)`benches`)
- 构建脚本(默认文件)`build.rs`)
- 示例(默认目录)`examples`)

---

## 清单

这个[Cargo-清单](http://doc.crates.io/manifest.html)使用[TOML](http://doc.crates.io/manifest.html)格式。 它至少包含项目的名称.

<pre><code data-source="chapters/shared/code/cargo/1.toml" data-trim="hljs toml"></code></pre>

---

## `cargo build`

`cargo build`构建整个项目，并将结果放到`target`目录中.

默认情况下,cargo 使用 Debug(调试)配置文件,这意味着生成的二进制文件没有经过优化,并且带有调试符号!

`cargo build --release`就会使用优化的配置文件.

---

基准测试 _应使用_ `--release`命令参数，尤其是对于迭代器，可从优化中获得了巨大的速度提升。

---

## `cargo run`

如果项目包含应用程序,则可以使用`cargo run -- [Arguments]`.

如果包含多个,则可以使用`--bin <name>`，给予独立的二进制名.

在这里是默认的调试配置.

---

## `cargo test`

`cargo test`运行所有测试.您可以提供测试名称或模块名称来筛选正在运行的测试.

测试默认情况下，使用调试配置文件.

`cargo test`运行所有测试,包括文档和示例编译的测试!

---

## `cargo bench`

`cargo bench`运行所有基准测试.

基准测试默认为发布(release)配置文件.

---

## 版本控制

在 Rust 社区，[Semantic 版本语法](https://semver.org)是推荐的版本控制标准.

- 如果有重大的(API)接口更改,则必须引发主要(major)版本.
- 如果添加新特性,则必须引发次要(minor)版本
- 补丁(patch)版本标志着 bug 修复和性能改进.

> `1.2.3` >> `1`为 major `2`为 minor，`3`为 patch
> 少写的，以 major 为开头

---

## 预发布

如果库的版本小于`1`，它被认为是"预发布",这意味着,在*每个小版本*都有可能发生(API)接口更改.

---

## 版本表达式

Cargo 允许以不同方式表达版本范围.

- `=1.2.3`：确切的说,Cargo 只使用这版本
- `0.1`："0.1"系列下的任何补丁(patch)版本
- `< 0.8`：任何小于"0.8"的次要(minor)版本

有关详细信息,请查看[文档](http://doc.crates.io/manifest.html)

---

## 版本解析

在第一次构建(或`cargo update`)时，cargo 计算满足于 Cargo.toml 中，所述约束的版本树。如果成功,它将保存在 Lockfile(Cargo.lock)中.

建议，始终将 Lockfile 置于版本控制之下!(用于可重复构建)

---

## 详细依赖关系

Cargo 有三种不同的依赖关系:

- 正常依赖项
- 构建(build)依赖项
- 测试(test)依赖项

---

## 例子

<pre><code data-source="chapters/shared/code/cargo/2.toml" data-trim="hljs toml"></code></pre>

---

## 详细依赖关系

<pre><code data-source="chapters/shared/code/cargo/3.toml" data-trim="hljs toml"></code></pre>

<pre><code data-source="chapters/shared/code/cargo/4.toml" data-trim="hljs toml"></code></pre>

---

## 旁白有话

如果要在 crates.io 上发布的箱，则禁止依赖在 crates.io 之外的机构(/注册表).

---

## 本地路径

通过本地箱可以临时替换 箱。为此,需要注册它们的路径`$PROJECT_PATH/.cargo/config`.

<pre><code data-source="chapters/shared/code/cargo/5.toml" data-trim="hljs toml"></code></pre>

这里，以找到的箱优先。这允许对补丁版本进行简单的测试.

---

## Profiles(配置文件)

可以定制 Cargo 配置文件(release, bench, test...)，在[Manifest-文档中](http://doc.crates.io/manifest.html)

---

## 目标(target)

- 可以基于编译目标，配置 profiles 和依赖项
- `cargo build --target ...`会使用该目标
- 必须预先安装目标
- 考虑使用 xargo

---

## 工作区

Cargo 可以将工作区中的多个项目分组。然后，它们能共享设置以及相同的`target`目录.

见[manifest 稳定](http://doc.crates.io/manifest.html)详情.

---

## 特性

`rustc`提供在编译时，忽略某些代码部分的能力。这是通过特性标志实现的.

<pre><code data-source="chapters/shared/code/cargo/6.rs" data-trim="hljs rust"></code></pre>

---

这些可以登记在`Cargo.toml`.

<pre><code data-source="chapters/shared/code/cargo/7.toml" data-trim="hljs toml"></code></pre>

---

也可以，在一个依赖项中表明:

<pre><code data-source="chapters/shared/code/cargo/8.toml" data-trim="hljs toml"></code></pre>

---

## 直接调用`rustc`

`cargo rustc`直接调用`rustc`，并允许传递附加参数.
