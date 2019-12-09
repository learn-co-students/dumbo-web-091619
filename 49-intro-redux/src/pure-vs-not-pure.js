

let potato = 5 // side effect

function notPure(num){
  return num + potato
}

function pure(num, otherNum){
  const addedUpNumbers = num + otherNum
  return addedUpNumbers
}

function notPure(state){
  return state.num++
}

function alsoNotPure(){
  potato = 7
}

