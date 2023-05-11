import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Blog</h1>
{/* Using Link rather than an href stops React from sending a new request to the server on 
    each click; instead, React intercepts the request and renders the Linked component directly
    in the browser [much quicker] */}
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Entry</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;