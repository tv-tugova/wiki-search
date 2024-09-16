import { makeAutoObservable } from "mobx";

class SearchStore {
    query = '';
    searchQuery = '';
    articles = [];
    randArticle = {};

    constructor() {
        makeAutoObservable(this);
    }

    setQuery(newQuery) {
        this.query = newQuery;
    }

    setSearchQuery(newSearchQuery) {
        this.searchQuery = newSearchQuery;
    }

    setArticles(articles) {
        this.articles = articles;
    }
    
    setRandArticle(randArticle) {
        this.randArticle = randArticle;
    }
}

const searchStore = new SearchStore();
export default searchStore;