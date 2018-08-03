class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
    render json: @posts
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
    
  end

  def create
    puts post_params
    @post = Post.create!(post_params)
    render json: @post
     
  end

  def update
    @post = Post.find(params[:id])
    @post.update(post_params)
    render json: @user
  end

  def destroy
    @post = Post.find(params[:id]).destroy
    render status: :ok
  end

  private
      def post_params
        params.permit(:body, :user_id, :discipline_id)
      end
end
