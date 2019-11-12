function globalIntroduction(){
  return `I am ${this.fullName}!`
}

const otha = {
  fullName: "Otha Hernandez",
  name: "Otha",
  introduce: globalIntroduction
}

const eric = {
  fullName: "Hyeok Jung Kim",
  name: "Eric",
  introduce: globalIntroduction
}

const gracie = {
  fullName: "Gracie McGuire",
  name: "Gracie",
  introduce: globalIntroduction
}





















// What is this?

document.addEventListener("DOMContentLoaded", function(event){
})

let arr = [1, 4, 3, 4]
arr.forEach(function(element) {
})

fetch("https://dog.ceo/api/breeds/image/random")
.then(function(){
})
