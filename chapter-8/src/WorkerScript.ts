import {EventEmitter} from 'events'
import { threadId } from 'worker_threads'

type Matrix = number[][]
type MatrixProctol = {
  determinant: {
    in: [Matrix]
    out: number
  }
  'dot-product': {
    in: [Matrix, Matrix]
    out: Matrix
  }
  invert: {
    in: [Matrix]
    out: Matrix
  }
}
type Protocol = {
  [command: string]: {
    in: unknown[]
    out: unknown
  }
}

type Data<
  P extends Protocol,
  C extends keyof P = keyof P
> = C extends C ? { command: C; args: P[C]['in'] } : never

function handle(
  data: Data<MatrixProctol>
): MatrixProctol[typeof data.command]['out'] {
  switch (data.command) {
    case 'determinant': return determinant(...data.args)
    case 'dot-product': return dotProduct(...data.args)
    case 'invert': return invert(...data.args)
  }
}

onmessage = ({data}) => postMessage(handle(data))

declare function determinant(matrix: Matrix): number
declare function dotProduct(matrixA:Matrix, matrixB: Matrix ): Matrix
declare function invert(matrix: Matrix):Matrix



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