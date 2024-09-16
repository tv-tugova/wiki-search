import axios from "axios";

import searchStore from "../stores/SearchStore";

const useWikiService = () => {
    const apiBase = 'http://ru.wikipedia.org/w/api.php';

    const request = async (url) => {
        try {
            let res = await axios.get(url);

            return res.data;
        } catch (error) {
            if (error.response) {
                console.error('Ошибка ответа:', error.response.status, error.response.data);
            } else if (error.request) {
                console.error('Нет ответа:', error.request);
            } else {
            console.error('Ошибка при выполнении запроса:', error);
            }
        }
    }

    const getAllArticles = async (searchQuery) => {
        const result = await request(`${apiBase}?action=opensearch&search=${encodeURIComponent(searchQuery)}&limit=10&offset=0&format=json`);
        const articles = result[1].map((title, index) => ({
            title,
            url: result[3][index]
        }));
        searchStore.setArticles(articles);
    }

    const getRandArticle = async () => {
        const result = await request(`${apiBase}?action=query&list=random&rnnamespace=0&rnlimit=1&format=json`);
        const randTitle = result.query.random[0].title;
        const randURL = `https://ru.wikipedia.org/wiki/${encodeURIComponent(randTitle)}`;
        searchStore.setRandArticle({ title: randTitle, url: randURL });
    }

    return {getAllArticles, getRandArticle};
}

export default useWikiService;