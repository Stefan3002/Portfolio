import './skill.css'
import Divider from "../divider/divider";
import fullStar from '../../utils/images/body/skills/fullStar.svg'
import halfStarSVG from '../../utils/images/body/skills/halfStar.svg'
import emptyStar from '../../utils/images/body/skills/emptyStar.svg'

const Skill = ({skill}) => {
    const {name, mastery, icon} = skill
    const stars = 5 * mastery / 100
    const starCount = []
    const leftStarCount = []
    let halfStar = false
    for(let i = 1; i <= stars; i++)
        starCount.push(1)
    for(let i = stars + 1; i <= 5; i++)
        leftStarCount.push(1)
    if(Math.floor(stars) !== stars)
        halfStar = true
    console.log(halfStar)
    return (
        <div className='skill'>
            <p className='skill-name'>{name}</p>
            <div>
                <p className='skill-mastery'>{mastery} %</p>
                <Divider />
                {starCount.map((star) => {
                    return <img className='star-icon' src={fullStar} alt=""/>
                })}
                {halfStar && <img className='star-icon' src={halfStarSVG} alt=""/>}
                {leftStarCount.map((star) => {
                    return <img className='star-icon' src={emptyStar} alt=""/>
                })}
            </div>
            <img className='skill-icon' src={icon} alt=""/>
        </div>
    )
}
export default Skill