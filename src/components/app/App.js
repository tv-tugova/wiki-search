import AppHeader from '../appHeader/AppHeader';
import SearchResults from '../searchResults/SearchResults';
import SearchBar from '../searchBar/SearchBar';

import { useState } from 'react';

const App = () => {
    const [query, setQuery] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="App">
            <AppHeader/>
            <main>
                <SearchBar query={query} setQuery={setQuery} setSearchQuery={setSearchQuery}/>
                <SearchResults searchQuery={searchQuery}/>
            </main>
        </div>
    )
}

export default App;
