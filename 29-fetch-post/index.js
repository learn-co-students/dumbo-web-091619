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
  let newFoxForm = document.getElementById("fox-form")

  newFoxForm.addEventListener("submit", (evt) => {
    evt.preventDefault()

    let newFoxName = evt.target.fox_name.value
    let newFoxImage = evt.target.fox_img.value

    // POST "http://localhost:3000/foxes"
    fetch("http://localhost:3000/foxes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({
        name: newFoxName,
        img_url: newFoxImage
      })
    })
    .then(r => r.json())
    .then((fox) => {
      turnJSONIntoLi(fox)
    })

  })


  button.addEventListener('click', (evt) => {
    fetch("http://localhost:3000/foxes/random")
      .then(res => res.json())
      .then(turnJSONIntoLi)

  })


  function turnJSONIntoLi(fox) {
    let newFoxLi = document.createElement("li")
    let newFoxImg = document.createElement("img")

    newFoxImg.src = fox.img_url
    newFoxImg.alt = fox.name
    newFoxLi.dataset.id = fox.id

    newFoxLi.append(newFoxImg)
    foxesUL.append(newFoxLi)
  }

})
