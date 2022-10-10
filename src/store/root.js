import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import {logger} from "redux-logger/src";
import thunk from 'redux-thunk'
import {certificatesReducer} from "./Certificates/certificates.reducer";
import {achievementsReducer} from "./Achievements/achievements.reducer";
import {projectsReducer} from "./Projects/projects.reducer";
import {navImgReducer} from "./NavImg/navImg.reducer";
import {skillsReducer} from "./Skills/skills.selector";


const middleWares = [logger, thunk]
const appliedMiddlewares = compose(applyMiddleware(...middleWares))

const root = combineReducers({
    certificates: certificatesReducer,
    achievements: achievementsReducer,
    projects: projectsReducer,
    navImg: navImgReducer,
    skills: skillsReducer
})

export const store = createStore(root, undefined, appliedMiddlewares)