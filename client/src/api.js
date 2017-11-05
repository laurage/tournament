export const API = (() => {



  // return(
  //   getPlayers: () => (
  //     // setHeadersWithUserInfo(state().user, axios)
  //       .then(client => // set headers with user data
  //             client
  //             .get('/players')
  //            )
  //       .catch(err => {
  //         console.log(ERROR);
  //       })
  //   ),
  // );

  return {
    getPlayers: () => (fetch('/api/hello'))
      // fetch('/api/hello')
      //   .then((response) => response.json())
      //   .then((responseJson) => {
      //     console.log("uuuuu");
      //       // message: ["lalal"]//responseJson.message
      //   })
      // console.log("uuuu");
    // )
  };
});


export default API();
