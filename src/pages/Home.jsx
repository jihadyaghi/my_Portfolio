import profile from "../assets/profile.jpeg";
import "./Home.css";
function Home(){
return(
    <div id="top" className="one">
        <section className="hero">
            <div className="hero_wrap">
                <div className="hero_left">
                    <h1 className="hero_title">
                        Hi, I'm <span className="accent">Jihad Yaghie</span>
                    </h1>
                    <h2 className="hero_subtitle">Software Developer</h2>
                    <p className="hero_desc">
                     I build clean, responsive web apps with strong fundamentals.
                     I love turning ideas into real products and writing readable code
                    </p>
                    <div className="hero_btns">
                        <a className="btn primary" href="#projects">View Projects</a>
                        <a className="btn ghost" href="#contact">Contact</a>
                    </div>
                    <div className="tags">
                        <span className="tag">React</span>
                        <span className="tag">JavaScript</span>
                        <span className="tag">Node.js</span>
                        <span className="tag">MYSQL</span>
                    </div>
                </div>
                <div className="hero_right">
                    <div className="avatarRing">
                        <img className="avatar" src={profile} alt="profile"/>
                    </div>
                    <div className="quick">
                        <div><b>Location:</b>Lebanon</div>
                        <div><b>Email:</b>jihadyaghie@gmail.com</div>
                        <div><b>Focus:</b>Web Development</div>
                    </div>
                </div>
            </div>
            <a className="scrollHint" href="#about">Scroll</a>
        </section>
        <section id="about" className="sec">
            <div className="sec_wrap">
                <h3 className="sec_title">About</h3>
                <p className="sec_text">
                 I’m a Computer Science student focused on building practical projects.
                 I enjoy frontend UI/UX and full-stack development. My goal is to join an internship
                 where I can contribute to real products and grow fast.
                </p>
            </div>
        </section>
        <section id="skills" className="sec alt">
            <div className="sec_wrap">
                <h3 className="sec_title">Skills</h3>
                <div className="grid">
                    <div className="card">
                        <h4>Frontend</h4>
                        <p>React, JavaScript, HTML, CSS, Responsive Design</p>
                    </div>
                    <div className="card">
                        <h4>Backend</h4>
                        <p>Node.js, Express, Rest APIs, Auth basics</p>
                    </div>
                    <div className="card">
                        <h4>Database</h4>
                        <p>MYSQL, ERD, SQL Queries, CRUD</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="projects" className="sec">
            <div className="sec_wrap">
                <h3 className="sec_title">Projects</h3>
                <div className="projects">
                    <article className="pCard">
                        <div className="pCard_top">
                            <h4>MarketHouse</h4>
                            <span className="badge">Full-Stack</span>
                        </div>
                        <p>E-commerce for supermarket + butchery.Products,categories,offers.</p>
                        <div className="stack">
                            <span>React</span><span>Node</span><span>MYSQL</span>
                        </div>
                        <div className="links">
                            <a href="#d" target="_blank" rel="noreferrer">GitHub</a>
                            <a href="#d" target="_blank" rel="noreferrer">Demo</a>
                        </div>
                    </article>
                    <article className="pCard">
                        <div className="pCard_top">
                            <h4>Smart Queue</h4>
                            <span className="badge">System</span>
                        </div>
                        <p>Queue/ticket system for shops (bakery, salon) with admin dashboard.</p>
                        <div className="stack">
                            <span>React</span><span>Express</span><span>MySQL</span>
                        </div>
                        <div className="links">
                            <a href="#d" target="_blank" rel="noreferrer">GitHub</a>
                            <a href="#d" target="_blank" rel="noreferrer">Demo</a>
                        </div>
                    </article>
                    <article className="pCard">
                        <div className="pCard_top">
                            <h4>UniTaxi</h4>
                            <span className="badge">Mobile</span>
                        </div>
                        <p>University ride-sharing app concept with driver/user roles.</p>
                        <div className="stack">
                            <span>Flutter</span><span>Node</span><span>MySQL</span>
                        </div>
                        <div className="links">
                            <a href="#d" target="_blank" rel="noreferrer">GitHub</a>
                            <a href="#d" target="_blank" rel="noreferrer">Demo</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
        <section id="contact" className="sec alt">
            <div className="sec_wrap">
                <h3 className="sec_title">Contact</h3>
                <div className="contact">
                    <div className="contact_info">
                        <p className="sec_text">Want to work together? Send me a message.</p>
                        <div className="contact_Links">
                    <a href="2">jihadyaghie@gmail.com</a>
                    <a href="2" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="2" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
                </div>
                <form className="form" onSubmit={(e)=>e.preventDefault()}>
                <input placeholder="Your name"/>
                <input placeholder="Your email"/>
                <input  placeholder="Your number"/>
                <textarea placeholder="Your message" rows="5"/>
                <button className="btn primary" type="submit">Send</button>
                <p className="hint">For now, the form is UI only.</p>
            </form>

                </div>
                
            </div>
            
        </section>
    </div>
);
}
export default Home;