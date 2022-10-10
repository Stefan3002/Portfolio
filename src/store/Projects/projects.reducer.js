const INITIAL_VALUE = {
    isLoading: false,
    error: null,
    projects: [],
    currentPreview: ""
}
export const projectsReducer = (state = INITIAL_VALUE, action) => {
    const {type, payload} = action
    switch (type){
        case 'START_SET_PROJECTS':
            return {
                ...state,
                isLoading: true
            }
        case 'SUCCESS_SET_PROJECTS':
            return {
                ...state,
                isLoading: false,
                projects: payload
            }
        case 'ERROR_SET_PROJECTS':
            return {
                ...state,
                error: payload
            }
        case 'SET_PREVIEW':
            return {
                ...state,
                currentPreview: payload
            }
        default:
            return state
    }
}