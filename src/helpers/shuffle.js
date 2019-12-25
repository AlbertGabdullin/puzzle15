// @flow
import randomInteger from './randomInteger';
import getNullCell from './getNullCell';

const getMovePosition = (
  nullLine: number,
  nullColumn: number,
  size: [number, number],
) => {
  let left = true;
  let right = true;
  let top = true;
  let bottom = true;
  const columnMod = Math.abs(nullColumn - size[0]);
  const lineMod = Math.abs(nullLine - size[1]);

  if (nullLine === 0) {
    top = false;
  }
  if (nullColumn === 0) {
    left = false;
  }
  if (lineMod === 0) {
    bottom = false;
  }
  if (columnMod === 0) {
    right = false;
  }
  if (nullLine === 0 && nullColumn === 0) {
    top = false;
    left = false;
  }
  if (columnMod === 0 && lineMod === 0) {
    bottom = false;
    right = false;
  }
  if (nullLine === 0 && columnMod === 0) {
    top = false;
    right = false;
  }
  if (nullColumn === 0 && lineMod === 0) {
    bottom = false;
    left = false;
  }

  // filter directions, which are not true
  const directionKeys = ['right', 'top', 'bottom', 'left'];
  const directions = [{ top }, { right }, { bottom }, { left }];
  const newDirections = directions
    .map(item => {
      let newDirection = null;
      directionKeys.forEach(key => {
        // $FlowFixMe
        if (item[key]) newDirection = key;
      });
      return newDirection;
    })
    .filter(item => item !== null);

  const randDirectionIndex = randomInteger(0, newDirections.length - 1);
  const randDirection = newDirections[randDirectionIndex];

  // getPosition
  if (randDirection === 'top') return [nullLine - 1, nullColumn];
  if (randDirection === 'right') return [nullLine, nullColumn + 1];
  if (randDirection === 'left') return [nullLine, nullColumn - 1];
  if (randDirection === 'bottom') return [nullLine + 1, nullColumn];

  return [];
};

const shuffle = (numbers: Array<Array<number>>, size: [number, number]) => {
  const updatedNumbers = [...numbers];
  const shuffleCount = randomInteger(150, 200);
  for (let i = 0; i < shuffleCount; i += 1) {
    const { nullLine, nullColumn } = getNullCell(numbers);
    const [newLine, newCol] = getMovePosition(nullLine, nullColumn, size);
    const temp = numbers[nullLine][nullColumn];
    updatedNumbers[nullLine][nullColumn] = numbers[newLine][newCol];
    updatedNumbers[newLine][newCol] = temp;
  }

  return updatedNumbers;
};

export default shuffle;
