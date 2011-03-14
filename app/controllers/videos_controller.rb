class VideosController < ApplicationController
  
#  def index
#    @videos = Video.all
#  end

  def show
    @video = Video.find(params[:id])
  end

  def new
    @video = Video.new
  end

#  def edit
#    @video = Video.find(params[:id])
#  end

  def create
    @video = Video.new(params[:video])

    respond_to do |format|
      if @video.save
        format.html { redirect_to(@video, :notice => 'Article was successfully updated.') }
      else
        format.html { render :action => "new" }
      end
    end
  end

#  def update
#    @video = Video.find(params[:id])

#    respond_to do |format|
#      if @video.update_attributes(params[:video])
#        format.html #{ redirect_to(@article, :notice => 'Article was successfully updated.') }
#      else
#        format.html { render :action => "edit" }
#      end
#    end
#  end

#  def destroy
#    @video = Video.find(params[:id])
#    @video.destroy

#    respond_to do |format|
#      format.html #{ redirect_to(articles_url) }
#    end
#  end
end
