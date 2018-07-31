class Api::PackagesController < ApplicationController
  def index
    @packages = []
    
    Package.all.each do |package|
      @packages.push ({
        id: package.id,
        name: package.name,
        classes: package.programs
      })
    end

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
