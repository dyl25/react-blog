import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar" aria-label="main navigation">
            <div id="mainNav" className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" to="/blogs">Blog list</Link>
                    <Link className="navbar-item" to="/blogs/details">Blog detail</Link>
                    <Link className="navbar-item" to="/blogs/create">Create a blog</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;