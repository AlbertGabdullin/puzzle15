// @flow
import React, { useMemo, memo } from 'react';
import memoize from 'memoize-one';
import Tile from '../Tile';
import type { GameMatrix } from '../../types';

const getStyles = memoize(
  (boardSize: number, width: number, height: number, index: number) => ({
    x: boardSize * (width / boardSize) * (index % 4),
    y: boardSize * (height / boardSize) * Math.floor(index / 4),
  }),
);

type Props = {
  matrix: GameMatrix,
  width: number,
  height: number,
  boardSize: number,
  move: (line: number, column: number) => void,
};

const Matrix = memo<Props>(
  ({ matrix, width, height, boardSize, move }: Props) => {
    const matrixArr = useMemo(() => {
      const newArray = [];
      matrix.forEach((item, line) => {
        item.forEach((child, column) => {
          const el = {
            number: child,
            line,
            column,
          };
          newArray.push(el);
        });
      });

      return newArray;
    }, [matrix]);

    // $FlowFixMe
    const tiles = matrixArr.map((item, index) => {
      const style = getStyles(boardSize, width, height, index);

      return (
        <Tile
          x={style.x}
          y={style.y}
          number={item.number}
          line={item.line}
          column={item.column}
          move={move}
          key={item.number}
        />
      );
    });

    return tiles;
  },
);

export default Matrix;
