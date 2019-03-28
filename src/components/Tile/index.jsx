// @flow
import React from 'react';
import styled from "styled-components";
import { Motion, spring } from "react-motion";

const TileWrapper = styled.div`
  position: absolute;
  z-index: 1;
  background: #fff;
  border-radius: 10px;
  padding: 5px;
  background: transparent;
  
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
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 165, 1);
  border: 1px solid #50c0ce;
  
  ${props => props.noBorder && `
    border: none;
    z-index: -1;
  `}
`;

type Props = {
  move: (line: number, column: number) => void,
}

const Tile = ({
  index,
  item,
  noBorder,
  move,
  width,
  height,
  padding,
  tX,
  tY,
}: Props) => {

  return (
        <TileWrapper style={{
          width: width,
          height: height,
          transform: `translate(${tX}px,${tY}px) scale(1.0)`,
          transition: `transform 100ms ease`,
        }}>
          <Square key={item.number} onClick={() => !noBorder && move(item.line, item.column)} >
            {!noBorder && item.number}
          </Square>
        </TileWrapper>
  );
}



export default Tile;