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
