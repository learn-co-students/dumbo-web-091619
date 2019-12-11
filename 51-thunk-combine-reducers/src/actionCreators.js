import thunks from './thunks'

const createCake = (cakeName) => {
  return {
    type: "ADD_CAKE", 
    cake: {
      name: cakeName
    }
  }
}

const createGerbil = (gerbil) => {
  return (dispatch, whatever, baseApiUrl) => {
    fetch(baseApiUrl + "gerbils", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gerbil)
    }).then(res => res.json())
      .then(data => {
        dispatch({
          type: "ADD_GERBIL",
          gerbil: data
        })
      })
  }
}

const populateCakes = () => {
  return {
    type: "POPULATE_CAKES",
    cakes: [
      {
        "id": 1,
        "name": "Black Forest Gatêau"
      },
      {
        "id": 2,
        "name": "Torta de Tres Leches"
      }
    ]
  }
}


const populateGerbils = () => {
  return thunks.fetchGerbilsThunk
}

const actionCreators = {
  populateCakes,
  populateGerbils,
  createGerbil,
  createCake //: createCake
}

export default actionCreators