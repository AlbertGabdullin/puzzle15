// @flow
const getPosition = (direction: string, nullPosition: Object) => {
  const { nullLine, nullColumn } = nullPosition;

  switch (direction) {
    case 'top':
      return [nullLine + 1, nullColumn];
    case 'bottom':
      return [nullLine - 1, nullColumn];
    case 'left':
      return [nullLine, nullColumn + 1];
    case 'right':
      return [nullLine, nullColumn - 1];
    default:
      return [nullLine, nullColumn];
  }
};

export default getPosition;
