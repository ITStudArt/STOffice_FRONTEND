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
    patientsListAdd,
    patientsListFetch
};
class PatientsListContainer extends React.Component{
    componentDidMount() {
        setTimeout(this.props.patientsListAdd,10000);
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