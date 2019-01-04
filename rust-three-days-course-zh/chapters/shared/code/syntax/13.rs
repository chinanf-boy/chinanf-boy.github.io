// 内敛 语法
fn generic_inline<S: AsRef<str>>(thing: S) -> S {
    thing
}

// Where 语法
fn generic_where<Stringish>(thing: Stringish) -> Stringish 
where Stringish: AsRef<str> {
    thing
}

// 结构/枚举 一样写法!
struct GenericStruct<A> {
    value: A,
}

fn main() {
    let foo = "foo";
    generic_inline(foo);
    generic_where(foo);
}