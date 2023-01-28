import './project.css'
import {setProjectModalInfo, setProjectModalOpened} from "../../utils/store/project-modal/project-modal-actions";
import {useDispatch, useSelector} from "react-redux";
import {getProjectModalInfo, getProjectModalOpened} from "../../utils/store/project-modal/project-modal-selectors";
import ProjectModal from "../project-modal/project-modal";
const Project = ({project}) => {
    const projectModalOpened = useSelector(getProjectModalOpened)
    const projectModalInfo = useSelector(getProjectModalInfo)

    const dispatch = useDispatch()
    const openProjectModal = () => {
        dispatch(setProjectModalOpened(true))
        dispatch(setProjectModalInfo(project))
    }

    if(!project)
        return <div />
    else {
        const {name, image, link} = project
        return (
            <a href={link}>
                <div className='project' onMouseEnter={openProjectModal}>
                    <img src={image} alt=""/>
                    {projectModalOpened && name === projectModalInfo.name && <ProjectModal project={projectModalInfo} />}
                </div>
            </a>
        )
    }
}
export default Project