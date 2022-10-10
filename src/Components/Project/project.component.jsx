import './project.styles.css'
const ProjectComponent = ({project}) => {
    const {title, icon,link, animationDelay, description} = project

    return (
        <div className='project-container' style={{'animationDelay':`${animationDelay}ms`}}>
            <a target='_blank' href={link}>
                <div className="title-container">
                    <img src={icon} alt=""/>
                    <h2 className='title'>{title}</h2>
                    <p className='thin'>{description}</p>
                </div>
            </a>
        </div>
    )
}
export default ProjectComponent