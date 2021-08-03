import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

   async onSearchSubmit (term){
        await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term } ,
            headers: {
                Authorition: 'Client-ID aMvqHogjcGjL3gUufxV-27MJSGeQz3PGI-gRTw_pq7o'
            }
         })
    }

    render () {
        return (
            <div className= "ui container" style= {{marginTop: "2%"}}>
                <h2>Image Search</h2>
                <SearchBar onSubmit={this.onSearchSubmit} />
            
            </div>
        );
    }
}

export default App;