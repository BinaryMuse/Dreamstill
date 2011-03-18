class AddVideoVotesCountToVideos < ActiveRecord::Migration
  def self.up
    add_column :videos, :video_votes_count, :integer, :default => 0
    
    Video.reset_column_information
        Video.find(:all).each do |p|
          p.update_attribute :video_votes_count, p.video_votes.length
        end
      end

  def self.down
    remove_column :videos, :video_votes_count
  end
end
