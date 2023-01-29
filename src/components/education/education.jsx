import './education.css'
import EducationPlace from "../education-place/education-place";
const Education = () => {

    const educationList = [
        {
            name: 'Zero to Mastery',
            skills: ['React JS.', 'Advanced JS.', 'Firebase.'],
            date: 'May 2022 - Present'
        },
        {
            name: 'West University of Timisoara',
            skills: ['C/C++ Programming', 'Python Programming', 'Java Programming'],
            date: 'October 2021 - 2024'
        },
        {
            name: 'AcadeMind',
            skills: ['MERN Stack.', 'TypeScript.'],
            date: 'October 2022 - Present'
        }
    ]

    return (
        <div className='education' id='education'>
            <h2 className='section-header'>Education</h2>
            <div className='education-places-container'>
                {educationList.map((education) => {
                    return <EducationPlace education={education} />
                })}
            </div>
        </div>
    )
}
export default Education