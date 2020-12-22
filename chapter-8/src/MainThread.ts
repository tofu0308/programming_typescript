import {EventEmitter} from 'events'
import { threadId } from 'worker_threads'

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

type Commands = {
  sendMessageToThread: [ThreadID, Message]
  createThread: [Participants]
  addUserToThread: [ThreadID, UserID]
  removeUserFromThread: [ThreadID, UserID]
}

type Events = {
  receivedMessage: [ThreadID, UserID, Message]
  createdThread: [ThreadID, Participants]
  addedUserToThread: [ThreadID, UserID]
  removedUserFromThread: [ThreadID, UserID]
}

let commandEmitter: SafeEmitter<Commands> = new EventEmitter()
let eventEmitter: SafeEmitter<Events> = new EventEmitter()

let worker = new Worker('WorkerScript.js')

// Workerから送られてくるイベントをリッスンし、型安全なイベントエミッターを使ってそれらを再発行する
worker.onmessage = (event) => {
  eventEmitter.emit(
    event.data.type,
    ...event.data.data  
  )
}

// このスレッドによって発行されるコマンドをリッスンし、それらをWorkerに送信する　
commandEmitter.on('sendMessageToThread', data => {
  worker.postMessage({type: 'sendMessageToThread', data})
})
commandEmitter.on('createThread', data => {
  worker.postMessage({type: 'createThread', data})
})
commandEmitter.on('addUserToThread', data => {
  worker.postMessage({type: 'addUserToThread', data})
})
commandEmitter.on('removeUserFromThread', data => {
  worker.postMessage({type: 'removeUserFromThread', data})
})

// 新しいスレッドが作成されたことをWorkerが知らせてきたときに何かを行う
eventEmitter.on('createdThread', (threadID, participants)=> {
  console.log('Create a new chat thread!', threadID, participants)
})

// コマンドをWorkerに送信　
commandEmitter.emit('createThread', [123, 456])

/////////////////////////////////
// 型安全なプロトコル

type Matrix = number[][]
type MatrixProctol = {
  determinant: {
    in: [Matrix]
    out: number
  }
  'dot- product': {
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

function createProtocol<P extends Protocol>(script: string) {
  return<K extends keyof P>(command: K) => {
    (...args: P[K]['in']) => {
      new Promise<P[K]['out']>((resolve, reject) => {
        let worker = new Worker(script)
        worker.onerror = reject
        worker.onmessage = (event) => {resolve(event.data)}
        worker.postMessage({command, args})
      })
    }
  }
}

let runWithMatrixProtocol = createProtocol<MatrixProctol> ('MatrixWorkerScript.js')
let parallelDeterminant = runWithMatrixProtocol('determinant')

/*
parallelDeterminant([[1, 2], [3, 4]])
  .then(determinant => console.log(determinant))
*/