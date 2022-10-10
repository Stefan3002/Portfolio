import {retrieveCollectionFromDB} from "../../firebase/firebase";


export const retrieveCertificates = async (dispatch) => {
    dispatch(startSetCertificates())
    try {
        const certificates = await retrieveCollectionFromDB('certificates')
        dispatch(successSetCertificates(certificates))
    }catch (err){
        dispatch(errorSetCertificates(err))
    }
}

const startSetCertificates = () => {
    return {
        type: 'START_SET_CERTIFICATES'
    }
}
const successSetCertificates = (certificates) => {
    return {
        type: 'SUCCESS_SET_CERTIFICATES',
        payload: certificates
    }
}
const errorSetCertificates = (error) => {
    return {
        type: 'ERROR_SET_CERTIFICATES',
        payload: error
    }
}