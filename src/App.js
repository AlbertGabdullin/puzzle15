import React, {Component, Fragment} from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import Tile from './components/Tile';

const Container = styled.div`
  position: relative;
  width: 440px;
  height: 440px;
  background-color: #daf0e4;
  border-radius: 10px;
  margin: 0 auto;
  
  > * {
    box-sizing: border-box;
  }
`;

const FullContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fff3d8;
  display: flex;
  justify-content: center;
  align-items: center;
`;



const HeadText = styled.h1`
  fonz-size: 36px;
  font-family: 'Coming Soon', sans-serif;
`;

const Plug = styled.div`
   height: 100%;
   width: 100%;
   border-radius: 10px;
   background-color: #6dbecc;
`;

const PlugWrapper = styled.div`
  position: absolute;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  left: ${props => props.left}px;
  top: ${props => props.right}px;
  padding: 5px;
`;

class App extends Component {
  constructor (props) {
    super(props);

    document.addEventListener('keydown', this.keyDown);
  }
  state = {
    size: [ 3,3 ],
    numbers: [
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12],
      [13,14,15,0]
    ],
    steps: [],
    width: 100,
    height: 100,
  };

  getNullCell = () => {
    const { numbers } = this.state;
    let obj = {};
    for(let i = 0; i < numbers.length; i++) {
      for(let j = 0; j < numbers[i].length; j++) {
        if(numbers[i][j] === 0) {
          obj =  {
            nullLine: i,
            nullCol: j,
          }
        }
      }
    }
    return obj;
  };

  randomInteger = (min, max) => {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  };

  getMovePosition = (rand, nullPosition) => {
    const { size } = this.state;
    const { nullLine, nullCol } = nullPosition;
    //get move direction
    let left = true;
    let right = true;
    let top = true;
    let bottom = true;
    const columnMod = Math.abs(nullCol - (size[0]));
    const lineMod = Math.abs(nullLine - (size[1]));

    if(nullLine === 0) {
      top = false;
    }
    if(nullCol === 0) {
      left = false;
    }
    if(lineMod === 0) {
      bottom = false;
    }
    if(columnMod === 0) {
      right = false;
    }
    if(nullLine === 0 && nullCol === 0) {
      top = false;
      left = false;
    }
    if(columnMod === 0 && lineMod === 0) {
      bottom = false;
      right = false
    }
    if(nullLine === 0 && columnMod === 0) {
      top = false;
      right = false;
    }
    if(nullCol === 0 && lineMod === 0) {
      bottom = false;
      left = false;
    }

    //filter directions, which are not true
    const directionKeys = ['right', 'top', 'bottom', 'left'];
    const directions = [{top}, {right}, {bottom}, {left}];
    const newDirections = directions.map(item=> {
      let newDirection = null;
      directionKeys.forEach(key => {
        if(item[key]) {
          newDirection = key;
        };
      });
      return newDirection;
    }).filter(item => item !== null);


    const randDirectionIndex = this.randomInteger(0, newDirections.length - 1);
    const randDirection = newDirections[randDirectionIndex];

    //getPosition
    if(randDirection === 'top') return [nullLine - 1, nullCol];
    if(randDirection === 'right') return [nullLine, nullCol + 1];
    if(randDirection === 'left') return [nullLine, nullCol- 1];
    if(randDirection === 'bottom') return [nullLine + 1, nullCol];
  };



  shuffle = () => {
    const { numbers } = this.state;
    const shuffleCount = this.randomInteger(150, 200);
    for(let i = 0; i<shuffleCount; i++) {
      const { nullLine, nullCol } = this.getNullCell();
      const rand = this.randomInteger(1, 4);
      const [ newLine, newCol ] = this.getMovePosition(rand, {nullLine, nullCol});
      let temp = numbers[nullLine][nullCol];
      numbers[nullLine][nullCol] = numbers[newLine][newCol];
      numbers[newLine][newCol] = temp;
      this.setState({
        numbers,
      });
    }
  };

  jumpTo = (direction) => {
    const { steps } = this.state;
    if(direction === 'next') {

    }
  }

  move = (line, column) => {
    const { numbers, steps } = this.state;
    const { nullLine, nullCol } = this.getNullCell();
    const columnMod = Math.abs(column - nullCol);
    const lineMod = Math.abs(line - nullLine);
    if((line === nullLine && columnMod === 1) || (column === nullCol && lineMod === 1)){
      let temp = numbers[nullLine][nullCol];
      numbers[nullLine][nullCol] = numbers[line][column];
      numbers[line][column] = temp;
      steps.push(numbers);
      this.setState({
        numbers,
      });
    }
  };

  render() {
    const padding = 20;

    const { numbers } = this.state;
    const { width, height } = this.state;

    const plug = numbers.map((item, line) => {
      return item.map((el, column) => {
        const params = {
          left: width * line + padding,
          right: height * column + padding,
        };

        return (
          <PlugWrapper width={width} height={height} left={params.left} right={params.right}>
            <Plug  />
          </PlugWrapper>
        );
      })
    });

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
                        keyDown={this.keyDown}
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
    return (
      <FullContainer>
        <Container>
          {plug}
          {tiles}
        </Container>
        <button onClick={this.shuffle}>new Game</button>
      </FullContainer>
    );
  }
}

export default App;
