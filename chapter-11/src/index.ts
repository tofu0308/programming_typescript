type ToArray<T> = T extends unknown[] ? T: T[]
export declare let process: {
  env: {
    NODE_ENV: 'development'|'production'
  }
}




process = {
  env: {
    NODE_ENV: 'production'
  }
}

function toArray<T>(a: T): ToArray<T> {
  return a as ToArray<T>
}

