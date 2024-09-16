import React, {useEffect} from 'react';

import useWikiService from '../../services/WikiService';

import './searchBar.scss';

import { observer } from 'mobx-react-lite';
import searchStore from '../../stores/SearchStore';

const SearchBar = () => {
    const {getRandArticle} = useWikiService();

    const onUpdateSearch = (e) => {
        searchStore.setQuery(e.target.value);
    }

    const onSearch = () => {
        searchStore.setSearchQuery(searchStore.query);
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
                    value={searchStore.query}
                    onChange={onUpdateSearch}
                    onKeyDown={onEnterPress}
                />
            </span>
            <a 
                className="btn"
                href={searchStore.randArticle?.url}
                target="_blank"
                onClick={getRandArticle}
            >RANDOM!</a>
        </div>
    )
}

export default observer(SearchBar);