import './project-modal.css'
import Divider from "../divider/divider";
const ProjectModal = ({project}) => {
    if(!project)
        return <div />
    else {
        const {name, image, description, tech} = project
        return (
            <div className='project-modal'>
                <div className="modal-header">
                    <p className='project-title'>{name}</p>
                    <ul>
                        {tech.map(technology => {
                            return <li>{technology}</li>
                        })}
                    </ul>
                </div>
                <Divider />
                <div className="modal-body">
                    <p className='project-description'>{description}</p>
                </div>
            </div>
        )
    }
}
export default ProjectModal