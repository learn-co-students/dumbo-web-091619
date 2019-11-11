class Instructor extends Person{
  static allArray = []

  constructor(name, fullName){
    // `this` inside of a constructor is the instance
    super()
    this.name = name
    this.fullName = fullName
    Instructor.allArray.push(this)
  }

  set legal(name){
    this.legalName = name
  }

  get allName(){
    return `${this.name} ${this.fullName}`
  }

  introduce(){
    // `this` is the instance
    return `Hello, I am ${this.fullName}.`
  }

  dance(){
    return super.dance() + "with a stranger."
  }

  static all(){
    return "Here are all of my instructors!"
  }

}


let eric = new Instructor("Eric", "Hyeok Jung Kim")
let otha = new Instructor("Otha", "Otha Hernandez")
let gracie = new Instructor("Gracie", "Gracie McGuire")








//
// function globalIntroduction(){
//   console.log(this);
//   return `I am ${this.fullName}!!!`
// }
//
// const otha = {
//   fullName: "Otha Hernandez",
//   name: "Otha",
//   introduce: globalIntroduction
// }
//
// const eric = {
//   fullName: "Hyeok Jung Kim",
//   name: "Eric",
//   introduce: globalIntroduction
// }
//
// const gracie = {
//   fullName: "Gracie McGuire",
//   name: "Gracie",
//   introduce: globalIntroduction
// }

// console.log(otha.introduce())
// console.log(eric.introduce())
// console.log(gracie.introduce())

// console.log(eric.introduce);
// console.log(gracie.introduce);

// console.log(eric.introduce() === gracie.introduce())
// console.log(eric.introduce === otha.introduce)



















//
