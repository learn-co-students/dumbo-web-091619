// element.addEventListener("event_type", function(){})

let tacoButton = document.getElementById('taco')
let emojisUL = document.querySelector("#blobs")
// document.querySelector(".blobs.js-blobs")
let newEmojiForm = document.getElementById('emoji-form')
// let emojiInput = document.getElementById('emoji-input')


tacoButton.addEventListener("click", function(){
  // create a taco on the screen/DOM

  let emojiLI = document.createElement("li")
  emojiLI.innerText = "🌮"
  emojisUL.appendChild(emojiLI)
})


newEmojiForm.addEventListener("submit", submitHandler)

function submitHandler(e){
  e.preventDefault()
  let form = e.target
  let emojiInput = form.emoji
  // emoji is the name of the input
  let emojiString = emojiInput.value
  // let emojiString = e.target.emoji.value

  let emojiLI = document.createElement("li")
  emojiLI.innerText = emojiString
  emojisUL.appendChild(emojiLI)

}


// document.addEventListener("click", clickHandler)

// document.addEventListener("click", function(){
//   console.log("this is another way to add event listeners");
// })

// function clickHandler(){
//   console.log("goodbye");
// }
