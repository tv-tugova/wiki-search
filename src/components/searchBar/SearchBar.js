import React, {useEffect} from 'react';

import useWikiService from '../../services/WikiService';

import './searchBar.scss';

const SearchBar = ({ query, setQuery, setSearchQuery }) => {
    const {randArticle, getRandArticle} = useWikiService();

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

    useEffect(() => {
        getRandArticle();
    }, [])

    return (
        <div className="search__wrapper">
            <span>
                <img 
                    src="/search.svg"
                    alt="search"
                    className="search__icon"
                    onClick={onSearch}
                />
                <input 
                    type="text"
                    className="search__input"
                    placeholder="Search Here" 
                    value={query}
                    onChange={onUpdateSearch}
                    onKeyDown={onEnterPress}
                />
            </span>
            <a 
                className="btn"
                href={randArticle?.url}
                target="_blank"
                onClick={getRandArticle}
            >RANDOM!</a>
        </div>
    )
}

export default SearchBar;