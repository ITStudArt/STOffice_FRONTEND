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
        const {exercises, isFetching, isAuthenticated, userId, userData, history} = this.props;
        if(!isAuthenticated){
            this.props.history.push("/login");
        }

        if(isFetching || userData===null){
            return (<Spinner/>);
        }
        return (
            <div>
                {isAuthenticated && <ExercisesList exercises={userData.exercises}/>}
                {isAuthenticated && <ExerciseForm userId={userId}/>}
            </div>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ExercisesListContainer);