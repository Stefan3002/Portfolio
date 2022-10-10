import './skill.styles.css'
import ProgressbarComponent from "../ProgressBar/progressbar.component";
const SkillComponent = ({skill}) => {
    const {name, icon, progress} = skill
    return (
        <div className='skill-container'>
            <p>{name}</p>
            <i className={icon}></i>
            <p>{progress}</p>
            <ProgressbarComponent progress={progress}/>
        </div>
    )
}
export default SkillComponent