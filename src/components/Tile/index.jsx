// @flow
import React from "react";
import styled from "styled-components";
import numberBackground from "../../static/numberBackground.svg";
import type { GameMatrix } from "../../types";

const TileWrapper = styled.div`
  position: absolute;
  z-index: 1;
  background: #fff;
  border-radius: 10px;
  padding: 5px;
  background: transparent;
  cursor: pointer;
  width: calc((100%) / 4);
  height: calc((100%) / 4);
`;

const Square = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Coming Soon", sans-serif;
  font-size: 35px;
  line-height: 35px;
  z-index: 1;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  background-image: url(${numberBackground});
  background-size: contain;
  background-repeat: no-repeat;

  @media(max-width: 400px) {
    font-size: 30px;
    line-height: 30px;
  }
`;

type Props = {
  move: (line: number, column: number) => GameMatrix,
  tX: number,
  tY: number,
  item: {
    line: number,
    column: number,
    number: number
  }
};

const Tile = ({ item, move, tX, tY }: Props) => {
  return (
    <TileWrapper
      onClick={() => move(item.line, item.column)}
      style={{
        transform: `translate(${tX}px,${tY}px) scale(1.0)`,
      }}
    >
      <Square key={item.number}>{item.number}</Square>
    </TileWrapper>
  );
};

export default Tile;
