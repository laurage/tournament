export function addPlayer(playerId, playerName) {
  return {
    type: "ADD_PLAYER",
    playerId,
    playerName
  }
}
