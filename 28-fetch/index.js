// fetch(URL, {})
// .then(r => r.json())
// .then(response => {
// DO WHATEVER WITH THE RESPONSE
// })


// element.addEventListener("event_type", (evt) => {
  // Grab some variables based on evt.target

  // fetch(URL, {})
  // .then(r => r.json())
  // .then(response => {
  // DO WHATEVER WITH THE RESPONSE
  // })
// })


document.addEventListener("DOMContentLoaded", function(){
  let button = document.querySelector("button");
  let dogUl = document.getElementById('dogs')

  button.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then((resObj) => {
      console.log(resObj);
      let dogLi = document.createElement("li")
      let dogImg = document.createElement("img")

      dogImg.src = resObj.message
      dogImg.alt = "good-boy"

      dogLi.append(dogImg)
      dogUl.append(dogLi)

    })
    .catch((error) => {
      console.error(error);
    })
  })




})
