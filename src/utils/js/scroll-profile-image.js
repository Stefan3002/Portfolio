import {gsap} from 'gsap'

const startProfileImgAnimation = () => {
    window.addEventListener('scroll', bringProfileImgInView)
}

const bringProfileImgInView = () => {
    let amountToShift = '-150px'
    if(window.innerWidth <= 999)
        amountToShift = '-50px'
    const profileImg = document.querySelector('.profile-image')
    if(window.scrollY >= 200)
        gsap.to(profileImg, {duration: .5, x: amountToShift})
    console.log(window.innerWidth)
    if(window.scrollY !== 0) {
        gsap.to(profileImg, {duration: 1, y: `${window.scrollY}px`, ease: 'elastic'})
        gsap.to(profileImg, {duration: 1, scale: .7, ease: 'elastic'})
    }
    else {
        gsap.to(profileImg, {duration: .5, x: `0`})
        gsap.to(profileImg, {duration: 1, scale: 1, ease: 'elastic'})

    }



}


export default startProfileImgAnimation