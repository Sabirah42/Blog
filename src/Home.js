import {useState } from 'react';

const Home = () => {

    const title = "Welcome to Sabirah's React blog!";
    const github = "https://github.com/Sabirah42"

    const [dream, setDream] = useState('Have fur babies.')

    const handleClick = () => {
        setDream('Turn on the heating without worrying.');
    }

    return (
        <div className="home">
            <h2>{ title }</h2>
            <p>My self-esteem rating today: { Math.floor(Math.random() * 10) }</p>
            <p>Please check out my Github account <a href={ github }>here</a>.</p>
            <p>My lifelong dream: { dream }</p>
            Or <button onClick={handleClick}>click me</button> to change my dreams.

          </div>

    );
}
 
export default Home;