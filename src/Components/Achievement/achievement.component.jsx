import './achievement.styles.css'
const AchievementComponent = ({achievement}) => {
    const {title, content, high1, high2, icon, animationDelay, date} = achievement
    return (
        <div className='achievement-container' style={{'animationDelay':`${animationDelay}ms`}}>
            <div className="title-container">
                <img src={icon} alt=""/>
                <h2 className='title'>{title}</h2>
            </div>
            <p className='content'><span className='high1'>{high1}</span> {content}</p>
            <div className="date">
                <p className='high2'>{high2}</p>
                <span className='thin'>{date}</span>
            </div>
        </div>
    )
}
export default AchievementComponent