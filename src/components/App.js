import React from "react";
import {Route, Switch} from "react-router";
import LoginForm from "./LoginForm";
import ExercisesListContainer from "./ExercisesListContainer";
import TherapistsListContainer from "./TherapistsListContainer";
import PatientsListContainer from "./PatientsListContainer";
import TherapistContainer from "./TherapistContainer";
import PatientContainer from "./PatientContainer";
import Header from "./Header";
import {requests} from "../agent";
import {connect} from "react-redux";
import authentication from "../reducers/authentication";
import {userProfileFetch, userSetId} from "../actions/action";

const mapStateToProps = state =>({
   ...state.authentication
});

const mapDispatchToProps = {
    userProfileFetch,
    userSetId
};

class App extends React.Component{
    constructor(props) {
        super(props);
        const token = window.localStorage.getItem('jwtToken');
        if (token){
            requests.setToken(token);
        }
    }
    componentDidMount() {
        const userId = window.localStorage.getItem('userId');
        const {userSetId} = this.props;

        if(userId){
            userSetId(userId);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {userId,userData, userProfileFetch} = this.props;
        if(prevProps.userId !== userId && userId !==null && userData === null){
            userProfileFetch(userId);

        }
    }

    render() {
        const {isAuthenticated, userData} = this.props;
        return (
            <div>
                <Header isAuthenticated={isAuthenticated} userData={userData}/>
                <Switch>
                    <Route path={"/login"} component={props => <LoginForm {...props} />} />
                    <Route path={"/exercises"} component={ExercisesListContainer}/>
                    <Route path={"/therapists/:id"} component={TherapistContainer}/>
                    <Route path={"/therapists"} component={TherapistsListContainer}/>
                    
                    <Route path={"/patients/:id"} component={PatientContainer}/>
                    <Route path={"/patients"} component={PatientsListContainer}/>

                </Switch>
            </div>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);