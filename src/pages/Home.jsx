import profile from "../assets/profile.jpeg";
import {Link} from "react-router-dom";
import "./Home.css";
function Home(){
return(
    <section className="home">
        <div className="home_container">
            <div className="home_text">
                <img className="avatar" src={profile} alt="Jihad Profile"/>
                <p className="home_badge">open to Intership . React/Node</p>
                <h1 className="home_title">Hi , I'm <span className="accent">Jihad Yaghie</span></h1>
                <h2 className="home_subtitle">Software Developer</h2>
                <p className="home_summary">
                Computer Science student passionate about building clean, responsive web
                applications. I enjoy turning ideas into real products using React,
                JavaScript, and modern backend tools. I focus on readable code,
                good UX, and scalable architecture.
                </p>
                <div className="home_cta">
                    <Link to="/projects"className="btn btn_primary">
                    View Projects
                    </Link>
                    <Link to="/contact" className="btn btn_ghost">Contact me</Link>
                </div>
                <div className="home_highlights">
                    <div className="chip">
                        <span className="dot"/>
                        React
                    </div>
                    <div className="chip">
                        <span className="dot"/>
                        JavaScript
                    </div>
                    <div className="chip">
                        <span className="dot"/>
                        Node.js
                    </div>
                    <div className="chip">
                        <span className="dot"/>
                        MySQL
                    </div>
                </div>
            </div>
            <div className="home_card">
                <div className="mini_row">
                    <span className="mini_label">Location</span>
                    <span className="mini_value">Lebanon</span>
                </div>
                <div className="mini_row">
                    <span className="mini_label">Focus</span>
                    <span className="mini_value">Web Devlopment</span>
                </div>
                 <div className="mini_row">
                    <span className="mini_label">Email</span>
                    <span className="mini_value">jihadyaghie@gmail.com</span>
                </div>
            </div>
            <div className="stats">
                <div className="stat">
                    <div className="stat_num">3+</div>
                    <div className="stat_text">Projects</div>
                </div>
                <div className="stat">
                    <div className="stat_num">1</div>
                    <div className="stat_text">Portfolio</div>
                </div>
                <div className="stat">
                    <div className="stat_num">2026</div>
                    <div className="stat_text">Graduation</div>
                </div>
            </div>
        </div>
        <div className="home_strip">
            <div className="strip_item">Clean UI & Responsive Design</div>
            <div className="strip_item">Strong Fundamentals (DB / OS / Networking)</div>
            <div className="strip_item">Ready for Real Projects</div>
        </div>
    </section>
);
}
export default Home;