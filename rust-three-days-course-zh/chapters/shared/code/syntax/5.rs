fn main() {
    let mut value = 0;
    // 无限循环，加个 break
    loop {
        if value >= 10 {
            break;
        }
        value += 1;
    }
    // 有条件 的 while
    while value <= 10 {
        value += 1;
        // ...
    }
}