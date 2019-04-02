import randomInteger from "./randomInteger";
import getNullCell from "./getNullCell";
import getMovePosition from "./getMovePosition";

const shuffle = (numbers, size) => {
  const shuffleCount = randomInteger(150, 200);
  for(let i = 0; i<shuffleCount; i++) {
    const { nullLine, nullCol } = getNullCell(numbers);
    const [ newLine, newCol ] = getMovePosition(nullLine, nullCol, size);
    const temp = numbers[nullLine][nullCol];
    numbers[nullLine][nullCol] = numbers[newLine][newCol];
    numbers[newLine][newCol] = temp;
  }

  return numbers;
};

export default shuffle;