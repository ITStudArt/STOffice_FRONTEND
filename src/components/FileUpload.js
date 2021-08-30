import React from 'react';
import "./styles/exerciseForm.css";
import {connect} from "react-redux";
import {uploadFile} from "../actions/action";

const mapDispatchToProps = {
    uploadFile
};
class FileUpload extends React.Component{
    onChange(e){
        const file_data = new FormData();
        file_data.append("file", e.target.files[0]);
        file_data.append("name", e.target.files[0].name);
        this.props.uploadFile(file_data);

    }
    render(){
        return (
            <div className={"form-group nice-input-upload"}>
                    <input type={"file"}
                           onChange={this.onChange.bind(this)}
                           className={"form-control-file text-primary font-weight-bold"}
                           data-title={"Kliknij tu lub przeciągnij plik"}

                    />


            </div>
        )
    }
}
export default connect(null,mapDispatchToProps)(FileUpload);