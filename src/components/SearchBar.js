import React from 'react';

class SearchBar extends React.Component {
   state= {term: ''};

    render() {
        return (
            <div className= "ui input">
                <input 
                type= "text" 
                value={this.state.term}
                placeholder= "Search..." 
                onChange= {event => this.setState({ term: event.target.value })}
                />
            </div>
        
        );
        }
};

export default SearchBar;