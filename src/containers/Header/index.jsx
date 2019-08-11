// @flow
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import HeaderBackground from '../../static/header-background.svg';

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4;
`;

const HeaderColumm = styled.div`
  width: 50%;
`;

const HeaderContainer = styled.div`
  max-width: 600px;
  height: 150px;
  padding: 40px;
  background-image: url('${HeaderBackground}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;


const Header = ({
  counter
                }) => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderColumm>
          steps: {counter}
        </HeaderColumm>
        <HeaderColumm></HeaderColumm>
      </HeaderContainer>
    </HeaderWrapper>
  )
};

const mapStateToProps = state => {
  console.log(state);
  return {
  counter: state.game.steps.length,
}};

export default connect(mapStateToProps)(Header);
