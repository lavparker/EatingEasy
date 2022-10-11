export const getReservations = () => {
    return(
        $.ajax({
            url: '/api/reservations',
            method: 'GET'
        })
    )
}

export const getReservation = id =>{
    return(
        $.ajax({
            url: `/api/reservations/${id}`,
            method: 'GET'
        })
    )
}

export const createReservation = reservation =>{
    console.log(reservation)
    return(
        $.ajax({
            url: '/api/reservations',
            method: 'POST',
            data: { reservation }
        })
    )
}

export const updateReservation = reservation =>{
    return(
        $.ajax({
            url: `/api/reservations/${id}`,
            method: 'PATCH',
            data: { reservation }
        })
    )
}

export const deleteReservation = reservationId =>{
    return(
        $.ajax({
            url: `/api/reservations/${reservationId}`,
            method: 'DELETE',
            data: { reservationId }

        })
    )
}

