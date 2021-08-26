import React from "react";

class ExercisesList extends React.Component{
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        const {exercises} = this.props;
        return (
            <div>
                <ul>
                    {exercises && exercises.map(exercise => (<li key={exercise.id}>{exercise.title}</li>))}
                </ul>
            </div>
        );
    }
}
export default ExercisesList;