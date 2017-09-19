import { combineReducers } from 'redux';
import { store } from '../store';

const initialState = []

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      console.log("ACTION");
      console.log("action", action);
      console.log("state", ...state);
      return [
            ...state,
            {
              playerId: action.playerId,
              playerName: action.playerName
            }
      ];
    default:
      return state
    }
}

export const rootReducer = combineReducers({
  players: playerReducer
})

/*
...state => []
...state => [{playerId:"1", playerName:"laura"}{etc}]
*/
