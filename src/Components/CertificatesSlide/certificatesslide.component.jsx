import './certificatesslide.styles.css'
import CertificateComponent from "../Certificate/certificate.component";
import {useState} from "react";
const CertificatesslideComponent = ({certificates}) => {
    let numberOfCertificates = Math.floor(window.innerHeight / 670) * Math.floor((window.innerWidth - 300) / 500)
    if(window.innerWidth < 1000)
        numberOfCertificates = 2
    const [startIdx, setStartIdx] = useState(0)
    const [lastIdx, setLastIdx] = useState(numberOfCertificates)

    console.log(startIdx, lastIdx)
    const rightSlideHandler = () => {
        setLastIdx(lastIdx + numberOfCertificates)
        setStartIdx(startIdx + numberOfCertificates)
    }
    const leftSlideHandler = () => {
        setLastIdx(startIdx)
        setStartIdx(startIdx - numberOfCertificates)
    }

    return (
        <div className='certificates-slide-container'>


            {
                certificates.map((certificate, idx) => {
                    if(idx >= startIdx && idx < lastIdx)
                        return <CertificateComponent certificate={certificate} />
                })
            }
            <div className="nav-buttons">
                {startIdx > 0 ? <div className="left-slide-container" onClick={leftSlideHandler}>
                    <i className="fa-3x fa fa-solid fa-circle-left"></i>
                </div> : null}
                {certificates.length > numberOfCertificates && certificates.length - lastIdx >= 1 ? <div className='right-slide-container' onClick={rightSlideHandler}>
                    <i className="fa-3x fa fa-solid fa-circle-right"></i>
                </div> : null}
            </div>
        </div>
    )
}
export default CertificatesslideComponent