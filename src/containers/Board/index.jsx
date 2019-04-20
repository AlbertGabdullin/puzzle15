import React, {Component, Fragment, createRef} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import { moveTile, newGame, nextStep, prevStep } from "../../actions";
import Tile from '../../components/Tile';
import Background from '../../static/background.svg';
import Board from '../../static/board.svg';
import Tools from "../../components/Tools";
import type { GameMatrix, GameState } from "../../types";
import shuffle from "../../helpers/shuffle";
import getNullCell from "../../helpers/getNullCell";
import getDirection from "../../helpers/getDirection";

const Container = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  margin: 0 auto;
  background-image: url(${Board});
  background-size: contain;
  background-position: center;
  margin-bottom: 20px;

  > * {
    box-sizing: border-box;
  }
`;

const FullContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-image: url(${Background});
  background-size: cover;
  align-items: center;
`;

type Props = {
  newGame: () => GameState,
  nextStep: () => GameState,
  prevStep: () => GameState,
  moveTile: () => GameMatrix,
}

type State = {
  width: number,
  height: number,
}

class BoardComponent extends Component<Props, State> {
  keyRef = createRef();
  state = {
    width: 85,
    height: 85,
  };

  componentDidMount(): void {
    this.props.newGame();
    this.keyRef.current.addEventListener('keydown', this.onKeyDown);
    this.keyRef.current.focus();
  }

  onKeyDown = (e) => {
    if(e.keyCode === 38) {
      this.props.moveTile('top');
    }
    if(e.keyCode === 40) {
      this.props.moveTile('bottom');
    }
    if(e.keyCode === 37) {
      this.props.moveTile('left');
    }
    if(e.keyCode === 39) {
      this.props.moveTile('right');
    }
  }

  move = (line, column) => {
    const { numbers } = this.props;
    const { nullLine, nullCol } = getNullCell(numbers);
    const movable = {
      lineM: line,
      columnM: column,
    };
    const nullable = {
      lineN: nullLine,
      columnN: nullCol,
    };

    const direction = getDirection(movable, nullable);
    this.props.moveTile(direction);
  };

  render() {
    const padding = 30;

    const { matrix } = this.props;
    const { width, height } = this.state;

    let newArray = [];
    matrix.forEach((item, line) => {
      item.forEach((child, column) => {
        const el =  {
          number: child,
          line,
          column,
        };
        newArray.push(el);
      });
    });
    const tiles = newArray.map((item, index) => {

      const style = {
        tX: spring(width * (index % 4) + padding),
        tY: spring(height * (Math.floor(index / 4)) + padding),
        width: width,
        height: height,
      };

      return (
        <Motion key={item.number} style={style}>
          {({ tX, tY, width, height }) => (
            <Fragment>
              {
                item.number !== 0 && (
                  <Tile
                    item={item}
                    index={index}
                    width={width}
                    height={height}
                    padding={padding}
                    move={this.move}
                    key={index}
                    tX={tX}
                    tY={tY}
                  />
                )
              }
            </Fragment>
          )}
        </Motion>
      )
    });

    const { prevStep, nextStep, newGame } = this.props;
    return (
      <FullContainer ref={this.keyRef} tabIndex="1">
        <Container>
          {tiles}
        </Container>
        <Tools
          newGame={newGame}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      </FullContainer>
    );
  }
}

const mapStateToProps = (state: GameState) => {
  const { counter, matrix } = state.game;

  return {
    matrix,
    counter,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    moveTile: (line, column) => dispatch(moveTile(line, column)),
    newGame: () => dispatch(newGame(shuffle(ownProps.numbers, ownProps.size))),
    nextStep: () => dispatch(nextStep()),
    prevStep: () => dispatch(prevStep()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardComponent);
