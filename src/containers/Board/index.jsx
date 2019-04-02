import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import {moveTile, newGame, nextStep, prevStep} from "../../actions";
import Tile from '../../components/Tile';
import Background from '../../static/background.svg';
import Board from '../../static/board.svg';
import Tools from "../../components/Tools";
import type {GameMatrix, GameState} from "../../types";

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
  state = {
    width: 85,
    height: 85,
  };

  componentDidMount(): void {
    this.props.newGame();
  }

  move = (line, column) => {
    this.props.moveTile(line, column, this.props.numbers);
  };

  render() {
    const padding = 30;

    const { numbers } = this.props;
    const { width, height } = this.state;

    let newArray = [];
    numbers.forEach((item, line) => {
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
      <FullContainer>
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
  return {
    numbers: state.game.matrix,
    counter: state.game.counter,
  }
};

const mapDispatchToProps = {
  moveTile: moveTile,
  newGame: newGame,
  nextStep: nextStep,
  prevStep: prevStep,
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardComponent);
