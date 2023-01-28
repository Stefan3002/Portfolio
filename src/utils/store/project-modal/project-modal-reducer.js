const INITIAL_VALUE = {
    projectModalOpened: false,
    projectModalInfo: undefined
}

export const projectModalReducer = (state = INITIAL_VALUE, action) => {
    const {type, payload} = action
    switch (type) {
        case 'SET_PROJECT_MODAL_OPENED':
            return {
                ...state,
                projectModalOpened: payload
            }
        case 'SET_PROJECT_MODAL_INFO':
            return {
                ...state,
                projectModalInfo: payload
            }
        default: return state
    }
}