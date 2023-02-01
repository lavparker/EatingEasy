import React from "react";

class ReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            name: "",
            overall_rating: 0, 
            food_rating: 0, 
            ambiance_rating: 0, 
            value_rating: 0, 
            noise_level: 0,
            body: "", 
        }

        this.handleSubmit = this.handleSubmit.bind(this);


    }

    componentDidMount(){
        if(!this.props.restaurant){
            this.props.getRestaurants()
        }
    }

    handleInput(field){
        return(e) =>{
            this.setState({ [field]: e.currentTarget.value});
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const review = {
            name: this.state.name,
            overall_rating: this.state.overall_rating,
            food_rating: this.state.food_rating,
            ambiance_rating: this.state.ambiance_rating,
            value_rating: this.state.value_rating,
            noise_level: this.state.noise_level,
            body: this.state.body,
            user_id: this.state.user_id,
            restaurant_id: this.state.restaurant_id
        }

        this.props.handleSubmit(review);
    }

    renderErrors(){
        return(
            <ul>
                {this.props.errors.map((error, idx) =>(
                    <li key={`error-${idx}`}>{error}</li>
                ))}
            </ul>
        );
    }

    render(){
        if(!this.props.restaurant) return null; 

        return(
            <div className="review-form">
                <form 
                    onSubmit={this.handleSubmit}
                    className="review-form-main">

                    <h1>Please review your experience</h1>  
                    <br />
                    <label className="rev-overall">Overall</label>
                    <label className="rev-food">Food</label>
                    <label className="rev-ambiance">Ambiance</label>
                    <label className="rev-noise">Noise Level</label>
                    <label className="rev-value">Value</label>
                    <h2>Please leave a detailed review</h2>
                    <br />
                    <div className="rev-body">
                        <textarea cols="70" rows="10" onChange={this.handleInput()}></textarea>
                    </div>

                </form>
            </div>
        )
    }


}

export default ReviewForm;

