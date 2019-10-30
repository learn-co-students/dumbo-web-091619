// element.addEventListener("event_type", (evt) => {
  // Grab some variables based on evt.target

  // fetch(URL, {})
  // .then(r => r.json())
  // .then(response => {
  // DO WHATEVER WITH THE RESPONSE
  // })
// })

document.addEventListener("DOMContentLoaded", function(){
  let button = document.querySelector("#hello-button")
  let foxesUL = document.querySelector("#foxes")

  button.addEventListener('click', (evt) => {
    fetch("http://localhost:3000/foxes/random")
      .then(res => res.json())
      .then(fox => {
        let newFoxLi = document.createElement("li")
        let newFoxImg = document.createElement("img")

        newFoxImg.src = fox.img_url
        newFoxImg.alt = fox.name

        newFoxLi.append(newFoxImg)
        foxesUL.append(newFoxLi)
      })

  })

})
