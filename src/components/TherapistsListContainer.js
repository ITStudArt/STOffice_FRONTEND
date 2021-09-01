import React from "react";
import TherapistsList from "./TherapistsList";
import {therapistsListAdd, therapistsListFetch} from "../actions/action";
import {connect} from "react-redux";
import {requests} from "../agent";
import {Spinner} from "./Spinner";
import PatientsList from "./PatientsList";
import PatientForm from "./PatientForm";
import TherapistForm from "./TherapistForm";


const mapStateToProps = state =>(
    {
        ...state.therapistsList,
        isAuthenticated: state.authentication.isAuthenticated
    }
);
const mapDispatchToProps ={
    therapistsListFetch
};
class TherapistsListContainer extends React.Component{
    componentDidMount() {
        const {history,role} = this.props;
        if(role === "ROLE_PATIENT" || role === "ROLE_DEF_USER"){
            alert("Brak dostepu");
            }
        else{
            this.props.therapistsListFetch();
        }


    }


    render() {
        const {therapists, isFetching, isAuthenticated, history, role} = this.props;
        if(isFetching){
            return (<Spinner/>);
        }
        return (
            <div key={"Therapist_List_Container_Key"}>
                {isAuthenticated && role!== 'ROLE_PATIENT' && role!== 'ROLE_DEF_USER' && <TherapistsList therapists={therapists} history={history} role={role}/>}
            </div>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TherapistsListContainer);