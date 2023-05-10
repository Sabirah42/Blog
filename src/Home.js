import { useState, useEffect } from 'react';
import EntryList from './EntryList';
import useFetch from './useFetch';

const Home = () => {
    const title = "Welcome to Sabirah's React blog!";
    const github = "https://github.com/Sabirah42";

    const [dream, setDream] = useState('Have fur babies.');
    const { data: entries, isPending, error } = useFetch('http://localhost:8000/entries')
    
    const handleClick = () => {
        setDream('Turn on the heating without worrying.');
    }
    

    return (
        <div className="home">
            <h2>{ title }</h2><br />
            <p>My self-esteem rating right now: { Math.floor(Math.random() * 10) }</p><br />
            <p>Please check out my Github account <a href={ github }>here</a>.</p><br />
            <p>My lifelong dream: { dream }</p>
            <button onClick={handleClick}>Click me</button> to change my dreams.<br />
            
            {/* Need to set to a 'variable' to use entries above as a prop. This is a 'property name' */}
            {/* Need to check 'entries' first evaluates to true, as these need to be fetched from the
                database before they are rendered, which can take a moment. Without this, there will
                be an error message, as you cannot render a null value, which is what 'entries' is 
                initially set to. */}
            <div>
                <br />
                { error && <div>{ error }</div> }
                { isPending && <div>Loading...</div> }
                { entries && <EntryList entries={entries} title="All blog entries:" /> }
            </div>
        </div>

    );
}
 
export default Home;