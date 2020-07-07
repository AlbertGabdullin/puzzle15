// @flow
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import numberBackground from '../../static/numberBackground.svg';

const TileWrapper = styled(motion.div)`
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

  @media (max-width: 400px) {
    font-size: 30px;
    line-height: 30px;
  }
`;

type Props = {
  move: (line: number, column: number) => void,
  x: number,
  y: number,
  line: number,
  column: number,
  number: number,
};

const Tile = memo<Props>(({ x, y, number, line, column, move }: Props) => {
  if (number === 0) {
    return null;
  }
  return (
    <TileWrapper
      animate={{
        x,
        y,
      }}
      transition={{ type: 'tween' }}
      onClick={() => move(line, column)}
    >
      <Square key={number}>{number}</Square>
    </TileWrapper>
  );
});

export default Tile;
