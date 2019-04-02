import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import type {
  GameState
} from "../../types";

const ToolsWrapper = styled.div`
  display: flex;
`;

type Props = {
  newGame: () => GameState,
  nextStep: () => GameState,
  prevStep: () => GameState,
}

const Tools = ({
  newGame,
  prevStep,
  nextStep,
}: Props) => {
  return (
    <ToolsWrapper>
      <Button onClick={newGame} name="Update" />
      <Button onClick={prevStep} name="ArrowLeft" />
      <Button onClick={nextStep} name="ArrowRight" />
    </ToolsWrapper>
  )
}

export default Tools;