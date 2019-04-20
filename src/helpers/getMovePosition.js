const getPosition = (direction, nullPosition) => {
  const { nullLine, nullCol } = nullPosition;

  switch(direction) {
    case 'top':
      return [nullLine + 1, nullCol];
    case 'bottom':
      return [nullLine - 1, nullCol];
    case 'left':
      return [nullLine, nullCol + 1];
    case 'right':
      return [nullLine, nullCol - 1];
    default:
      return [nullLine, nullCol];
  }
};

export default getPosition;