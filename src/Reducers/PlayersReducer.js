const initialState = []

export const playerReducer = (state = initialState, action) =>
  switch (action.type) {
    case "ADD_PLAYER":
      return [
            ...state,
            {
              playerId: action.playerId,
              playerName: action.playerName
            }
      ];
    case "REMOVE_PLAYER":
      let newPlayersList = state.filter(player => player.playerId !== action.playerId );
      return newPlayersList;

    default:
      return state
  }
}
