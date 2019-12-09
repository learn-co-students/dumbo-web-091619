const initialState = { 
  cakes: [],
  gerbils: []
}

const reducer = (oldState = initialState, action) => {
  // console.log(oldState)
  // console.log(action)

  if (action.type === "ADD_CAKE") {
    //add the cake
    return {
      ...oldState,
      cakes: [...oldState.cakes, action.cake]
    }
  } else if (action.type === "THROW_AWAY_ALL_CAKES_BECAUSE_THEY_ARE_MOLDY") {
    return {
      ...oldState,
      cakes: []
    }
  }

  return oldState // what's old is new again
}

export default reducer

