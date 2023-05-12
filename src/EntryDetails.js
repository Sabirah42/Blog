import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const EntryDetails = () => {
    // This is the changeable element of the entry details route (':id')
    const { id } = useParams();
    // The word after the colon defines what 'data' is in this component (could be left as 'data'
    // and used as such here as well)
    const { data: entry, error, isPending } = useFetch('http://localhost:8000/entries/' + id)
    return (
        <div className="entry-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div>}
            { entry && (
                <article>
                    <h2>{ entry.title }</h2>
                    <p>Written by { entry.author }</p>
                    <div>{ entry.body }</div>
                </article>
            )}
        </div>
    );
}
 
export default EntryDetails;