// element.addEventListener("event_type", function(){})
let tacoButton = document.getElementById('taco')
let emojisUL = document.querySelector("#blobs")
let allEmojiLis = document.querySelectorAll("ul#blobs li")
let newEmojiForm = document.getElementById('emoji-form')

allEmojiLis.forEach(function(emojiLi){
  // emojiLi.addEventListener("click", removeHelper)
})

tacoButton.addEventListener("click", function(){
  let emojiLi = document.createElement("li")
  emojiLi.dataset.emojiName = "taco"
  emojiLi.innerText = "🌮"
  emojisUL.append(emojiLi)

  // emojiLi.addEventListener("click", removeHelper)

})


newEmojiForm.addEventListener("submit", submitHandler)

function submitHandler(e){
  e.preventDefault()
  let form = e.target
  let emojiInput = form.emoji
  let emojiString = emojiInput.value
  // let emojiString = e.target.emoji.value

  let emojiLi = document.createElement("li")
  emojiLi.innerText = emojiString
  emojisUL.appendChild(emojiLi)

  // emojiLi.addEventListener("click", removeHelper)
}

function removeHelper(e){
  console.log(e.target);
  e.target.remove()
}

emojisUL.addEventListener("click", function(evt){
  if (evt.target.tagName === "LI") {
    console.log(evt.target.dataset.emojiName);
    evt.target.remove()
  }
})

// 1) Find a stable parent on the HTML
// 2) Add event listener on that parent
// 3) Use an if statement to see if you clicked on the children

// className, classList.contains(), matches, id, tagName

// 4) Add your event listener (probably on event.target)
