// @flow
import React, { Fragment } from "react";
import memoize from "memoize-one";
import { Motion, spring } from "react-motion";
import Tile from "../Tile";

const getStyles = memoize(
  (boardSize: number, width: number, height: number, index: number) => ({
    tX: spring(boardSize * (width / boardSize) * (index % 4)),
    tY: spring(boardSize * (height / boardSize) * Math.floor(index / 4))
  })
);

const Matrix = ({ matrix, width, height, boardSize, move }) => {

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

  const tiles = newArray.map((item, index) => {
    const style = getStyles(boardSize, width, height, index);

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
