import React from "react";

class Login extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.openModalLogIn = this.openModalLogIn.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleInput(field){
        return e =>{ this.setState({ 
            [field]: e.currentTarget.value })
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        const user = Object.assign({}, this.state);
        this.props.processForm(user)
        .then(() => this.props.closeModal());
    }
    //BRING THIS BACK
    openModalLogIn(e) {
        e.preventDefault();
        this.props.closeModal();
        this.props.openModal("login");
    }

    handleDemo(){
        this.setState({username: "DemoUser1", password: "password"})
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={`error-${idx}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    };

    render() {
      return(
        <div className='session-form'>
              <form onSubmit={this.handleSubmit} className="signupin-form">
                  <div onClick={this.props.closeModal} className="close-modal">X</div>
                  <h3 className="modal-welcome">Welcome to Eating Easy!</h3> 
                  <br />
                  <br />
                  <h2 className="sign-up">Login Here!</h2>
                  <br />
                {this.renderErrors()}
                <br />
                <br />
                <label> 
                    <input
                        type="text"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleInput('username')}
                        className="input-signinup"
                      />
                </label>
                  <br />
                  <br />
                  <label> 
                    <input
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                        className="input-signinup"
                      />
                  </label>
                  <br />
                  <br />
                 <button className="session-btn-mod" onClick={this.handleSubmit}> Login</button>
                 <br />
                 <button className="session-demo-btn" onClick={this.handleDemo}>Demo Login</button>
              </form>
          </div>
      )
  }
};



export default Login;

