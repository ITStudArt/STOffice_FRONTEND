import React from "react";
import {reduxForm, Field} from "redux-form";
import {renderField} from "./form";
import {connect} from "react-redux";
import {userLoginAttempt} from "../actions/action";

const mapDispatchToProps ={
    userLoginAttempt
};
class LoginForm extends React.Component{
    onSubmit(values){
        console.log(values);
        return this.props.userLoginAttempt(
            values.email,
            values.password
        );
    }
    render() {
        const {handleSubmit} = this.props;
        return (
            <div className={"text-center"}>
                <form className={"mt-4"} onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name="email" label={"Email"} type={"text"} component={renderField}/>
                    <Field name="password" label={"Hasło"} type={"password"} component={renderField}/>
                    <button type={"submit"} className={"btn btn-primary btn-big btn-block"}>Zaloguj</button>
                </form>
            </div>
        );
    }
}
export default reduxForm({
    form: 'LoginForm'
})(connect(null, mapDispatchToProps)(LoginForm));