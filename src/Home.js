import {useState } from 'react';

const Home = () => {

    const title = "Welcome to Sabirah's React blog!";
    const github = "https://github.com/Sabirah42"

    const [dream, setDream] = useState('Have fur babies.')

    const handleClick = () => {
        setDream('Turn on the heating without worrying.');
    }

    const [entries, setEntries] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Sabirah', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Sabirah', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Sabirah', id: 3 }
    ])

    return (
        <div className="home">
            <h2>{ title }</h2><br />
            <p>My self-esteem rating today: { Math.floor(Math.random() * 10) }</p><br />
            <p>Please check out my Github account <a href={ github }>here</a>.</p><br />
            <p>My lifelong dream: { dream }</p>
            <button onClick={handleClick}>Click me</button> to change my dreams.
            
            <div>
                {/* cycle through each entry - MUST have a key to allow React to distinguish between each iteration */}
                {entries.map((entry) => (
                    <div className="entry-preview" key={ entry.id }>
                        <h3>{ entry.title }</h3>
                        <p>Written by { entry.author }</p>
                    </div>
                ))}
            </div>
        </div>

    );
}
 
export default Home;