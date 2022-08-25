import { SET_TEXT } from '../actions/actionTypes.js';

export const textReducer = (state = '3 Rooms Demo', action) => {
  switch (action.type) {
    case SET_TEXT:
      return (state = action.payload);
    default:
      return state;
  }
};
