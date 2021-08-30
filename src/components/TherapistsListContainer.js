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
        this.props.therapistsListFetch();
    }


    render() {
        const {therapists, isFetching, isAuthenticated, userId} = this.props;
        if(isFetching){
            return (<Spinner/>);
        }
        return (
            <div>
                {isAuthenticated && <TherapistsList therapists={therapists}/>}
                {isAuthenticated && <TherapistForm userId={userId}/>}
            </div>

        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TherapistsListContainer);