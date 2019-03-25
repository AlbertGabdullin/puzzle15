import React, { Component, createRef } from 'react';
import styled from 'styled-components';
import transition from 'styled-transition-group';
import { Motion, spring } from 'react-motion';

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

const Tile = styled.div`
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

const HeadText = styled.h1`
  fonz-size: 36px;
  font-family: 'Coming Soon', sans-serif;
`;

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
  state = {
    size: [ 3,3 ],
    numbers: [
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12],
      [13,14,15,0]
    ],
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
  move = (line, column) => {
    console.log(line, column);
    const { numbers } = this.state;
    const { nullLine, nullCol } = this.getNullCell();
    let up = false;
    let left = false;
    let right = false;
    let down = false;
    if(line === nullLine && column === nullCol + 1){
      right = true;
      let temp = numbers[nullLine][nullCol];
      numbers[nullLine][nullCol] = numbers[line][column];
      numbers[line][column] = temp;
      requestAnimationFrame(() => {
        this.setState({
          numbers,
        });
      });
      return true;
    }
    if(line === nullLine && column === nullCol - 1) {
      left = true;
      let temp = numbers[nullLine][nullCol];
      numbers[nullLine][nullCol] = numbers[line][column];
      numbers[line][column] = temp;
      this.setState({
        numbers,
      });
      return true;
    }
    if(column === nullCol && line === nullLine - 1) {
      up = true;
      let temp = numbers[nullLine][nullCol];
      numbers[nullLine][nullCol] = numbers[line][column];
      numbers[line][column] = temp;
      this.setState({
        numbers,
      });
      return true;
    }
    if(column === nullCol && line === nullLine + 1) {
      down = true;
      let temp = numbers[nullLine][nullCol];
      numbers[nullLine][nullCol] = numbers[line][column];
      numbers[line][column] = temp;
      this.setState({
        numbers,
      });
      return true;
    }
  };

  render() {
    const padding = 20;

    const { numbers } = this.state;
    const { width, height } = this.state;

    const plug = numbers.map((item, line) => {
      console.log(item);
      return item.map((el, column) => {
        console.log(el);
        const params = {
          left: width * line + padding,
          right: height * column + padding,
        };
        console.log(el);

        return (
          <PlugWrapper width={width} height={height} left={params.left} right={params.right}>
            <Plug  />
          </PlugWrapper>
        );
      })
    });

    console.log(plug);

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
        let style = {
          tX: spring(width * (index % 4) + padding),
          tY: spring(height * (Math.floor(index / 4)) + padding),
          width: width,
          height: height,
        };

        if(item.number === 0) return (
          <Motion key={item.number} style={style}>
            {({ tX, tY, width, height }) => (
              <TileWrapper noBorder style={{
                width: width,
                height: height,
                transform: `translate3d(${tX}px,${tY}px,0) scale(1.0)`,
                transition: `transform 100ms ease`,
              }}>
                <Tile key={item.number} noBorder />
              </TileWrapper>
            )}
          </Motion>
        );
        return (
          <Motion key={item.number} style={style}>
            {({ tX, tY, width, height }) => (
              <TileWrapper style={{
                width: width,
                height: height,
                transform: `translate(${tX}px,${tY}px) scale(1.0)`,
                transition: `transform 100ms ease`,
              }}>
                <Tile key={item.number} onClick={() => this.move(item.line,item.column)} >
                  {item.number}
                </Tile>
              </TileWrapper>
            )}
          </Motion>
        )
      });
    return (
      <FullContainer>
        <Container timeout={1000}>
          {plug}
          {tiles}
        </Container>
      </FullContainer>
    );
  }
}

export default App;
