import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Sabirah');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    

    const handleSubmit = (e) => {
        // Stops page from refreshing on form submission, as this will lose the typed data
        e.preventDefault();
        // id properly is not needed for the entry object, as the JSON server will add this
        const entry = { title, body, author };

        setIsPending(true)

        fetch('http://localhost:8000/entries', {
            // second argument defines the type of request we're sending,
            method: 'POST',
            // tells the server the type of content we're sending with this request,
            headers: { "Content-Type": 'application/json'},
            // and converts the data we're sending into a readable JSON string
            body: JSON.stringify(entry)
        }).then(() => {
            console.log('New entry added');
            setIsPending(false);
            // redirects to the route specified in the parameter
            history.push('/');
        })
    }

    

    return (
        <div className="create">
            <h2>Add a new blog entry</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog entry title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog entry content:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Sabirah">Sabirah</option>
                    <option value="Not Sabirah">Not Sabirah?</option>
                </select>
                { !isPending && <button>Add entry</button> }
                { isPending && <button disabled>Adding entry...</button> }

            </form>
        </div>
    );
}
 
export default Create;