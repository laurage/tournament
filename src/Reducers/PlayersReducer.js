import { combineReducers } from 'redux';
import { store } from '../store';

const initialState = {

}

const addPlayer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      // console.log("ACTION");
      // console.log("state", ...state);
      return {
            ...state,
            playerId: "1",
            playerName: "other"
      };
    default:
      return state
    }
}

export const rootReducer = combineReducers({
  addPlayer
})
