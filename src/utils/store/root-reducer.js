import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import {projectModalReducer} from "./project-modal/project-modal-reducer";
import {logger} from "redux-logger/src";


const middleWares = [logger]
const enchancers = compose(applyMiddleware(...middleWares))
export const rootReducer = createStore(combineReducers({
    projectModal: projectModalReducer
}), undefined, enchancers)