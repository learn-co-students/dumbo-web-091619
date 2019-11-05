// Code your solution here

let shoeListUL = document.querySelector("#shoe-list")

let shoeImg = document.getElementById('shoe-image')
let shoeNameH4 = document.getElementById('shoe-name')
let shoeDescriptionP = document.getElementById('shoe-description')
let shoePriceSmall = document.getElementById('shoe-price')
let formContainerDiv = document.getElementById('form-container')
let reviewsUl = document.getElementById('reviews-list')

fetch("http://localhost:3000/shoes")
.then(r => r.json())
.then((shoeArr) => {
  shoeArr.forEach((shoe) => {

    let newShoeLi = document.createElement("li")

    newShoeLi.className = 'list-group-item'
    newShoeLi.innerText = shoe.name

    shoeListUL.append(newShoeLi)


    newShoeLi.addEventListener("click", () => {
      shoeImg.src = shoe.image
      shoeNameH4.innerText = shoe.name
      shoeDescriptionP.innerText = shoe.description
      shoePriceSmall.innerText = shoe.price
      reviewsUl.innerHTML = ""

      shoe.reviews.forEach((review) => {
        let reviewLi = document.createElement("li")
        reviewLi.className = "list-group-item"
        reviewLi.innerText = review.content

        reviewsUl.append(reviewLi)
      })

      formContainerDiv.innerHTML = `<form id="new-review">
        <div class="form-group">
          <textarea class="form-control" id="review-content" rows="3"></textarea>
          <input type="submit" class="btn btn-primary"></input>
        </div>
      </form>`


      let reviewForm = formContainerDiv.querySelector("form")

      reviewForm.addEventListener("submit", (event) => {
        event.preventDefault()
        let newReview = event.target["review-content"].value

        fetch(`http://localhost:3000/shoes/${shoe.id}/reviews`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(
            {
              content: newReview
            }
          )
        })
        .then(res => res.json())
        .then((reviewObj) => {

          let reviewLi = document.createElement("li")
          reviewLi.className = "list-group-item"
          reviewLi.innerText = reviewObj.content

          reviewsUl.append(reviewLi)
          // shoe.reviews.push(reviewObj)
        })






      })



    })



  })



  // DISPLAY THE FIRST SHOE OVER HERE BEGIN
  let shoe = shoeArr[0]
  shoeImg.src = shoe.image
  shoeNameH4.innerText = shoe.name
  shoeDescriptionP.innerText = shoe.description
  shoePriceSmall.innerText = shoe.price
  reviewsUl.innerHTML = ""

  shoe.reviews.forEach((review) => {
    let reviewLi = document.createElement("li")
    reviewLi.className = "list-group-item"
    reviewLi.innerText = review.content

    reviewsUl.append(reviewLi)
  })

  formContainerDiv.innerHTML = `<form id="new-review">
    <div class="form-group">
      <textarea class="form-control" id="review-content" rows="3"></textarea>
      <input type="submit" class="btn btn-primary"></input>
    </div>
  </form>`


  let reviewForm = formContainerDiv.querySelector("form")

  reviewForm.addEventListener("submit", (event) => {
    event.preventDefault()
    let newReview = event.target["review-content"].value

    fetch(`http://localhost:3000/shoes/${shoe.id}/reviews`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(
        {
          content: newReview
        }
      )
    })
    .then(res => res.json())
    .then((reviewObj) => {

      let reviewLi = document.createElement("li")
      reviewLi.className = "list-group-item"
      reviewLi.innerText = reviewObj.content

      reviewsUl.append(reviewLi)
      // shoe.reviews.push(reviewObj)
    })

  })

  // DISPLAY THE FIRST SHOE OVER HERE END

})
