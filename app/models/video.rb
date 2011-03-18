class Video < ActiveRecord::Base
  validates :video_url, :presence => true
  validates :title, :presence => true
  
  belongs_to :user 
  has_many :video_votes
  has_many :voted_users, :through => :video_votes, :source => :user
  
  def vote_sum
    video_votes.sum(:value)
  end
end
