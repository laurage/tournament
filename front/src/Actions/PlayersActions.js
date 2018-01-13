import API from '../api';
import { store } from '../store';

export function addPlayer(playerId, playerName) {
  return {
    type: "ADD_PLAYER",
    playerId,
    playerName,
  }
}

export function removePlayer(playerId) {
  return {
    type: "REMOVE_PLAYER",
    playerId,
  }
}

export function inputPlayer(input) {
  return {
    type: "INPUT_PLAYER",
    input,
  }
}

export function updatePlayers() {
  return {
    type: "UPDATE_PLAYERS",
  }
}

export const setPlayers = (players, error = false) => {
  return {
    type: "SET_PLAYERS",
    players,
    error,
  }
};

export const getPlayers = (update = setPlayers, api = API) => (
  dispatch => api.getPlayers()
    .then((response) => {
      dispatch(update(response))
    })
    .catch((error) => {
      console.log(error)
      dispatch(update(undefined, error))
    })
)



// https://github.com/gaearon/redux-thunk/issues/146
// http://redux.js.org/docs/advanced/AsyncActions.html
