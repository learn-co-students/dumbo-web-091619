const fetchGerbilsThunk = (dispatch, whatever, apiBaseURL) => {
  dispatch({
    type: "POPULATE_GERBILS_FETCH_STARTED"
  })
  // console.log(dispatch)
  fetch(apiBaseURL + "gerbils")
  .then(res => res.json())
  .then(data => {
    dispatch({
      type: "POPULATE_GERBILS",
      gerbils: data
    })
    dispatch({
      type: "POPULATE_GERBILS_FETCH_ENDED"
    })
  })

}

export default { fetchGerbilsThunk }