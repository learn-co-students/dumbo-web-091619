Fight.destroy_all
Hero.destroy_all
Villain.destroy_all

spiderman = Hero.create(name: "Spiderman", alias: "Peter Parker", age: 23)
superman = Hero.create(name: "Clark Kent", alias: "Superman", age: 74)
batman = Hero.create(name: "Batman", alias: "Bruce Wayne", age: 19)

doc_oc = Villain.create(name: "Doctor Octopus", age: 47, power: "Arms")
lex_luthor = Villain.create(name: "Lex Luthor", age: 5, power: "Brains")
joker = Villain.create(name: "Joker", age: 78, power: "Jokes")

Fight.create(location: "Forest Hills", hero_id: spiderman.id , villain_id: doc_oc.id)
Fight.create(location: "Gotham", hero_id: spiderman.id , villain_id: joker.id)
Fight.create(location: "Top of the Empire State Building", hero_id: superman.id, villain_id: joker.id)

puts "It's been seeded. "
