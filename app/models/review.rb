# class Review < ApplicationRecord
#     validates :user_id, :restaurant_id, :overall_rating, :food_rating, :ambiance_rating, :value_rating, :noise_level, :body, presence: true
#     validates :overall_rating, :food_rating, :ambiance_rating, :value_rating, :noise_level, inclusion: {in:[1,2,3,4,5], message: "Please provide rating from 1-5 stars"}
#     validates :body, length: {minimum: 10, maximum: 1000}
    

#     belongs_to :user
#     belongs_to :restaurant 
# end
