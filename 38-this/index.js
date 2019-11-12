// Regular functions determine `this` during the function execution
// Arrow functions determine `this` during the function definition

// `bind` is a method called on a function definition that returns a function definition with `this` changed
// `call` is a method called on a function definition that will invoke that function with `this` changed
// `apply` is a method called on a function definition that will invoke that function with `this` changed

const globalIntroduction = () => {
  console.log(this);
  return `I am ${this.fullName}`
}

const otha = {
  fullName: "Otha Hernandez",
  name: "Otha",
  introduce: globalIntroduction
}

const gracie = {
  fullName: "Gracie McGuire",
  name: "Gracie",
  introduce: globalIntroduction
}

const eric = {
  fullName: "Hank Kim",
  name: "Eric",
  introduce: globalIntroduction
}

console.log(eric.introduce())

let methodName = eric.introduce
console.log(methodName())





document.addEventListener("click", function(event){
  // console.log(this);
  // this -> document/event.currentTarget
})

let arr = [1, 4, 3, 4]
arr.forEach(function(element) {
  // console.log(this);
  // this -> window
})

window.fetch("https://dog.ceo/api/breeds/image/random")
.then(function(res){
  // console.log(this);
  // this -> window
})





class ButtonJS {

  constructor(color) {
    // `this` inside of a constructor is the instance
    this.color = color
    this.buttonTag = document.createElement("button")
    this.buttonTag.innerText = `Color: ${this.color}`
    document.body.append(this.buttonTag)
    let theInstance = this
    this.buttonTag.addEventListener("click", this.handleClick)
    // this.buttonTag.addEventListener("click", this.handleClick.bind(theInstance))
  }

  handleClick = () => {
    document.body.style.backgroundColor = this.color
  }

}


let button1 = new ButtonJS("Blue")
let button2 = new ButtonJS("BlanchedAlmond")
let button3 = new ButtonJS("DarkOliveGreen")

 document.body.style.backgroundColor = "BlanchedAlmond"
