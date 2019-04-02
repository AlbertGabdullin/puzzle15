const getNullCell = numbers => {
  let obj = {};
  for(let i = 0; i < numbers.length; i++) {
    for(let j = 0; j < numbers[i].length; j++) {
      if(numbers[i][j] === 0) {
        obj =  {
          nullLine: i,
          nullCol: j,
        }
      }
    }
  }
  return obj;
};

export default getNullCell;