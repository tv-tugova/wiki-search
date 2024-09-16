import React, { useEffect } from 'react';

import useWikiService from '../../services/WikiService';

import './searchResults.scss';

import { observer } from 'mobx-react-lite';
import searchStore from '../../stores/SearchStore';

const SearchResults = () => {
    const {getAllArticles} = useWikiService();

    useEffect(() => {
        if (searchStore.searchQuery) {
            getAllArticles(searchStore.searchQuery);
        }
    }, [searchStore.searchQuery])

    return (
        <div className='article__list'>
            <ul className='article__grid'>
                {searchStore.articles.map((article, index) => (
                    <li className='article__item' 
                        key={index}>
                        <a className='article__url' 
                            href={article.url} 
                            target="_blank" >
                            <div className='article__card'>
                                <p className='article__title'>{article.title}</p>
                            </div>
                        </a>
                    </li> 
                ))}
            </ul>
        </div>
    )
}

export default observer(SearchResults);