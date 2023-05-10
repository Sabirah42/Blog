import { useState, useEffect } from 'react';
import EntryList from './EntryList';

const Home = () => {

    const title = "Welcome to Sabirah's React blog!";
    const github = "https://github.com/Sabirah42"

    const [dream, setDream] = useState('Have fur babies.')

    const handleClick = () => {
        setDream('Turn on the heating without worrying.');
    }

    const [entries, setEntries] = useState(null)

    const handleDelete = (id) => {
        const newEntries = entries.filter(entry => entry.id !== id);
        setEntries(newEntries);
    }

    const [isPending, setIsPending] = useState(true);
    
    useEffect(() => {
    // FETCHing data from an end-point. This is a GET request to that URL, which returns a promise
        fetch('http://localhost:8000/entries')
    // Once the data is returned i.e. the RESponse, THEN you extract the data by returning res.json
        .then(res => {
            return res.json();
        })
    // THEN you can fire off another function that uses the returned DATA and change the state
    // from null
        .then((data) => {
            console.log(data);
            setEntries(data);
            setIsPending(false);
        });
    }, []);

    // an empty dependency array passed in as a second argument will mean useEffect only fires
    // once on initial render, not after every state change.
    // If a dependency is added e.g. 'entries' or 'dream', then React will watch for any changes
    // to these dependencies and fire on changes.    

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
                { isPending && <div>Loading...</div> }
                { entries && <EntryList entries={entries} title="All blog entries:" handleDelete={handleDelete}/> }
            </div>
        </div>

    );
}
 
export default Home;