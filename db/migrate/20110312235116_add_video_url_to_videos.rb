class AddVideoUrlToVideos < ActiveRecord::Migration
  def self.up
    add_column :videos, :video_url, :string
  end

  def self.down
    remove_column :videos, :video_url
  end
end
