import React from "react";
import PatientsList from "./PatientsList";
import {patientsListAdd, patientsListFetch} from "../actions/action";
import {connect} from "react-redux";
import {requests} from "../agent";
import {Spinner} from "./Spinner";


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
        if(isFetching){
            return (<Spinner/>);
        }
        return (

            <PatientsList patients={patients}/>

        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PatientsListContainer);