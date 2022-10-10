const INITIAL_VALUE = {
    certificates: [],
    isLoading: false,
    error: null
}

export const certificatesReducer = (state = INITIAL_VALUE, action) => {
    const {type, payload} = action
    switch (type){
        case 'START_SET_CERTIFICATES':
            return {
                ...state,
                isLoading: true
            }
        case 'SUCCESS_SET_CERTIFICATES':
            return {
                ...state,
                isLoading: false,
                certificates: payload
            }
        case 'ERROR_SET_CERTIFICATES':
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        default:
            return state
    }
}