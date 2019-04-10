import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer, { INITIAL_STATE } from '../ducks';

export function initializeStore (initialState = INITIAL_STATE) {
  return createStore(reducer, initialState, composeWithDevTools())
}