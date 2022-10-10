import './projectspage.styles.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import LoadingComponent from "../Loading/loading.component";
import {setProjects} from "../../store/Projects/projects.actions";
import ProjectsslideComponent from "../ProjectsSlide/projectsslide.component";
import {getProjectsLoadingStatus} from "../../store/Projects/projects.selectors";
import {useNavigate} from "react-router";
import {views} from "../../App";
import {setNavImg} from "../../store/NavImg/navImg.actions";
import projectsSVG from '../../utils/imgs/Projects.svg'

const ProjectspageComponent = () => {
    const dispatch = useDispatch()
    const loadingStatus = useSelector(getProjectsLoadingStatus)

    useEffect(() => {
        (async () => {
            await setProjects(dispatch)
        })()
    }, [])


    useEffect(() => {
        dispatch(setNavImg(projectsSVG))
    }, [])

    const navigate = useNavigate()
    const changeNextSlide = () => {
        let index = 3
        if(index + 1 === views.length)
            index = -1
        const nextSlide = views[index + 1]
        navigate(nextSlide)
    }

    return (
        <>
            {loadingStatus ? <LoadingComponent /> : null}

            <div className='projects-page-container container'>
                <ProjectsslideComponent />
            </div>
            <div className="next-slide-container" onClick={changeNextSlide}>
                <i className="fa-3x fa-solid fa-circle-down"></i>
            </div>
        </>

    )
}
export default ProjectspageComponent