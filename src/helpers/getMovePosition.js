//@flow
import randomInteger from "./randomInteger";

const getMovePosition = (nullLine: number, nullCol: number, size: Array<number>) => {
  let left = true;
  let right = true;
  let top = true;
  let bottom = true;
  const columnMod = Math.abs(nullCol - (size[0]));
  const lineMod = Math.abs(nullLine - (size[1]));

  if(nullLine === 0) {
    top = false;
  }
  if(nullCol === 0) {
    left = false;
  }
  if(lineMod === 0) {
    bottom = false;
  }
  if(columnMod === 0) {
    right = false;
  }
  if(nullLine === 0 && nullCol === 0) {
    top = false;
    left = false;
  }
  if(columnMod === 0 && lineMod === 0) {
    bottom = false;
    right = false
  }
  if(nullLine === 0 && columnMod === 0) {
    top = false;
    right = false;
  }
  if(nullCol === 0 && lineMod === 0) {
    bottom = false;
    left = false;
  }

  //filter directions, which are not true
  const directionKeys = ['right', 'top', 'bottom', 'left'];
  const directions = [{top}, {right}, {bottom}, {left}];
  const newDirections = directions.map(item=> {
    let newDirection = null;
    directionKeys.forEach(key => {
      if(item[key]) {
        newDirection = key;
      };
    });
    return newDirection;
  }).filter(item => item !== null);

  const randDirectionIndex = randomInteger(0, newDirections.length - 1);
  const randDirection = newDirections[randDirectionIndex];

  //getPosition
  if(randDirection === 'top') return [nullLine - 1, nullCol];
  if(randDirection === 'right') return [nullLine, nullCol + 1];
  if(randDirection === 'left') return [nullLine, nullCol- 1];
  if(randDirection === 'bottom') return [nullLine + 1, nullCol];
};

export default getMovePosition;