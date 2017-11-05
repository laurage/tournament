import API from '../api';

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

export const setPlayers = players => ({
    type: "SET_PLAYERS",
    players,
});

// https://github.com/gaearon/redux-thunk/issues/146
// http://redux.js.org/docs/advanced/AsyncActions.html

export const getPlayers = (update = setPlayers, api = API) => (
  // dispatch => (
   api
    .getPlayers()
  //     .then((response) => (
  //       dispatch(update(response.data))
  //     ))
  // )
);

export function updatePlayers() {
  return {
    type: "UPDATE_PLAYERS",
  }
}


//
// export const setSelectedUserInfo = selectedUser => ({
//   type: 'SET_SELECTED_USER_INFO',
//   selectedUser,
// });
//
// export const getUserInfo = (selectedUserId, update = setSelectedUserInfo, api = API) => (
//   dispatch => (
//    api
//     .getSelectedUser(selectedUserId)
//       .then((response) => (
//         dispatch(update(response.data))
//       ))
//   )
// );
