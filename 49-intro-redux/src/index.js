import { createStore } from 'redux';
import reducer from './reducer'
import actionCreators from './actionCreators'

const store = createStore(reducer)//, initialState)


const throwAwayAllCakesBecauseTheyAreMoldy = {
  type: "THROW_AWAY_ALL_CAKES_BECAUSE_THEY_ARE_MOLDY"
}

// const addFrenchCakeAction = cakeActionCreator("Black Forest Gatêau")
// const addMexicanCakeAction = cakeActionCreator("Tres Leches")
// const addTurkishCakeAction = cakeActionCreator("Turkish Tiger")

store.dispatch(actionCreators.cakeActionCreator("Black Forest Gatêau"))
store.dispatch(throwAwayAllCakesBecauseTheyAreMoldy)
store.dispatch(actionCreators.cakeActionCreator("Tres Leches"))
store.dispatch(actionCreators.cakeActionCreator("Turkish Tiger"))
store.dispatch(throwAwayAllCakesBecauseTheyAreMoldy)

console.log(store.getState())



// const addFrenchCakeAction = {
//   type: "ADD_CAKE",
//   cake: {
//     name: "Black Forest Gatêau"
//   }
// }

// const addMexicanCakeAction = {
//   type: "ADD_CAKE",
//   cake: {
//     name: "Tres Leches"
//   }
// }
// console.log(store)


