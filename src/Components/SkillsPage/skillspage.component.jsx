import './skillspage.styles.css'
import SkillcategoryComponent from "../SkillCategory/skillcategory.component";
import {views} from "../../App";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setNavImg} from "../../store/NavImg/navImg.actions";
import skillsSVG from "../../utils/imgs/Skills.svg";
import LoadingComponent from "../Loading/loading.component";
import {setSkills} from "../../store/Skills/skills.actions";
import {getSkills, getSkillsLoading} from "../../store/Skills/skills.selectors";
const SkillspageComponent = () => {

    const dispatch = useDispatch()
    const isLoading = useSelector(getSkillsLoading)
    const skillsCategories = useSelector(getSkills)

    useEffect(() => {
        (async () => {
            await setSkills(dispatch)
        })()
    }, [])

    useEffect(() => {
        dispatch(setNavImg(skillsSVG))
    }, [])


    const navigate = useNavigate()
    const changeNextSlide = () => {
        let index = 2
        if(index + 1 === views.length)
            index = -1
        const nextSlide = views[index + 1]
        navigate(nextSlide)
    }

    return (
        <>
            {isLoading ? <LoadingComponent /> : null}
            <div className='skills-page-container container'>
                <SkillcategoryComponent skillsCategories={skillsCategories} />
            </div>
            <div className="next-slide-container" onClick={changeNextSlide}>
                <i className="fa-3x fa-solid fa-circle-down"></i>
            </div>
        </>
    )
}
export default SkillspageComponent