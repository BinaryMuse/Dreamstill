class AddVoteSumToVideos < ActiveRecord::Migration
  def self.up
    add_column :videos, :vote_sum, :integer
  end

  def self.down
    remove_column :videos, :vote_sum
  end
end
