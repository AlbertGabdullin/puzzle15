// @flow
import React, {
  Fragment,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import Tools from '../../components/Tools';
import type { GameMatrix } from '../../types';
import getNullCell from '../../helpers/getNullCell';
import getDirection from '../../helpers/getDirection';
import Matrix from '../../components/Matrix';
import WinnerDialog from '../WinnerDialog';
import {
  BoardContainer,
  FullContainer,
  MatrixWrapper,
} from '../../components/Board';
import { NewGame } from '../../components/NewGame';

type Props = {
  startNewGame: () => void,
  next: () => void,
  prev: () => void,
  move: string => GameMatrix,
  isStarted: boolean,
  direction: string,
  numbers: GameMatrix,
};

const Board = ({
  numbers,
  move,
  prev,
  next,
  startNewGame,
  isStarted,
  direction,
}: Props) => {
  const ref = useRef(null);
  const [sizes, setSizes] = useState({
    width: 0,
    height: 0,
    boardSize: 0,
  });

  useEffect(() => {
    const updateSizes = () => {
      const { current } = ref;
      if (current && current.clientWidth) {
        const quarter = current.clientWidth / 4;
        setSizes({
          boardSize: current.clientWidth,
          width: quarter,
          height: quarter,
        });
      }
    };
    updateSizes();

    window.addEventListener('resize', updateSizes);
    return () => {
      window.removeEventListener('resize', updateSizes);
    };
  }, []);

  const onMove = useCallback((line, column) => {
    const { nullLine, nullColumn } = getNullCell(numbers);
    const movable = {
      lineM: line,
      columnM: column,
    };
    const nullable = {
      lineN: nullLine,
      columnN: nullColumn,
    };
    move(getDirection(movable, nullable));
  }, []);

  const { boardSize, width, height } = sizes;
  return (
    <FullContainer tabIndex="0">
      <BoardContainer size={boardSize}>
        <MatrixWrapper ref={ref}>
          {isStarted ? (
            <Fragment>
              {width && height && boardSize && (
                <Matrix
                  width={width}
                  height={height}
                  boardSize={boardSize}
                  matrix={numbers}
                  move={onMove}
                  direction={direction}
                />
              )}
            </Fragment>
          ) : (
            <NewGame onClick={startNewGame}>New Game</NewGame>
          )}
        </MatrixWrapper>
      </BoardContainer>
      <Tools newGame={startNewGame} prevStep={prev} nextStep={next} />
      <WinnerDialog />
    </FullContainer>
  );
};

export default Board;
