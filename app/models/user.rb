class User < ActiveRecord::Base
  has_many :video
  has_many :video_votes
  has_many :voted_videos, :through => :video_votes, :source => :video
end
