import {requests} from "../agent";

export const EXERCISES_LIST_REQUEST = 'EXERCISES_LIST_REQUEST ';
export const EXERCISES_LIST_RECEIVED = 'EXERCISES_LIST_RECEIVED';
export const EXERCISES_LIST_ERROR = 'EXERCISES_LIST_ERROR';
export const EXERCISES_LIST_ADD = 'EXERCISES_LIST_ADD';

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