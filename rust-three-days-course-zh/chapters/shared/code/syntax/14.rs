use foo::foo;

mod foo {
    pub fn foo() {
        // ...
    }
}

// 这会尝试打开 相对于该文件路径的`./bar.rs`文件
pub mod bar;

fn main() {
    foo()
}