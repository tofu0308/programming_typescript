"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handle(data) {
    switch (data.command) {
        case 'determinant': return determinant(...data.args);
        case 'dot-product': return dotProduct(...data.args);
        case 'invert': return invert(...data.args);
    }
}
onmessage = ({ data }) => postMessage(handle(data));
/*
interface SafeEmitter<
  Events extends Record<PropertyKey, unknown[]>
> {
  emit<K extends keyof Events>(
    channel: K,
    ...data: Events[K]
  ): boolean
  on<K extends keyof Events>(
    channnel: K,
    listener: (...data: Events[K]) => void
  ): this
  on(
    channnel: never,
    listener: (...data: unknown[]) => void
  ): this

}

type Message = string
type ThreadID = number
type UserID = number
type Participants = UserID[]



type Commnads = {
  sendMessageToThread: [ThreadID, Message]
  createThread: [Participants]
  addUserToThread:[ThreadID, UserID]
  removeUserFromThread: [ThreadID, UserID]
}

type Events = {
  receivedMessage: [ThreadID, UserID, Message]
  createdThread: [ThreadID, Participants]
  addedUserToThread: [ThreadID, UserID]
  removedUserFromThread: [ThreadID, UserID]
}

// メインスレッドから送られてくるイベントをリッスンする
let commandEmitter: SafeEmitter<Commnads> = new EventEmitter()

// メインスレッドに対してイベントを発行する
let eventEmitter: SafeEmitter<Events> = new EventEmitter()


// 型安全なイベントエミッターを使ってメインスレッドからの入力コマンドをラップする
onmessage = (command) => {
  commandEmitter.emit(
    command.data.type,
    ...command.data.data
  )
}

// Workerによって発行されたイベントをリッスンし、それらをメインスレッドに送信する
eventEmitter.on('receivedMessage', data => {
  postMessage({type: 'receivedMessage', data})
})
eventEmitter.on('createdThread', data => {
  postMessage({type: 'createdThread', data})
})
eventEmitter.on('addedUserToThread', data => {
  postMessage({type: 'addedUserToThread', data})
})
eventEmitter.on('removedUserFromThread', data => {
  postMessage({type: 'removedUserFromThread', data})
})

// メインスレッドからのsendMessageToThreadコマンドに応答する
commandEmitter.on('sendMessageToThread', (threadID, message)=> {
  console.log(`OK, I will send amessage to threadID ${threadId}`)
})

// メインスレッドにイベントを送り返す
eventEmitter.emit('createdThread', 123, [456, 789])

*/ 
//# sourceMappingURL=WorkerScript.js.map