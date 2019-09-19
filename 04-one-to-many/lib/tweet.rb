# * Create a Tweet class. The class should have these methods:
#   * `Tweet#message` that returns a string
#   * `Tweet#author` that returns an instance of the user class
#   * `Tweet.all` that returns all the Tweets created.
#   * `Tweet#username_of_author` that returns the username of the tweet's user

class Tweet
  attr_reader :author, :timestamp, :content
  # class variable
  @@all = []

  def initialize(author, content)
    # author is a user instance
    @author = author
    @content = content
    @timestamp = Time.now
    @@all << self
  end

  def username_of_author
    self.author().username()
  end

  # class method
  def self.all
    @@all
  end














end
