import './profile-image.css'
import ProfilePic from '../../utils/images/header/Profile.jpg'
import {useEffect, useState} from "react";
import bringProfileImgInView from "../../utils/js/scroll-profile-image";
import startProfileImgAnimation from "../../utils/js/scroll-profile-image";
import Navigation from "../navigation/navigation";
const ProfileImage = () => {
    const [navOpened, setNavOpened] = useState(false)
    const openCloseNav = () => {
        navOpened ? setNavOpened(false) : setNavOpened(true)
    }

    useEffect(() => {
        startProfileImgAnimation()
    }, [])

    return (
        <div className='profile-image' onClick={openCloseNav}>
            {navOpened && <Navigation />}
            <img className='profile-img' src={ProfilePic} alt="Me"/>
        </div>
    )
}
export default ProfileImage