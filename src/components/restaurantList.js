import React from 'react';
import Restaurant from './restaurant';
import '../restaurant.css';

const RestaurantList = ({ restaurants }) => {
    const renderedList = restaurants.map((restaurant) => {
        return <Restaurant key={restaurant.id} restaurant={restaurant}/>;
    });
    
    return <div className="ui link cards">{renderedList}</div>;
};

export default RestaurantList;