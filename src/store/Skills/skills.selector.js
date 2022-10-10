const INITIAL_VALUE = {
    isLoading: false,
    error: null,
    skillsCategories: []
}

export const skillsReducer = (state = INITIAL_VALUE, action = {}) => {
    const {type, payload} = action
    switch (type){
        case 'START_SET_SKILLS':
            return {
                ...state,
                isLoading: true
            }
        case 'SUCCESS_SET_SKILLS':
            return {
                ...state,
                isLoading: false,
                skillsCategories: payload
            }
        case 'ERROR_SET_SKILLS':
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        default:
            return state
    }
}