# Deno 手册

## 免责声明

警告语：Deno 正在开发中。我们鼓励勇敢的早期采用者，但期望反馈大或小的 Bug。API 如有变更，恕不另行通知。[错误报告](https://github.com/denoland/deno/issues)会有用！

## 介绍

使用 V8、Rust 和 Tokio 构建的安全 javascript/typescript 运行时

### 哲学

Deno 的目标是为现代程序员提供一个高效、安全的脚本环境。

它始终以单个可执行文件形态，作为分发文件，并且该可执行文件，足够运行任何 deno 程序。给定一个 deno 程序的 URL，您应该能够用不超过 50MB 的 Deno 可执行文件，来执行它。

Deno 明确承担运行时，和包管理器的角色。它用标准的浏览器兼容协议，来加载模块：URLs。

Deno 为提供了程序访问系统的安全保证，默认情况下，它是最严格的安全沙盒。

Deno 提供<a href="https://github.com/denoland/deno_std">一套经过评审（审核）的标准模块</a>这保证了与 Deno 的合作。

### 目标

- 支持现成的 typescript。

- 与浏览器一样，允许（模块）以 URL 形式导入：

  ```ts
  import * as log from 'https://deno.land/std/log/mod.ts';
  ```

- 远程代码在第一次执行时，被获取和缓存，并且在使用`--reload`标志，才会更新(同一 URL 路径的代码)。（所以，还能在飞机上使用。见`~/.deno/src`，有关缓存的详细信息。）

- 使用"ES 模块"，不支持`require()`.

- 为了沙盒代码的运行，会对文件系统和网络访问(权限)有所控制。V8（没权限）和 Rust（权限）之间的访问，只能通过在[flatbuffer](https://github.com/denoland/deno/blob/master/cli/msg.fbs)定义的序列化消息，完成沟通。这使得审计变得容易。例如，要启用 write(写) 访问，请使用标志`--allow-write`，或用于网络访问`--allow-net`。

- 只运输一个可执行文件。

- 总是死(崩溃)于，未发现的错误。

- 浏览器兼容：Deno 程序的子集，完全用 JavaScript 编写，它（或它的功能测试）并没有使用全局`Deno`名称空间，想来应该能够在现代 Web 浏览器上运行，而不需要更改。

- [目标：支持顶级`await`.](https://github.com/denoland/deno/issues/471)

- 能够高效地服务 HTTP。（[目前，速度比较慢。](https://deno.land/benchmarks.html#req-per-sec)）

- 提供现成的有用工具：
  - 命令行调试器[还没有](https://github.com/denoland/deno/issues/1120)
  - linter[还没有](https://github.com/denoland/deno/issues/1880)
  - 依赖关系检查器（`deno info`）
  - 代码格式化程序（`deno fmt`）

### 反目标

- 没有`package.json`.

- 没有 npm。

- 与 Node 不显式兼容。

## 安装程序

### 二进制安装

Deno 在 OSX、Linux 和 Windows 上工作。deno 是单个二进制可执行文件。它没有外部依赖关系。

[deno_install](https://github.com/denoland/deno_install)提供方便的脚本，来下载和安装二进制文件。

使用 Shell：

```shellsession
$ curl -fsSL https://deno.land/x/install/install.sh | sh
```

使用 PowerShell:

```shellsession
> iwr https://deno.land/x/install/install.ps1 | iex
```

使用[Scoop](https://scoop.sh/)（Windows）：

```
scoop install deno
```

也可以通过[github.com/denoland/deno/releases](https://github.com/denoland/deno/releases)下载 tarball 或 zip 文件，手动安装 deno。这些包只包含一个可执行文件。您必须在 Mac 和 Linux 上，设置可执行的环境变量(PATH)。

一旦它安装和已在`$PATH`，开始试试吧：

```shellsession
$ deno https://deno.land/welcome.ts
```

### 从源代码生成

```bash
# 获取 源和开发依赖.
git clone --recurse-submodules https://github.com/denoland/deno.git
cd deno
./tools/setup.py

# 你可能需要确保 sccache 是在运行的。
# (TODO 需要与否，其实并不明确.)
# prebuilt/mac/sccache --start-server

# 构建.
./tools/build.py

# 运行.
./target/debug/deno tests/002_hello.ts

# 测试.
./tools/test.py

# 格式化代码.
./tools/format.py
```

#### 先决条件

为了确保构建的可重复性，deno 在 git 子模块中有其大部分依赖项。但是，您需要单独安装：

1.  [Rust](https://www.rust-lang.org/en-US/install.html)> 1.31.1
2.  [Node](https://nodejs.org/)
3.  Python 2。[不是 3](https://github.com/denoland/deno/issues/464#issuecomment-411795578).

Mac 用户的额外步骤：安装[XCode](https://developer.apple.com/xcode/) :(

Windows 用户的额外步骤：

1.  添加`python.exe`到`PATH`（例如 `set PATH=%PATH%;C:\Python27\python.exe`）
2.  得到[VS Community 2017](https://www.visualstudio.com/downloads/)，随着"Desktop development with C++"工具包，并确保选择以下列出所有的 C++工具。
    - Windows 10 SDK >= 10.0.17134
    - X86 和 X64 的 Visual C++ ATL
    - X86 和 X64 的 Visual C++ MFC
    - C++ profiling 工具
3.  启用"Windows 调试工具"。转到"控制面板"→"程序"→"程序和功能"→ 选择"Windows 软件开发工具包-Windows 10"→"更改"→"更改"→ 检查"Windows 调试工具"→"更改"->"完成"

> ("Control Panel" → "Programs" → "Programs and Features" → Select "Windows Software >Development Kit - Windows 10" →
> "Change" → "Change" → Check "Debugging Tools >For Windows" → "Change" -> "Finish")。

4.  确保使用的是 Git 2.19.2.Windows.1 或更高版本。

#### 其他有用的命令

```bash
# 手动呼叫 ninja。
./third_party/depot_tools/ninja -C target/debug

# 构建发布二进制文件。
./tools/build.py --release deno

# 列出可执行目标。
./third_party/depot_tools/gn ls target/debug //:* --as=output --type=executable

# 列表构建配置。
./third_party/depot_tools/gn args target/debug/ --list

# 编辑构建配置。
./third_party/depot_tools/gn args target/debug/

# 描述一个目标。
./third_party/depot_tools/gn desc target/debug/ :deno
./third_party/depot_tools/gn help

# 更新third_party模块
git submodule update
```

环境变量：`DENO_BUILD_MODE`，`DENO_BUILD_PATH`，`DENO_BUILD_ARGS`，`DENO_DIR`。

## API 参考

### deno --types

要获得 Deno 运行时，准确的 API 参考，请在命令行中，运行以下命令：

```shellsession
$ deno --types
```

[这就是输出的样子。](https://gist.github.com/ry/46da4724168cdefa763e13207d27ede5)

### 参考网站

[TypeScript Deno api](https://deno.land/typedoc/index.html)。

如果要在 Rust 程序中，嵌入 deno，请参见[Rust Deno API](https://deno.land/rustdoc/deno/index.html)。

## 实例

### Unix "cat"程序的实现

在这个程序中，每个命令行参数，都被假定为文件名，文件被打开，并打印到 stdout。

```ts
(async () => {
  for (let i = 1; i < Deno.args.length; i++) {
    let filename = Deno.args[i];
    let file = await Deno.open(filename);
    await Deno.copy(Deno.stdout, file);
    file.close();
  }
})();
```

这个`copy()`函数，实际上只做了，必要的内核->用户空间->内核副本。也就是说，从文件读取来的数据的相同内存，被写入 stdout。这说明了 deno 中，关于 I/O 流的通用设计目标。

尝试程序：

```shellsession
$ deno --allow-read https://deno.land/std/examples/cat.ts /etc/passwd
```

### TCP 回音服务器

这是一个简单服务器的例子，它接受端口 8080 上的连接，并将它发送的任何内容，返回给客户端。

```ts
const {listen, copy} = Deno;

(async () => {
  const addr = '0.0.0.0:8080';
  const listener = listen('tcp', addr);
  console.log('listening on', addr);
  while (true) {
    const conn = await listener.accept();
    copy(conn, conn);
  }
})();
```

启动此程序时，将提示用户，要有在网络上侦听的权限：

```shellsession
$ deno https://deno.land/std/examples/echo_server.ts
⚠️  Deno requests network access to "listen". Grant? [yN] y
listening on 0.0.0.0:8080
```

出于安全原因，Deno 不允许程序，在没有明确许可的情况下访问网络。要避免控制台提示，请使用命令行标志：

```shellsession
$ deno https://deno.land/std/examples/echo_server.ts --allow-net
```

要测试它，请尝试使用 curl 向它发送 HTTP 请求。请求会被直接写回客户端。

```shellsession
$ curl http://localhost:8080/
GET / HTTP/1.1
Host: localhost:8080
User-Agent: curl/7.54.0
Accept: */*
```

值得注意的是，类似`cat.ts`那个例子，这里的`copy()`函数，也不会进行不必要的内存复制。它从内核接收一个数据包，并发送回来，没有进一步的复杂性。

### 检查和撤消权限

有时程序可能希望撤消以前授予的权限。当程序在后期需要这些权限时，则向用户显示一个新的提示。

```ts
const {permissions, revokePermission, open, remove} = Deno;

(async () => {
  // 查看一个权限
  if (!permissions().write) {
    throw new Error('need write permission');
  }

  const log = await open('request.log', 'a+');

  // 撤消一些权限
  revokePermission('read');
  revokePermission('write');

  // 使用 log file
  await log.write(encoder.encode('hello\n'));

  // 然后提示需要 write 权限或者失败。
  await remove('request.log');
})();
```

### 文件服务器

这一个在 HTTP 中，提供服务的本地目录。

```bash
alias file_server="deno  --allow-net --allow-read \
  https://deno.land/std/http/file_server.ts"
```

运行它：

```shellsession
$ file_server .
Downloading https://deno.land/std/http/file_server.ts...
[...]
HTTP server listening on http://0.0.0.0:4500/
```

如果您想升级到，最新发布的版本：

```shellsession
$ file_server --reload
```

### 运行子过程

[API 参考](https://deno.land/typedoc/index.html#run)

例子：

```ts
async function main() {
  // 创建子进程
  const p = Deno.run({
    args: ['echo', 'hello']
  });

  // await(等待) 完成
  await p.status();
}

main();
```

运行它：

```shellsession
$ deno --allow-run ./subprocess_simple.ts
hello
```

默认情况下，`Deno.run()`的子进程，会继承父进程的`stdin`，`stdout`和`stdout`。如果要与已启动的子进程通信，可以使用`"piped"`选项。

```ts
async function main() {
  const decoder = new TextDecoder();

  const fileNames = Deno.args.slice(1);

  const p = Deno.run({
    args: [
      'deno',
      '--allow-read',
      'https://deno.land/std/examples/cat.ts',
      ...fileNames
    ],
    stdout: 'piped',
    stderr: 'piped'
  });

  const {code} = await p.status();

  if (code === 0) {
    const rawOutput = await p.output();
    Deno.stdout.write(rawOutput);
  } else {
    const rawError = await p.stderrOutput();
    Deno.stdout.write(rawError);
  }

  Deno.exit(code);
}

main();
```

运行时：

```shellsession
$ deno ./subprocess.ts --allow-run <somefile>
[file content]

$ deno ./subprocess.ts --allow-run non_existent_file.md

Uncaught NotFound: No such file or directory (os error 2)
    at DenoError (deno/js/errors.ts:19:5)
    at maybeError (deno/js/errors.ts:38:12)
    at handleAsyncMsgFromRust (deno/js/dispatch.ts:27:17)
```

### 链接到第三方代码

在上面的例子中，我们看到了 deno 可以用 URL 执行脚本。和浏览器 javascript 一样，deno 可以直接用 URL 导入库。此示例使用 URL 导入，测试运行程序库：

```ts
import {test, runIfMain} from 'https://deno.land/std/testing/mod.ts';
import {assertEquals} from 'https://deno.land/std/testing/asserts.ts';

test(function t1() {
  assertEquals('hello', 'hello');
});

test(function t2() {
  assertEquals('world', 'world');
});

runIfMain(import.meta);
```

尝试运行此：

```shellsession
$ deno test.ts
running 2 tests
test t1 ... ok
test t2 ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out
```

注意，我们不必提供`--allow-net`此程序的标志，但它访问了网络。事实上，Deno 运行时具有，下载导入(文件)，并将其缓存到磁盘的特殊访问权。

deno 将远程导入，缓存到`$DENO_DIR`环境变量。如果`$DENO_DIR`未指定。下次运行程序时，将不会进行下载。如果程序没有更改，也不会重新编译。默认目录为：

- 在 Linux/Redox：`$XDG_CACHE_HOME/deno`或`$HOME/.cache/deno`
- 在 Windows 上：`%LOCALAPPDATA%/deno`（`%LOCALAPPDATA%` = `FOLDERID_LocalAppData`）
- 在 MaOS:`$HOME/Library/Caches/deno`
- 如果某件事失败了，它会回到`$HOME/.deno`

**但是如果`https://deno.land/`失联了？**依赖外部服务器便于开发，但在生产环境中，却很脆弱。生产软件应始终捆绑其依赖项。具体在 deno 的操作是，通过让`$DENO_DIR`，搭上你的源代码管理系统，把运行时的`$DENO_DIR`环境变量，指定为该路径。

**如何导入到特定版本？**只需在 URL 中,指定版本。例如，此 URL 完全指定，正在运行的代码：`https://unpkg.com/liltest@0.0.5/dist/liltest.js`。 结合上述在生产环境，设置`$DENO_DIR`，来存储代码的方式，你可以完全指定，要运行的确切代码，还可以在没有网络访问的情况下，执行代码。

**在任何地方导入 URL 似乎都不方便。如果其中一个 URL ，链接到了一个稍微不同的库版本呢？在大型项目中，维护 URL 是否容易出错？**解决方案是在中心`deps.ts`文件，导入和重新导出外部库（与 Node 的`package.json`文件目的相同）。例如，假设您在一个大型项目中，使用了上述测试库。要做的，不是在任何地方导入`"https://deno.land/std/testing/mod.ts"`，而是可以创建一个`deps.ts`，用来导出第三方代码：

```ts
export {test, assertEquals} from 'https://deno.land/std/testing/mod.ts';
```

在整个项目中，都可以从`deps.ts`导入，这样就可以避免对同一个 URL 进行多次引用：

```ts
import {test, assertEquals} from './deps.ts';
```

这种设计避免了，由于包管理软件、集中的代码库和多余的文件格式，而产生的过多复杂性。

### 测试当前文件，是否为主程序

通过检查`import.meta.main`，测测当前脚本，是否已作为程序的主输入执行。

```ts
if (import.meta.main) {
  console.log('main');
}
```

## 命令行界面

### 标志

```shellsession
$ deno -h
deno

USAGE:
    deno_dev [FLAGS] [OPTIONS] [SUBCOMMAND]

FLAGS:
    -A, --allow-all        允许所有权限
        --allow-env        允许环境访问
        --allow-net        允许网络访问
        --allow-read       允许文件系统读访问权限
        --allow-run        允许运行子进程
        --allow-write      允许文件系统写访问权限
    -h, --help             打印帮助信息
    -D, --log-debug        记录调试输出
        --no-prompt        不要使用提示
        --prefetch         预取依赖项
    -r, --reload           重新加载源代码缓存（重新编译 TypeScript）
        --types            打印运行时的 TypeScript 声明
        --v8-options       打印 V8 命令行选项
    -v, --version          打印版本

OPTIONS:
        --v8-flags=<v8-flags>    设置V8命令行选项

SUBCOMMANDS(子命令):
    <script>    要运行的脚本
    fmt         格式化文件
    info        显示源文件相关信息

ENVIRONMENT VARIABLES(环境变量):
    DENO_DIR        设置 deno 的地基目录
    NO_COLOR        设置为，禁用颜色
```

### 环境变量

有几个环境变量，控制着 deno 的行为：

`DENO_DIR`默认为`$HOME/.deno`，但也可以设置为任何路径。它控制着生成和缓存的源代码的写入和读取位置。

如果`NO_COLOR`设置了，将关闭颜色输出。见[https://no-color.org/](https://no-color.org/)。 不用`--allow-env`标志，用户代码通过使用`Deno.noColor`(布尔类型)，就可以测测`NO_COLOR`是否设置了。

### V8 标志

V8 有许多内部命令行标志，您可以使用`--v8-options`。 [看起来像这样。](https://gist.github.com/ry/1c5b080dcbdc6367e5612392049c9ee7)

特别有用的：

```
--async-stack-trace
```

## 内部详细信息

### deno 和 linux 的类比

|                               **Linux** | **Deno**                          |
| --------------------------------------: | :-------------------------------- |
|                         Processes(进程) | Web Workers                       |
|                      Syscalls(系统调用) | Ops                               |
|       File descriptors(文件描述符) (fd) | [Resource(资源) ids (rid)](#资源) |
|                     Scheduler(调度程序) | Tokio                             |
| Userland(用户层): libc++ / glib / boost | deno_std                          |
|                         /proc/\$\$/stat | [Deno.metrics()](#metrics)        |
|                               man pages | deno --types                      |

#### 资源

资源(Resource)（也称为 `rid`），是 deno 版本的文件描述符。它们是整数值，是对打开的文件、套接字和其他概念的引用(/指向)。对于测试来说挺好的，因为能够查询到，系统现在有多少开放资源。

```ts
const {resources, close} = Deno;
console.log(resources());
// output like: { 0: "stdin", 1: "stdout", 2: "stderr", 3: "repl" }

// close resource by rid
close(3);
```

#### metrics

metrics(指标) 是 deno 的内部计数器，针对各种静态。

```shellsession
> console.table(Deno.metrics())
┌──────────────────┬────────┐
│     (index)      │ Values │
├──────────────────┼────────┤
│  opsDispatched   │   9    │
│   opsCompleted   │   9    │
│ bytesSentControl │  504   │
│  bytesSentData   │   0    │
│  bytesReceived   │  856   │
└──────────────────┴────────┘
```

### 示意图

<img src="docs/images/schematic_v0.2.png">

### 分析

要开始分析，

```sh
# 确保我们只是构建发布(release)版本。
# 构建 deno 和 V8 的 d8。
./tools/build.py --release d8 deno
# 我们想要程序使用 --prof，进行基准测试
./target/release/deno tests/http_bench.ts --allow-net --prof &
# 练练吧
third_party/wrk/linux/wrk http://localhost:4500/
kill `pgrep deno`
```

V8 将在当前目录中，写入如下文件：`isolate-0x7fad98242400-v8.log`。 要检查此文件：

```sh
D8_PATH=target/release/ ./third_party/v8/tools/linux-tick-processor
isolate-0x7fad98242400-v8.log > prof.log
# 在 macOS 上，请改用 ./third_party/v8/tools/mac-tick-processor
```

`prof.log`将包含，有关不同调用的 tick 分布的信息。

要使用 Web UI ，查看日志，请生成日志的 JSON 文件：

```sh
D8_PATH=target/release/ ./third_party/v8/tools/linux-tick-processor
isolate-0x7fad98242400-v8.log --preprocess > prof.json
```

正常在浏览器中，打开`third_party/v8/tools/profview/index.html`，选择`prof.json`，以图形方式查看分布。

了解`d8`和分析的更多信息，查看以下链接：

- <https://v8.dev/docs/d8>
- [https://v8.dev/docs/profile/](https://v8.dev/docs/profile)

### 用 LLDB 调试

我们可以使用 LLDB 来调试 deno。

```shellsession
$ lldb -- target/debug/deno tests/worker.js
> run
> bt
> up
> up
> l
```

要调试 Rust 代码，我们可以使用`rust-lldb`。 它应该跟着`rustc`一起安装的，是一个围绕 LLDB 的包装器。

```shellsession
$ rust-lldb -- ./target/debug/deno tests/http_bench.ts --allow-net
# On macOS, you might get warnings like
# `ImportError: cannot import name _remove_dead_weakref`
# In that case, use system python by setting PATH, e.g.
# PATH=/System/Library/Frameworks/Python.framework/Versions/2.7/bin:$PATH
(lldb) command script import "/Users/kevinqian/.rustup/toolchains/1.30.0-x86_64-apple-darwin/lib/rustlib/etc/lldb_rust_formatters.py"
(lldb) type summary add --no-value --python-function lldb_rust_formatters.print_val -x ".*" --category Rust
(lldb) type category enable Rust
(lldb) target create "../deno/target/debug/deno"
Current executable set to '../deno/target/debug/deno' (x86_64).
(lldb) settings set -- target.run-args  "tests/http_bench.ts" "--allow-net"
(lldb) b op_start
(lldb) r
```

### Deno 核心

DENO 的 core(核心) 绑定层。它作为一个[独立箱子](https://crates.io/crates/deno)发布。 核心内部是 V8 本身，一个名为"libdeno"的绑定 API。有关更多详细信息，请参阅该箱子的文档。

### Flatbuffers

我们使用 flatbuffers 定义 typescript 和 rust 之间的，公共结构和枚举。这些常见的数据结构，定义在[msg.fbs](https://github.com/denoland/deno/blob/master/cli/msg.fbs)

### 更新预构建的二进制文件

```shellsession
$ ./third_party/depot_tools/upload_to_google_storage.py -b denoland  \
  -e ~/.config/gcloud/legacy_credentials/ry@tinyclouds.org/.boto `which sccache`
$ mv `which sccache`.sha1 prebuilt/linux64/
$ gsutil acl ch -u AllUsers:R gs://denoland/608be47bf01004aa11d4ed06955414e93934516e
```

### 连续基准

[在这里](https://deno.land/benchmarks.html)，看看我们的基准

基准图表假设`//website/data.json`有`BenchmarkData[]`类型，这里的`BenchmarkData`定义如下：

```ts
interface ExecTimeData {
  mean: number;
  stddev: number;
  user: number;
  system: number;
  min: number;
  max: number;
}

interface BenchmarkData {
  created_at: string;
  sha1: string;
  benchmark: {
    [key: string]: ExecTimeData;
  };
  binarySizeData: {
    [key: string]: number;
  };
  threadCountData: {
    [key: string]: number;
  };
  syscallCountData: {
    [key: string]: number;
  };
}
```

### Logos

这些 deno 徽标，像 deno 软件一样，是在 MIT 许可证（公共域和免费使用）下发布的。

- [由 @ry 亲手画的](https://github.com/denoland/deno/blob/master/website/images/deno_logo.png)

- [由 @hashrock 制作的动画](https://github.com/denolib/animated-deno-logo/)

- [由 @kevinkassimo 提供的高分辨率 SVG](https://github.com/denolib/high-res-deno-logo)

## 贡献

[风格指南](style_guide.html)

[在这里](https://github.com/denoland/deno/milestones)，跟踪未来版本的进展。

请不要把[基准](https://deno.land/benchmarks.html)，搞得一团糟。

在[社区聊天室](https://gitter.im/denolife/Lobby)，寻求帮助。

如果您要处理某个问题，在你开始着手解决这个问题*之前*，请在问题评论中提及。

### 提交 PR

提交前，请确保完成以下操作：

1.  有一个相关的问题，它在 PR 文本中,被引用。
2.  有一些测试可以覆盖这些更改。
3.  确保`./tools/test.py`成功。
4.  使用`tools/format.py`格式化代码。
5.  确保`./tools/lint.py`成功。

### `third_party`的改变

[`deno_third_party`](https://github.com/denoland/deno_third_party)包含 deno 所依赖的大部分外部代码，这样我们就可以准确地知道，在任何给定时间执行的是什么。它是由人工和个人脚本，混合而成的，经过仔细维护。您可能需要 @ry 或 @pissisaureus 的帮助来进行更改。

### 添加 Ops（即绑定）

我们非常担心在添加新的 API 时出错。在 Deno 中添加一个 Op 时，需要研究其他平台上的对应接口。请列出如何在 go、node、rust 和 python 中完成此功能。

例如，请参见被提议的`Deno.rename()`，并最终在[PR #671](https://github.com/denoland/deno/pull/671)加入。

### 文档化 API

记录公有 API 是很重要的，我们希望在代码中这样做。这有助于确保代码和文档紧密耦合在一起。

#### 利用 JSDoc

所有公有的 API 和类型，都需要`deno`模块，还有 global/`window`命名空间的 JSDoc 文档。这些文档会被 typescript 编译器解析，并使用，因此，很容易提供给下游。JSDoc 代码块(注释定义)正好，位于它们应用的语句之前，并用`/**`前缀和`*/`结尾表示。 例如：

```ts
/** 一个简单 的 JSDoc z */
export const FOO = 'foo'; // 应用的语句
```
