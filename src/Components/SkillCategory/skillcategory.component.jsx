import './skillcategory.styles.css'
import SkillComponent from "../Skill/skill.component";
import {useState} from "react";
import skillComponent from "../Skill/skill.component";
const SkillcategoryComponent = ({skillsCategories}) => {


    const [idx, setIdx] = useState(0)

    const rightSlideHandler = () => {
        if(idx === skillsCategories.length - 1)
            setIdx(0)
        else
            setIdx(idx + 1)
    }
    const leftSlideHandler = () => {
        if(idx === 0)
            setIdx(skillsCategories.length - 1)
        else
            setIdx(idx - 1)
    }

    let title;
    let skills;
    if((skillsCategories[idx])) {
        title = skillsCategories[idx].title
        skills = skillsCategories[idx].skills
    }
    return (
        <div className='skill-category-container'>
            <h2><em>{title}</em></h2>
            <div className="skills">

                {
                    skillsCategories[idx] ? skills.map((skill) => {
                        return <SkillComponent key={skill.name} skill={skill}  />
                    }) : null
                }

            </div>
            <div className="slides-buttons">
                <div className="left-slide-container" onClick={leftSlideHandler}>
                    <i className="fa-3x fa fa-solid fa-circle-left"></i>
                </div>
                <div className='right-slide-container' onClick={rightSlideHandler}>
                    <i className="fa-3x fa fa-solid fa-circle-right"></i>
                </div>
            </div>
        </div>
    )
}
export default SkillcategoryComponent