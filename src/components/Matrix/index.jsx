// @flow
import React, { Fragment } from "react";
import memoize from "memoize-one";
import { Motion, spring } from "react-motion";
import Tile from "../Tile";
import type { GameMatrix } from "../../types";

const getStyles = memoize(
  (boardSize: number, width: number, height: number, index: number, springConfig: Object) => ({
    tX: spring(boardSize * (width / boardSize) * (index % 4), springConfig),
    tY: spring(boardSize * (height / boardSize) * Math.floor(index / 4), springConfig)
  })
);

type Props = {
  matrix: GameMatrix,
  width: number,
  height: number,
  boardSize: number,
  move: (line: number, column: number) => GameMatrix
};

const Matrix = ({ matrix, width, height, boardSize, move }: Props) => {
  const newArray = [];
  matrix.forEach((item, line) => {
    item.forEach((child, column) => {
      const el = {
        number: child,
        line,
        column
      };
      newArray.push(el);
    });
  });

  const springConfig = {stiffness: 120, damping: 15};
  // $FlowFixMe
  const tiles = newArray.map((item, index) => {
    const style = getStyles(boardSize, width, height, index, springConfig);

    return (
      <Motion key={item.number} style={style}>
        {({ tX, tY }) => (
          <Fragment>
            {item.number !== 0 && (
              <Tile
                item={item}
                index={index}
                move={move}
                key={index}
                tX={tX}
                tY={tY}
              />
            )}
          </Fragment>
        )}
      </Motion>
    );
  });

  return tiles;
};

export default Matrix;
