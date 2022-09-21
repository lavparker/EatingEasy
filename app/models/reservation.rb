class Reservation < ApplicationRecord
    validates :restaurant_id, :first_name, :last_name, :phone_number, :email, 
        :date, :time, :party_size, :special_requests, presence: true
    validates :restaurant_id, uniqueness: true 
    
    belongs_to :user, optional: true 
    belongs_to :restaurant
end
