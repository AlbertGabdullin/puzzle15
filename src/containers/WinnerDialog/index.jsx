// @flow
// flow
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Confetti from 'react-confetti';
import isEqual from 'lodash/isEqual';
import Modal from '../../components/Modal';
import { MATRIX } from '../../consts/matrix';
import type { GameMatrix } from '../../types';

type Props = {
  matrix: GameMatrix,
  isStarted: boolean,
};

const WinnerDialog = ({ matrix, isStarted }: Props) => {
  const [win, setWin] = useState(false);
  const width = window.outerWidth;
  const height = window.outerHeight;

  useEffect(() => {
    setWin(isEqual(matrix, MATRIX));
  }, [matrix]);

  return (
    <Fragment>
      {win && isStarted ? (
        <Fragment>
          <Confetti gravity={0.2} width={width} height={height} />
          <Modal onClose={() => setWin(false)}>
            Congratulation! You are winner!!!
          </Modal>
        </Fragment>
      ) : null}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  matrix: state.game.matrix,
  isStarted: state.game.isStarted,
});

export default connect(
  mapStateToProps,
  null,
)(WinnerDialog);
