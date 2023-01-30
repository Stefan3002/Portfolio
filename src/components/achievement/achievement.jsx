import './achievement.css'
import achievementsCarousel, {
    resumeAchievementsCarousel,
    stopAchievementsCarousel
} from "../../utils/js/achievements-carousel";
const Achievement = ({achievement}) => {
    const {name, description, date, icon, high} = achievement

    const stopCarousel = () => {
        stopAchievementsCarousel()
    }
    const restartCarousel = () => {
        resumeAchievementsCarousel()
    }

    return (
        <div className='achievement' onMouseLeave={restartCarousel} onMouseEnter={stopCarousel}>
            <div className="achievement-header">
                <img className='achievement-icon' src={icon} alt=""/>
                <p className='achievement-title'>{name}</p>
            </div>

            <p className='achievement-description'>{description}</p>
            <p className='achievement-high'>{high}</p>
            <p className='achievement-date'>{date}</p>
        </div>
    )
}
export default Achievement