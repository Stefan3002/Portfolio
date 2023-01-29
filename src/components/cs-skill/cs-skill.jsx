import './cs-skill.css'
const CsSkill = ({skill}) => {
    const {name, mastery} = skill
    return (
        <li className='cs-skill'>
            <p>{name}</p>
            <p>{mastery}</p>
            <div className="segment">
                <div className="outer">
                    <div className="inner" />
                    <div className="filled"  />
                </div>
            </div>
        </li>
    )
}
export default CsSkill