import _ from 'lodash'; //DELETEEEEE
import { listRoadmaps } from '../libs/demo-data'; //DELETEEEEE

// Actions
const UPDATE_SELECTED_ROADMAP = 'GROW/GROWBOARD/UPDATE_SELECTED_ROADMAP';

// Initial state
export const INITIAL_STATE = {
  selectedRoadmap: '',
  dataFromSelectedRoadmap: [], //DELETEEEEE
};

// Reducer
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case UPDATE_SELECTED_ROADMAP:
      let filteredKey = action.roadmap.substr(8);

      let ResponseFromQuery = _.find(listRoadmaps, o => {
        //DELETEEEEE
        return o.key === parseInt(filteredKey); //DELETEEEEE
      }); //DELETEEEEE

      return {
        ...state,
        selectedRoadmap: filteredKey,
        dataFromSelectedRoadmap: ResponseFromQuery, //DELETEEEEE
      };

    default:
      return state;
  }
}

// Action Creators
export function updateSelectedRoadmap(roadmap) {
  return { type: UPDATE_SELECTED_ROADMAP, roadmap };
}
