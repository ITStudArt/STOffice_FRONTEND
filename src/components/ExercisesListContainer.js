import React from "react";
import ExercisesList from "./ExercisesList";
import {exercisesListAdd, exercisesListFetch} from "../actions/action";
import {connect} from "react-redux";
import {requests} from "../agent";
import {Spinner} from "./Spinner";
import ExerciseForm from "./ExerciseForm";


const mapStateToProps = state =>(
    {
        ...state.exercisesList,
        isAuthenticated: state.authentication.isAuthenticated
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
        const {exercises, isFetching, isAuthenticated, userId} = this.props;

        if(isFetching){
            return (<Spinner/>);
        }
        console.log(userId);
        return (
            <div>
                {isAuthenticated && <ExercisesList exercises={exercises}/>}
                {isAuthenticated && <ExerciseForm userId={userId}/>}
            </div>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ExercisesListContainer);