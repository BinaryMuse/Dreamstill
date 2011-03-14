class CreateVideos < ActiveRecord::Migration
  def self.up
    create_table :videos do |t|
      t.string :title
      t.text :description
      t.string :embed_code
      t.string :thumbnail_url
      t.datetime :released
      t.integer :user_id

      t.timestamps
    end
  end

  def self.down
    drop_table :videos
  end
end
