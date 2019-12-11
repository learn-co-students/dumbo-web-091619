
const gerbilReducer = (oldState = [], action) => {

  // console.log(oldState)
  // console.log(action)

  switch (action.type){
    case "ADD_GERBIL":
      //add the gerbil
      return [ ...oldState, action.gerbil ]
    case "POPULATE_GERBILS":
      //add the gerbils
      return action.gerbils
  default :
    return oldState // what's old is new again
  }
}

export default gerbilReducer