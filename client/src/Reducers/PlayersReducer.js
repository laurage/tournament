const initialState = {
  playersList: [],
  input: "",
  // generatedPlayersCounter: 0, //how to use a counter that increments in the reducer?
}

export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      return {
            ...state,
            playersList: [...state.playersList, {
              playerId: action.playerId,
              playerName: action.playerName
            }]
      };

    case "REMOVE_PLAYER":
      let newPlayersList = state.playersList.filter(player => player.playerId !== action.playerId );
      return {
        ...state,
        playersList: newPlayersList
      };

    case "INPUT_PLAYER":
      return {
            ...state,
            input: action.input
      };

    case "SET_PLAYERS":
      return {
            ...state,
            playersList: action.players
      };
      case "UPDATE_PLAYERS":
        return {
              ...state,
              playersList: [
                { playerId: 2,
                  playerName: "elliot" },
                { playerId: 3,
                  playerName: "michael" },
                { playerId: 1,
                  playerName: "laura" },
              ]
        };

    default:
      return state
  }
}
