import './navigation.css'
import Divider from "../divider/divider";
import UpSVG from '../../utils/images/navigation/Up.svg'
const Navigation = () => {
    return (
        <div className='navigation'>
            <p className='nav-title'>How may I assist you?</p>
            <Divider />
            <ul>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#skills">Skills</a></li>
            </ul>
            <Divider />
            <div className="bottom-section">
                <a href="#"><img className='nav-icon' src={UpSVG} alt=""/></a>
                <a href="#footer"><img className='nav-icon arrow-down' src={UpSVG} alt=""/></a>
            </div>
        </div>
    )
}
export default Navigation