class Api::DisciplinesController < ApplicationController
  def index
    @disciplines = Discipline.all
    render json: @disciplines
  end

  def show
    @discipline = Discipline.find(params[:id])
    render json: @discipline
  end

  def create
    @discipline = Discipline.create(disc_params)
    render json: @discipline
  end

  def update
    @discipline = Discipline.find(params[:id])
    @discipline.update(disc_params)
    render json: @discipline
  end

  def delete
    @discipline = Discipline.find(params[:id]).destroy
  end

  def disc_params
    params.require(:discipline).permit(:name, :description)
  end
end
