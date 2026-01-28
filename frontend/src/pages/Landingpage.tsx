import { Link } from "react-router-dom";
import "../css/LandingPage.css"

function Landingpage() {
    return (
        <>
            <div className="landing-page">
                <div className="main-content">
                    <div className="hero">
                        <div className="hero-text-container">
                            <h1 className="hero-title">Structured Training, Anywhere, Anytime.</h1>
                            <p className="hero-subtitle">
                                "Casa" means "home" in Spanish, and our name—Casatrain—captures our mission: empowering athletes to make the most of their training at home.
                            </p>
                            <p className="hero-subtitle">
                                Empower your athletes with personalized training roadmaps. Monitor progress, provide feedback, and build better teams.
                            </p>
                            <div className="exampleRoadmap">
                                <img src="exampleRoadmap.png" alt="Example Roadmap" />
                            </div>
                            <Link to="/signup" className="cta-button hero-cta">Join CasaTrain Today</Link>
                        </div>
                    </div>
                    <div className="roadmap-info">
                        <h2>The Roadmap to Success</h2>
                        <p>Casatrain's core feature allows you to build and share interactive <strong>roadmaps</strong>.</p>
                        <p>These structured learning paths guide players through drills and challenges, turning solo practice into a powerful tool for development.</p>
                    </div>
                    <div className="feature-card">
                        <h2>For Coaches</h2>
                        <p>Create customizable, step-by-step training roadmaps. </p>
                        <p>Easily assign tasks, post resources, and track player progress from a central dashboard.</p>
                        <div className="video-container">
                            <video autoPlay loop muted playsInline id="demoRoadmapCreation">
                                <source src="/demoRoadmapCreation.mp4" type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                    <div className="feature-card">
                        <h2>For Athletes</h2>
                        <p>Follow a clear, structured path designed by your coach to improve skills on your own time.</p>
                        <p>Receive direct feedback and stay motivated with a clear plan.</p>
                        <div className="exampleRoadmap">
                                <img src="/playerViewRoadmapProgress.png" alt="Example Player View of Roadmap" />
                        </div>
                    </div>
                    <div className="feature-card">
                        <h2>For Parents</h2>
                        <p>Support your child's development with a clear program provided by their coach.</p>
                        <p>Be confident they are practicing with purpose and structure.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landingpage;