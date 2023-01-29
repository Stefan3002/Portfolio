import './education-place.css'
import Divider from "../divider/divider";
import Triangle from "../triangle/triangle";
const EducationPlace = ({education}) => {

    if(education) {
        const {name, date, skills} = education
        return (
            <div className='education-place'>
                {/*<Triangle />*/}
                <div className="education-place-container">
                    <p className='education-name'>{name}</p>
                    <Divider/>
                    <ul>
                        {skills.map((skill) => {
                            return <li>{skill}</li>
                        })}
                    </ul>
                    <p className='education-date'>{date}</p>
                </div>
            </div>

        )
    }
    else
        return <div />
}
export default EducationPlace