import './button.styles.css'
import {Link} from "react-router-dom";
const ButtonComponent = ({text, anchor}) => {
    return (
        <div className='button-container'>
            <Link to={anchor}><button>{text}</button></Link>
        </div>
    )
}
export default ButtonComponent