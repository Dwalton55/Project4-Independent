class Api::PackagesController < ApplicationController
  def index
    @packages = Package.all
    render json: @packages
  end

  def show
    @package = Package.find(params[:id])
    render json: @package
  end

  def create
  end

  def update
  end

  def delete
  end
end
