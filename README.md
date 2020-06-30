## http code
- 100 "continue"
- 101 "switching protocols"
- 102 "processing"
- 200 "ok"
- 201 "created"
- 202 "accepted"
- 203 "non-authoritative information"
- 204 "no content"
- 205 "reset content"
- 206 "partial content"
- 207 "multi-status"
- 208 "already reported"
- 226 "im used"
- 300 "multiple choices"
- 301 "moved permanently"
- 302 "found"
- 303 "see other"
- 304 "not modified"
- 305 "use proxy"
- 307 "temporary redirect"
- 308 "permanent redirect"
- 400 "bad request"
- 401 "unauthorized"
- 402 "payment required"
- 403 "forbidden"
- 404 "not found"
- 405 "method not allowed"
- 406 "not acceptable"
- 407 "proxy authentication required"
- 408 "request timeout"
- 409 "conflict"
- 410 "gone"
- 411 "length required"
- 412 "precondition failed"
- 413 "payload too large"
- 414 "uri too long"
- 415 "unsupported media type"
- 416 "range not satisfiable"
- 417 "expectation failed"
- 418 "I'm a teapot"
- 422 "unprocessable entity"
- 423 "locked"
- 424 "failed dependency"
- 426 "upgrade required"
- 428 "precondition required"
- 429 "too many requests"
- 431 "request header fields too large"
- 500 "internal server error"
- 501 "not implemented"
- 502 "bad gateway"
- 503 "service unavailable"
- 504 "gateway timeout"
- 505 "http version not supported"
- 506 "variant also negotiates"
- 507 "insufficient storage"
- 508 "loop detected"
- 510 "not extended"
- 511 "network authentication required"

## process.exitCode
退出码#

正常情况下，如果没有异步操作正在等待，那么 Node.js 会以状态码 0 退出，其他情况下，会用如下的状态码:

- 1 未捕获异常 - 有一个未被捕获的异常, 并且没被 domain 或 'uncaughtException' 事件处理器处理。
- 2 未被使用 (Bash 为防内部滥用而保留)
- 3 内部的 JavaScript 解析错误 - Node.js 内部的 JavaScript 源代码在引导进程中导致了一个语法解析错误。 这是非常少见的, 一般只会在开发 Node.js 本身的时候出现。
- 4 内部的 JavaScript 执行失败 - 引导进程执行 Node.js 内部的 JavaScript 源代码时，返回函数值失败。 这是非常少见的, 一般只会在开发 Node.js 本身的时候出现。
- 5 致命错误 - 在 V8 中有一个致命的错误。 比较典型的是以 FATALERROR 为前缀从 stderr 打印出来的消息。
- 6 非函数的内部异常处理 - 发生了一个内部异常，但是内部异常处理函数被设置成了一个非函数，或者不能被调用。
- 7 内部异常处理运行时失败 - 有一个不能被捕获的异常，在试图处理这个异常时，处理函数本身抛出了一个错误。 这是可能发生的, 比如, 如果一个 'uncaughtException' 或者 domain.on('error') 处理函数抛出了一个错误。
- 8 - 未被使用，在之前版本的 Node.js, 退出码 8 有时候表示一个未被捕获的异常。
- 9 - 不可用参数 - 也许是某个未知选项没有确定，或者没给必需要的选项填值。
- 10 内部的 JavaScript 运行时失败 - 调用引导函数时，引导进程执行 Node.js 内部的 JavaScript 源代码抛出错误。 这是非常少见的, 一般只会在开发 Node.js 本身的时候出现。
- 12 不可用的调试参数 - --inspect 和/或 --inspect-brk 选项已设置，但选择的端口号无效或不可用。
- `>128` 退出信号 - 如果 Node.js 接收到致命信号, 诸如 SIGKILL 或 SIGHUP，那么它的退出代码将是 128 加上信号的码值。 这是 POSIX 的标准做法，因为退出码被定义为 7 位整数，并且信号退出设置高位，然后包含信号码值。 例如，信号 SIGABRT 的值为 6，因此预期的退出代码将为 128 + 6 或 134。

## 为输出着色

