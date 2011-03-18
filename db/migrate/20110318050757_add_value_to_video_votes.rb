class AddValueToVideoVotes < ActiveRecord::Migration
  def self.up
    add_column :video_votes, :value, :integer
  end

  def self.down
    remove_column :video_votes, :value
  end
end
