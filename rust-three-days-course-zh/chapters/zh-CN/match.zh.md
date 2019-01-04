# `match`控制流

[回去](toc/default.html)

---

检查枚举的变体，这就是`match`的使用方式.

---

<pre><code data-source="chapters/shared/code/match/1.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

## 可选方案:if-let

<pre><code data-source="chapters/shared/code/match/2.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

<pre><code data-source="chapters/shared/code/match/3.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

`match`期间必须包括所有变体!

---

## 可忽略剩下的变体

<pre><code data-source="chapters/shared/code/match/4.rs" data-trim="hljs rust"
class="lang-rust"></code></pre>

---

Results 带有一个特殊的要点:它们不能被忽略!

<pre><code data-source="chapters/shared/code/match/5.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

解决方案:`match` 或传递.

---

`match`不仅用在枚举上:

<pre><code data-source="chapters/shared/code/match/6.rs" data-trim="hljs rust" class="lang-rust"></code></pre>

---

`match`和`if`表达式:

<pre><code data-source="chapters/shared/code/match/7.rs" data-trim="hljs rust" class="lang-rust"></code></pre>