可以使用[转义序列](https://gist.github.com/iamnewton/8754917)在控制台中为文本的输出着色。 转义序列是一组标识颜色的字符。
```js
console.log('\x1b[33m%s\x1b[0m', '你好')
```

## package.json
- name 设置了应用程序/软件包的名称。
- version 表明了当前的版本。
- description 是应用程序/软件包的简短描述。
- main 设置了应用程序的入口点。
- private 如果设置为 true，则可以防止应用程序/软件包被意外地发布到 npm。
- scripts 定义了一组可以运行的 node 脚本。
- dependencies 设置了作为依赖安装的 npm 软件包的列表。
- devDependencies 设置了作为开发依赖安装的 npm 软件包的列表。
- engines 设置了此软件包/应用程序在哪个版本的 Node.js 上运行。
- browserslist 用于告知要支持哪些浏览器（及其版本）。

```json
{
    "engines": {
        "node": ">= 6.0.0",
        "npm": ">= 3.0.0",
        "yarn": "^0.13.0"
    },
    "browserslist": [
        "> 1%",
        "last 2 versions",
        "not ie <= 8"
    ]
}
```

> 鉴于使用了 semver（语义版本控制），所有的版本都有 3 个数字，第一个是主版本，第二个是次版本，第三个是补丁版本

- ~: 如果写入的是 〜0.13.0，则只更新补丁版本：即 0.13.1 可以，但 0.14.0 不可以。
- ^: 如果写入的是 ^0.13.0，则要更新补丁版本和次版本：即 0.13.1、0.14.0、依此类推。
- *: 如果写入的是 *，则表示接受所有的更新，包括主版本升级。
- `>`: 接受高于指定版本的任何版本。
- `>=`: 接受等于或高于指定版本的任何版本。
- <=: 接受等于或低于指定版本的任何版本。
- <: 接受低于指定版本的任何版本。
- =: 接受确切的版本。
- -: 接受一定范围的版本。例如：2.1.0 - 2.6.2。
- ||: 组合集合，例如：1.0.0 || >=1.1.0 <1.2.0，即使用 1.0.0 或从 1.1.0 开始但低于 1.2.0 的版本。
- 无符号: 仅接受指定的特定版本（例如 1.2.1）。
- latest: 使用可用的最新版本。

## npm list
- npm list -g 适用于全局安装的软件包。
- npm list --depth=0 仅获取顶层的软件包。
- npm list loadsh 通过指定名称来获取特定软件包的版本（和依赖）。
- npm view [package_name] version 查看软件包在 npm 仓库上最新的可用版本。
- npm view <package> versions 列出软件包所有的以前的版本。

## npm update
- npm outdated 过时的软件包的列表.
- npm update 不会更新主版本。
- npm install -g npm-check-updates & ncu -u 将所有软件包更新到新的主版本。这会升级 package.json 文件的 dependencies 和 devDependencies 中的所有版本，以便 npm 可以安装新的主版本。然后运行 npm run update/npm install
- --save -S
- --save-dev -D

## 定时器
> setTimeout() callback with a 0ms delay is very similar to setImmediate(). The execution order will depend on various factors, but they will be both run in the next iteration of the event loop.

```js
setImmediate(() => {
  //run something
})
```

```js
const myFunction = (firstParam, secondParam) => {
  // do something
}

// runs after 2 seconds
setTimeout(myFunction, 2000, firstParam, secondParam)
```

## async_hooks
> [Async Hooks](http://nodejs.cn/api/async_hooks.html) 是 Node8 新出来的特性，提供了一些 API 用于跟踪 NodeJs 中的异步资源的生命周期。

```js
let asycnHooks = require('async_hooks');
```

之所以会引入 async_hooks 模块，是因为在异步调用中我们很难正确的追踪异步调用的处理逻辑及关系。而 async_hooks 模块友好的解决了上述问题，主要提供以下功能和特性：

- 每一个函数都会提供一个上下文，我们称之为 async scope；
- 每一个 async scope 中都有一个 asyncId, 是当前 async scope 的标志，同一个的 async scope 中 asyncId 必然相同，最外层的 asyncId 是 1，每个异步资源在创建时 asyncId 全量递增的；
- 每一个 async scope 中都有一个 triggerAsyncId 表示当前函数是由那个 async scope 触发生成的；
- 通过 asyncId 和 triggerAsyncId 我们可以很方便的追踪整个异步的调用关系及链路；
- 可以通过 async_hooks.createHook 函数来注册关于每个异步资源在生命周期中发生的 init/before/after/destory/promiseResolve 等相关事件的监听函数；
- 同一个 async scope 可能会被调用及执行多次，不管执行多少次，其 asyncId 必然相同，通过监听函数，我们很方便追踪其执行的次数及时间及上线文关系；

## Buffer
- 在 Node.js 中， Buffer 对象用于以字节序列的形式来表示二进制数据。 
- Buffer 类的实例，以及通常的 Uint8Array，类似于从 0 到 255 之间的整数数组，但对应于固定大小的内存块，并且不能包含任何其他值。 一个 Buffer 的大小在创建时确定，且无法更改。
- Buffer 类在全局作用域中，因此无需使用 require('buffer').Buffer。

## cluster
[cluster](http://nodejs.cn/api/cluster.html) 模块可以创建共享服务器端口的子进程。

cluster 模块支持两种分发连接的方法:
- 第一种方法（也是除 Windows 外所有平台的默认方法）是循环法，由主进程负责监听端口，接收新连接后再将连接循环分发给工作进程，在分发中使用了一些内置技巧防止工作进程任务过载。
- 第二种方法是，主进程创建监听 socket 后发送给感兴趣的工作进程，由工作进程负责直接接收连接。

### worker.kill
因为 kill() 会尝试正常地断开工作进程，所以很容易无限期地等待断开连接完成。 例如，如果工作进程进入无限循环，则永远不会发生正常断开连接。 如果不需要正常的断开连接行为，使用 worker.process.kill()。

## console
- console.assert(false, '%s 工作', '无法'); // Assertion failed: 无法工作
- console.clear()
- console.count([label])
- console.countReset([label])
- console.dir(obj[, options])
```js
console.dir(obj, {
    showHidden: true,
    depth: null, // null 无限递归
    colors: true
})
```
- console.table(tabularData[, properties])
```js
console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
// ┌─────────┬─────┬─────┐
// │ (index) │  a  │  b  │
// ├─────────┼─────┼─────┤
// │    0    │  1  │ 'Y' │
// │    1    │ 'Z' │  2  │
// └─────────┴─────┴─────┘
```
- console.time([label])
- console.timeEnd([label])
```js
console.time('100-elements');
for (let i = 0; i < 100; i++) {}
console.timeEnd('100-elements');
// 打印 100-elements: 225.438ms
```
- console.timeLog([label][, ...data])
- console.profile('MyLabel');
- console.profileEnd('MyLabel');
- console.timeStamp([label])

## queueMicrotask(callback)
queueMicrotask() 方法会将微任务放入队列.微任务队列由 V8 进行管理，可以通过与 process.nextTick() 队列（由 Node.js 管理）类似的方式进行使用。

## Error 类
http://nodejs.cn/api/errors.html
- AssertionError
- RangeError
- ReferenceError 表明试图访问一个未定义的变量。
- SyntaxError
- SystemError
- TypeError

## modules

### require.main
当 Node.js 直接运行一个文件时， require.main 会被设为它的 module。 这意味着可以通过 require.main === module 来判断一个文件是否被直接运行：<br>

对于 foo.js 文件，如果通过 node foo.js 运行则为 true，但如果通过 require('./foo') 运行则为 false。<br>

因为 module 提供了一个 filename 属性（通常等同于 __filename），所以可以通过检查 require.main.filename 来获取当前应用程序的入口点。

### 缓存
模块在第一次加载后会被缓存。 这也意味着如果每次调用 require('foo') 都解析到同一文件，则返回相同的对象。<br>

模块是基于其解析的文件名进行缓存的。 由于调用模块的位置的不同，模块可能被解析成不同的文件名，这样就不能保证 require('foo') 总能返回完全相同的对象。<br>

此外，在不区分大小写的文件系统或操作系统中，被解析成不同的文件名可以指向同一文件，但缓存仍然会将它们视为不同的模块，并多次重新加载。 例如， require('./foo') 和 require('./FOO') 返回两个不同的对象，而不会管 ./foo 和 ./FOO 是否是相同的文件。

### 循环以来
当循环调用 require() 时，一个模块可能在未完成执行时被返回。

```js
// a.js:
console.log('a 开始');
exports.done = false;
const b = require('./b.js');
console.log('在 a 中，b.done = %j', b.done);
exports.done = true;
console.log('a 结束');
```

```js
// b.js
console.log('b 开始');
exports.done = false;
const a = require('./a.js');
console.log('在 b 中，a.done = %j', a.done);
exports.done = true;
console.log('b 结束');
```

```js
// main.js
console.log('main 开始');
const a = require('./a.js');
const b = require('./b.js');
console.log('在 main 中，a.done=%j，b.done=%j', a.done, b.done);
```

当 main.js 加载 a.js 时， a.js 又加载 b.js。 此时， b.js 会尝试去加载 a.js。 为了防止无限的循环，会返回一个 a.js 的 exports 对象的 未完成的副本 给 b.js 模块。 然后 b.js 完成加载，并将 exports 对象提供给 a.js 模块。

```shell
node main.js
main 开始
a 开始
b 开始
在 b 中，a.done = false
b 结束
在 a 中，b.done = true
a 结束
在 main 中，a.done=true，b.done=true
```