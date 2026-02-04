import {Link} from "react-router-dom";
import "./Navbar.css";
function Navbar(){
return(
 <header className="nav">
    <div className="nav_container">
        <Link to="/"className="nav_logo">
        <span className="nav_name">JY</span>
        <span className="nav_name2">My Portfolio</span>
        </Link>
        <nav className="nav_Links">
            <Link to="/" className="nav_link">Home</Link>
            <Link to="/about" className="nav_link">About</Link>
            <Link to="/projects" className="nav_link">Projects</Link>
            <Link to="/contact" className="nav_link">Contact</Link>
        </nav>
    </div>
 </header>
);
}
export default Navbar;