import React from 'react';

import './searchBar.scss';

const SearchBar = ({ query, setQuery, setSearchQuery }) => {

    const onUpdateSearch = (e) => {
        setQuery(e.target.value);
    }

    const onSearch = () => {
        setSearchQuery(query);
    }

    const onEnterPress = (e) => {
        if (e.key === 'Enter') {
            onSearch(); 
        }
    }

    return (
        <div className="search__wrapper">
            <span>
                <img 
                    src="/search.svg"
                    alt="search"
                    className="search__icon"
                    onClick={onSearch}
                />
                <input type="text"
                    className="search__input"
                    placeholder="Search Here" 
                    value={query}
                    onChange={onUpdateSearch}
                    onKeyDown={onEnterPress}/>
            </span>
            <a className="btn">RANDOM!</a>
        </div>
    )
}

export default SearchBar;