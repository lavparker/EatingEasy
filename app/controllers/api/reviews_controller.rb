class Api::ReviewsController < ApplicationController
    # skip_before_action :verify_authenticity_token
    # before_action :require_logged_in!, only: [:index, :create, :show, :update, :destroy]

    def index
        @review = Review.all
        render :index
    end
    

    def show
        @review = Review.find(params[:id])
        render :show
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find(params[:id])

        if @review && @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])

        if @review
            @review.destroy
            render :show
        else
            render json: ['Error: This deletion request could not be completed'], status: 422
        end
    end
    
    private
    def review_params
        params.require(:review).permit(:restaurant_id, :user_id, :overall_rating, :food_rating, :ambiance_rating, :value_rating, :noise_level, :body)
    end
        
end
