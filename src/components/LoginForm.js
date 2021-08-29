import React from "react";
import {reduxForm, Field} from "redux-form";
import {renderField} from "./form";
import {connect} from "react-redux";
import {userLoginAttempt} from "../actions/action";

const mapStateToProps= state => ({
  ...state.authentication
});
const mapDispatchToProps ={
    userLoginAttempt
};

class LoginForm extends React.Component{
    componentDidUpdate(prevProps) {
        if(prevProps.token !== this.props.token || this.props.token !=null){
            this.props.history.push('/');
        }
    }

    onSubmit(values){
        return this.props.userLoginAttempt(
            values.email,
            values.password
        );
    }
    render() {
        const {handleSubmit, error} = this.props;

        return (
            <div className={"text-center"}>
                {error && <div className={"alert alert-danger"}>{error}</div>}
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
})(connect(mapStateToProps, mapDispatchToProps)(LoginForm));