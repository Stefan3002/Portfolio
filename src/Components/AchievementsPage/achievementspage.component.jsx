import './achievements.styles.css'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAchievementsLoadingStatus} from "../../store/Achievements/achievemnts.selectors";
import {setAchievements} from "../../store/Achievements/achievements.actions";
import LoadingComponent from "../Loading/loading.component";
import AchievementsslideComponent from "../AchievementsSlide/achievementsslide.components";
import {useNavigate} from "react-router";
import {views} from "../../App";
import {setNavImg} from "../../store/NavImg/navImg.actions";
import achievementSVG from '../../utils/imgs/Achievements.svg'

const AchievementspageComponent = () => {
    const dispatch = useDispatch()
    const loadingStatus = useSelector(getAchievementsLoadingStatus)

    useEffect(() => {
        (async () => {
            await setAchievements(dispatch)
        })()
    }, [])

    const navigate = useNavigate()
    const changeNextSlide = () => {
        let index = 4
        if(index + 1 === views.length)
            index = -1
        const nextSlide = views[index + 1]
        navigate(nextSlide)
    }


    useEffect(() => {
        dispatch(setNavImg(achievementSVG))
    }, [])

    return (
        <>
            {loadingStatus ? <LoadingComponent /> : null}
            <div className='achievements-page-container container'>
                <AchievementsslideComponent />
            </div>
            <div className="next-slide-container" onClick={changeNextSlide}>
                <i className="fa-3x fa-solid fa-circle-down"></i>
            </div>
        </>

    )
}
export default AchievementspageComponent