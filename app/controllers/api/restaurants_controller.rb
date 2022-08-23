# create_table "restaurants", force: :cascade do |t|
#     t.string "name", null: false
#     t.string "address", null: false
#     t.integer "phone_number", null: false
#     t.string "cuisine", null: false
#     t.string "details", null: false
#     t.text "additional_features"
#     t.string "hours", null: false
#     t.string "dress_code", null: false
#     t.string "website", null: false
#     t.text "dining_style", null: false
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#     t.index ["address"], name: "index_restaurants_on_address", unique: true
#     t.index ["cuisine"], name: "index_restaurants_on_cuisine"
#     t.index ["name"], name: "index_restaurants_on_name"
#     t.index ["phone_number"], name: "index_restaurants_on_phone_number", unique: true
#   end

class Api::RestaurantsController < ApplicationController
    def index
        @restaurants = Restaurant.all
        render :index
    end

    def create 
        @restaurant = Restaurant.new(restaurant_params)

        if @restaurant && @restaurant.save!
            render :show
        else
            render json: @restaurant.errors.full_messages, status: 401
        end
    end

    def show
        @restaurant = Restaurant.find(params[:id])

        if @restaurant
            render :show
        else
            render json: ["restaurant not found"], status 404
        end
    end

    # private 
    # def restaurant_params
    #     params.require(:restaurant).permit(:name, :address, :cuisine, :phone_number)
    # end
 
end
