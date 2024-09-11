import React, { useEffect, useState } from 'react'; 

const App = () => {
    const apiBase = 'http://ru.wikipedia.org/w/api.php';
    const query = 'Мастер и Маргарита';

    const [titles, setTitles] = useState([]);

    const request = async (url) => {
        try {
            let res = await fetch(url);

            if (!res.ok) {
                throw new Error(`Could not fetch ${url}, status: ${res.status}`);
            }

            const data = await res.json();

            return data[1];
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    }

    const getAllArticles = async () => {
        const result = await request(`${apiBase}?action=opensearch&search=${encodeURIComponent(query)}&limit=10&offset=0&format=json`);
        setTitles(result);
    }

    useEffect(() => {
        getAllArticles();
    }, [])

    return (
        <div className="App">
            <ul>
                {titles.map((title, index) => (
                    <li key={index}>{title}</li> 
                ))}
            </ul>
        </div>
    )
}

export default App;
