import './education.css'
import EducationPlace from "../education-place/education-place";
const Education = () => {

    const educationList = [
        {
            name: 'West University of Timisoara',
            skills: ['C/C++ Programming', 'Python Programming', 'Java Programming', 'Firebase.'],
            date: 'October 2021 - 2024'
        },
        {
            name: 'Zero to Mastery',
            skills: ['React JS.', 'Advanced JS.'],
            date: 'May 2022 - Present'
        },
        {
            name: 'AcadeMind',
            skills: ['MERN Stack.', 'TypeScript.'],
            date: 'October 2022 - Present'
        }
    ]

    return (
        <div className='education'>
            <h2 className='section-header'>Education</h2>
            <div className='education-places-container'>
                <EducationPlace educationList={educationList} />
            </div>
        </div>
    )
}
export default Education