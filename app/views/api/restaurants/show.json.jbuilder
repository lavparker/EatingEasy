json.restaurant do
    json.partial! "./api/restaurants/restaurant", restaurant: @restaurant
        json.extract! @restaurant, :id, :name, :address, :details, :phone_number, 
:cuisine, :additional_features, :hours, :dress_code, :website, :dining_style
end

