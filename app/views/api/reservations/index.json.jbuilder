@reservations.each do |reservation|
    json.set! reservation.id do
        json.extract! reservation, :id, :restaurant_id, :user_id, :party_size, :phone_number, :date, :time
        json.resName reservation.restaurant.name
        json.photoUrl url_for(reservation.restaurant.photo) if reservation.photo.attached?
    end
end