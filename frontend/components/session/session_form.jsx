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

    handleSubmit(e){
        e.preventDefault();
        const user = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
      
        this.props.processForm(user)
            .then(this.props.closeModal)
    }
    // handleSubmit(e) {
    //     console.log(this.props);
    //     console.log(this.props.processForm);
    //     e.preventDefault();
    //     // const user = Object.assign({}, this.state);
    //     // this.props.processForm(this.state).then(this.props.closeModal)
    //     this.props.processForm({ first_name: this.state.firstName, 
    //         last_name: this.state.lastName, 
    //         username: this.state.username, 
    //         email: this.state.email,
    //         password: this.state.password
    //     }).then(this.props.closeModal);
    // };

    renderErrors(){
        return(
            <ul>
                {this.props.errors.map((error, i) =>(
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    };

    render() {
        return(

            <div className='session-form'>
                <h2>Sign Up!</h2>
                <form onSubmit={this.handleSubmit} className="signupin-form">
                    Welcome to Eating Easy!
                    <br />
                    <br />
                    Please {this.props.formType} or {this.props.otherForm}
                    <br />
                    <br />
                    {/* <div onClick={this.props.closeModal} className="close-modal">X</div>
                    <br />

                    {this.renderErrors()} */}

                    <label> First Name: 
                        <input 
                            type="text"
                            placeholder = "First Name"
                            value= {this.state.firstName}
                            onChange={this.handleInput('firstName')}
                            className="input-signinup"
                             />
                    </label>
                    <br />
                    <label> Last Name:
                        <input
                            type="text"
                            placeholder= "Last Name"
                            value={this.state.lastName}
                            onChange={this.handleInput('lastName')}
                            className="input-signinup"
                        />
                    </label>
                    <br />
                    <label> Username:
                        <input
                            type="text"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                            className="input-signinup"
                        />
                    </label>
                    <br />
                    <label> Email:
                        <input
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                            className="input-signinup"
                        />
                    </label>
                    <br />
                    <label> Password:
                        <input
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            className="input-signinup"
                        />
                    </label>
                    <br />
                   {/* <button className="signup-btn" onClick={this.handleSubmit}> Sign Up</button> */}
                </form>
            </div>
        )
    }
};

export default SessionForm; 