// element.addEventListener("event_type", function(){})
let tacoButton = document.getElementById('taco')
let emojisUL = document.querySelector("#blobs")
let newEmojiForm = document.getElementById('emoji-form')


tacoButton.addEventListener("click", function(){
  let emojiLI = document.createElement("li")
  emojiLI.innerText = "🌮"
  emojisUL.appendChild(emojiLI)
})


newEmojiForm.addEventListener("submit", submitHandler)

function submitHandler(e){
  e.preventDefault()
  let form = e.target
  let emojiInput = form.emoji
  let emojiString = emojiInput.value
  // let emojiString = e.target.emoji.value

  let emojiLI = document.createElement("li")
  emojiLI.innerText = emojiString
  emojisUL.appendChild(emojiLI)
}
