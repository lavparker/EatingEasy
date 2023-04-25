import React from 'react'; 

class SearchQuery extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   error: null,
    //   isLoaded: false,
    //   items: [],
    // };
  }

  componentDidMount() {
    debugger
    this.props.getRestaurants();
    // getRestaurants()
  }

  render() {
    const { restaurants } = this.props;

    // console.log('THESE ARE THE' + restaurants);

    return <div>This is working</div>;
  }
}

export default SearchQuery; 