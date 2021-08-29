import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {renderField} from "./form";
import handleSubmit from "redux-form/lib/handleSubmit";

class ExerciseForm extends React.Component{
    onSubmit(values){

    }
    render(){
        const {handleSubmit, submitting} = this.props;
        return(
            <div className={"card mb-3 mt-3 shadow-sm"}>
                <div className={"card-body"}>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field name={"name"} label={"Podaj nazwe cwiczenia"} type={"textarea"} component={renderField}/>
                        <button type={"submit"} className={"btn btn-primary btn-big btn-block"} disabled={submitting}> Dodaj </button>
                    </form>
                </div>
            </div>
        )
    }
}
export default reduxForm({
    form: 'ExerciseForm'
})(connect(null,null)(ExerciseForm))