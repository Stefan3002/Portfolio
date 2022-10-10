import {retrieveCollectionFromDB} from "../../firebase/firebase";

export const setProjects = async (dispatch) => {
    dispatch(startSetProjects())
    try {
        const projects = await retrieveCollectionFromDB('projects')
        dispatch(successSetProjects(projects))
    }catch(err){
        dispatch(errorSetProjects(err))
    }
}
const startSetProjects = () => {
    return {
        type: 'START_SET_PROJECTS',
    }
}
const successSetProjects = (projects) => {
    return {
        type: 'SUCCESS_SET_PROJECTS',
        payload: projects
    }
}
const errorSetProjects = (error) => {
    return {
        type: 'ERROR_SET_PROJECTS',
        payload: error
    }
}

export const setCurrentPreview = (preview) => {
    return {
        type: 'SET_PREVIEW',
        payload: preview
    }
}