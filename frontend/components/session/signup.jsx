import React from 'react';

class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type){
        return(e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
        .then(() => this.props.history.push('/reservations'))
    }
    render() {
        return(
            <div className='session-form'>
                <h2>Sign Up!</h2>
                <form >
                    <label> First Name: 
                        <input 
                            type="text"
                            value= {this.state.firstName}
                            onChange={this.handleInput('firstName')}
                             />
                    </label>
                    <label> Last Name:
                        <input
                            type="text"
                            value={this.state.lastName}
                            onChange={this.handleInput('lastName')}
                        />
                    </label>
                    <label> Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>
                    <label> Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label> Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                   <button onClick={this.handleSubmit}> Sign Up</button>
                </form>
            </div>
        )
    }
};

export default Signup; 