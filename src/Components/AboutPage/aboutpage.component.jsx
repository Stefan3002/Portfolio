import './aboutpage.styles.css'
import {useEffect, useState} from "react";
import ButtonComponent from "../Button/button.component";
import {retrieveCollectionFromDB} from "../../firebase/firebase";
import {useNavigate} from "react-router";
import {views} from "../../App";
import {useDispatch} from "react-redux";
import {setNavImg} from "../../store/NavImg/navImg.actions";
import aboutSVG from '../../utils/imgs/About.svg'

const AboutpageComponent = () => {
    const navigate = useNavigate()
    const convertAgeToDays = (1000*60*60*24)
    const [calculatedAge, setCalculatedAge] = useState(0)
    const [currentOccupation, setCurrentOccupation] = useState('')

    const changeNextSlide = () => {
        let index = 1
        if(index + 1 === views.length)
            index = -1
        const nextSlide = views[index + 1]
        navigate(nextSlide)
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavImg(aboutSVG))
    }, [])

    useEffect(() => {
        (async () => {
            const response = await retrieveCollectionFromDB('personalInfo')
            setCurrentOccupation(response[0].currentOccupation)
        })()
    }, [])
    useEffect(() => {
        const currentDate = new Date()
        const birthDate = new Date(2002, 11, 30)
        const ageMs = currentDate - birthDate
        const ageDays  = Math.floor(ageMs / convertAgeToDays)
        setCalculatedAge(Math.floor(ageDays / 365))
    }, [])
    return (
        <>
        <div className='about-page-container container'>
            <div className="left-info">
                <div className="info-item">
                    <p>Complete name: Ștefan Secrieru</p>
                    <hr/>
                </div>
                <div className="info-item">
                    <p>Birth date: 30/12/2002</p>
                    <hr/>
                </div>
                <div className="info-item">
                    <p>Age: {calculatedAge}</p>
                    <hr/>
                </div>
                <div className="info-item">
                    <p>E-mail: secrieru2302@gmail.com</p>
                    <hr/>
                </div>
                <div className="info-item">
                    <p>Current city: Timisoara</p>
                    <hr/>
                </div>
                <div className="info-item">
                    <p>Home town: Petrosani</p>
                    <hr/>
                </div>
                <div className="info-team contact-me-button">
                    <ButtonComponent text='Contact me.' anchor='/contact'/>
                </div>
            </div>
            <div className="right-info">
                <div className="frame-decoration1" />
                <div className="frame-decoration2" />
                <h1>Current occupation:</h1>
                <h2 className='current-occupation'><em>{currentOccupation}</em></h2>
                <div className='see-skills-button'>
                    <ButtonComponent text='See skills.' anchor='/skills'/>
                </div>
            </div>
        </div>
            <div className="next-slide-container" onClick={changeNextSlide}>
                <i className="fa-3x fa-solid fa-circle-down"></i>
            </div>
        </>

    )
}
export default AboutpageComponent