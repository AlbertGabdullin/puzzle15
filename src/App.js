import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Board from './containers/Board';
import Header from './containers/Header';
import './App.css';


const App = props => (
  <Fragment>
    <Header />
    <Board {...props} />
  </Fragment>
)

const mapStateToProps = state => ({
  numbers: state.game.matrix,
  size: state.game.size,
});

export default connect(mapStateToProps)(App);