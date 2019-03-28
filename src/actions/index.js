export const UPDATE_COUNTER = 'UPDATE_COUNTER';
export const SET_COUNTER = 'SET_COUNTER';
export const NEW_GAME = 'NEW_GAME';

export const setCounter = initialValue => ({
  type: SET_COUNTER,
  payload: initialValue,
});

export const updateCounter = () => ({
  type: UPDATE_COUNTER,
});

export const newGame = () => ({
  type: NEW_GAME,
});
