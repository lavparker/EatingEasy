class Reservation < ApplicationRecord
    validates :restaurant_id, :first_name, :last_name, :phone_number, :email, 
        :date, :time, :party_size, :special_requests, :user_id, presence: true
    # validates :restaurant_id, uniqueness: true 
    
    belongs_to :user
    belongs_to :restaurant
end
