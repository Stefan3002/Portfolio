import './navigation.styles.css'
import {Link, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {getNavImg} from "../../store/NavImg/navImg.selectors";
import {useEffect, useState} from "react";
import BlurComponent from "../Blur/blur.component";
import MenubuttonComponent from "../MenuButton/menubutton.component";
const NavigationComponent = () => {
    const navImg = useSelector(getNavImg)
    const [menuOpened, setMenuOpened] = useState(true)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        setScreenWidth(window.innerWidth)
        if(screenWidth <= 1000)
            setMenuOpened(false)
        else
            setMenuOpened(true)
    },[])

    const openCloseMenu = () => {
        menuOpened ? setMenuOpened(false) : setMenuOpened(true)
    }

    return (
        <>
            {screenWidth <= 1000 && menuOpened === true ? <BlurComponent /> : null}
            <div className="custom-shape-divider-top-1664824908">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill"></path>
                </svg>
            </div>
            {menuOpened ? <div className='navigation-container'>
                <MenubuttonComponent onClickHandler ={openCloseMenu}/>
                <div className="profile-info">
                    <h1>Stefan Secrieru</h1>
                    <img src={navImg} alt="Picture of myself."/>
                </div>
                <ul>
                    <Link to='/'><li><span className="left-container-high"><i className="fa-xl fa fa-solid fa-igloo"></i></span>Home. <span className="right-container-high"><i
                        className="fa-xl fa fa-solid fa-arrow-right"></i></span></li></Link>
                    <Link to='/about'><li><span className="left-container-high"><i className="fa fa-xl fa-solid fa-circle-info"></i></span>About. <span className="right-container-high"><i
                        className="fa-xl fa fa-solid fa-arrow-right"></i></span></li></Link>
                    <Link to='/skills'><li><span className="left-container-high"><i className="fa-xl fa fa-solid fa-keyboard"></i></span>Skills.<span className="right-container-high"><i
                        className="fa-xl fa fa-solid fa-arrow-right"></i></span></li></Link>
                    <Link to='/projects'><li><span className="left-container-high"><i className="fa-xl fa fa-solid fa-diagram-project"></i></span>Projects.<span className="right-container-high"><i
                        className="fa-xl fa fa-solid fa-arrow-right"></i></span></li></Link>
                    <Link to='/achievements'><li><span className="left-container-high"><i className="fa-xl fa fa-solid fa-medal"></i></span>Achievements.<span className="right-container-high"><i
                        className="fa-xl fa fa-solid fa-arrow-right"></i></span></li></Link>
                    <Link to='/certificates'><li><span className="left-container-high"><i className="fa-xl fa fa-solid fa-certificate"></i></span>Certificates.<span className="right-container-high"><i
                        className="fa-xl fa fa-solid fa-arrow-right"></i></span></li></Link>
                    <li className='linked-in-button'><a target='_blank' href="https://www.linkedin.com/in/%C8%99tefan-secrieru-b0b60b224/"><i className="fa-xl fa fa-brands fa-linkedin"></i></a></li>
                </ul>
            </div> : <MenubuttonComponent onClickHandler ={openCloseMenu}/>}

            <div className="custom-shape-divider-bottom-1664825130">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill"></path>
                </svg>
            </div>
            <Outlet />
        </>

    )
}
export default NavigationComponent