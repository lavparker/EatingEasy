 @restaurants.each do |restaurant|
    json.set! restaurant.id do
        json.extract! restaurant, :id, :name, :address, :details, :phone_number, :cuisine
        json.photoUrl url_for(restaurant.photo) if restaurant.photo.attached? 
    end
end

