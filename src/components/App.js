import React from 'react';
import SearchBar from './searchBar';
import Restaurant from './restaurant';
import RestaurantList from './restaurantList';
import yelp from '../api/yelp';
// import { conditionalExpression } from '@babel/types';

class App extends React.Component {

    state = { restaurants: [] };

    onTermSubmit = async (term, category) => {
        const response = await yelp.get(`/businesses/search?location=${term}`,{
        params: {
            categories: category
        }
    });
        this.setState({restaurants: response.data.businesses});
        console.log(response);
        console.log(response.data.businesses[4].name);
    }

    render() {
        return(
            <div>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <RestaurantList restaurants={this.state.restaurants}/>
            </div>
        ); 
    };
}

export default App;