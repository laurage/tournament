// setPlayers = (response) => {
//   type: "SET_PLAYERS",
//   {...state,
//   ...players}
// }
//
// getPlayers = (set = setPlayers) => (
//   set(response)
// );
let nextTodoId = 0

export default function addPlayer(playerId, playerName) {
  console.log('action!');
  console.log("player", playerName);
  return {
    type: "ADD_PLAYER",
    playerId,
    playerName
  }
}

// export default addPlayer;
//
// {
//   players: [
//     {
//       key: 1,
//       name: "laura"
//     }
//   ]
// }
