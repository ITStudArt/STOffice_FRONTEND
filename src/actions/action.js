import {requests} from "../agent";

export const EXERCISES_LIST_REQUEST = 'EXERCISES_LIST_REQUEST ';
export const EXERCISES_LIST_RECEIVED = 'EXERCISES_LIST_RECEIVED';
export const EXERCISES_LIST_ERROR = 'EXERCISES_LIST_ERROR';
export const EXERCISES_LIST_ADD = 'EXERCISES_LIST_ADD';

export const THERAPISTS_LIST_REQUEST = 'THERAPISTS_LIST_REQUEST ';
export const THERAPISTS_LIST_RECEIVED = 'THERAPISTS_LIST_RECEIVED';
export const THERAPISTS_LIST_ERROR = 'THERAPISTS_LIST_ERROR';
export const THERAPISTS_LIST_ADD = 'THERAPISTS_LIST_ADD';

export const PATIENTS_LIST_REQUEST = 'PATIENTS_LIST_REQUEST ';
export const PATIENTS_LIST_RECEIVED = 'PATIENTS_LIST_RECEIVED';
export const PATIENTS_LIST_ERROR = 'PATIENTS_LIST_ERROR';
export const PATIENTS_LIST_ADD = 'PATIENTS_LIST_ADD';

// Exercises
export const exercisesListRequest = () =>({
    type: EXERCISES_LIST_REQUEST
});

export const exercisesListError = (error) =>({
    type: EXERCISES_LIST_ERROR,
    error
});
export const exercisesListReceived= (data) =>({
    type: EXERCISES_LIST_RECEIVED,
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
    type: EXERCISES_LIST_ADD,
    data: {
        id: Math.floor(Math.random()*100+3),
        name: 'A newly added exercise'
    }
});

// Therapist
export const therapistsListRequest = () =>({
    type: THERAPISTS_LIST_REQUEST
});

export const therapistsListError = (error) =>({
    type: THERAPISTS_LIST_ERROR,
    error
});
export const therapistsListReceived= (data) =>({
    type: THERAPISTS_LIST_RECEIVED,
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
    type: THERAPISTS_LIST_ADD,
    data: {
        id: Math.floor(Math.random()*100+3),
        name: 'A newly added therapist'
    }
});

// Patients
export const patientsListRequest = () =>({
    type: PATIENTS_LIST_REQUEST
});

export const patientsListError = (error) =>({
    type: PATIENTS_LIST_ERROR,
    error
});
export const patientsListReceived= (data) =>({
    type: PATIENTS_LIST_RECEIVED,
    data
});
export const patientsListAdd = () =>({
    type: PATIENTS_LIST_ADD,
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


