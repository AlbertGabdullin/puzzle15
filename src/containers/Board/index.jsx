import React, { Component, createRef, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { moveTile, newGame, nextStep, prevStep } from "../../actions";
import Background from "../../static/background.svg";
import Board from "../../static/board.svg";
import Tools from "../../components/Tools";
import type { GameMatrix, GameState } from "../../types";
import shuffle from "../../helpers/shuffle";
import getNullCell from "../../helpers/getNullCell";
import getDirection from "../../helpers/getDirection";
import Matrix from "../../components/Matrix";
import TouchHoc from "../../hoc/useGetDirection";
import WinnerDialog from "../WinnerDialog";

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
  newGame: () => GameState,
  nextStep: () => GameState,
  prevStep: () => GameState,
  moveTile: () => GameMatrix
};

type State = {
  width: number,
  height: number
};

class BoardComponent extends Component<Props, State> {
  innerContainer = createRef();
  state = {};

  componentDidMount(): void {
    const boardSize = this.innerContainer.current.clientWidth;
    const width = boardSize / 4;
    const height = boardSize / 4;

    this.setState({
      boardSize,
      width,
      height
    });

    window.addEventListener("resize", this.resizeBoard);
  }
  componentWillUnmount(): void {
    window.removeEventListener("resize", this.resizeBoard);
  }

  resizeBoard = () => {
    const boardSize = this.innerContainer.current.clientWidth;
    const width = boardSize / 4;
    const height = boardSize / 4;

    this.setState({
      boardSize,
      width,
      height
    });
  };

  move = (line, column) => {
    const { numbers } = this.props;
    const { nullLine, nullCol } = getNullCell(numbers);
    const movable = {
      lineM: line,
      columnM: column
    };
    const nullable = {
      lineN: nullLine,
      columnN: nullCol
    };

    const direction = getDirection(movable, nullable);
    this.props.moveTile(direction);
  };

  render() {
    const { matrix } = this.props;
    const { width, height, boardSize } = this.state;

    const { prevStep, nextStep, newGame } = this.props;

    return (
      <FullContainer tabIndex="1">
        <Container size={boardSize}>
          <MatrixContainer ref={this.innerContainer}>
            {this.props.isStarted ? (
              <Fragment>
                {width && height && boardSize && (
                  <Matrix
                    width={width}
                    height={height}
                    boardSize={boardSize}
                    matrix={matrix}
                    move={this.move}
                    direction={this.props.direction}
                  />
                )}
              </Fragment>
            ) : (
              <NewGame onClick={newGame}>New Game</NewGame>
            )}
          </MatrixContainer>
        </Container>
        <Tools newGame={newGame} prevStep={prevStep} nextStep={nextStep} />
        <WinnerDialog />
      </FullContainer>
    );
  }
}

const mapStateToProps = (state: GameState) => {
  const { counter, matrix, steps, isStarted } = state.game;

  return {
    matrix,
    counter,
    steps,
    isStarted,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    moveTile: direction => dispatch(moveTile(direction)),
    newGame: () => dispatch(newGame(shuffle(ownProps.numbers, ownProps.size))),
    nextStep: () => dispatch(nextStep()),
    prevStep: () => dispatch(prevStep())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TouchHoc(BoardComponent));
