import React from 'react'; 

class UsersShow extends React.Component{

    componentDidMount(){
        this.props.getReservations(); 
    }

    render(){
        let confirm = "i'm working"
        return(

            <div className='reservations-index'>
                <h2>Current Reservations</h2>
                {confirm}
            </div>
        )
    }
}

export default UsersShow;