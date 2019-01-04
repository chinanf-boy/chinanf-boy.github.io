// 函数 定义 declaration
fn add_them(first: i32, second: i32) -> i32 {
    first + second
}

fn main() {
    // 可变 变量
    let mut some_value = 1;
    // 不可变, 显式 类型
    let explicitly_typed: i32 = 1;
    
    // 函数 调用
    some_value = add_them(some_value, explicitly_typed);
    
    // 宏, 注意 有个 ! (感叹号)
    println!("{}", some_value)
}