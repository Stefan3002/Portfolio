import './experience-card.css'
const ExperienceCard = ({data}) => {
    const {name, place, date} = data
    return (
        <div className='experience-card'>
            <h2>{name}</h2>
            <p>{place}</p>
            <p>{date}</p>
        </div>
    )
}
export default ExperienceCard