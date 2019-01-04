fn main() {
    // 短写闭包
    let value = Some(1).map(|v| v + 1);
    // 有个区块
    let value = Some(1).map(|v| {
        v + 1
    });
    // 显写 返回类型
    let value = Some(1).map(|v| -> i32 {
        v + 1
    });
    // 闭包函数 声明
    let closure = |v| v + 1;
    let value = Some(1).map(closure);
}