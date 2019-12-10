const cakeActionCreator = (cakeName) => {
  return {
    type: "ADD_CAKE", 
    cake: {
      name: cakeName
    }
  }
}

const actionCreators = {
  cakeActionCreator //: cakeActionCreator
}

export default actionCreators