import React, {useState} from "react";


const useWikiService = () => {
    const apiBase = 'http://ru.wikipedia.org/w/api.php';

    const [articles, setArticles] = useState([]);
    const [randArticle, setRandArticle] = useState({});

    const request = async (url) => {
        try {
            let res = await fetch(url);

            if (!res.ok) {
                throw new Error(`Could not fetch ${url}, status: ${res.status}`);
            }

            const data = await res.json();

            return data;
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    }

    const getAllArticles = async (searchQuery) => {
        const result = await request(`${apiBase}?action=opensearch&search=${encodeURIComponent(searchQuery)}&limit=10&offset=0&format=json`);
        const articles = result[1].map((title, index) => ({
            title,
            url: result[3][index]
        }));
        setArticles(articles);
    }

    const getRandArticle = async () => {
        const result = await request(`${apiBase}?action=query&list=random&rnnamespace=0&rnlimit=1&format=json`);
        const randTitle = result.query.random[0].title;
        const randURL = `https://ru.wikipedia.org/wiki/${encodeURIComponent(randTitle)}`;
        setRandArticle({ title: randTitle, url: randURL });
    }

    return {articles, getAllArticles, randArticle, getRandArticle};
}

export default useWikiService;