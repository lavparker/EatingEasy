import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createFavorite, deleteFavorite, getFavorite, getFavorites } from '../../actions/favorite_actions';
import { getRestaurant } from '../../actions/restaurant_actions';
class FavoritesCreate extends Component {
    constructor(props){
        console.log('FAVORITES CREATE PROPS', props)
        super(props)    
        this.state = {
            // currentUser: this.props.currentUser,
            isFavorited: false,
            user_id: this.props.favorite ? this.props.favorite.user_id : this.props.currentUser.id,
            restaurant_id: this.props.favorite ? this.props.favorite.restaurant_id : this.props.restaurant.id, 
        }
        this.handleFavorite = this.handleFavorite.bind(this);
    }

    componentDidMount(){
        if(this.props.currentUser){
            this.props.getFavorites()
            .then(() => {
                if(this.props.favorites.restaurant_id === this.props.restaurant.id){
                    this.setState({isFavorited: true})
                } else{
                    this.setState({isFavorited: false})
                }
            })
        }

    }

    componentDidUpdate(prevProps){
        if(this.props.currentUser !== prevProps.currentUser){
            this.props.getFavorites()
            .then(() => {
                if(this.props.favorites.restaurant_id === this.props.restaurant.id){
                    this.setState({isFavorited: true})
                } else{
                    this.setState({isFavorited: false})
                }
            })
        }

        
    }


    handleFavorite(e){
        e.preventDefault(); 
        const { restaurant } = this.props;
        if(this.state.isFavorited){
            this.props.deleteFavorite(this.props.favorite.id).then(() => {
                this.setState({isFavorited: false})
            });
        } else {
            this.props.createFavorite({
                user_id: this.props.currentUser.id,
                restaurant_id: this.props.restaurant.id,
            }).then(() => {
                this.setState({isFavorited: true})
            });
        }
     };

    render() {
        const { isFavorited } = this.state;
        return(
            <div className='show-page-fave-btn'>
                <button onClick={this.handleFavorite} className={isFavorited ? 'favorited' : 'not-favorited'}>
                   {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>

            </div>
               
        )
    }

        
    
}

const mapStateToProps = (state, ownProps) => {
    let current_user_id = state.session.id
    let current_user = state.entities.users[current_user_id]
    // let user_id = state.entities.users.id
    // let user = state.entities.users[user_id]
    return {
      currentUser: {
        id: current_user.id,
        phone_number: "2002000200",
        first_name: current_user.first_name,
        last_name: current_user.last_name,
        email: current_user.email,
      },
      //   currentUser: state.session.currentUser,
      user_id: current_user.id,
      favorites: state.entities.favorites,
      restaurants: Object.values(state.entities.restaurants),
      restaurant_id: ownProps.restaurant.id,
      favorites: Object.values(state.entities.favorites),

    };

}

const mapDispatchToProps = dispatch => ({
    getFavorite: (favoriteId) => dispatch(getFavorite(favoriteId)),
    getFavorites: () => dispatch(getFavorites()),
    getRestaurant: (restaurantId) => dispatch(getRestaurant(restaurantId)),
    createFavorite: (favorite) => dispatch(createFavorite(favorite)),
    deleteFavorite: (favoriteId) => dispatch(deleteFavorite(favoriteId)),

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FavoritesCreate));