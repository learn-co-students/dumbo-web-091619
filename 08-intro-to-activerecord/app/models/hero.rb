class Hero < ActiveRecord::Base
  # CREATE
  # spiderman = Hero.new(name: "Spiderman", age: 20, alias: "Peter Parker")
  # spiderman.save

  # Hero.create(name: "Spiderman", age: 20, alias: "Peter Parker")


  # READ
  # Hero.find(1)
  # # takes in an ID

  # Hero.find_by(alias: "Peter Parker", age: 20)
  # # takes in a hash and return an instance

  # Hero.where(alias: "Peter Parker", age: 20)
  # # takes in a hash and return an array of instances


  # UPDATE
  # spiderman = Hero.find(1)
  # spiderman.age = 27
  # spiderman.save

  # spiderman = Hero.find(1)
  # spiderman.update(age: 27)
  # # takes in a hash and updates it


  # DELETE
  # Hero.destroy(id)

  # spiderman = Hero.find(1)
  # spiderman.destroy

  # Hero.destroy_all















end
