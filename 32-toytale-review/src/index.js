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

// *REMEMBER*
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Three Pillars of JS
// When X event happens (Event Listeners)
// I want to do Y fetch (Getting/sending of information to the API/database)
// And then slap Z on (off) the DOM (Changing how our website looks like)

// Mise en place (Everything in it's place)
// Find your process and stick to it (at first)

// Break things down into steps
// Those steps turn into more steps..
// Which in turn turn into more steps!
// Then you'll have code at some point.
// It's not magic! It's a process. 
// When in doubt DEBUG! (With debugger)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Get toys
function getToys(){
  return fetch('http://localhost:3000/toys')
    .then( res => res.json());
}

// The deliverables wants us to make:
// button class (like-button)
// p with likes
// img tag with src (toy image), class (toy-avatar)
// h2 tag with toys name
// Make div class of card (setAttribute)
// Post a new toy (we are gonna need a post fetch and an event listener for this)
// Add likes (we are gonne need a fetch with a patch method for this, also and event listener)

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
  });
  
}

// Time to POST
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

// Time to PATCH
function like(toy){
  let id = toy.target.previousElementSibling.id
  let addLike = parseInt(toy.target.previousElementSibling.innerText) + 1;
  // REMEMBER: When posting and patching, fetch takes 2 arguments.
  // the URL and an object {}
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

getToys().then( toys => {
  toys.forEach(renderToys)
})

