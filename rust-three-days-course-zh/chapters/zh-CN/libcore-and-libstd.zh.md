# libcore 和 libstd

[回去](toc/default.html)

---

'Rust 号'有两个基本库, libcore 和 libstd.

---

libcore 包含语言工作所需的所有类型.

libcore 是分配自由的.

---

libcore 通常不直接使用,因为它的公共接口由 libstd 重新组合.

---

libstd 包含标准函数,例如用于与文件系统交互。它对平台 libc 具有依赖性.
