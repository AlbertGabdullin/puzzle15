// @flow
import type { GameMatrix, NullCell } from '../types';

const getNullCell = (numbers: GameMatrix): NullCell => {
  let obj = {};
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = 0; j < numbers[i].length; j += 1) {
      if (numbers[i][j] === 0) {
        obj = {
          nullLine: i,
          nullColumn: j,
        };
      }
    }
  }
  return obj;
};

export default getNullCell;
