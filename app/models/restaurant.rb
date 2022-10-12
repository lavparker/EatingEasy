class Restaurant < ApplicationRecord
    validates :name, :address, :phone_number, :cuisine, :details, :hours, :dress_code, :website, :dining_style, presence: true 
    validates :address, :phone_number, uniqueness: true

    has_many :reservations
    has_many :reviews 
    has_many :favorites 

    has_one_attached :photo
    
end

