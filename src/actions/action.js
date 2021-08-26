export const EXERCISES_LIST = 'EXERCISES_LIST';
export const EXERCISES_LIST_ADD = 'EXERCISES_LIST_ADD';

export const exercisesList = () =>({
    type: EXERCISES_LIST,
    data: [
        {
            id: 1,
            title: 'Hello'
        },
        {
            id: 2,
            title: 'Hello 2'
        },
        {
            id: 3,
            title: 'Hello_3'
        }
    ]
});

export const exercisesListAdd = () =>({
    type: EXERCISES_LIST_ADD,
    data: {
        id: Math.floor(Math.random()*100+3),
        title: 'A newly added exercise'
    }
});