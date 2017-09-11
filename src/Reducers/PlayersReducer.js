import { combineReducers } from 'redux';

const initialState = {
  players: [],
}

const addPlayer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      console.log("ADD_PLAYER");
      console.log(action);
      // console.log(action.player.key);
      // console.log(action.player.name);
      return [
          ...state,
          {
            playerName: action.playerName
          }
          // counter: state.counter + 1,
      ]
  default:
    return state
  }
}

export const rootReducer = combineReducers({
  addPlayer
})
