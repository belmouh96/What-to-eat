import React from 'react';
import '../restaurant.css';

const Restaurant = (restaurant) => {
    return(
            <div className="card" href={restaurant.restaurant.url}>
                <div className="image">
                    <img alt="" src={restaurant.restaurant.image_url} />
                </div>
                <div className="content">
                    <div className="header">{restaurant.restaurant.name}</div>
                </div>
                <div className="meta">
                    <a>Price: {restaurant.restaurant.price}</a>
                </div>
                <div className="description">
                {restaurant.restaurant.location.display_address[0]} {restaurant.restaurant.location.display_address[1]}
                </div>
            
                <div className="extra content">
                    <span className="right floated">
                        Joined in 2013
                    </span>
                    <span>
                        <i className="user icon"></i>
                        75 Friends
                    </span>
                </div>
            </div>
    );
}

export default Restaurant;