import './body-section.css'
import Description from "../description/description";
import Projects from "../projects/projects";
import Education from "../education/education";
import Skills from "../skills/skills";
import Achievements from "../achievements/achievements";
const BodySection = () => {

    return (
        <div className='body-section'>
            <div className="center-container">
                <Description />
            </div>
            <h2 className='section-header'>Projects</h2>
            <Projects />
            <div className="center-container">
                <Education />
            </div>
            <Skills />
            <div className="center-container">
                <Achievements />
            </div>
        </div>
    )
}
export default BodySection