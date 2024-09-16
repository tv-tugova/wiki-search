import AppHeader from '../appHeader/AppHeader';
import SearchResults from '../searchResults/SearchResults';
import SearchBar from '../searchBar/SearchBar';

const App = () => {
    return (
        <div className="App">
            <AppHeader/>
            <main>
                <SearchBar/>
                <SearchResults/>
            </main>
        </div>
    )
}

export default App;
