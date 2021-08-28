import React from "react";
import ExercisesList from "./ExercisesList";
import {exercisesListAdd, exercisesListFetch} from "../actions/action";
import {connect} from "react-redux";
import {requests} from "../agent";
import {Spinner} from "./Spinner";


const mapStateToProps = state =>(
    {
        ...state.exercisesList
    }
);
const mapDispatchToProps ={
    exercisesListFetch
};
class ExercisesListContainer extends React.Component{
    componentDidMount() {
        this.props.exercisesListFetch();
    }

    render() {
        const {exercises, isFetching} = this.props;
        if(isFetching){
            return (<Spinner/>);
        }
        return (

            <ExercisesList exercises={exercises}/>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ExercisesListContainer);