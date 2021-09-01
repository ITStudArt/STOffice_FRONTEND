import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {renderField} from "./form";
import handleSubmit from "redux-form/lib/handleSubmit";
import FileUpload from "./FileUpload";
import {exerciseAdd, uploadFile} from "../actions/action";
import "./styles/exerciseForm.css";

const mapDispatchToProps={
    uploadFile
};

class ExerciseForm extends React.Component{
    onSubmit(values){
        console.log(values);
        const {exerciseAdd,userId, reset} = this.props;
        const file_data = new FormData();
        file_data.append('file', values.file);
        file_data.append('name', "SOME NAME")
        return this.props.uploadFile(file_data).then(()=>reset());
    }
    render(){
        const {handleSubmit, submitting, isSending} = this.props;
        return(
            <div className={"card mb-3 mt-3 shadow-sm"}>
                <div className={"card-body"}>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field name={"exname"} label={"Podaj nazwe cwiczenia"} type={"textarea"} component={renderField}/>
                        <FileUpload name={"fileUp"}/>
                        <button type={"submit"} className={"btn btn-primary btn-big btn-block"} disabled={submitting || isSending}> Dodaj </button>
                    </form>
                </div>
            </div>
        )
    }
}
export default reduxForm({
    form: 'ExerciseForm'
})(connect(null,mapDispatchToProps)(ExerciseForm))
