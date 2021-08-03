import React from 'react';

class SearchBar extends React.Component {
   state = {term: ''};

   onFormSubmit = event => {
       this.props.onSubmit(this.state.term);
   };

    render() {
        return (
            <div className= "ui input">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <input 
                    type= "text" 
                    value={this.state.term}
                    placeholder= "Search..." 
                    onChange= {event => this.setState({ term: event.target.value })}
                    /> 
                </form>
            </div>
     
        );
        }
};

export default SearchBar;