import './soft-skill.css'
const SoftSkill = ({skill}) => {
    const {name, mastery, icon} = skill
    return (
        <li className='soft-skill'>
            <p>{name}</p>
            <div className='segment'>
                <div className='back-line'>
                    <div className='front-line' style={{width: `${mastery}%`}} />
                </div>
                <p className='mastery'>{mastery} %</p>
            </div>
        </li>
    )
}
export default SoftSkill