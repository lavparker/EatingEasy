import React from 'react';

class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            username: '',
            email: '',
            password: '',

        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.openModalLogIn = this.openModalSignUp.bind(this);
    }

    componentDidMount(){
        this.props.clearSessionErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value});
        
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
            phone_number: this.state.phoneNumber,
            email: this.state.email,
            password: this.state.password,
    
        };

        this.props.processForm(user)
        .then(() => this.props.closeModal());

    }


    openModalSignUp (e) {
        e.preventDefault();
        this.props.closeModal();
        this.props.openModal("signup");
    }

    renderErrors(){
        return(
            <ul>
                {this.props.errors.map((error, idx) =>(
                    <li key={`error-${idx}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    };

    render() {
        return(

            <div className='signup-box'>
                
                <form onSubmit={this.handleSubmit} className="session-form">
                    <div onClick={this.props.closeModal} className="close-modal">X</div>
                    <h2 className="modal-welcome">Welcome to Eating Easy!</h2>
                    
                    <br />
                    <br />
                    <h2 className="sign-up">Sign up below!</h2>
                    <br />
                    <p>{this.renderErrors()}</p>
                    
                    <br />

                        <input 
                            className="input-signinup"
                            type="text"
                            placeholder = "First Name"
                            value= {this.state.firstName}
                            onChange={this.handleInput('firstName')}
                            
                             />
                    <br />
                    <br />
                        <input
                            className="input-signinup"
                            type="text"
                            placeholder= "Last Name"
                            value={this.state.lastName}
                            onChange={this.handleInput('lastName')}
                            
                        />
                    <br />
                    <br />
                        <input
                            className="input-signinup"
                            type="text"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                            
                        />
                    <br />
                    <br />
                        {/* <input
                            className="input-signinup"
                            type="phoneNumber"
                            placeholder="Phone Number"
                            value={this.state.phoneNumber}
                            onChange={this.handleInput('phoneNumber')}
                            
                        /> */}
                    <br />
                    <br />
                        <input
                            className="input-signinup"
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange=  {this.handleInput('email')}
                            
                        />
                    <br />
                    <br />
                        <input
                            className="input-signinup"
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            
                        />
                    <br />
                    
                    {/* <br /> */}

                   <button className="session-btn-mod" onClick={this.handleSubmit}> Sign Up Here!</button>
                    <br />
                    {/* {this.renderErrors()} */}

                </form>

            </div>
        )
    }
};

export default Signup; 