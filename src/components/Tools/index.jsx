// @flow
import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const ToolsWrapper = styled.div`
  display: flex;
`;

type Props = {
  newGame: () => void,
  nextStep: () => void,
  prevStep: () => void,
};

const Tools = ({ newGame, prevStep, nextStep }: Props) => (
  <ToolsWrapper>
    <Button onClick={newGame} name="Update" />
    <Button onClick={prevStep} name="ArrowLeft" />
    <Button onClick={nextStep} name="ArrowRight" />
  </ToolsWrapper>
);

export default Tools;
