import React from "react";
import PatientsList from "./PatientsList";
import {patientsListAdd, patientsListFetch} from "../actions/action";
import {connect} from "react-redux";
import {requests} from "../agent";


const mapStateToProps = state =>(
    {
        ...state.patientsList
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
        const {patients, isFetching} = this.props;
        return (

            <PatientsList patients={patients} isFetching={isFetching}/>

        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PatientsListContainer);