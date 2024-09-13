import React, { useEffect } from 'react';

import useWikiService from '../../services/WikiService';

import './searchResults.scss';

const SearchResults = ({searchQuery}) => {
    const {articles, getAllArticles} = useWikiService();

    useEffect(() => {
        if (searchQuery) {
            getAllArticles(searchQuery);
        }
    }, [searchQuery])

    return (
        <div className='article__list'>
            <ul className='article__grid'>
                {articles.map((article, index) => (
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

export default SearchResults;