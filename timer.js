const ProgressBar = require('progress')
var https = require('https');
const os = require('os')

console.log(os.networkInterfaces());
console.log(os.userInfo());

// v1
// const bar = new ProgressBar(':bar', { total: 10 })
// const timer = setInterval(() => {
//     bar.tick()
//     if (bar.complete) {
//         clearInterval(timer)
//     }
// }, 100)

// v2
// var bar = new ProgressBar(':bar :current/:total', { total: 10 });
// var timer = setInterval(function () {
//     bar.tick();
//     if (bar.complete) {
//         clearInterval(timer);
//     } else if (bar.curr === 5) {
//         bar.interrupt('this message appears above the progress bar\ncurrent progress is ' + bar.curr + '/' + bar.total);
//     }
// }, 1000);

// v3

var req = https.request({
    host: 'download.github.com',
    port: 443,
    path: '/visionmedia-node-jscoverage-0d4608a.zip'
});

req.on('response', function (res) {
    var len = parseInt(res.headers['content-length'], 10);

    console.log();
    var bar = new ProgressBar('  downloading [:bar] :rate/bps :percent :etas', {
        complete: '=',
        incomplete: ' ',
        width: 20,
        total: len
    });

    res.on('data', function (chunk) {
        bar.tick(chunk.length);
    });

    res.on('end', function () {
        console.log('\n');
    });
});

req.end();
