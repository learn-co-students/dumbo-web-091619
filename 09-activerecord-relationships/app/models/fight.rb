class Fight < ActiveRecord::Base
  belongs_to :hero
  belongs_to :villain

  # def villain
  #   Villain.find(self.villain_id)
  # end
  #
  # def hero
  #   Hero.find(self.hero_id)
  # end

end
