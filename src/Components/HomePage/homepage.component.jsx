import './homepage.styles.css'
import meImg from '../../utils/imgs/me2.jpg'
import ButtonComponent from "../Button/button.component";
import {views} from "../../App";
import {useNavigate} from "react-router";
import {useEffect} from "react";
import {setNavImg} from "../../store/NavImg/navImg.actions";
import homeSVG from '../../utils/imgs/me.jpg'
import {useDispatch} from "react-redux";
const HomepageComponent = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavImg(homeSVG))
    }, [])

    const navigate = useNavigate()

    const changeNextSlide = () => {
        let index = 0
        if(index + 1 === views.length)
            index = -1
        const nextSlide = views[index + 1]
        navigate(nextSlide)
    }

    return (
        <>
            <div className='home-page-container container'>
                <div className="text-container">
                    <h2 className='greeting'>Hello there!</h2>
                    <p><div className="my-name-container">My name is  <div className='bold my-name'>Stefan,</div></div></p>
                    <p>I am a <em className='bold'>student</em> and an aspiring <em className='bold'>WEB Developer.</em></p>
                    <p>Since I was a kid, I found teaching a computer what to do, to be extraordinary. Just by writing lines of code you can create such amazing things. Your imagination is the only limit. I am very passioned about anything related to programming and computers. Right now I am a student at the West University of Timișoara and I intend to master WEB Technologies and become a full-stack WEB Developer.</p>
                    <div className="home-utils">
                        <ButtonComponent text='See more.' anchor='/about'/>
                        <a target='_blank' href="https://www.linkedin.com/in/%C8%99tefan-secrieru-b0b60b224/"><i className="fa-3x fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="img-container">
                    <div className="border-decoration1" />
                    <div className="border-decoration2" />
                    <img src={meImg} alt=""/>
                </div>
            </div>
            <div className="next-slide-container" onClick={changeNextSlide}>
                <i className="fa-3x fa-solid fa-circle-down"></i>
            </div>
        </>

    )
}
export default HomepageComponent