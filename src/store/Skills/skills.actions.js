import {retrieveSkillsFromDB} from "../../firebase/firebase";

export const setSkills = async (dispatch) => {
    dispatch(startSetSkills())
    try{
        const skills = await retrieveSkillsFromDB('skills')
        dispatch(successSetSkills(skills))
    }catch(err){
        dispatch(errorSetSkills(err))
    }
}

const startSetSkills = () => {
    return {
        type: 'START_SET_SKILLS'
    }
}
const successSetSkills = (skills) => {
    return {
        type: 'SUCCESS_SET_SKILLS',
        payload: skills
    }
}
const errorSetSkills = (err) => {
    return {
        type: 'ERROR_SET_SKILLS',
        payload: err
    }
}