//window



const dog = {

  name: 'winfield',
  favSnacks: ['cheese', 'peanut butter', 'carrots'],
  sayName: function() {
    return this.name
  },
  barkName: () => {
    return this.name + 'BARK!'
  },
  sayFavFoods: function() {
    // this is dog
    this.favSnacks.forEach(snack => {
      console.log(`${this.name} likes ${snack}`)
    })
  },
  sayFavFoodsNoArrow: function() {
    // this is dog
    this.favSnacks.forEach(  function(snack) {
      console.log(`${this.name} likes ${snack}`)
    })
  }
}


dog.sayName // function
dog.sayName()
dog.sayFavFoods()

function cb(snack) {
    console.log(`${this.name} likes ${snack}`)
}

dog.sayFavFoodsNoArrow()
