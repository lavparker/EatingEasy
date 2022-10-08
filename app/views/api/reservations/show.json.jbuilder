json.extract! @reservation, :id, :restaurant_id, :party_size, :date, :time
json.restaurantPhone @reservation.restaurant.phone_number
json.resName @reservation.restaurant.name
json.userName @reservation.user.username
json.photoUrl url_for(reservation.restaurant.photo)