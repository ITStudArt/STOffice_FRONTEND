import React from "react";
import ExercisesList from "./ExercisesList";
import {exercisesListAdd, exercisesListFetch} from "../actions/action";
import {connect} from "react-redux";
import {requests} from "../agent";


const mapStateToProps = state =>(
    {
        ...state.exercisesList
    }
);
const mapDispatchToProps ={
    exercisesListAdd,
    exercisesListFetch
};
class ExercisesListContainer extends React.Component{
    componentDidMount() {
        setTimeout(this.props.exercisesListAdd,10000);
        this.props.exercisesListFetch();
    }

    render() {
        return (

            <ExercisesList exercises={this.props.exercises}/>

        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ExercisesListContainer);