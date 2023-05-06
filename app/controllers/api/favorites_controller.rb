class Api::FavoritesController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :require_logged_in!, only: [:index, :create, :show, :destroy]
    def index
        @favorites = current_user.favorites
        render :index
    end
    
    def create
        @favorite = Favorite.new(favorite_params)
        if @favorite.save
            render :show
        else
            render json: @favorite.errors.full_messages, status: 422
        end
       
    end
    
    def show 
        @favorite = Favorite.find(params[:id])
        render :show
    end

    def destroy
        @favorite = Favorite.find(params[:id])
        @favorite.destroy
        
    end

    private 

    def favorite_params 
        params.require(:favorite).permit(:user_id, :restaurant_id)
    end
    
end
