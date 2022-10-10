import './certificate.styles.css'
const CertificateComponent = ({certificate}) => {
    const {name, imgURL} = certificate
    return (
        <div className='certificate-container'>
            <a href={imgURL}>
                <h2>{name}</h2>
                <img src={imgURL} alt=""/>
            </a>
        </div>
    )
}
export default CertificateComponent