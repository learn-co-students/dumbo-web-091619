document.addEventListener("DOMContentLoaded", (e) => {
  let itemsOL = document.querySelector("#to-do-items")
  let newForm = document.getElementById('new-to-do')

  // READ WHEN THE PAGE LOADS
  fetch("http://localhost:3000/to_do_items")
  .then((r) => r.json())
  .then((toDoItemsArr) => {
    toDoItemsArr.forEach((todoItem) => {
       makeJSONToHTML(todoItem)
    })
  })

  // CREATE WHEN THE FORM SUBMITS
  newForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let newTodoItemName = e.target.title.value

    fetch("http://localhost:3000/to_do_items", {
      method: 'POST',
      body: JSON.stringify({
        title: newTodoItemName,
        done: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(r => r.json())
    .then((createdJson) => {
      makeJSONToHTML(createdJson)
    })
  })

  function makeJSONToHTML(toDoItemJSON){


    // itemsOL.innerHTML += `<li class="item">
    //   <input id="to-do-item-1" type="checkbox" checked />
    //   <label for="to-do-item-1" class="js-title middle aligned content">Walk the cat</label>
    //   <button>×</button>
    // </li>`


    let jsonLI = document.createElement("li")
    jsonLI.className = "item"

    jsonLI.innerHTML += `<input id="to-do-item-${toDoItemJSON.id}" type="checkbox" ${ toDoItemJSON.done ? "checked" : "" } />
    <label for="to-do-item-${toDoItemJSON.id}" class="js-title middle aligned content">${toDoItemJSON.title}</label>
    <button>×</button>`
    itemsOL.append(jsonLI)

    let checkbox = jsonLI.querySelector(`#to-do-item-${toDoItemJSON.id}`)
    console.log(checkbox);

  }

})
