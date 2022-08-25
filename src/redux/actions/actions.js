import { SET_TEXT } from './actionTypes.js';

export const setText = (text) => {
  return {
    type: SET_TEXT,
    payload: text,
  };
};
