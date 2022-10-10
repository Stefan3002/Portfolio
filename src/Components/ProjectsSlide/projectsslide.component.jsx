import './projectsslide.styles.css'
import {useSelector} from "react-redux";
import {useState} from "react";
import {getCurrentPreview, getProjects} from "../../store/Projects/projects.selectors";
import ProjectComponent from "../Project/project.component";

const ProjectsslideComponent = () => {
    const projects = useSelector(getProjects)
    let numberOfProjects = Math.floor(window.innerHeight / 500) * Math.floor((window.innerWidth - 300) / 400)
    if(window.innerWidth < 1000)
        numberOfProjects = 2
    const [startIdx, setStartIdx] = useState(0)
    const [lastIdx, setLastIdx] = useState(numberOfProjects)

    const rightSlideHandler = () => {
        setLastIdx(lastIdx + numberOfProjects)
        setStartIdx(startIdx + numberOfProjects)
    }
    const leftSlideHandler = () => {
        setLastIdx(startIdx)
        setStartIdx(startIdx - numberOfProjects)
    }

    return (
        <div className='projects-slide-container'>
            <div className="projects-container">
                {
                    projects.map((project, idx) => {
                        if(idx >= startIdx && idx < lastIdx)
                            return <ProjectComponent project={project} />
                    })
                }
            </div>
            <div className="nav-buttons">
                {startIdx > 0 ? <div className="left-slide-container" onClick={leftSlideHandler}>
                    <i className="fa-3x fa fa-solid fa-circle-left"></i>
                </div> : null}
                {projects.length > numberOfProjects && projects.length - lastIdx >= 1 ? <div className='right-slide-container' onClick={rightSlideHandler}>
                    <i className="fa-3x fa fa-solid fa-circle-right"></i>
                </div> : null}
            </div>
        </div>
    )
}
export default ProjectsslideComponent