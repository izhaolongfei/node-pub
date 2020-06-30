const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {

    process.on('message', (msg) => {
        console.log('msg', msg);
    });

    // 跟踪 http 请求。
    let numReqs = 0;
    setInterval(() => {
        console.log(`请求的数量 = ${numReqs}`);
    }, 1000);

    // 对请求计数。
    function messageHandler(msg) {
        console.log('msg', msg)
        if (msg.cmd && msg.cmd === 'notifyRequest') {
            numReqs += 1;
        }
    }

    // 启动 worker 并监听包含 notifyRequest 的消息。
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    for (const id in cluster.workers) {
        cluster.workers[id].on('message', messageHandler);
    }

} else {

    // 工作进程有一个 http 服务器。
    http.Server((req, res) => {
        res.writeHead(200);
        res.end('你好世界\n');

        // 通知主进程接收到了请求。
        process.send({ cmd: 'notifyRequest' });
    }).listen(8000);

    setTimeout(_ => {
        http.get({
            hostname: 'localhost',
            port: 8000,
            path: '/',
            agent: false  // 仅为此一个请求创建一个新代理。
        }, (res) => {
            // 用响应做些事情。
        });
    }, 2000);
}

// v2
// if (cluster.isMaster) {
//     const worker = cluster.fork();
//     let timeout;

//     worker.on('listening', (address) => {
//         console.log('listening...');

//         worker.send('shutdown');
        
//         worker.disconnect();
        
//         timeout = setTimeout(() => {
//             worker.kill();
//         }, 5000);
//     });

//     worker.on('disconnect', () => {
//         console.log('disconnect');

//         clearTimeout(timeout);
//     });
// } else if (cluster.isWorker) {
//     const net = require('net');
//     const server = net.createServer((socket) => {
//         // 连接永远不会结束。
//     });

//     server.listen(8000);

//     process.on('message', (msg) => {
//         if (msg === 'shutdown') {
//             // 将所有与服务器的连接优雅地关闭。
//             console.log(msg);
//             server.close();
//         }
//     });

//     process.on('close', (msg) => {
//         console.log('close...', msg);
//     });
// }

// v3
// if (cluster.isMaster) {
//     console.log(`主进程 ${process.pid} 正在运行`);

//     // 衍生工作进程。
//     for (let i = 0; i < numCPUs; i++) {
//         cluster.fork();
//     }

//     cluster.on('fork', (worker) => {
//         console.log('工作进程已关闭0:', worker.isDead());
//     });

//     cluster.on('exit', (worker, code, signal) => {
//         console.log('工作进程已关闭1:', worker.isDead());
//     });
// } else {
//     // 工作进程可以共享任何 TCP 连接。在这种情况下，它是一个 HTTP 服务器。
//     http.createServer((req, res) => {
//         res.writeHead(200);
//         res.end(`当前进程\n ${process.pid}`);
//         process.kill(process.pid);
//     }).listen(8000);

//     setTimeout(_ => {
//         http.get({
//             hostname: 'localhost',
//             port: 8000,
//             path: '/',
//             agent: false  // 仅为此一个请求创建一个新代理。
//         }, (res) => {
//             // 用响应做些事情。
//         });
//     }, 2000);
// }