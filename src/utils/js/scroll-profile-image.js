import {gsap} from 'gsap'

const startProfileImgAnimation = () => {
    window.addEventListener('scroll', bringProfileImgInView)
}

const bringProfileImgInView = () => {
    const profileImg = document.querySelector('.profile-image')
    console.log('SCROLL', window.scrollY)
    if(window.scrollY >= 200)
        gsap.to(profileImg, {duration: .5, x: `-150px`})

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