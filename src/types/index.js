// @flow
export type GameMatrix = Array<Array<number>>;
export const NEW_GAME: 'NEW_GAME' = 'NEW_GAME';
export const MOVE_TILE: 'MOVE_TILE' = 'MOVE_TILE';
export const NEXT_STEP: 'NEXT_STEP' = 'NEXT_STEP';
export const PREV_STEP: 'PREV_STEP' = 'PREV_STEP';

export type GameState = {
  matrix: GameMatrix,
  counter: number,
  index: number,
  steps: Array<{ line: number, column: number }>,
  size: [number, number],
};

export type NullCell = {
  nullLine: number,
  nullColumn: number,
};

export type NewGameAction = {
  type: typeof NEW_GAME,
  payload: GameMatrix,
};

export type MoveTileAction = {
  type: typeof MOVE_TILE,
  payload: string,
};

export type NextStepAction = {
  type: typeof NEXT_STEP,
};

export type PrevStepAction = {
  type: typeof PREV_STEP,
};

export type Actions =
  | NewGameAction
  | MoveTileAction
  | NextStepAction
  | PrevStepAction;
