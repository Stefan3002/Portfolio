const INITIAL_VALUE = {
    isLoading: false,
    error: null,
    achievements: []
}
export const achievementsReducer = (state = INITIAL_VALUE, action) => {
    const {type, payload} = action
    switch (type){
        case 'START_SET_ACHIEVEMENTS':
            return {
                ...state,
                isLoading: true
            }
        case 'SUCCESS_SET_ACHIEVEMENTS':
            return {
                ...state,
                isLoading: false,
                achievements: payload
            }
        case 'ERROR_SET_ACHIEVEMENTS':
            return {
                ...state,
                error: payload
            }
        default:
            return state
    }
}