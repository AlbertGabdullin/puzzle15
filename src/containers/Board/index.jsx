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
  max-width: ${props => props.size}px;
  max-height: ${props => props.size}px;
  width: 100%;
  height: 100%;
  margin: 60px auto 0 auto;
  background-image: url(${Board});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-bottom: 20px;

  > * {
    box-sizing: border-box;
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
  align-items: center;
`;

const NewGame = styled.div`
  position: absolute;
  left: 6.25%;
  top: 6.25%;
  width: 87.5%;
  height: 87.5%;
  background-color: rgba(0, 0, 0, 1);
  z-index: 10;
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
  state = {
    boardSize: 400,
    width: 21.875,
    height: 21.875,
  };

  componentWillMount(): void {
    this.resizeBoard();
  }

  componentDidMount(): void {
    this.props.newGame();
    document.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('resize', this.resizeBoard);
  }
  componentWillUnmount(): void {
    document.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('resize', this.resizeBoard);
  }

  resizeBoard = () => {
    const { boardSize } = this.state;

    const w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName('body')[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
      height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

    if(boardSize > width) {
      console.log(1234);
      this.setState({
        boardSize: width * 0.9,
      });
    } else {
      this.setState({
        boardSize: 400,
      });
    }
  };

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
    const { matrix } = this.props;
    const { width, height, boardSize } = this.state;

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
    const padding = boardSize * (6.25 / 100);

    const tiles = newArray.map((item, index) => {
      const style = {
        tX: spring(boardSize * (width / 100) * (index % 4) + padding),
        tY: spring(boardSize * (height / 100) * (Math.floor(index / 4)) + padding),
        width: boardSize * (width / 100),
        height: boardSize * (height / 100),
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
      <FullContainer tabIndex="1">
        <Container size={boardSize}>
          {tiles}
          {/*<NewGame />*/}
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
