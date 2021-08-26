import React from "react";
import ExercisesList from "./ExercisesList";

class ExercisesListContainer extends React.Component{
    constructor(props) {
        super(props);
        this.exercises=[
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
        ];

    }

    render() {
        return (
            <ExercisesList exercises={this.exercises}/>

        );
    }
}
export default ExercisesListContainer;