"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const worker_threads_1 = require("worker_threads");
// メインスレッドから送られてくるイベントをリッスンする
let commandEmitter = new events_1.EventEmitter();
// メインスレッドに対してイベントを発行する
let eventEmitter = new events_1.EventEmitter();
// 型安全なイベントエミッターを使ってメインスレッドからの入力コマンドをラップする
onmessage = (command) => {
    commandEmitter.emit(command.data.type, ...command.data.data);
};
// Workerによって発行されたイベントをリッスンし、それらをメインスレッドに送信する
eventEmitter.on('receivedMessage', data => {
    postMessage({ type: 'receivedMessage', data });
});
eventEmitter.on('createdThread', data => {
    postMessage({ type: 'createdThread', data });
});
eventEmitter.on('addedUserToThread', data => {
    postMessage({ type: 'addedUserToThread', data });
});
eventEmitter.on('removedUserFromThread', data => {
    postMessage({ type: 'removedUserFromThread', data });
});
// メインスレッドからのsendMessageToThreadコマンドに応答する
commandEmitter.on('sendMessageToThread', (threadID, message) => {
    console.log(`OK, I will send amessage to threadID ${worker_threads_1.threadId}`);
});
// メインスレッドにイベントを送り返す
eventEmitter.emit('createdThread', 123, [456, 789]);
//# sourceMappingURL=WorkerScript.js.map