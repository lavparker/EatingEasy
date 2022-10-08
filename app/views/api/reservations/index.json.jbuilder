@reservations.each do |reservation|
    json.set! reservation.id do
        json.extract! reservation, :id, :restaurant_id, :party_size, :date, :time
        json.resName reservation.restaurant.name
        json.photoUrl url_for(reservation.restaurant.photo)
    end
end