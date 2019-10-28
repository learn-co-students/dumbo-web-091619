// *** Read a DOM Element *** //

// let emojisUL = document.getElementById('blobs')
let emojisUL = document.querySelector("#blobs")

let allBadEmojisLIs = emojisUL.querySelectorAll(".bad")
let badEmojisLIs = document.getElementsByClassName("bad")
// allBadEmojisLIs[2]


// *** Create a DOM Element *** //

// 1) Create a blank element
let blankLi = document.createElement("li")
// 2) Draw / Razzmatazz
blankLi.innerText = "🍓"
blankLi.id = "strawberry"
// 3) Find a place on the DOM to append
emojisUL.prepend(blankLi)


// emojisUL.innerHTML += "<li>🐕</li>"
// Drawback:
// 1) Each child in the parent will lose event listeners
// 2) Prone to HTML injection


// *** Update HTML Element *** //

let headingH1 = document.querySelector("h1")
headingH1.innerText = "Here is a nice list"
headingH1.id = "first-heading"
headingH1.style["color"] = "green"
headingH1.style.backgroundColor = "red"


// *** Delete HTML element *** //

document.querySelector(".bad").remove()

allBadEmojisLIs.forEach(function(li){
  li.remove()
})
