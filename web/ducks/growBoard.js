/* eslint-disable no-case-declarations */

import _ from 'lodash';
import { listRoadmaps } from '../libs/demo-data';

// ***************************** ACTIONS ****************************
const UPDATE_SELECTED_ROADMAP = 'GROW/GROWBOARD/UPDATE_SELECTED_ROADMAP';
const UPDATE_STATE_ROADMAPCOLLAPSE = 'GROW/GROWBOARD/UPDATE_STATE_ROADMAPCOLLAPSE';

// ***************************** INITIAL STATE ****************************
export const INITIAL_STATE = {
  selectedRoadmap: '',
  roadmapCollapsed: false,
  dataFromSelectedRoadmap: [],
};

// ***************************** REDUCERS ****************************
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case UPDATE_SELECTED_ROADMAP:
      let filteredKey = action.roadmap.substr(8);

      let ResponseFromQuery = _.find(listRoadmaps, o => {
        return o.key === parseInt(filteredKey);
      });

      return {
        ...state,
        selectedRoadmap: filteredKey,
        dataFromSelectedRoadmap: ResponseFromQuery,
      };    
    case UPDATE_STATE_ROADMAPCOLLAPSE:
      return {
        ...state,
        roadmapCollapsed: !state.roadmapCollapsed,
      };

    default:
      return state;
  }
}

// ***************************** ACTIONS CREATORS ****************************
export function updateSelectedRoadmap(roadmap) {
  return { type: UPDATE_SELECTED_ROADMAP, roadmap };
}

export function updateRoadmapCollapsedState() {
  return { type: UPDATE_STATE_ROADMAPCOLLAPSE};
}
