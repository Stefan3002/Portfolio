export const setProjectModalOpened = (bool) => {
    return {
        type: 'SET_PROJECT_MODAL_OPENED',
        payload: bool
    }
}
export const setProjectModalInfo = (info) => {
    return {
        type: 'SET_PROJECT_MODAL_INFO',
        payload: info
    }
}