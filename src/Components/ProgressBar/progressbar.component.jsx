import './progressbar.styles.css'
const ProgressbarComponent = ({progress}) => {
    return (
        <div className='progress-bar-container'>
            <div className="progress-container">
                <div className="progress-value" style={{"width":`${progress}%`}}/>
            </div>
        </div>
    )
}
export default ProgressbarComponent