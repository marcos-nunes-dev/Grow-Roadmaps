import { combineReducers } from 'redux';
import growBoardReducer, { INITIAL_STATE as growBoardInitialState } from './growBoard';


export default combineReducers({
  growBoardReducer,
});

export const INITIAL_STATE = {
  growBoardReducer: growBoardInitialState
}
