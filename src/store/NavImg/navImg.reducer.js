const INITIAL_VALUE = {
    navImg: null
}

export const navImgReducer = (state = INITIAL_VALUE, action = {}) => {
    const {type, payload} = action
    switch (type) {
        case 'SET_NAV_IMG':
            return {
                ...state,
                navImg: payload
        }
        default:
            return {
                ...state
            }
    }
}