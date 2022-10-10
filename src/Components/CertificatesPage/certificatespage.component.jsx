import './certificatespage.styles.css'
import CertificatesslideComponent from "../CertificatesSlide/certificatesslide.component";
import {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {retrieveCertificates} from "../../store/Certificates/certificates.actions";
import {getCertificates, getLoadingStatus} from "../../store/Certificates/certificates.selectors";
import LoadingComponent from "../Loading/loading.component";
import {views} from "../../App";
import {useNavigate} from "react-router";
import {setNavImg} from "../../store/NavImg/navImg.actions";
import certificatesSVG from '../../utils/imgs/Certificate.svg'


const CertificatespageComponent = () => {
    const certificates = useSelector(getCertificates)
    const loadingStatus = useSelector(getLoadingStatus)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavImg(certificatesSVG))
    }, [])

    useEffect(() => {
        (async () => {
            await retrieveCertificates(dispatch)
        })()
    }, [])

    const navigate = useNavigate()
    const changeNextSlide = () => {
        let index = 5
        if(index + 1 === views.length)
            index = -1
        const nextSlide = views[index + 1]
        navigate(nextSlide)
    }


    return (
        <>
            {loadingStatus ? <LoadingComponent /> : null}
            <div className='certificates-page-container container'>
                <CertificatesslideComponent certificates={certificates} />
            </div>
            <div className="next-slide-container" onClick={changeNextSlide}>
                <i className="fa-3x fa-solid fa-circle-down"></i>
            </div>
        </>
    )
}
export default CertificatespageComponent