import React, { Component, createRef } from 'react';
import styled from 'styled-components';
import transition from 'styled-transition-group';
import { Motion, spring } from 'react-motion';

const Container = styled.div`
  position: relative;
  width: 440px;
  height: 440px;
  background-color: rgba(50, 31, 64, 1);
  > * {
    box-sizing: border-box;
  }
`;

const colors = [
  'rgb(86, 161, 31)',
  'rgb(255, 36, 121)',
  'rgb(0, 153, 170)',
  'rgb(255, 63, 0)',
  'rgb(0, 153, 136)',
  'rgb(62, 79, 188)',
  'rgb(185, 59, 194)',
  'rgb(0, 163, 56)',
  'rgb(185, 59, 194)',
  'rgb(0, 163, 56)',
  'rgb(248, 26, 38)',
  'rgb(0, 101, 199)',
  'rgb(111, 51, 189)',
  'rgb(0, 137, 215)',
  'rgb(131, 119, 0)',
]

const Tile = styled.div`
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background: ${props => props.color};
  
  ${props => props.noBorder && `
    border: none;
    z-index: -1;
  `}
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



class App extends Component {
  tileRef = createRef();
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

    const { numbers } = this.state;
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
      })
    });
      const tiles = newArray.map((item, index) => {
        let style = {
          tX: spring(width * (index % 4)),
          tY: spring(height * (Math.floor(index / 4))),
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
                <Tile key={item.number}
                      onClick={() => this.move(item.line,item.column)}
                      color={colors[index]}
                >
                  {item.number}
                </Tile>
              </TileWrapper>
            )}
          </Motion>
        )

      })



    // const numb = numbers.map((item, line) => {
    //    return item.map((it, column)=> {
    //       let style = {
    //         tX: spring(column * width),
    //         tY: spring(line * height),
    //         width: width,
    //         height: height,
    //       };
    //
    //       if(numbers[line][column] === 0) return (
    //         <Motion key={line + '-' + column} style={style}>
    //           {({ tX, tY, width, height }) => (
    //             <Tile key={line + ' ' + column} timeout={1000} noBorder style={{
    //               width: width,
    //               height: height,
    //               transform: `translate3d(${tX}px,${tY}px,0) scale(1.0)`,
    //               transition: `transform 1000ms ease`,
    //             }}/>
    //           )}
    //
    //         </Motion>
    //       );
    //       return (
    //         <Motion key={line + '-' + column} style={style}>
    //           {({ tX, tY, width, height }) => (
    //             <Tile key={line + ' ' + column} timeout={1000} onClick={() => this.move(line, column)} style={{
    //               width: width,
    //               height: height,
    //               transform: `translate3d(${tX}px,${tY}px,0) scale(1.0)`,
    //               transition: `transform 1000ms ease`,
    //             }}>{it}</Tile>
    //           )}
    //
    //         </Motion>
    //       )
    //     });
    // });
    console.log(tiles);
    return (
      <Container timeout={1000}>
        {tiles}
      </Container>
    );
  }
}

export default App;
