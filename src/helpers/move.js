import getNullCell from "./getNullCell";

const move = (line, column, numbers) => {
  const { nullLine, nullCol } = getNullCell(numbers);
  const columnMod = Math.abs(column - nullCol);
  const lineMod = Math.abs(line - nullLine);
  if((line === nullLine && columnMod === 1) || (column === nullCol && lineMod === 1)){
    const temp = numbers[nullLine][nullCol];
    numbers[nullLine][nullCol] = numbers[line][column];
    numbers[line][column] = temp;
    return numbers;
  }
  return numbers;
};

export default move;