import { connect } from 'react-redux';
import shuffle from '../../helpers/shuffle';
import TouchHoc from '../../hoc/useGetDirection';
import Board from './Board';
import { moveTile, newGame, nextStep, prevStep } from '../../actions';

const mapStateToProps = state => {
  const { counter, steps, isStarted } = state.game;

  return {
    counter,
    steps,
    isStarted,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  move: direction => dispatch(moveTile(direction)),
  startNewGame: () =>
    dispatch(newGame(shuffle(ownProps.numbers, ownProps.size))),
  next: () => dispatch(nextStep()),
  prev: () => dispatch(prevStep()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TouchHoc(Board));
