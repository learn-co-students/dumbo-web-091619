let arr = [1,2,3,4,5]

console.log(arr);

function isItEven(arrArgument){
  // arrArgument = arrArgument || []
  // if (!arrArgument) {
  //   throw new Error("Not valid")
  // }
  if (arrArgument.length % 2 === 0){
    console.log("It is even")
    return "It is even!!!"
  } else {
    console.log("It is odd")
    return "It is odd!!!"
  }

  // return "This is the return value"

}

// console.log(isItEven(arr))
// Calling the function with an argument => log the return value

// console.log(isItEven())
// Calling the function without an argument => will execute the function with undefined as the parameter

// console.log(isItEven)
// Calling the variable => log the function definition

// FIRST CLASS FUNCTIONS: Functions are variables (that can be invoked or pass as a definition)
// let reinasVar = isItEven
// console.log( reinasVar([1,2]) )

function printNumber(num){
  console.log(`It is ${num}`);
  return num * 2
}

// arr.forEach(printNumber)

arr.forEach(function(num, idx, originalArray){
  console.log(`This is ${num} at index ${idx}.`);
})

// arr.forEach((num) => {console.log(num)})

// arr.forEach(console.log)

// let returnValue = arr.map(printNumber)
// console.log(returnValue);

debugger
