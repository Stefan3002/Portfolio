import './head-section.css'
import Banner from "../banner/banner";
import ProfileImage from "../profile-image/profile-image";
const HeadSection = () => {
    return (
        <div className='head-section'>
            <Banner />
            <div className="center-container profile-info-wrapper">
                <div className="profile-info">
                    <ProfileImage />
                    <div className="text">
                        <h1>Stefan Secrieru</h1>
                        <p><span className="high">Student</span> | Aspiring WEB Developer</p>
                        <p>West University of Timisoara</p>
                        <p><a target='_blank' href="https://www.linkedin.com/in/%C8%99tefan-secrieru-b0b60b224/">.in</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeadSection