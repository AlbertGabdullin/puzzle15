import type {
  GameMatrix,
  GameState
} from "../types";

export const NEW_GAME = 'NEW_GAME';
export const MOVE_TILE = 'MOVE_TILE';
export const NEXT_STEP = 'NEXT_STEP';
export const PREV_STEP = 'PREV_STEP';

export const newGame = (numbers: GameMatrix):GameState => ({
  type: NEW_GAME,
  payload: numbers,
});

export const moveTile = (direction):GameMatrix => ({
  type: MOVE_TILE,
  payload: direction
});

export const nextStep = ():GameState => ({
  type: NEXT_STEP,
});

export const prevStep = ():GameState => ({
  type: PREV_STEP,
});
