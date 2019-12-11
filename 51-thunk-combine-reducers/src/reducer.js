const initialState = { 
  cakes: [],
  gerbils: []
}

const reducer = (oldState = initialState, action) => {
  // console.log(oldState)
  // console.log(action)

  switch (action.type){
    case "ADD_CAKE":
      //add the cake
      return {
        ...oldState,
        cakes: [...oldState.cakes, action.cake]
      }
    case "ADD_GERBIL":
      //add the gerbil
      return {
        ...oldState,
        gerbils: [...oldState.gerbils, action.gerbil]
      }
    case "POPULATE_CAKES":
      //add the cakes
      return {
        ...oldState,
        cakes: action.cakes
      }
    case "POPULATE_GERBILS":
      //add the gerbils
      return {
        ...oldState,
        gerbils: action.gerbils
      }
  case "THROW_AWAY_ALL_CAKES_BECAUSE_THEY_ARE_MOLDY":
    return {
      ...oldState,
      cakes: []
    }
  default :
    return oldState // what's old is new again
  }
}

export default reducer

