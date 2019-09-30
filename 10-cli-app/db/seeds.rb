3.times do
  User.create(name: Faker::Name.name, username: Faker::Name.first_name)
end

u1 = User.first
u2 = User.second
u3 = User.third

tof = Team.create(name: "Team of Friends", user: u1)
squad = Team.create(name: "The Squad", user: u1)

spiderman = Hero.create(name: "Spiderman", superpower: "Webs", age: 23)
superman = Hero.create(name: "Clark Kent", superpower: "Everything", age: 74)
batman = Hero.create(name: "Batman", superpower: "Being Rich", age: 19)

Roster.create(hero: spiderman, team: tof)
Roster.create(hero: superman, team: tof)

Roster.create(hero: spiderman, team: squad)
