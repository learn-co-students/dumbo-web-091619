import { createStore } from 'redux'

const reducer = (oldState, action) => {

  switch (action.type) {
    case "ADD_CAT":
      return {
        ...oldState,
        cats: [ ...oldState.cats, action.cat]
      }
    case "ADOPT_ALL_CATS":
      return {
        ...oldState,
        cats: []
      }
    default: 
      return {
        ...oldState
      }
  }
}


const adoptAllCatsAction = {
  type: "ADOPT_ALL_CATS"
}

const initialState = { 
  cats: [] 
}

const store = createStore(reducer, initialState)

store.dispatch(adoptAllCatsAction)

