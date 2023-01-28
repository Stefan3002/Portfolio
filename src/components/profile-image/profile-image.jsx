import './profile-image.css'
import ProfilePic from '../../utils/images/header/Profile.jpg'
const ProfileImage = () => {
    return (
        <div className='profile-image'>
            <img src={ProfilePic} alt="Me"/>
        </div>
    )
}
export default ProfileImage