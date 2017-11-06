export const API = (() => {

  return {
    getPlayers: () => (   fetch('/players')
      .then((response) => response.json())
      .then((responseJson) => responseJson.players)
    )
  };
});

export default API();
