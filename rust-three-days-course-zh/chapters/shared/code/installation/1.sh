# 安装工具链
$ rustup install stable
# 选择默认工具链
$ rustup default stable
# 覆盖目录中的默认工具链
$ rustup override stable
# 在浏览器中显示文档
$ rustup doc [--std]
# 列出支持的目标
$ rustup target list
# 添加目标并将其安装到工具链
$ rustup target add <target>
# 列出并添加组件
$ rustup component list|add