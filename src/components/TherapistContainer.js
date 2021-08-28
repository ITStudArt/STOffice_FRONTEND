import React from 'react';
import {therapistFetch, therapistUnload} from "../actions/action";
import Therapist from "./Therapist";
import {connect} from "react-redux";

const mapStateToProps = state =>(
    {
        ...state.therapist
    }
);
const mapDispatchToProps ={
    therapistFetch,
    therapistUnload
};
class TherapistContainer extends React.Component{
    componentDidMount() {
        this.props.therapistFetch(this.props.match.params.id);
    }
    componentWillUnmount() {
        this.props.therapistUnload();
    }
    render(){
        const {isFetching, therapist} = this.props;
        return (<Therapist isFetching={isFetching} therapist={therapist}/>)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TherapistContainer);