import styled from 'styled-components';
import BoardImage from '../../static/board.svg';
import Background from '../../static/gamebackground.jpg';

export const BoardContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  padding: 25px;
  background-image: url(${BoardImage});
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

export const FullContainer = styled.div`
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

export const MatrixWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  touch-action: none;
`;
