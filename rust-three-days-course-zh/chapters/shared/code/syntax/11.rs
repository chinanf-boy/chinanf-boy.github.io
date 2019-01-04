fn main() {
    let foo = 1;
    let bar = {
        // 盖住了 先前的声明 `let foo = 1;`
        let foo = 2;
        foo
    };
    println!("{}", foo);
    println!("{}", bar);
}