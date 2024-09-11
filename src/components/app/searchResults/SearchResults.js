import React, { useEffect, useState } from 'react';

import './searchResults.scss';

const SearchResults = () => {
    const apiBase = 'http://ru.wikipedia.org/w/api.php';
    const query = 'Мастер и Маргарита';

    const [articles, setArticles] = useState([]);

    const request = async (url) => {
        try {
            console.log(url);
            let res = await fetch(url);

            if (!res.ok) {
                throw new Error(`Could not fetch ${url}, status: ${res.status}`);
            }

            const data = await res.json();

            const articles = data[1].map((title, index) => ({
                title,
                url: data[3][index], 
            }));

            return articles;
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    }

    const getAllArticles = async () => {
        const result = await request(`${apiBase}?action=opensearch&search=${encodeURIComponent(query)}&limit=10&offset=0&format=json`);
        setArticles(result);
    }

    useEffect(() => {
        getAllArticles();
    }, [])

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