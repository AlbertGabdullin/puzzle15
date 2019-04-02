//@flow
import React, { createElement } from 'react';
import styled from 'styled-components';
import * as items from './items';
import ButtonBg from '../../static/button.svg';

const ButtonWrap = styled.div`
  background-image: url(${ButtonBg});
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 5px;
  margin-left: 5px;
`;

type Props = {
  onClick: () => void,
  name: string,
}

const Button = ({
  onClick,
  name,
}: Props) => {
  return (
    <ButtonWrap onClick={onClick}>
      {createElement(items[name])}
    </ButtonWrap>
  )
};

export default Button;