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

export function getPlayers() {
  return {
    type: "GET_PLAYERS",
  }
}
