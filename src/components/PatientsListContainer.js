import React from "react";
import PatientsList from "./PatientsList";
import {patientsListAdd, patientsListFetch} from "../actions/action";
import {connect} from "react-redux";
import {requests} from "../agent";
import {Spinner} from "./Spinner";
import ExercisesList from "./ExercisesList";
import ExerciseForm from "./ExerciseForm";
import PatientForm from "./PatientForm";


const mapStateToProps = state =>(
    {
        ...state.patientsList,
        isAuthenticated: state.authentication.isAuthenticated
    }
);
const mapDispatchToProps ={
    patientsListFetch
};
class PatientsListContainer extends React.Component{
    componentDidMount() {
        this.props.patientsListFetch();
    }

    render() {
        const {patients, isFetching,isAuthenticated, userId} = this.props;
        if(isFetching){
            return (<Spinner/>);
        }
        return (
            <div>
                {isAuthenticated && <PatientsList patients={patients}/>}
                {isAuthenticated && <PatientForm userId={userId}/>}
            </div>

        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PatientsListContainer);