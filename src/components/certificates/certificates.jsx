import './certificates.css'
import JSADV from '../../utils/images/certificates/JS Advanced.jpg'
import TopOfClass from '../../utils/images/certificates/TopOfClass.jpg'
import Silver from '../../utils/images/certificates/Silver.jpg'
import Mention from '../../utils/images/certificates/Mention.jpg'
import CAE from '../../utils/images/certificates/CAE.jpg'
import CSS from '../../utils/images/certificates/CSS.png'
import HTML from '../../utils/images/certificates/HTML.png'
const Certificates = () => {
    return (
        <>
            <h2 className='section-header'>Certificates</h2>
            <div className='certificates' id='certificates'>
                <a href={JSADV}><img src={JSADV} alt=""/></a>
                <a href={TopOfClass}><img src={TopOfClass} alt=""/></a>
                <a href={Silver}><img src={Silver} alt=""/></a>
                <a href={Mention}><img src={Mention} alt=""/></a>
                <a href={CAE}><img src={CAE} alt=""/></a>
                <a href={CSS}><img src={CSS} alt=""/></a>
                <a href={HTML}><img src={HTML} alt=""/></a>
                {/*<img src={JSADV} alt=""/>*/}
            </div>
        </>
    )
}
export default Certificates