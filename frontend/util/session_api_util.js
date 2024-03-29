export const getUsers = () => {
    return(
        $.ajax({
            url: '/api/users',
            method: 'GET'
        })
    )
}

export const getUser = id =>{
    return(
        $.ajax({
            url: `/api/users/${id}`,
            method: 'GET'
        })
    )
}

export const postUser = user =>{
    return(
        $.ajax({
            url: '/api/users',
            method: 'POST',
            data: { user }
        })
    )
}

export const postSession = user =>{
    return(
        $.ajax({
            url: '/api/session',
            method: 'POST',
            data: { user }
        })
    )
}


export const  deleteSession = () => {
    return(
        $.ajax({
            url: '/api/session',
            method: 'DELETE'
        })
    )
}

