let addToy = false

document.addEventListener("DOMContentLoaded", ()=>{
  const addBtn = document.querySelector('#new-toy-btn')
  const toyForm = document.querySelector('.container')
  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addToy = !addToy
    if (addToy) {
      toyForm.style.display = 'block'
      toyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        postToy(e.target);
      })
    } else {
      toyForm.style.display = 'none'
    }
  })
})

// Three Pillars 
// When X event happens (Event Listeners)
// I want to do Y fetch (Getting/sending of information to the API/database)
// And then slap Z on (off) the DOM (Changing how our website looks like)

// Mise en place
// Find your process and stick to it (at first)






// Get toys
function getToys(){
  return fetch('http://localhost:3000/toys')
    .then( res => res.json());
}

// button class (like-button)
// p with likes
// img tag with src (toy image), class (toy-avatar)
// h2 tag with toys name
// Make div class of card (setAttribute)

// Render toys
function renderToys(toy){
  // Tags
  let toyCollection = document.querySelector('#toy-collection');
  let divCard = document.createElement('div');
  let h2 = document.createElement('h2');
  let img = document.createElement('img');
  let p = document.createElement('p');
  let button = document.createElement('button');
  // Set Attributes
  divCard.setAttribute('class', 'card');
  p.setAttribute('id', toy.id);
  img.setAttribute('class', 'toy-avatar' );
  img.setAttribute('src', toy.image)
  button.setAttribute('class', 'like-btn');

  // inner text stuff
  button.innerText = 'Like';
  p.innerText = `${toy.likes} likes`;
  h2.innerText = toy.name;

  // append
  divCard.append(h2, img, p, button);
  toyCollection.append(divCard);

  button.addEventListener('click', (e) => {
    like(e);
    // debugger;
  });
  
}

function postToy(toy){
  fetch('http://localhost:3000/toys', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      "name": toy.name.value,
      "image": toy.image.value,
      "likes": 100
    })
  })
  .then( res => res.json())
  .then( toyObj =>{
    renderToys(toyObj);
  })
}

function like(toy){
  let id = toy.target.previousElementSibling.id
  let addLike = parseInt(toy.target.previousElementSibling.innerText) + 1;
  // debugger
  fetch(`http://localhost:3000/toys/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      "likes": addLike 
    })
  })
  .then( res => res.json())
  .then( thingy => {
    toy.target.previousElementSibling.innerText = `${thingy.likes} likes`
  })
}

// Post Fetch
// Second argument object
// event listener





// patch 

getToys().then( toys => {
  toys.forEach(renderToys)
})


















































// // Fetch
// function getToys(){
//   return fetch('http://localhost:3000/toys')
//     .then( function(response){
//       return response.json();
//     });
// }
// function renderToys(toy){
//   let toyCollection = document.querySelector('#toy-collection');
//   // Create html elements
//   // Set attributes
//   // h2
//   let h2 = document.createElement('h2');
//   // img (setAttribute src)
//   let img = document.createElement('img');
//   img.setAttribute('src', toy.image);
//   img.setAttribute('class', 'toy-avatar')
//   // p
//   let p = document.createElement('p');
//   p.innerHTML = `${toy.likes} likes`
//   // button (setAttribute class=like-btn)
//   let button = document.createElement('button');
//   button.setAttribute('class', 'like-button');
//   button.setAttribute('id', toy.id);
//   button.innerHTML = 'Like'
// // Patch Event listener
//   button.addEventListener('click', (e) => {
//     like(e)
//   });
//   // divCard (setAttribute class=card)
//   let divCard = document.createElement('div');
//   divCard.setAttribute('class', 'card')
//   // Append to dom
//   divCard.append(h2, img, p, button);
//   toyCollection.append(divCard);
// }

// // Post fetch
// function postToy(e){
//   e.preventDefault();
//   fetch('http://localhost:3000/toys', {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify({
//       "name": e.target.name.value,
//       "image": e.target.image.value,
//       "likes": 0
//     })
//   })
//   .then( res => res.json())
//   .then(renderToys);
// }

// // Patch fetch
// function like(e){
//   let addLike = parseInt(e.target.previousElementSibling.innerText) + 1
//   fetch(`http://localhost:3000/toys/${e.target.id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify({
//       likes: addLike
//     })
//   })
//   .then( res => res.json())
//   .then( toy => {
//     e.target.previousElementSibling.innerText = `${toy.likes} likes`
//   });
// }



// getToys().then( function(toysObject){
//   toysObject.forEach((toy) => {
//     renderToys(toy); 
//   });
// })