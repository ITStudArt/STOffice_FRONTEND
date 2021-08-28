import React from "react";
import TherapistsList from "./TherapistsList";
import {therapistsListAdd, therapistsListFetch} from "../actions/action";
import {connect} from "react-redux";
import {requests} from "../agent";


const mapStateToProps = state =>(
    {
        ...state.therapistsList
    }
);
const mapDispatchToProps ={
    therapistsListAdd,
    therapistsListFetch
};
class TherapistsListContainer extends React.Component{
    componentDidMount() {
        setTimeout(this.props.therapistsListAdd,10000);
        this.props.therapistsListFetch();
    }

    render() {
        const {therapists, isFetching} = this.props;
        return (

            <TherapistsList therapists={therapists} isFetching={isFetching}/>

        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TherapistsListContainer);