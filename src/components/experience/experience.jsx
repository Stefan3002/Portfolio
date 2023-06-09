import './experience.css'
import ExperienceCard from "../experience-card/experience-card";
const Experience = () => {

    const experience = [
        {
            name: 'WEB Administrator',
            place: 'West University of Timisoara',
            date: 'May 2023'
        }
    ]

    return (
        <div className='experience-section' id='experience'>
            <div className='center-container'>
                <h2 className='section-header'>Professional Experience</h2>
                <div className="experience-cards">
                    {
                        experience.map(exp => {
                            return <ExperienceCard data={exp} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Experience