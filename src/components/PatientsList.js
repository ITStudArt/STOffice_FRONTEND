import React from "react";
import {Link} from "react-router-dom";
import {Spinner} from "./Spinner";

class PatientsList extends React.Component{
    addButton(history){
        history.push("/add_patient");
    }
    render() {
        const {patients, history} = this.props;
        if(patients === null || patients.length===0){
            return (<div>No patients available</div>);
        }
        return (
            <div>
                <button type={"submit"} className={"btn btn-primary btn-big btn-block"} style={{marginTop: "1em"}} onClick={()=>this.addButton(history)}>Dodaj pacjenta</button>
                {patients && patients.map(patient => (
                    <div className={"card mb-3 mt-3 shadow-sm"} key={patient.id}><Link  to={`/patients/${patient.id}`}><h2>{patient.name} {patient.surname}</h2></Link></div>
                    //<img src={exercises_files_path+exercise.url} key={exercise.id}></img>

                ))}
            </div>
        );
    }
}
export default PatientsList;