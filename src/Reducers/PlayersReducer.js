const initialState = {
  playersList: [],
  input: "",
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

    // case "REMOVE_PLAYER":
    //   let newPlayersList = state.filter(player => player.playerId !== action.playerId );
    //   return { ...state.playersList: newPlayersList };

    case "INPUT_PLAYER":
      return {
            ...state,
            input: action.input
      };

    default:
      return state
  }
}
