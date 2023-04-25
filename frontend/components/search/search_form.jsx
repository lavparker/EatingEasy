import React from 'react'; 

class SearchQuery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      e: "",
      searchParam: ["name"]
    };
  }

  componentDidMount() {
    // debugger
    this.props.getRestaurants().then(res => res.json()).then((result) =>{
        this.setState({
            isLoaded: true, 
            items: result.items
        }); 
    }, 
    (error)=> {
        this.setState({
            isLoaded: true, 
            error
        })
    }
    );
    // getRestaurants()
  }

  searchable(items){
    return items.filter((item) =>{
        return searchParam.some((newItem) => {
            return(
                item[newItem]
                .toString()
                .toLowercase()
                .indexOf(q.toLowerCase()) > -1
            )
        })
    })
  }

  handleInput(e){
    return (e) => {this.setState(e.currentTarget.value)}
  }

  render() {
    const { error, isLoaded, items } = this.state; 

    // if (error){
    //     return <div>Error: {error.message}</div>
    // }else if (!isLoaded){
    //     return <div>Loading...</div>
    // }else {
        return (
          <div>
            <div>
                <label htmlFor="search-form">
                    <input 
                        type="search" 
                        name="search-form"
                        id="search-form"
                        className='search-input'
                        placeholder='SearchFor...'
                        // value={e}
                        onChange={this.handleInput('e')} 
                    />
                    <span>Search Restaurants Here</span>
                </label>
            </div>
            <ul>
              {items.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        );
    }
   
  }
   // debugger
    // const { restaurants } = this.props;

    // console.log('THESE ARE THE RESSYS' + this.props.restaurants.length);

    // return <div>This is working</div>;


export default SearchQuery; 