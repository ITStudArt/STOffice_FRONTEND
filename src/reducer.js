import {combineReducers} from "redux";
import exercisesList from "./reducers/exercisesList";
import therapistsList from "./reducers/therapistsList";
import patientsList from "./reducers/patientsList";

export default combineReducers({
        exercisesList,
        therapistsList,
        patientsList
        }
);