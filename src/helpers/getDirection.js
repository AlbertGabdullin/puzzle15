// @flow
const getDirection = (movable: Object, nullable: Object) => {
  const { lineM, columnM } = movable;
  const { lineN, columnN } = nullable;
  if (lineM === lineN + 1 && columnM === columnN) {
    return 'top';
  }
  if (lineM === lineN - 1 && columnM === columnN) {
    return 'bottom';
  }
  if (lineM === lineN && columnM === columnN - 1) {
    return 'right';
  }
  if (lineM === lineN && columnM === columnN + 1) {
    return 'left';
  }
  return '';
};

export default getDirection;
