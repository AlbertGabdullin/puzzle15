// @flow
import React, { Component, createRef, Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { moveTile, newGame, nextStep, prevStep } from '../../actions';
import Background from '../../static/gamebackground.jpg';
import Board from '../../static/board.svg';
import Tools from '../../components/Tools';
import type { GameMatrix } from '../../types';
import shuffle from '../../helpers/shuffle';
import getNullCell from '../../helpers/getNullCell';
import getDirection from '../../helpers/getDirection';
import Matrix from '../../components/Matrix';
import TouchHoc from '../../hoc/useGetDirection';
import WinnerDialog from '../WinnerDialog';

const Container = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  padding: 25px;
  background-image: url(${Board});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  margin-bottom: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-width: 300px;
    width: 100%;
    max-height: 300px;
    height: 100%;
    padding: 20px;
    background-position: center center;
  }

  @media (max-height: 500px) {
    margin-bottom: 0;
  }
`;

const FullContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  align-items: center;

  @media (max-height: 500px) {
    flex-direction: row;
  }
`;

const NewGame = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  background: #000;
  color: #fff;
  cursor: pointer;
`;

const MatrixContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  touch-action: none;
`;

type Props = {
  startNewGame: () => void,
  next: () => void,
  prev: () => void,
  move: string => GameMatrix,
  isStarted: boolean,
  direction: string,
  numbers: GameMatrix,
};

type State = {
  width: number,
  height: number,
  boardSize: number,
};

class BoardComponent extends Component<Props, State> {
  innerContainer = createRef();

  state = {
    width: 0,
    height: 0,
    boardSize: 0,
  };

  componentDidMount(): void {
    const containerEl = this.innerContainer.current;
    if (containerEl) {
      const boardSize = containerEl.clientWidth;
      if (boardSize) {
        const width = boardSize / 4;
        const height = boardSize / 4;

        this.setState({
          boardSize,
          width,
          height,
        });
      }
    }

    window.addEventListener('resize', this.resizeBoard);
  }

  componentWillUnmount(): void {
    window.removeEventListener('resize', this.resizeBoard);
  }

  resizeBoard = () => {
    const containerEl = this.innerContainer.current;
    if (containerEl) {
      const boardSize = containerEl.clientWidth;
      const width = boardSize / 4;
      const height = boardSize / 4;

      this.setState({
        boardSize,
        width,
        height,
      });
    }
  };

  onMove = (line, column) => {
    const { numbers, move } = this.props;
    const { nullLine, nullColumn } = getNullCell(numbers);
    const movable = {
      lineM: line,
      columnM: column,
    };
    const nullable = {
      lineN: nullLine,
      columnN: nullColumn,
    };

    const direction = getDirection(movable, nullable);
    move(direction);
  };

  render() {
    const { numbers } = this.props;
    const { width, height, boardSize } = this.state;

    const { prev, next, startNewGame, isStarted, direction } = this.props;

    return (
      <FullContainer tabIndex="0">
        <Container size={boardSize}>
          <MatrixContainer ref={this.innerContainer}>
            {isStarted ? (
              <Fragment>
                {width && height && boardSize && (
                  <Matrix
                    width={width}
                    height={height}
                    boardSize={boardSize}
                    matrix={numbers}
                    move={this.onMove}
                    direction={direction}
                  />
                )}
              </Fragment>
            ) : (
              <NewGame onClick={startNewGame}>New Game</NewGame>
            )}
          </MatrixContainer>
        </Container>
        <Tools newGame={startNewGame} prevStep={prev} nextStep={next} />
        <WinnerDialog />
      </FullContainer>
    );
  }
}

const mapStateToProps = state => {
  const { counter, steps, isStarted } = state.game;

  return {
    counter,
    steps,
    isStarted,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  move: direction => dispatch(moveTile(direction)),
  startNewGame: () =>
    dispatch(newGame(shuffle(ownProps.numbers, ownProps.size))),
  next: () => dispatch(nextStep()),
  prev: () => dispatch(prevStep()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TouchHoc(BoardComponent));
