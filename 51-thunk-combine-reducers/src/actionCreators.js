const createCake = (cakeName) => {
  return {
    type: "ADD_CAKE", 
    cake: {
      name: cakeName
    }
  }
}

const createGerbil = (gerbilName) => {
  return {
    type: "ADD_GERBIL", 
    gerbil: {
      name: gerbilName
    }
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
  return {
    type: "POPULATE_GERBILS",
    gerbils: [
      {
        "id": 1,
        "name": "Myrtle"
      },
      {
        "id": 2,
        "name": "Conrad"
      }
    ]
  }
}

const actionCreators = {
  populateCakes,
  populateGerbils,
  createGerbil,
  createCake //: createCake
}

export default actionCreators