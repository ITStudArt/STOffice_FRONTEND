import React from "react";
import {Route, Switch} from "react-router";
import LoginForm from "./LoginForm";
import ExercisesListContainer from "./ExercisesListContainer";

class App extends React.Component{
    render() {
        return (
            <div>
                Hello! Main Page
                <Switch>
                    <Route path={"/login"} component={LoginForm}/>
                    <Route path={"/"} component={ExercisesListContainer}/>
                </Switch>
            </div>
        );
    }
}
export default App;