class User < ApplicationRecord
    validates :first_name, :last_name, :username, :email, :password_digest, presence: true
    validates :username, :email, uniqueness: true
    # validates :password, length: {minimum: 6, allow_nil: true} 

    has_many :reservations
    has_many :reviews
    has_many :favorites
    
    
end
