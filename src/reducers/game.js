// @flow
import isEmpty from "lodash/isEmpty";
import { MOVE_TILE, NEW_GAME, NEXT_STEP, PREV_STEP } from "../actions";
import getNullCell from "../helpers/getNullCell";
import getPosition from "../helpers/getMovePosition";
import { MATRIX } from "../consts/matrix";
import shuffle from "../helpers/shuffle";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";
import type { GameState } from "../types";

const initialStateFromCookie = read_cookie("puzzle15");

const initialState = !isEmpty(initialStateFromCookie)
  ? initialStateFromCookie
  : {
      matrix: shuffle(MATRIX.map((item: Array<number>) => [...item]), [3, 3]),
      isStarted: false,
      steps: [],
      size: [3, 3],
      index: 0,
      counter: 0
    };

const game = (state: GameState = initialState, action) => {
  switch (action.type) {
    case MOVE_TILE: {
      let newMatrix = [];
      const direction = action.payload;
      const { index, counter, matrix, steps, size } = state;
      const nullPosition = getNullCell(matrix);
      const [line, column] = getPosition(direction, nullPosition);

      if (line < 0 || column < 0 || line > size[0] || column > size[1]) {
        return state;
      }

      const { nullLine, nullCol } = nullPosition;
      const columnMod = Math.abs(column - nullCol);
      const lineMod = Math.abs(line - nullLine);

      if (
        (line === nullLine && columnMod === 1) ||
        (column === nullCol && lineMod === 1)
      ) {
        const temp = matrix[nullLine][nullCol];
        matrix[nullLine][nullCol] = matrix[line][column];
        matrix[line][column] = temp;
        newMatrix = matrix;
      }
      newMatrix = matrix;

      const newState = {
        ...state,
        matrix: [...newMatrix],
        counter: counter + 1,
        index: index + 1,
        steps: [...steps, { line, column }]
      };

      bake_cookie("puzzle15", newState);

      return newState;
    }

    case NEW_GAME: {
      const { matrix } = state;
      const newMatrix = action.payload;
      const { nullLine, nullCol } = getNullCell(matrix);
      const newState = {
        ...state,
        matrix: [...newMatrix],
        counter: 0,
        isStarted: true,
        index: 0,
        steps: [
          {
            line: nullLine,
            column: nullCol
          }
        ]
      };
      delete_cookie("puzzle15");
      return newState;
    }
    case NEXT_STEP: {
      let newMatrix = [];
      const { index, steps, matrix } = state;
      const lastIndex = steps.length > 0 ? steps.length - 1 : 0;
      const nextIndex = index < lastIndex ? index + 1 : lastIndex;
      const { line, column } = steps[nextIndex];

      const { nullLine, nullCol } = getNullCell(matrix);
      const columnMod = Math.abs(column - nullCol);
      const lineMod = Math.abs(line - nullLine);

      if (
        (line === nullLine && columnMod === 1) ||
        (column === nullCol && lineMod === 1)
      ) {
        const temp = matrix[nullLine][nullCol];
        matrix[nullLine][nullCol] = matrix[line][column];
        matrix[line][column] = temp;
        newMatrix = matrix;
      }
      newMatrix = matrix;

      const newState = {
        ...state,
        matrix: [...newMatrix],
        index: index < steps.length - 1 ? index + 1 : steps.length - 1
      };

      bake_cookie("puzzle15", newState);
      return newState;
    }
    case PREV_STEP: {
      let newMatrix = [];
      const { index, steps, matrix } = state;
      const prevIndex = index > 0 ? index - 1 : 0;
      const { line, column } = steps[prevIndex];
      const { nullLine, nullCol } = getNullCell(matrix);
      const columnMod = Math.abs(column - nullCol);
      const lineMod = Math.abs(line - nullLine);

      if (
        (line === nullLine && columnMod === 1) ||
        (column === nullCol && lineMod === 1)
      ) {
        const temp = matrix[nullLine][nullCol];
        matrix[nullLine][nullCol] = matrix[line][column];
        matrix[line][column] = temp;
        newMatrix = matrix;
      }
      newMatrix = matrix;

      const newState = {
        ...state,
        matrix: [...newMatrix],
        index: prevIndex
      };

      bake_cookie("puzzle15", newState);

      return newState;
    }
    default:
      return state;
  }
};

export default game;
