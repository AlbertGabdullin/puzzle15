// @flow
import React from 'react';
import { connect } from 'react-redux';
import Board from './containers/Board';
import './App.css';

const App = props => <Board {...props} />;

const mapStateToProps = state => ({
  numbers: state.game.matrix,
  size: state.game.size,
});

export default connect(mapStateToProps)(App);
