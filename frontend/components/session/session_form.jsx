import React from 'react';

class SessionForm extends React.Component{
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

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleInput(type){
        return(e) => {
            this.setState({ [type]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm({ first_name: this.state.firstName, 
            last_name: this.state.lastName, 
            username: this.state.username, 
            email: this.state.email,
            password: this.state.password
        })
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

export default SessionForm; 