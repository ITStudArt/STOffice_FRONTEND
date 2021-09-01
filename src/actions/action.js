import {requests} from "../agent";
import * as CONSTRAINTS from "./constraints";
import {
    EXERCISE_ADDED, FILE_UPLOAD_ERROR, FILE_UPLOAD_REQUEST, FILE_UPLOADED, THERAPIST_ADDED, USER_ADDED,
    USER_LOGIN_SUCCESS, USER_LOGOUT,
    USER_PROFILE_ERROR,
    USER_PROFILE_RECEIVED,
    USER_PROFILE_REQUEST,
    USER_SET_ID
} from "./constraints";
import {SubmissionError} from "redux-form";
import {parseApiError} from "../apiUtils";


// Exercise ADD
export const exerciseAdded=(exercise)=>({
    type: EXERCISE_ADDED,
    exercise
})

export const exerciseAdd = (exercise) =>{
    return (dispatch)=>{
        return requests.upload('/exercises',exercise
        ,true).then(response =>dispatch(exerciseAdded(response))).
            catch(error=>{
                console.log(error)
        })
}
};

export const fileUploaded = (data) => {
    return{
        type: FILE_UPLOADED,
        file: data
    }
};
export const fileUploadRequest = () => {
    return {
        type: FILE_UPLOAD_REQUEST
    }

}
export const fileUploadError = (error) =>{
    return{
        type: FILE_UPLOAD_ERROR,
        error
    }
};
export const uploadFile = (file) =>{
    return (dispatch) =>{
        dispatch(fileUploadRequest());
        return requests.upload('/exercises',file,true)
            .then(response => dispatch(fileUploaded(file)))
            .catch(error=>{
                if (error.response.body['hydra:description']) {
                    alert(error.response.body['hydra:description'])
                }
                dispatch(fileUploadError(error));
            });
    }
}

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
        return requests.get('/exercises',true)
            .then(response=>dispatch(exercisesListReceived(response)))
            .catch(error=> {
                if (error.response.body['hydra:description']) {
                    alert(error.response.body['hydra:description'])
                }
                dispatch(exercisesListError(error));
            });
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
// User ADD

export const userAdded=(user_db)=>({
    type: USER_ADDED,
    user_db
})

export const userAdd = (name,surname, email, phone,photo, password, retypedPassword, roles) =>{
    return (dispatch)=>{
        return requests.post('/users', {name,surname, email, password, retypedPassword, photo, phone, roles}
        ).then(
            response=>dispatch(userAdded(response))
        ).
        catch(error=>{
            if(error.response.status === 401){
                alert("Sesja wygasła. Zaloguj się ponownie");
                return dispatch(userLogout());
            }
            throw new SubmissionError(parseApiError(error))
        })
    }
};

// Terapist ADD

export const therapistAdded=(therapist)=>({
    type: THERAPIST_ADDED,
    therapist
})

export const therapistAdd = (therapist) =>{
    return (dispatch)=>{
        return requests.upload('/therapists',therapist
        ).then(response =>dispatch(therapistAdded(response))).
        catch(error=>{
            console.log(error)
        })
    }
};

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
        return requests.get('/users?roles=ROLE_THERAPIST',true)
            .then(response=>dispatch(therapistsListReceived(response)))
            .catch(error=>{
                if(error.response.body['hydra:description']){
                    alert(error.response.body['hydra:description'])
                }
                dispatch(therapistsListError(error));
                }
            );
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
            return requests.get(`/users/${id}`,true)
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
        return requests.get('/users?roles=ROLE_PATIENT&roles=ROLE_DEF_USER',true)
            .then(response=>dispatch(patientsListReceived(response)))
            .catch(error=>{
                if(error.response.body['hydra:description']){
                    alert(error.response.body['hydra:description'])
                }
                dispatch(patientsListError(error));
            });
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
            .catch(() => {
                throw new SubmissionError({
                    _error: 'Email lub hasło są niepoprawne'
                })
            });
    }
};

// Logout
export const userLogout= () =>{
    return {
        type: USER_LOGOUT
    }
}


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

export const userProfileError = (userId) => {
    return {
        type: USER_PROFILE_ERROR,
        userId
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
        return requests.get(`/users/${userId}`,true).then(
            response => dispatch(userProfileReceived(userId,response))
        ).catch(() => dispatch(userProfileError(userId)))
    }
};

export const userIdRequest = () =>({
    type: CONSTRAINTS.USER_REQUEST
});

export const userIdError = (error) =>({
    type: CONSTRAINTS.USER_ERROR,
    error
});
export const userIdReceived= (createdUser) =>({
    type: CONSTRAINTS.USER_RECEIVED,
    createdUser
});

export const userIdFetch = (email) => {
    return (dispatch) => {
        dispatch(userProfileRequest());
        return requests.get(`/users?email=${email}`, true).then(
            response => dispatch(userIdReceived(response))
        ).catch(error => dispatch(userProfileError()))
    }
};





