class Api::PhotosController < ApplicationController

  def index 
    @photos = Photo.all
    render :index
  end

  def show
    # debugger
    @photo = Photo.find(params[:id])
    render :show
  end

  def create 
    photo = Photo.new(photo_params)

    if photo.save
      render :show
    else
      render json: photo.errors.full_messages, status: 422
    end
  end

  def update
    @photo = Photo.find(params[:id])

    if @photo.update(photo_params)
      render :show
    else
      render json: ["photos were not update"], status: 404
    end
  end

  def destroy 
    @photo = Photo.find(params[:id])
    if @photo.destroy
      render :show
    else
      render json: ["photo not destroyed"], status: 401
    end
  end

  private
  def photo_params
    params.require(:photo).permit(:title, :description)
  end
end