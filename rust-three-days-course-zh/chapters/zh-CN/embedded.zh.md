# Rust 嵌入式系统

[回去](toc/default.html)

---

## 留言地点

<http://www.rust-embedded.org/>

---

## 栈

Xargo: libcore 和 libstd 的跨编译:<https://github.com/japaric/xargo>

Cross:使用 QEMU 对结果进行跨测试<https://github.com/japaric/cross>

---

## 读取

Discovery:通过 Rust 发现微控制器.

<https://github.com/japaric/discovery>

Copper: Rust 和 Cortex-M 的编程微控制器 .

<https://japaric.github.io/copper/>

---

## 项目

Tock,用于 Cortex-M 处理器的操作系统:[tockos.org](tockos.org)

---

## 问题

- LLVM 目标支持
  - LLVM 在 Apple 使用的目标上通常表现良好
  - 这并不意味着 LLVM 在另些方面都是敌对的!
- Rust 中未解决的要求,尤其是位场(bitfields)
- 内联程序集不稳定
- 核心开发人员是桌面和服务器开发人员,并不都有足够的经验
  - "没有方案是比糟糕的解决方案更好的解决方案了!"
- 我们需要 vendor '买进'

---

## 解决方案

- Rust 是 LLVM 中更好的目标支持背后的驱动力
  - 多个目标,特别是 AVR,将在下一个版本中发布
- 热情的嵌入式社区
- Rust 对于核心无法实现的特性有一个非常好的社区流程
