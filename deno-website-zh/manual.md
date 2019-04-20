# Deno Manual

[toc]

## Disclaimer

A word of caution: Deno is very much under development. We encourage brave early
adopters, but expect bugs large and small. The API is subject to change without
notice. [Bug reports](https://github.com/denoland/deno/issues) do help!

## Introduction

A secure JavaScript/TypeScript runtime built with V8, Rust, and Tokio

### Philosophy

Deno aims to be a productive and secure scripting environment for the modern
programmer.

It will always be distributed as a single executable - and that executable will
be sufficient software to run any deno program. Given a URL to a deno program,
you should be able to execute it with nothing more than the 50 megabyte deno
executable.

Deno explicitly takes on the role of both runtime and package manager. It uses a
standard browser-compatible protocol for loading modules: URLs.

Deno provides security guarantees about how programs can access your system with
the default being the most restrictive secure sandbox.

Deno provides <a href="https://github.com/denoland/deno_std">a set of reviewed
(audited) standard modules</a> that are guaranteed to work with Deno.

### Goals

- Support TypeScript out of the box.

- Like the browser, allows imports from URLs:

  ```ts
  import * as log from "https://deno.land/std/log/mod.ts";
  ```

- Remote code is fetched and cached on first execution, and never updated until
  the code is run with the `--reload` flag. (So, this will still work on an
  airplane. See `~/.deno/src` for details on the cache.)

- Uses "ES Modules" and does not support `require()`.

- File system and network access can be controlled in order to run sandboxed
  code. Access between V8 (unprivileged) and Rust (privileged) is only done via
  serialized messages defined in this
  [flatbuffer](https://github.com/denoland/deno/blob/master/cli/msg.fbs). This
  makes it easy to audit. For example, to enable write access use the flag
  `--allow-write` or for network access `--allow-net`.

- Only ship a single executable.

- Always dies on uncaught errors.

- Browser compatible: The subset of Deno programs which are written completely
  in JavaScript and do not use the global `Deno` namespace (or feature test for
  it), ought to also be able to be run in a modern web browser without change.

- [Aims to support top-level `await`.](https://github.com/denoland/deno/issues/471)

- Be able to serve HTTP efficiently.
  ([Currently it is relatively slow.](https://deno.land/benchmarks.html#req-per-sec))

- Provide useful tooling out of the box:
  - command-line debugger
    [not yet](https://github.com/denoland/deno/issues/1120)
  - linter [not yet](https://github.com/denoland/deno/issues/1880)
  - dependency inspector (`deno info`)
  - code formatter (`deno fmt`),

### Non-goals

- No `package.json`.

- No npm.

- Not explicitly compatible with Node.

## Setup

### Binary Install

Deno works on OSX, Linux, and Windows. Deno is a single binary executable. It
has no external dependencies.

[deno_install](https://github.com/denoland/deno_install) provides convenience
scripts to download and install the binary.

Using Shell:

```shellsession
$ curl -fsSL https://deno.land/x/install/install.sh | sh
```

Using PowerShell:

```shellsession
> iwr https://deno.land/x/install/install.ps1 | iex
```

Using [Scoop](https://scoop.sh/) (windows):

```
scoop install deno
```

Deno can also be installed manually, by downloading a tarball or zip file at
[github.com/denoland/deno/releases](https://github.com/denoland/deno/releases).
These packages contain just a single executable file. You will have to set the
executable bit on Mac and Linux.

Once it's installed and in your `$PATH`, try it:

```shellsession
$ deno https://deno.land/welcome.ts
```

### Build from source

```bash
# Fetch deps.
git clone --recurse-submodules https://github.com/denoland/deno.git
cd deno
./tools/setup.py

# You may need to ensure that sccache is running.
# (TODO it's unclear if this is necessary or not.)
# prebuilt/mac/sccache --start-server

# Build.
./tools/build.py

# Run.
./target/debug/deno tests/002_hello.ts

# Test.
./tools/test.py

# Format code.
./tools/format.py
```

#### Prerequisites

To ensure reproducible builds, deno has most of its dependencies in a git
submodule. However, you need to install separately:

1. [Rust](https://www.rust-lang.org/en-US/install.html) >= 1.31.1
2. [Node](https://nodejs.org/)
3. Python 2.
   [Not 3](https://github.com/denoland/deno/issues/464#issuecomment-411795578).

Extra steps for Mac users: install [XCode](https://developer.apple.com/xcode/)
:(

Extra steps for Windows users:

1. Add `python.exe` to `PATH` (e.g. `set PATH=%PATH%;C:\Python27\python.exe`)
2. Get [VS Community 2017](https://www.visualstudio.com/downloads/) with
   "Desktop development with C++" toolkit and make sure to select the following
   required tools listed below along with all C++ tools.
   - Windows 10 SDK >= 10.0.17134
   - Visual C++ ATL for x86 and x64
   - Visual C++ MFC for x86 and x64
   - C++ profiling tools
3. Enable "Debugging Tools for Windows". Go to "Control Panel" → "Programs" →
   "Programs and Features" → Select "Windows Software Development Kit - Windows
   10" → "Change" → "Change" → Check "Debugging Tools For Windows" → "Change" ->
   "Finish".
4. Make sure you are using git version 2.19.2.windows.1 or newer.

#### Other useful commands

```bash
# Call ninja manually.
./third_party/depot_tools/ninja -C target/debug

# Build a release binary.
./tools/build.py --release deno

# List executable targets.
./third_party/depot_tools/gn ls target/debug //:* --as=output --type=executable

# List build configuration.
./third_party/depot_tools/gn args target/debug/ --list

# Edit build configuration.
./third_party/depot_tools/gn args target/debug/

# Describe a target.
./third_party/depot_tools/gn desc target/debug/ :deno
./third_party/depot_tools/gn help

# Update third_party modules
git submodule update
```

Environment variables: `DENO_BUILD_MODE`, `DENO_BUILD_PATH`, `DENO_BUILD_ARGS`,
`DENO_DIR`.

## API reference

### deno --types

To get an exact reference of deno's runtime API, run the following in the
command line:

```shellsession
$ deno --types
```

[This is what the output looks like.](https://gist.github.com/ry/46da4724168cdefa763e13207d27ede5)

### Reference websites

[TypeScript Deno API](https://deno.land/typedoc/index.html).

If you are embedding deno in a Rust program, see
[Rust Deno API](https://deno.land/rustdoc/deno/index.html).

## Examples

### An implementation of the unix "cat" program

In this program each command-line argument is assumed to be a filename, the file
is opened, and printed to stdout.

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

The `copy()` function here actually makes no more than the necessary kernel ->
userspace -> kernel copies. That is, the same memory from which data is read
from the file, is written to stdout. This illustrates a general design goal for
I/O streams in Deno.

Try the program:

```shellsession
$ deno --allow-read https://deno.land/std/examples/cat.ts /etc/passwd
```

### TCP echo server

This is an example of a simple server which accepts connections on port 8080,
and returns to the client anything it sends.

```ts
const { listen, copy } = Deno;

(async () => {
  const addr = "0.0.0.0:8080";
  const listener = listen("tcp", addr);
  console.log("listening on", addr);
  while (true) {
    const conn = await listener.accept();
    copy(conn, conn);
  }
})();
```

When this program is started, the user is prompted for permission to listen on
the network:

```shellsession
$ deno https://deno.land/std/examples/echo_server.ts
⚠️  Deno requests network access to "listen". Grant? [yN] y
listening on 0.0.0.0:8080
```

For security reasons, deno does not allow programs to access the network without
explicit permission. To avoid the console prompt, use a command-line flag:

```shellsession
$ deno https://deno.land/std/examples/echo_server.ts --allow-net
```

To test it, try sending a HTTP request to it by using curl. The request gets
written directly back to the client.

```shellsession
$ curl http://localhost:8080/
GET / HTTP/1.1
Host: localhost:8080
User-Agent: curl/7.54.0
Accept: */*
```

It's worth noting that like the `cat.ts` example, the `copy()` function here
also does not make unnecessary memory copies. It receives a packet from the
kernel and sends back, without further complexity.

### Inspecting and revoking permissions

Sometimes a program may want to revoke previously granted permissions. When a
program, at a later stage, needs those permissions, a new prompt will be
presented to the user.

```ts
const { permissions, revokePermission, open, remove } = Deno;

(async () => {
  // lookup a permission
  if (!permissions().write) {
    throw new Error("need write permission");
  }

  const log = await open("request.log", "a+");

  // revoke some permissions
  revokePermission("read");
  revokePermission("write");

  // use the log file
  await log.write(encoder.encode("hello\n"));

  // this will prompt for the write permission or fail.
  await remove("request.log");
})();
```

### File server

This one serves a local directory in HTTP.

```bash
alias file_server="deno  --allow-net --allow-read \
  https://deno.land/std/http/file_server.ts"
```

Run it:

```shellsession
$ file_server .
Downloading https://deno.land/std/http/file_server.ts...
[...]
HTTP server listening on http://0.0.0.0:4500/
```

And if you ever want to upgrade to the latest published version:

```shellsession
$ file_server --reload
```

### Run subprocess

[API Reference](https://deno.land/typedoc/index.html#run)

Example:

```ts
async function main() {
  // create subprocess
  const p = Deno.run({
    args: ["echo", "hello"]
  });

  // await its completion
  await p.status();
}

main();
```

Run it:

```shellsession
$ deno --allow-run ./subprocess_simple.ts
hello
```

By default when you use `Deno.run()` subprocess inherits `stdin`, `stdout` and
`stdout` of parent process. If you want to communicate with started subprocess
you can use `"piped"` option.

```ts
async function main() {
  const decoder = new TextDecoder();

  const fileNames = Deno.args.slice(1);

  const p = Deno.run({
    args: [
      "deno",
      "--allow-read",
      "https://deno.land/std/examples/cat.ts",
      ...fileNames
    ],
    stdout: "piped",
    stderr: "piped"
  });

  const { code } = await p.status();

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

When you run it:

```shellsession
$ deno ./subprocess.ts --allow-run <somefile>
[file content]

$ deno ./subprocess.ts --allow-run non_existent_file.md

Uncaught NotFound: No such file or directory (os error 2)
    at DenoError (deno/js/errors.ts:19:5)
    at maybeError (deno/js/errors.ts:38:12)
    at handleAsyncMsgFromRust (deno/js/dispatch.ts:27:17)
```

### Linking to third party code

In the above examples, we saw that Deno could execute scripts from URLs. Like
browser JavaScript, Deno can import libraries directly from URLs. This example
uses a URL to import a test runner library:

```ts
import { test, runIfMain } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

test(function t1() {
  assertEquals("hello", "hello");
});

test(function t2() {
  assertEquals("world", "world");
});

runIfMain(import.meta);
```

Try running this:

```shellsession
$ deno test.ts
running 2 tests
test t1 ... ok
test t2 ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out

```

Note that we did not have to provide the `--allow-net` flag for this program,
and yet it accessed the network. The runtime has special access to download
imports and cache them to disk.

Deno caches remote imports in a special directory specified by the `$DENO_DIR`
environmental variable. It defaults to the system's cache directory if
`$DENO_DIR` is not specified. The next time you run the program, no downloads
will be made. If the program hasn't changed, it won't be recompiled either. The
default directory is:

- On Linux/Redox: `$XDG_CACHE_HOME/deno` or `$HOME/.cache/deno`
- On Windows: `%LOCALAPPDATA%/deno` (`%LOCALAPPDATA%` = `FOLDERID_LocalAppData`)
- On macOS: `$HOME/Library/Caches/deno`
- If something fails, it falls back to `$HOME/.deno`

**But what if `https://deno.land/` goes down?** Relying on external servers is
convenient for development but brittle in production. Production software should
always bundle its dependencies. In Deno this is done by checking the `$DENO_DIR`
into your source control system, and specifying that path as the `$DENO_DIR`
environmental variable at runtime.

**How do you import to a specific version?** Simply specify the version in the
URL. For example, this URL fully specifies the code being run:
`https://unpkg.com/liltest@0.0.5/dist/liltest.js`. Combined with the
aforementioned technique of setting `$DENO_DIR` in production to stored code,
one can fully specify the exact code being run, and execute the code without
network access.

**It seems unwieldy to import URLs everywhere. What if one of the URLs links to
a subtly different version of a library? Isn't it error prone to maintain URLs
everywhere in a large project?** The solution is to import and re-export your
external libraries in a central `deps.ts` file (which serves the same purpose as
Node's `package.json` file). For example, let's say you were using the above
testing library across a large project. Rather than importing
`"https://deno.land/std/testing/mod.ts"` everywhere, you could create a
`deps.ts` file the exports the third-party code:

```ts
export { test, assertEquals } from "https://deno.land/std/testing/mod.ts";
```

And throughout project one can import from the `deps.ts` and avoid having many
references to the same URL:

```ts
import { test, assertEquals } from "./deps.ts";
```

This design circumvents a plethora of complexity spawned by package management
software, centralized code repositories, and superfluous file formats.

### Testing if current file is the main program

To test if the current script has been executed as the main input to the program
check `import.meta.main`.

```ts
if (import.meta.main) {
  console.log("main");
}
```

## Command line interface

### Flags

```shellsession
$ deno -h
deno

USAGE:
    deno_dev [FLAGS] [OPTIONS] [SUBCOMMAND]

FLAGS:
    -A, --allow-all      Allow all permissions
        --allow-env      Allow environment access
        --allow-net      Allow network access
        --allow-read     Allow file system read access
        --allow-run      Allow running subprocesses
        --allow-write    Allow file system write access
    -h, --help           Prints help information
    -D, --log-debug      Log debug output
        --no-prompt      Do not use prompts
        --prefetch       Prefetch the dependencies
    -r, --reload         Reload source code cache (recompile TypeScript)
        --types          Print runtime TypeScript declarations
        --v8-options     Print V8 command line options
    -v, --version        Print the version

OPTIONS:
        --v8-flags=<v8-flags>    Set V8 command line options

SUBCOMMANDS:
    <script>    Script to run
    fmt         Format files
    info        Show source file related info

ENVIRONMENT VARIABLES:
    DENO_DIR        Set deno's base directory
    NO_COLOR        Set to disable color
```

### Environmental variables

There are several env vars that control how Deno behaves:

`DENO_DIR` defaults to `$HOME/.deno` but can be set to any path to control where
generated and cached source code is written and read to.

`NO_COLOR` will turn off color output if set. See https://no-color.org/. User
code can test if `NO_COLOR` was set without having `--allow-env` by using the
boolean constant `Deno.noColor`.

### V8 flags

V8 has many many internal command-line flags, that you can see with
`--v8-options`.
[It looks like this.](https://gist.github.com/ry/1c5b080dcbdc6367e5612392049c9ee7)

Particularly useful ones:

```
--async-stack-trace
```

## Internal details

### Deno and Linux analogy

|                       **Linux** | **Deno**                         |
| ------------------------------: | :------------------------------- |
|                       Processes | Web Workers                      |
|                        Syscalls | Ops                              |
|           File descriptors (fd) | [Resource ids (rid)](#resources) |
|                       Scheduler | Tokio                            |
| Userland: libc++ / glib / boost | deno_std                         |
|                 /proc/\$\$/stat | [Deno.metrics()](#metrics)       |
|                       man pages | deno --types                     |

#### Resources

Resources (AKA `rid`) are Deno's version of file descriptors. They are integer
values used to refer to open files, sockets, and other concepts. For testing it
would be good to be able to query the system for how many open resources there
are.

```ts
const { resources, close } = Deno;
console.log(resources());
// output like: { 0: "stdin", 1: "stdout", 2: "stderr", 3: "repl" }

// close resource by rid
close(3);
```

#### Metrics

Metrics is deno's internal counters for various statics.

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

### Schematic diagram

<img src="images/schematic_v0.2.png">

### Profiling

To start profiling,

```sh
# Make sure we're only building release.
# Build deno and V8's d8.
./tools/build.py --release d8 deno
# Start the program we want to benchmark with --prof
./target/release/deno tests/http_bench.ts --allow-net --prof &
# Exercise it.
third_party/wrk/linux/wrk http://localhost:4500/
kill `pgrep deno`
```

V8 will write a file in the current directory that looks like this:
`isolate-0x7fad98242400-v8.log`. To examine this file:

```sh
D8_PATH=target/release/ ./third_party/v8/tools/linux-tick-processor
isolate-0x7fad98242400-v8.log > prof.log
# on macOS, use ./third_party/v8/tools/mac-tick-processor instead
```

`prof.log` will contain information about tick distribution of different calls.

To view the log with Web UI, generate JSON file of the log:

```sh
D8_PATH=target/release/ ./third_party/v8/tools/linux-tick-processor
isolate-0x7fad98242400-v8.log --preprocess > prof.json
```

Open `third_party/v8/tools/profview/index.html` in your brower, and select
`prof.json` to view the distribution graphically.

To learn more about `d8` and profiling, check out the following links:

- [https://v8.dev/docs/d8](https://v8.dev/docs/d8)
- [https://v8.dev/docs/profile](https://v8.dev/docs/profile)

### Debugging with LLDB

We can use LLDB to debug deno.

```shellsession
$ lldb -- target/debug/deno tests/worker.js
> run
> bt
> up
> up
> l
```

To debug Rust code, we can use `rust-lldb`. It should come with `rustc` and is a
wrapper around LLDB.

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

### Deno Core

The core binding layer for Deno. It is released as a
[standalone crate](https://crates.io/crates/deno). Inside of core is V8 itself,
with a binding API called "libdeno". See the crate documentation for more
details.

### Flatbuffers

We use Flatbuffers to define common structs and enums between TypeScript and
Rust. These common data structures are defined in
[msg.fbs](https://github.com/denoland/deno/blob/master/cli/msg.fbs)

### Updating prebuilt binaries

```shellsession
$ ./third_party/depot_tools/upload_to_google_storage.py -b denoland  \
  -e ~/.config/gcloud/legacy_credentials/ry@tinyclouds.org/.boto `which sccache`
$ mv `which sccache`.sha1 prebuilt/linux64/
$ gsutil acl ch -u AllUsers:R gs://denoland/608be47bf01004aa11d4ed06955414e93934516e
```

### Continuous Benchmarks

See our benchmarks [over here](https://deno.land/benchmarks.html)

The benchmark chart supposes `//website/data.json` has the type
`BenchmarkData[]` where `BenchmarkData` is defined like the below:

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

These Deno logos, like the Deno software, are distributed under the MIT license
(public domain and free for use)

- [A hand drawn one by @ry](https://github.com/denoland/deno/blob/master/website/images/deno_logo.png)

- [An animated one by @hashrock](https://github.com/denolib/animated-deno-logo/)

- [A high resolution SVG one by @kevinkassimo](https://github.com/denolib/high-res-deno-logo)

## Contributing

[Style Guide](style_guide.html)

Progress towards future releases is tracked
[here](https://github.com/denoland/deno/milestones).

Please don't make [the benchmarks](https://deno.land/benchmarks.html) worse.

Ask for help in the [community chat room](https://gitter.im/denolife/Lobby).

If you are going to work on an issue, mention so in the issue comments _before_
you start working on the issue.

### Submitting a pull request

Before submitting, please make sure the following is done:

1. That there is a related issue and it is referenced in the PR text.
2. There are tests that cover the changes.
3. Ensure `./tools/test.py` passes.
4. Format your code with `tools/format.py`
5. Make sure `./tools/lint.py` passes.

### Changes to `third_party`

[`deno_third_party`](https://github.com/denoland/deno_third_party) contains most
of the external code that Deno depends on, so that we know exactly what we are
executing at any given time. It is carefully maintained with a mixture of manual
labor and private scripts. It's likely you will need help from @ry or
@piscisaureus to make changes.

### Adding Ops (aka bindings)

We are very concerned about making mistakes when adding new APIs. When adding an
Op to Deno, the counterpart interfaces on other platforms should be researched.
Please list how this functionality is done in Go, Node, Rust, and Python.

As an example, see how `Deno.rename()` was proposed and added in
[PR #671](https://github.com/denoland/deno/pull/671).

### Documenting APIs

It is important to document public APIs and we want to do that inline with the
code. This helps ensure that code and documentation are tightly coupled
together.

#### Utilize JSDoc

All publicly exposed APIs and types, both via the `deno` module as well as the
global/`window` namespace should have JSDoc documentation. This documentation is
parsed and available to the TypeScript compiler, and therefore easy to provide
further downstream. JSDoc blocks come just prior to the statement they apply to
and are denoted by a leading `/**` before terminating with a `*/`. For example:

```ts
/** A simple JSDoc comment */
export const FOO = "foo";
```
