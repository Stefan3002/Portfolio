import './achievementsslide.styles.css'
import {useState} from "react";
import {useSelector} from "react-redux";
import {getAchievements} from "../../store/Achievements/achievemnts.selectors";
import AchievementComponent from "../Achievement/achievement.component";

const AchievementsslideComponent = () => {
    const achievements = useSelector(getAchievements)
    let numberOfAchievements = Math.floor(window.innerHeight / 620) * Math.floor((window.innerWidth - 300) / 550)
    if(window.innerWidth < 1000)
        numberOfAchievements = 2

    const [startIdx, setStartIdx] = useState(0)
    const [lastIdx, setLastIdx] = useState(numberOfAchievements)

    const rightSlideHandler = () => {
        setLastIdx(lastIdx + numberOfAchievements)
        setStartIdx(startIdx + numberOfAchievements)
    }
    const leftSlideHandler = () => {
        setLastIdx(startIdx)
        setStartIdx(startIdx - numberOfAchievements)
    }

    console.log(achievements.length > numberOfAchievements && achievements.length - lastIdx >= 1)
    return (
        <div className='achievements-slide-container'>


            {
                achievements.map((achievement, idx) => {
                    if(idx >= startIdx && idx < lastIdx)
                        return <AchievementComponent achievement={achievement} />
                })
            }
            <div className="nav-buttons">
                {startIdx > 0 ? <div className="left-slide-container" onClick={leftSlideHandler}>
                    <i className="fa-3x fa fa-solid fa-circle-left"></i>
                </div> : null}
                {achievements.length > numberOfAchievements && achievements.length - lastIdx >= 1 ? <div className='right-slide-container' onClick={rightSlideHandler}>
                    <i className="fa-3x fa fa-solid fa-circle-right"></i>
                </div> : null}
            </div>

        </div>
    )
}
export default AchievementsslideComponent