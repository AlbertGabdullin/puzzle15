// @flow
import getNullCell from './getNullCell';
import type { GameMatrix } from '../types';

const move = (line: number, column: number, numbers: GameMatrix) => {
  const updatedNumbers = [...numbers];
  const { nullLine, nullColumn } = getNullCell(numbers);
  const columnMod = Math.abs(column - nullColumn);
  const lineMod = Math.abs(line - nullLine);
  if (
    (line === nullLine && columnMod === 1) ||
    (column === nullColumn && lineMod === 1)
  ) {
    const temp = numbers[nullLine][nullColumn];
    updatedNumbers[nullLine][nullColumn] = numbers[line][column];
    updatedNumbers[line][column] = temp;
    return updatedNumbers;
  }
  return updatedNumbers;
};

export default move;
