//@flow
export type GameMatrix = Array<Array<number>>;

export type GameState = {
  matrix: GameMatrix,
  counter: number,
  index: number,
  steps: Array<{line: number, column: number}>,
}