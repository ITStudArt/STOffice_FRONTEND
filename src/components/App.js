import React from "react";
import {Route, Switch} from "react-router";
import LoginForm from "./LoginForm";

class App extends React.Component{
    render() {
        return (
            <div>
                Hello! Main Page
                <Switch>
                    <Route path="/login" component={LoginForm}/>
                </Switch>
            </div>
        );
    }
}
export default App;