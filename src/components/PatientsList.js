import React from "react";
import {Link} from "react-router-dom";
import {Spinner} from "./Spinner";

class PatientsList extends React.Component{
    render() {
        const {patients} = this.props;
        if(patients === null || patients.length===0){
            return (<div>No patients available</div>);
        }
        return (
            <div>
                {patients && patients.map(patient => (
                    <div className={"card mb-3 mt-3 shadow-sm"} key={patient.id}><Link  to={`/patients/${patient.id}`}>{patient.name} {patient.surname}</Link></div>
                    //<img src={exercises_files_path+exercise.url} key={exercise.id}></img>

                ))}
            </div>
        );
    }
}
export default PatientsList;