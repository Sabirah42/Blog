import { useParams } from "react-router-dom";

const EntryDetails = () => {
    // This is the changeable element of the entry details route (':id')
    const { id } = useParams();

    return (
        <div className="entry-details">
            <h2>Entry Details - { id }</h2>
        </div>
    );
}
 
export default EntryDetails;