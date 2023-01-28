import './education-place.css'
import {useEffect, useRef, useState} from "react";
import Divider from "../divider/divider";
const EducationPlace = ({educationList}) => {
    const [index, setIndex] = useState(0)
    const [buttonText, setButtonText] = useState('More.')
    const {name, date, skills} = educationList[index]

    useEffect(() => {
        if(index === educationList.moduleName - 1)
            setButtonText('Okay I get it, you\'re smart!')
    }, [index])
    const increaseIndex = () => {
        setIndex(() => {
            if(index < educationList.length - 1)
                return index + 1
            else
                return 0
        })
    }

    return (
        <div className='education-place'>
            <p className='education-name'>{name}</p>
            <Divider />
            <ul>
                {skills.map((skill) => {
                    return <li>{skill}</li>
                })}
            </ul>
            <p className='education-date'>{date}</p>
            <span className="next-button" onClick={increaseIndex}>{buttonText}</span>
        </div>

    )
}
export default EducationPlace