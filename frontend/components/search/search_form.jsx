import React from 'react'; 

class SearchQuery extends React.Component{
    constructor(props){
        super(props);

        this.state={
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <div>
                This is working
            </div>
        )
    }
}

export default SearchQuery; 