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

class App extends React.Component{
    constructor(props) {
        super(props);
        const token = window.localStorage.getItem('jwtToken');
        if (token){
            requests.setToken(token);
        }
    }
    render() {
        return (
            <div>
                <Header/>
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
export default App;