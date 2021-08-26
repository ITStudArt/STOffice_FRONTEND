import React from "react";
import ExercisesList from "./ExercisesList";
import {exercisesList, exercisesListAdd} from "../actions/action";
import {connect} from "react-redux";
import {requests} from "../agent";


const mapStateToProps = state =>(
    {
        ...state.exercisesList
    }
);
const mapDispatchToProps ={
    exercisesList,
    exercisesListAdd
};
class ExercisesListContainer extends React.Component{
    componentDidMount() {
        requests.get('/exercises').then(response=>console.log(response));
        setTimeout(this.props.exercisesListAdd,10000);
        this.props.exercisesList();
    }

    render() {
        console.log(this.props.exercises);
        return (

            <ExercisesList exercises={this.props.exercises}/>

        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ExercisesListContainer);