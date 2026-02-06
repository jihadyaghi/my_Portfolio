
import "./Navbar.css";
function Navbar(){
return(
 <header className="nav">
    <div className="nav_container">
        <a className="nav_logo" href="#top">
        <span className="nav_name">JY</span>
        <div className="nav-text">
            <span className="nav_name2">Jihad Yaghie</span>
            <span className="nav_name3">Software Developer</span>
        </div>
        </a>
        <nav className="nav_Links">
            <a className="nav_link" href="#about">About</a>
            <a  className="nav_link" href="#skills">Skills</a>
            <a className="nav_link" href="#Porjects">Projects</a>
            <a className="nav_link" href="#contact">Contact</a>
        </nav>
        <a className="cta" href="/" target="_blank" rel="noreferrer">Download CV</a>
    </div>
 </header>
);
}
export default Navbar;