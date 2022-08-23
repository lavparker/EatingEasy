@restaurants.each do |restaurant|
    json.set! restaurant.id do
        json.extract! restaurant, :id, :name, :address, :details, :phone_number
        json.photoUrl url_for(restaurant.photo) if restaurant.photo.attahced? 
    end
end

