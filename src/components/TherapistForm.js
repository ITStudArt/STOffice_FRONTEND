import React from "react";
import {Field, reduxForm} from "redux-form";
import {renderField} from "./form";
import FileUpload from "./FileUpload";
import {connect} from "react-redux";
import {therapistAdd, userAdd, userIdFetch} from "../actions/action";
import {requests} from "../agent";

const mapDispatchToProps={
    userAdd,
    therapistAdd,
    userIdFetch
};

class TherapistForm extends React.Component{
    onSubmit(values){
        //return this.props.userAdd(...Object.values(values));

        this.props.userAdd(values.name,values.surname,values.email,values.phone,values.photo,values.password,values.retypedPassword);
        const email = "wlasc@gmail.com";
        //this.props.userIdFetch("wlasc@gmail.com");
        //return this.props.therapistAdd(user_data,therapist_data)
    }
    render(){
        const {handleSubmit, submitting,user} = this.props;
        return(
            <div className={"card mb-3 mt-3 shadow-sm"}>
                <div className={"card-body"}>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field name={"name"} label={"Imie"} type={"text"} component={renderField}/>
                        <Field name={"surname"} label={"Nazwisko"} type={"text"} component={renderField}/>
                        <Field name={"email"} label={"Email"} type={"text"} component={renderField}/>
                        <Field name={"phone"} label={"Numer telefonu"} type={"text"} component={renderField}/>
                        <Field name={"photo"} label={"Dodaj zdjęcie:"} type={"text"} component={renderField}/>
                        <Field name={"password"} label={"Podaj hasło"} type={"password"} component={renderField}/>
                        <Field name={"retypedPassword"} label={"Powtórz hasło"} type={"password"} component={renderField}/>
                        <Field name={"specialization"} label={"Specjalizacja: "} type={"text"} component={renderField}/>
                        <Field name={"account_number"} label={"Numer konta:"} type={"text"} component={renderField}/>
                        <Field name={"hourly_rate"} label={"Placa(zl/h):"} type={"text"} component={renderField}/>
                        <button type={"submit"} className={"btn btn-primary btn-big btn-block"} disabled={submitting}> Dodaj </button>
                    </form>
                </div>
            </div>
        )
    }
}
export default reduxForm({
    form: 'TherapistForm'
})(connect(null,mapDispatchToProps)(TherapistForm))