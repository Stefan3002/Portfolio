import {gsap} from "gsap"
const timeline = gsap.timeline({repeat: -1})


const achievementsCarousel = () => {
    const achievements = document.querySelector('.achievements .content')
    timeline.from(achievements, {duration: 5, x: '150%', repeat: '-1', ease: 'none'})
    timeline.to(achievements, {duration: 5, x: '-150%', repeat: '-1', ease: 'none'})

}
export const stopAchievementsCarousel = () => {
    timeline.pause()
}
export const  resumeAchievementsCarousel = () => {
    timeline.resume()
}
export default achievementsCarousel