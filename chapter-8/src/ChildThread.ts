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

declare function determinant(matrix: Matrix): number
declare function dotProduct(matrixA:Matrix, matrixB: Matrix ): Matrix
declare function invert(matrix: Matrix):Matrix


process.on('message', data => process.send!(handle(data)))
