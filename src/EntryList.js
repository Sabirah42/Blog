import { Link } from "react-router-dom";

const EntryList = (props) => {
    // pass in the entries prop from the Home page
    const entries = props.entries;
    const title = props.title;

    return (
        <div className="entry-list">
            <h2>{ title }</h2>
        {/* cycle through each entry - MUST have a key to allow React to distinguish between each iteration */}
            {entries.map((entry) => (
            <div className="entry-preview" key={ entry.id }>
                <Link to={`/entries/${entry.id}`}>
                    <h3>{ entry.title }</h3>
                    <p>Written by { entry.author }</p>
                </Link>
            </div>
        ))}
        </div>
    );
}
 
export default EntryList;