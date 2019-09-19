# Key questions
* Which one is the best feed on twitter?
* What is domain modeling? Is it a Ruby thing?
  * What is a domain? What is a model?
* What is a has-many / belongs to relationship?
  * Is it the same as a one-to-many relationship?
  * What are some tools I can use for drawing one?
  * How can I figure out what kind of relationship I need?
    * Continent -< Countries
    * Owners -< Plants
    * Windows >— Buildings
  * How do I do this in Ruby?
  * What is a single source of truth, and why do I need one?
  * What is a private method and why are they handy?
    * Are they for security?
  * How can I have my methods call each other?
    * What is the implicit receiver?

# Deliverables
* Create a User class. The class should have these methods:
  * `#initialize` which takes a username, bio and have
  * a reader method for the username, bio
  * `#tweets` that returns an array of Tweet instances
  * `#post_tweet` that takes a message, creates a new tweet, and adds it to the user's tweet collection
* Create a Tweet class. The class should have these methods:
  * `Tweet#message` that returns a string
  * `Tweet#user` that returns an instance of the user class
  * `Tweet.all` that returns all the Tweets created.
  * `Tweet#username` that returns the username of the tweet's user


1. It's hard to call an instance method from a class method because you need an instance
2. It's easy to call a class method from an instance method because all instances belong to that class

For every (x), how many (y)?
For every (y), how many (x)?
