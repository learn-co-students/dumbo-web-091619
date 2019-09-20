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
  # `#liked_tweets` that returns a collection of all the tweets this user has liked

  def likes
    # This will return an array of Like instances
    Like.all.select do |like|
      like.user() == self
    end
  end

  def liked_tweets
    # This will return an array of Tweet instances
    self.likes.map { |like| like.tweet }
    # likes.map(&:tweet)
  end

  def like_tweet(tweet_instance)
    Like.new(self, tweet_instance)
  end

  def liked_tweets_contents
    self.liked_tweets.map { |tweet| tweet.content  }
    # self.liked_tweets.map(&:content)
  end


























end
