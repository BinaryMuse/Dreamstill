class VideoVotesController < ApplicationController
  def create       
      @video = Video.find(params[:video_id])
      @vote = @video.video_votes.new
      if params[:type] == "up"
        @vote.value = 1
      else
        @vote.value = -1
      end
      
      if @vote.save
        respond_to do |format|
          format.html { redirect_to @video }
          format.js
        end
      else
        respond_to do |format|
          format.html { redirect_to @video }
          format.js {render 'fail_create.js.erb'}
        end
      end
  end
end
