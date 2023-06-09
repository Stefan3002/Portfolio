import './body-section.css'
import Description from "../description/description";
import Projects from "../projects/projects";
import Education from "../education/education";
import Skills from "../skills/skills";
import Achievements from "../achievements/achievements";
import Certificates from "../certificates/certificates";
import Experience from "../experience/experience";
const BodySection = () => {

    return (
        <div className='body-section'>
            <div className="center-container">
                <Description />
            </div>
            <h2 className='section-header'>Projects</h2>
            <Projects />
            <Experience />
            <div className="center-container">
                <Education />
            </div>
            <Skills />
            <div className="center-container">
                <Achievements />
            </div>
            <Certificates />
        </div>
    )
}
export default BodySection