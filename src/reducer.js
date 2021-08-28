import {combineReducers} from "redux";
import exercisesList from "./reducers/exercisesList";
import therapistsList from "./reducers/therapistsList";
import patientsList from "./reducers/patientsList";
import therapist from "./reducers/therapist";

export default combineReducers({
        exercisesList,
        therapistsList,
        patientsList,
        therapist
        }
);