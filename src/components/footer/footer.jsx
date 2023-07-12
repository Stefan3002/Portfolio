import './footer.css'
import {useState} from "react";
const Footer = () => {
    const [showR, setShowR] = useState(false)

    const showResources = () => {
        showR ? setShowR(false) : setShowR(true)
    }

    return (
        <div className='footer' id='footer'>
            <p>2023. <span className="high"><a target='_blank' href="https://www.linkedin.com/in/%C8%99tefan-secrieru-b0b60b224/">Stefan Secrieru.</a></span> &copy; All rights reserved.</p>
            <p>Resources: <span className='high' onClick={showResources}>here</span></p>
            {showR && <div>
                <p>https://www.svgrepo.com/svg/281462/tic-tac-toe</p>
                <p>https://www.svgrepo.com/svg/293585/sword</p>
                <p>https://www.svgrepo.com/svg/235128/drone</p>
               <p> https://www.svgrepo.com/svg/488152/description</p>
               <p> https://www.svgrepo.com/svg/452092/react</p>
               <p> https://www.svgrepo.com/svg/452045/js</p>
               <p> https://www.svgrepo.com/svg/449425/star</p>
               <p> https://www.svgrepo.com/svg/449265/star-half</p>
               <p> https://www.svgrepo.com/svg/449264/star</p>
               <p> https://www.svgrepo.com/svg/452228/html-5</p>
               <p> https://www.svgrepo.com/svg/374146/typescript-official</p>
               <p> https://www.svgrepo.com/svg/330398/express</p>
               <p> https://www.svgrepo.com/svg/452075/node-js</p>
               <p> https://www.svgrepo.com/svg/373595/firebase</p>
               <p> https://www.svgrepo.com/svg/452185/css-3</p>
               <p> https://www.svgrepo.com/svg/255832/sql</p>
               <p> https://www.svgrepo.com/svg/373845/mongo</p>
               <p> https://www.svgrepo.com/svg/421681/arrow-direction-maps-2</p>
               <p> https://www.svgrepo.com/svg/293901/university</p>
               <p> https://www.svgrepo.com/svg/422997/medal-silver-badge</p>
               <p> https://www.svgrepo.com/svg/475613/keyboard</p>
               <p> https://www.svgrepo.com/svg/241056/england</p>
               <p> https://www.svgrepo.com/svg/279366/pen-writer</p>
               <p> https://www.svgrepo.com/svg/474437/academic-exchange</p>
               <p> https://www.svgrepo.com/svg/306956/webgl</p>
                <p>https://www.svgrepo.com/svg/375528/ai-platform-unified</p>
                <p>https://www.svgrepo.com/svg/191391/panda-bear-panda</p>
                <p>https://www.svgrepo.com/svg/375503/tensorflow-enterprise</p>
                <p>https://www.svgrepo.com/svg/452091/python</p>
                <p>https://www.svgrepo.com/svg/454722/book-education-learn</p>
                <p>https://www.svgrepo.com/svg/444237/chart-scatter-plot</p>
                <p>https://www.svgrepo.com/svg/373554/django</p>
                <p>https://www.svgrepo.com/svg/373938/numpy</p>
                <p>https://www.svgrepo.com/svg/227480/design-skills-ruler</p>
                <p>https://www.svgrepo.com/svg/452136/wordpress</p>
            </div>}
        </div>
    )
}
export default Footer