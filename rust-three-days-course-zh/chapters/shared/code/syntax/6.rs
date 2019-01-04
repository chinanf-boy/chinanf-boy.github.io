fn main() {    
    // 在 迭代器(iterator) 上 循环
    let range = 0..10;
    for i in range {
        // ...
    }
    // while let
    let mut range = 0..10;
    while let Some(v) = range.next() {
        // ...
    }
}