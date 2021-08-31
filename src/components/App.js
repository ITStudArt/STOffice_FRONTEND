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
import {userLogout, userProfileFetch, userSetId} from "../actions/action";
import TherapistForm from "./TherapistForm";
import PatientForm from "./PatientForm";

const mapStateToProps = state =>({
    ...state.authentication
});

const mapDispatchToProps = {
    userProfileFetch,
    userSetId,
    userLogout
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
        if(prevProps.userId !== userId && userId !== null && userData === null){
            userProfileFetch(userId);
        }
    }

    render() {
        const {isAuthenticated, userData, userLogout, userId} = this.props;
        let role;
        if(userData !==null){
            role = userData.roles[0];
        }

        return (
            <div>
                <Header isAuthenticated={isAuthenticated} userData={userData} logout={userLogout} role={role}/>
                <Switch>
                    <Route path={"/login"} component={props => <LoginForm {...props} />} />
                    <Route path={"/exercises"} render={(props)=>(<ExercisesListContainer {...props} userId={userData}/>)}/>
                    <Route path={"/therapists/:id"} component={TherapistContainer} role={role}/>
                    <Route path={"/therapists"} render={(props)=>(<TherapistsListContainer {...props} userData={userData} role={role}/>)}/>
                    <Route path={"/add_therapist"}  component={props => <TherapistForm {...props} role={role}/>}/>
                    <Route path={"/patients/:id"} component={PatientContainer} role={role}/>
                    <Route path={"/patients"} render={(props)=>(<PatientsListContainer {...props} role={role}/>)}/>
                    <Route path={"/add_patient"}  component={props => <PatientForm {...props} role={role}/>}/>

                </Switch>
            </div>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);