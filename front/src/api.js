export const API = (() => {
  return {
    getPlayers: () => (   fetch(`${process.env.REACT_APP_API_HOST}/players`)
      .then((response) => response.json())
      .then((responseJson) => responseJson.players)
    )
  };
});

export default API();
