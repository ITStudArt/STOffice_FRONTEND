import React from "react";
import {Field, reduxForm} from "redux-form";
import {renderField} from "./form";
import FileUpload from "./FileUpload";
import {connect} from "react-redux";
import {therapistAdd, userAdd, userIdFetch} from "../actions/action";
const mapDispatchToProps={
    userAdd,
    therapistAdd,
    userIdFetch
};

class PatientForm extends React.Component{
    onSubmit(values){
        const role = ["ROLE_PATIENT"];
        this.props.userAdd(values.name,values.surname,values.email,values.phone,values.photo,values.password,values.retypedPassword, role);
    }


    render(){
        const {handleSubmit, submitting, isAuthenticated} = this.props;
        return(
            <div className={"card mb-3 mt-3 shadow-sm"}>
                <div className={"card-body"}>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field name={"parent_name"} label={"Imie rodzica"} type={"text"} component={renderField}/>
                        <Field name={"parent_surname"} label={"Nazwisko rodzica"} type={"text"} component={renderField}/>
                        <Field name={"kid_name"} label={"Imie pacjenta"} type={"text"} component={renderField}/>
                        <Field name={"kid_surname"} label={"Nazwisko pacjenta"} type={"text"} component={renderField}/>
                        <Field name={"email"} label={"Email"} type={"text"} component={renderField}/>
                        <Field name={"phone"} label={"Numer telefonu"} type={"text"} component={renderField}/>
                        <Field name={"photo"} label={"Dodaj zdjęcie:"} type={"text"} component={renderField}/>
                        <Field name={"password"} label={"Podaj hasło"} type={"password"} component={renderField}/>
                        <Field name={"retyped_password"} label={"Powtórz hasło"} type={"password"} component={renderField}/>
                        <Field name={"diagnosis_file"} label={"Diagnoza: "} type={"text"} component={renderField}/>
                        <Field name={"age"} label={"Wiek pacjenta:"} type={"text"} component={renderField}/>
                        <button type={"submit"} className={"btn btn-primary btn-big btn-block"} disabled={submitting}> Dodaj </button>
                    </form>
                </div>
            </div>
        )
    }
}
export default reduxForm({
    form: 'PatientForm'
})(connect(null,mapDispatchToProps)(PatientForm))