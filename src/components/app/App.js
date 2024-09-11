import AppHeader from '../appHeader/AppHeader';
import SearchResults from './searchResults/SearchResults';

const App = () => {
    return (
        <div className="App">
            <AppHeader/>
            <main>
                <SearchResults/>
            </main>
        </div>
    )
}

export default App;
