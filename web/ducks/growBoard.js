// Actions
const CREATE = 'GROW/GROWBOARD/CREATE';

// Initial state
export const INITIAL_STATE = {
  counter: 0
}

// Reducer
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {    
    case CREATE:
      return {
        ...state,
        counter: state.counter + 2
      }

    default: return state;
  }
}

// Action Creators
export function createGrow(title) {
  return { type: CREATE, title }
}