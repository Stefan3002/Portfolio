import './achievements.css'
import Achievement from "../achievement/achievement";
import UniversitySVG from '../../utils/images/achievements/University.svg'
import MedalSVG from '../../utils/images/achievements/Medal.svg'
import CSSVG from '../../utils/images/achievements/CS.svg'
import CAESVG from '../../utils/images/achievements/CAE.svg'
import ZTMSVG from '../../utils/images/achievements/ZTM.svg'
import HighSchoolSVG from '../../utils/images/achievements/HighSchool.svg'
import {useEffect} from "react";
import achievementsCarousel from "../../utils/js/achievements-carousel";
const Achievements = () => {

    useEffect(() => {
        achievementsCarousel()
    }, [])

    const achievementList = [
        {
            name: 'Invited to University',
            high: 'West University of Timisoara',
            date: 'October 2021',
            icon: UniversitySVG,
            description: 'In 2021, before finishing my senior year, I received both an invitation and a call from the University asking me to join them for further studies in Computer Science.'
        },
        {
            name: 'Silver Medal',
            high: 'National Olympiad of IT&C',
            date: 'May 2019',
            icon: MedalSVG,
            description: 'In May 2019 The National Olimpiad of IT&C was held in Arad. After a 5 hour trial I managed to get the silver medal, qualifying as one of the best people in the country at using MS Office and creating WEB Sites.'
        },
        {
            name: 'Authored CS Challenges.',
            high: 'Code Wars Challenges.',
            date: 'October 2021',
            icon: CSSVG,
            description: 'I have created more than one CS Problems on Code Wars, one of the biggest websites for solving CS Challenges that have trained no less than 6500 people and have been solved by at least 2500 of them. These challenges were reviewed by the staff members of the website.'
        },
        {
            name: 'CAE score: 194.',
            high: 'Cambridge Advanced Exam',
            date: 'March 2021',
            icon: CAESVG,
            description: 'March 2021 was the date that I got my CAE certification after 4 different trials including : Writing, Speaking, Listening, Use of English.'
        },
        {
            name: 'Baccalaureate score: 9.61/10.',
            high: 'Baccalaureate Petrosani 2021.',
            date: 'June 2021',
            icon: HighSchoolSVG,
            description: 'In June 2021 I finished highschool with a 9.61 baccalaureate score out of 10.'
        },
        {
            name: 'Zero To Mastery Academy',
            high: 'Zero To Mastery helping with individual study.',
            date: 'June 2022',
            icon: ZTMSVG,
            description: 'As of June 2022 I am officially a ZTM Student. Learning about WEB Technologies like React Js from ZTM is a pleasure.'
        }
    ]

    return (
        <div className='achievements' id='achievements'>
            <h3 className='section-header'>Achievements</h3>
            <div className="content">
                {achievementList.map((achievement) => {
                    return  <Achievement achievement={achievement} />
                })}
            </div>

        </div>
    )
}
export default Achievements