json.extract! restaurant, :id, :name, :address, :details, :phone_number
json.photoUrl url_for(restaurant.photo) if restaurant.photo.attached? 