document.addEventListener("DOMContentLoaded", (e) => {
  let itemsOL = document.querySelector("#to-do-items")
  let newForm = document.getElementById('new-to-do')

  // DELEGATION

  itemsOL.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      let id = e.target.dataset.id
      fetch(`http://localhost:3000/to_do_items/${id}`, {
        method: "DELETE"
      })
      .then(r => r.json())
      .then(() => {
        e.target.parentElement.remove()
      })

    }

    if (e.target.matches("[type='checkbox']")) {
      let id = e.target.parentElement.dataset.id
      let doneBool = e.target.checked

      fetch(`http://localhost:3000/to_do_items/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          done: doneBool
        })
      })
      .then(r => r.json())
      .then(() => {
        e.target.parentElement.classList.toggle("done")
      })




    }

  })

  // END DELEGATION


  // READ WHEN THE PAGE LOADS
  fetch("http://localhost:3000/to_do_items")
  .then((r) => r.json())
  .then((toDoItemsArr) => {
    toDoItemsArr.forEach((todoItem) => {
       makeJSONToHTML(todoItem)
    })
  })

  // END READ


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
  // END CREATE

  function makeJSONToHTML(toDoItemJSON){
    // {} -> <li></li>

    // itemsOL.innerHTML += `<li class="item">
    //   <input id="to-do-item-1" type="checkbox" checked />
    //   <label for="to-do-item-1" class="js-title middle aligned content">Walk the cat</label>
    //   <button>×</button>
    // </li>`


    let jsonLI = document.createElement("li")
    jsonLI.className = "item"
    if (toDoItemJSON.done) {
      jsonLI.classList.add("done")
    }
    jsonLI.dataset.id = toDoItemJSON.id

    jsonLI.innerHTML += `<input data-id="${toDoItemJSON.id}" id="to-do-item-${toDoItemJSON.id}" type="checkbox" ${ toDoItemJSON.done ? "checked" : "" } />
    <label for="to-do-item-${toDoItemJSON.id}" class="js-title middle aligned content">${toDoItemJSON.title}</label>
    <button data-id="${toDoItemJSON.id}">×</button>`
    itemsOL.append(jsonLI)


    let deleteButton = jsonLI.querySelector("button")

    // deleteButton.addEventListener("click", (e) => {
    //
    //   fetch(`http://localhost:3000/to_do_items/${toDoItemJSON.id}`, {
    //     method: "DELETE"
    //   })
    //   .then(r => r.json())
    //   .then((emptyObj) => {
    //     jsonLI.remove()
    //   })
    //
    // })


    // let checkbox = jsonLI.querySelector(`#to-do-item-${toDoItemJSON.id}`)
    // checkbox.addEventListener("click", () => {
    //   toDoItemJSON.done = !toDoItemJSON.done
    //
    //   fetch(`http://localhost:3000/to_do_items/${toDoItemJSON.id}`, {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //       done: toDoItemJSON.done
    //     })
    //   })
    //   .then(r => r.json())
    //   .then((updatedResponse) => {
    //     jsonLI.classList.toggle("done")
    //   })
    //
    //
    //
    // })



















  }

})
