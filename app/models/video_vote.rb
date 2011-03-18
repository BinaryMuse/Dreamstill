class VideoVote < ActiveRecord::Base
  belongs_to :user
  belongs_to :video
  
  after_create :update_vote_sum
  
  private

    def update_vote_sum
      video.update_attributes!(:vote_sum => video.vote_sum + value)
    end
end
