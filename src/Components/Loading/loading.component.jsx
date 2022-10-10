import './loading.styles.sass'
import Loading from '../../utils/Loading.svg'
import BlurComponent from "../Blur/blur.component";
const LoadingComponent = () => {
    return (
        <>
            <BlurComponent />
            <div className='loading-container'>
                <img src={Loading} alt=""/>
            </div>
        </>

    )
}
export default LoadingComponent