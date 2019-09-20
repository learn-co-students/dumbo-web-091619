# * Create a User class. The class should have these methods:
#   * `#initialize` which takes a username, bio and have
#   * a reader method for the username, bio
#   * `#tweets` that returns an array of Tweet instances
#   * `#post_tweet` that takes a message, creates a new tweet, and adds it to the user's tweet collection
class User
  attr_accessor :username, :bio
  @@all = []

  def initialize(username, bio)
    @username = username
    @bio = bio
    @@all << self
  end

  def tweets
    # 1) Pull all the tweets in the world out
    # 2) Only choose the ones I care about
    Tweet.all().select do |tweet|
      tweet.author == self
    end
  end

  def post_tweet(message)
    Tweet.new(self, message)
  end

  def contents_of_tweets
    self.tweets().map {|tweet| tweet.content }
  end

  def self.all
    @@all
  end








end
