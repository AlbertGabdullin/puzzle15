// @flow
import React from 'react';
import styled from "styled-components";
import numberBackground from '../../static/numberBackground.svg';
import type {
  GameMatrix
} from "../../types";

const TileWrapper = styled.div`
  position: absolute;
  z-index: 1;
  background: #fff;
  border-radius: 10px;
  padding: 5px;
  background: transparent;
  cursor: pointer;
  
  ${props => props.noBorder && `
    z-index: -2;
  `}
`;

const Square = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Coming Soon', sans-serif;
  font-size: 35px;
  line-height: 35px;
  z-index: 1;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  background-image: url(${numberBackground});
  background-size: contain;
  background-repeat: no-repeat;
  
  ${props => props.noBorder && `
    border: none;
    z-index: -1;
  `}
`;

type Props = {
  move: (line: number, column: number) => GameMatrix,
  tX: number,
  tY: number,
  height: number,
  width: number,
  noBorder: boolean,
  item: {
    line: number,
    column: number,
    number: number,
  }
}

const Tile = ({
  item,
  noBorder,
  move,
  width,
  height,
  tX,
  tY,
}: Props) => {
  return (
    <TileWrapper
      onClick={() => !noBorder && move(item.line, item.column)}
      style={{
      width: width,
      height: height,
      transform: `translate(${tX}px,${tY}px) scale(1.0)`,
      transition: `transform 100ms ease`,
    }}>
      <Square key={item.number}  >
        {!noBorder && item.number}
      </Square>
    </TileWrapper>
  );
}



export default Tile;