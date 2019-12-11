
const cakeReducer = (oldState = [], action) => {

  // console.log(oldState)
  // console.log(action)

  switch (action.type) {
    case "ADD_CAKE":
      //add the cake
      return [ ...oldState, action.cake ]
    case "POPULATE_CAKES":
      //add the cakes
      return action.cakes
    case "THROW_AWAY_ALL_CAKES_BECAUSE_THEY_ARE_MOLDY":
      return []
    default :
      return oldState // what's old is new again
  }
}


export default cakeReducer
