@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :restaurant_id, :user_id, :overall_rating, :food_rating, :ambiance_rating, :value_rating, :noise_level, :body, :name
    end
end
