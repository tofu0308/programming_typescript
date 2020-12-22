"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
let commandEmitter = new events_1.EventEmitter();
let eventEmitter = new events_1.EventEmitter();
let worker = new Worker('WorkerScript.js');
// Workerから送られてくるイベントをリッスンし、型安全なイベントエミッターを使ってそれらを再発行する
worker.onmessage = (event) => {
    eventEmitter.emit(event.data.type, ...event.data.data);
};
// このスレッドによって発行されるコマンドをリッスンし、それらをWorkerに送信する　
commandEmitter.on('sendMessageToThread', data => {
    worker.postMessage({ type: 'sendMessageToThread', data });
});
commandEmitter.on('createThread', data => {
    worker.postMessage({ type: 'createThread', data });
});
commandEmitter.on('addUserToThread', data => {
    worker.postMessage({ type: 'addUserToThread', data });
});
commandEmitter.on('removeUserFromThread', data => {
    worker.postMessage({ type: 'removeUserFromThread', data });
});
// 新しいスレッドが作成されたことをWorkerが知らせてきたときに何かを行う
eventEmitter.on('createdThread', (threadID, participants) => {
    console.log('Create a new chat thread!', threadID, participants);
});
// コマンドをWorkerに送信　
commandEmitter.emit('createThread', [123, 456]);
function createProtocol(script) {
    return (command) => {
        (...args) => {
            new Promise((resolve, reject) => {
                let worker = new Worker(script);
                worker.onerror = reject;
                worker.onmessage = (event) => { resolve(event.data); };
                worker.postMessage({ command, args });
            });
        };
    };
}
let runWithMatrixProtocol = createProtocol('MatrixWorkerScript.js');
let parallelDeterminant = runWithMatrixProtocol('determinant');
/*
parallelDeterminant([[1, 2], [3, 4]])
  .then(determinant => console.log(determinant))
*/ 
//# sourceMappingURL=MainThread.js.map