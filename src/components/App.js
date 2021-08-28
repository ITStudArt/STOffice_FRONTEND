import React from "react";
import {Route, Switch} from "react-router";
import LoginForm from "./LoginForm";
import ExercisesListContainer from "./ExercisesListContainer";
import TherapistsListContainer from "./TherapistsListContainer";
import PatientsListContainer from "./PatientsListContainer";
import Header from "./Header";

class App extends React.Component{
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path={"/login"} component={LoginForm}/>
                    <Route path={"/exercises"} component={ExercisesListContainer}/>
                    <Route path={"/therapists"} component={TherapistsListContainer}/>
                    <Route path={"/patients"} component={PatientsListContainer}/>
                </Switch>
            </div>
        );
    }
}
export default App;