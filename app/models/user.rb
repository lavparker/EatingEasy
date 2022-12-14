class User < ApplicationRecord
    validates :first_name, :last_name, :username, :email, :password_digest, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true} 
    validates :session_token, presence: true, uniqueness: true 
    attr_reader :password

    has_many :reservations,
        foreign_key: :user_id,
        class_name: "Reservation"

    has_many :reviews,
        foreign_key: :user_id,
        class_name: "Review"

    has_many :favorites,
        foreign_key: :user_id,
        class_name: "Favorite"

    after_initialize :ensure_session_token

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)

        return nil if user.nil?
        user.is_password?(password) ? user : nil 
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64(64)
        self.save!
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= SecureRandom.base64(64)
    end
    

    
end
