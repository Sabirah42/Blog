const Create = () => {
    return (
        <div className="create">
            <h2>Add a new blog entry</h2>
            <form>
                <label>Blog entry title:</label>
                <input
                    type="text"
                    required
                />
                <label>Blog entry content:</label>
                <textarea
                    required
                ></textarea>
                <label>Author:</label>
                <select>
                    <option value="Sabirah">Sabirah</option>
                    <option value="Not Sabirah">Not Sabirah?</option>
                </select>
                <button>Add entry</button>
            </form>
        </div>
    );
}
 
export default Create;