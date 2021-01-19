import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: '',
        category: ''
    };

    onInputChange = (event) => {
        this.setState({ term: event.target.value});
    };

    onInputChange1 = (event) => {
        this.setState({ category: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term, this.state.category);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <label>Search</label>
                        <input type="text"
                               value={this.state.term}
                               placeholder="Search by Street name, city, state, or zip code"
                               onChange={this.onInputChange}
                        />
                    </div>
                    <div>
                        <label>Category</label>
                        <input type="text"
                               value={this.state.category}
                               placeholder="Dinner, lunch, breakfast..."
                               onChange={this.onInputChange1}
                        />
                        <input type="submit" value="Search" />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;