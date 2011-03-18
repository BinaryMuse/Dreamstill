class CreateVideoVotes < ActiveRecord::Migration
  def self.up
    create_table :video_votes do |t|
      t.integer :user_id
      t.integer :video_id

      t.timestamps
    end
  end

  def self.down
    drop_table :video_votes
  end
end
