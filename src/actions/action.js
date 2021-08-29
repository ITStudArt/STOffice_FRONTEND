import {requests} from "../agent";
import * as CONSTRAINTS from "./constraints";
import {
    USER_LOGIN_SUCCESS,
    USER_PROFILE_ERROR,
    USER_PROFILE_RECEIVED,
    USER_PROFILE_REQUEST,
    USER_SET_ID
} from "./constraints";
import {SubmissionError} from "redux-form";


// Exercise ADD
export const exercisesReceived= (exercise) =>({
    type: CONSTRAINTS.EXERCISES_LIST_RECEIVED,
    data
});

export const exerciseAdd = (exercise) =>{
    return (dispatch)=>{
        return requests.post('/exercises',{
            content: exercise
        }).then(response =>dispatch(exerciseAdded(response)))
}

};

// Exercise LIST
export const exercisesListRequest = () =>({
    type: CONSTRAINTS.EXERCISES_LIST_REQUEST
});

export const exercisesListError = (error) =>({
    type: CONSTRAINTS.EXERCISES_LIST_ERROR,
    error
});
export const exercisesListReceived= (data) =>({
    type: CONSTRAINTS.EXERCISES_LIST_RECEIVED,
    data
});


export const exercisesListFetch = () => {
    return (dispatch) => {
        dispatch(exercisesListRequest());
        return requests.get('/exercises')
            .then(response=>dispatch(exercisesListReceived(response)))
            .catch(error=>dispatch(exercisesListError(error)));
    }
};
export const exercisesListAdd = () =>({
    type: CONSTRAINTS.EXERCISES_LIST_ADD,
    data: {
        id: Math.floor(Math.random()*100+3),
        name: 'A newly added exercise'
    }
});

// Therapist

export const therapistRequest = () =>({
    type: CONSTRAINTS.THERAPIST_REQUEST
});

export const therapistError = (error) =>({
    type: CONSTRAINTS.THERAPIST_ERROR,
    error
});
export const therapistReceived= (data) =>({
    type: CONSTRAINTS.THERAPIST_RECEIVED,
    data
});
export const therapistFetch = (id) =>
{
    return(dispatch)=>{
        dispatch(therapistRequest());
        return requests.get(`/users/${id}`)
            .then(response => dispatch(therapistReceived(response)))
            .catch(error => dispatch(therapistError(error)));

    }
};
export const therapistUnload = () =>(
    {
        type: CONSTRAINTS.THERAPIST_UNLOAD
    }
);


// Therapist LIST
export const therapistsListRequest = () =>({
    type: CONSTRAINTS.THERAPISTS_LIST_REQUEST
});

export const therapistsListError = (error) =>({
    type: CONSTRAINTS.THERAPISTS_LIST_ERROR,
    error
});
export const therapistsListReceived= (data) =>({
    type: CONSTRAINTS.THERAPISTS_LIST_RECEIVED,
    data
});

export const therapistsListFetch = () => {
    return (dispatch) => {
        dispatch(therapistsListRequest());
        return requests.get('/users?roles=ROLE_THERAPIST')
            .then(response=>dispatch(therapistsListReceived(response)))
            .catch(error=>dispatch(therapistsListError(error)));
    }
};
export const therapistsListAdd = () =>({
    type: CONSTRAINTS.THERAPISTS_LIST_ADD,
    data: {
        id: Math.floor(Math.random()*100+3),
        name: 'A newly added therapist'
    }
});

// Patient
export const patientRequest = () =>({
    type: CONSTRAINTS.PATIENT_REQUEST
});

export const patientError = (error) =>({
    type: CONSTRAINTS.PATIENT_ERROR,
    error
});
export const patientReceived= (data) =>({
    type: CONSTRAINTS.PATIENT_RECEIVED,
    data
});

export const patientFetch = (id) =>
    {
        return(dispatch)=>{
            dispatch(patientRequest());
            return requests.get(`/users/${id}`)
                .then(response => dispatch(patientReceived(response)))
                .catch(error => dispatch(patientError(error)));

            }
    };

// Patients List
export const patientsListRequest = () =>({
    type: CONSTRAINTS.PATIENTS_LIST_REQUEST
});

export const patientsListError = (error) =>({
    type: CONSTRAINTS.PATIENTS_LIST_ERROR,
    error
});
export const patientsListReceived= (data) =>({
    type: CONSTRAINTS.PATIENTS_LIST_RECEIVED,
    data
});
export const patientsListAdd = () =>({
    type: CONSTRAINTS.PATIENTS_LIST_ADD,
    data: {
        id: Math.floor(Math.random()*100+3),
        name: 'A newly added patient'
    }
});


export const patientsListFetch = () => {
    return (dispatch) => {
        dispatch(patientsListRequest());
        return requests.get('/users?roles=ROLE_PATIENT')
            .then(response=>dispatch(patientsListReceived(response)))
            .catch(error=>dispatch(patientsListError(error)));
    }
};

// Login

export const userLoginSuccess = (token, userId) => {
    return {
        type: USER_LOGIN_SUCCESS,
        token,
        userId
    }
};
export const userLoginAttempt = (email, password) => {
    return (dispatch) => {
        return requests.post('/login_check', {email, password},false).then(
            response => dispatch(userLoginSuccess(response.token,response.id)))
            .catch(error => {
                throw new SubmissionError({
                    _error: 'Email lub hasło są niepoprawne'
                })
            });
    }
};


// User

export const userSetId = (userId) => {
    return {
        type: USER_SET_ID,
        userId
    }
};

export const userProfileRequest = () => {
    return {
        type: USER_PROFILE_REQUEST
    }
};

export const userProfileError = () => {
    return {
        type: USER_PROFILE_ERROR
    }
};

export const userProfileReceived = (userId, userData) => {
    return {
        type: USER_PROFILE_RECEIVED,
        userData,
        userId
    }
};

export const userProfileFetch = (userId) => {
    return (dispatch) => {
        dispatch(userProfileRequest());
        return requests.get(`/users/${userId}`, true).then(
            response => dispatch(userProfileReceived(userId,response))
        ).catch(error => dispatch(userProfileError()))
    }
};



