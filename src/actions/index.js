// @flow
import type { GameMatrix } from '../types';
import { MOVE_TILE, NEW_GAME, NEXT_STEP, PREV_STEP } from '../types';

export const newGame = (numbers: GameMatrix) => ({
  type: NEW_GAME,
  payload: numbers,
});

export const moveTile = (direction: string) => ({
  type: MOVE_TILE,
  payload: direction,
});

export const nextStep = () => ({
  type: NEXT_STEP,
});

export const prevStep = () => ({
  type: PREV_STEP,
});
