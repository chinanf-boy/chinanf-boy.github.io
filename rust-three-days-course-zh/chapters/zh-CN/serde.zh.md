# `serde`

[回去](toc/default.html)

---

## **Ser**ialization 和 **De**serialization

序列化和反序列化

<https://serde.rs/>

---

## `Serialize` & `Deserialize`

使 Rust 结构 (反)序列化:

<pre><code data-source="chapters/shared/code/serde/1.rs" data-trim="hljs rust"></code></pre>

---

## 格式

Serde 支持多种格式,例如:

- JSON
- CBOR
- YAML
- TOML
- BSON
- MessagePack
- …更多!

你喜欢哪款沙拉呢?

---

## `Serialize`

到 JSON:

<pre><code data-source="chapters/shared/code/serde/2.rs" data-trim="hljs rust"></code></pre>

---

## `Deserialize`

来自 JSON:

<pre><code data-source="chapters/shared/code/serde/3.rs" data-trim="hljs rust"></code></pre>

---

## 转码

<pre><code data-source="chapters/shared/code/serde/4.rs" data-trim="hljs rust"></code></pre>

---

## 属性

`serde`具有可利用的大量属性:

<pre><code data-source="chapters/shared/code/serde/5.rs" data-trim="hljs rust"></code></pre>

<https://serde.rs/attributes.html>
