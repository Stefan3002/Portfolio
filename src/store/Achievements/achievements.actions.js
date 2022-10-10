import {retrieveCollectionFromDB} from "../../firebase/firebase";

export const setAchievements = async (dispatch) => {
    dispatch(startSetAchievements())
    try {
        const achievements = await retrieveCollectionFromDB('achievements')
        dispatch(successSetAchievements(achievements))
    }catch(err){
        dispatch(errorSetAchievements(err))
    }
}
const startSetAchievements = () => {
    return {
        type: 'START_SET_ACHIEVEMENTS',
    }
}
const successSetAchievements = (achievements) => {
    return {
        type: 'SUCCESS_SET_ACHIEVEMENTS',
        payload: achievements
    }
}
const errorSetAchievements = (error) => {
    return {
        type: 'ERROR_SET_ACHIEVEMENTS',
        payload: error
    }
}