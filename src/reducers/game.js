import {
  MOVE_TILE,
  NEW_GAME,
  NEXT_STEP,
  PREV_STEP
} from "../actions";
import move from "../helpers/move";
import shuffle from "../helpers/shuffle";
import getNullCell from "../helpers/getNullCell";

const initialState = {
  matrix: [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,0],
  ],
  steps: [],
  size: [3,3],
  index: 0,
};

const game = (state = initialState, action) => {
  switch(action.type) {
    case MOVE_TILE: {
      const { line, column } = action.payload;
      const { index, counter, matrix, steps, } = state;
      const newMatrix = move(line, column, matrix);

      return {
        ...state,
        matrix: newMatrix,
        counter: counter + 1,
        index: index + 1,
        steps: [
          ...steps,
          { line, column },
        ],
      };
    }

    case NEW_GAME: {
      const { matrix, size } = state;
      const newMatrix = shuffle(matrix, size);
      const { nullLine, nullCol } = getNullCell(matrix);
      return {
        ...state,
        matrix: newMatrix,
        counter: 0,
        steps: [
          {
            line: nullLine,
            column: nullCol,
          },
         ]
      }
    }
    case NEXT_STEP: {
      const { index, steps, matrix } = state;
      const lastIndex = steps.length - 1;
      const nextIndex = index < lastIndex ? index + 1 : lastIndex;
      const { line, column } = steps[nextIndex];
      const newMatrix = move(line, column, matrix);

      return {
        ...state,
        matrix: [...newMatrix],
        index: index + 1,
      };
    }
    case PREV_STEP: {
      const { index, steps, matrix } = state;
      const prevIndex = index > 0 ? index - 1 : 0;
      const { line, column } = steps[prevIndex];
      const newMatrix = [...move(line, column, matrix)];

      return {
        ...state,
        matrix: [...newMatrix],
        index: index - 1,
      };
    }
    default:
      return state;
  }
};

export default game;