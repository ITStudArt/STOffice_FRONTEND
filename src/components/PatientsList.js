import React from "react";

class PatientsList extends React.Component{
    render() {
        const {patients, isFetching} = this.props;
        if(isFetching){
            return (<div><i className={"fas fa-spinner fa-spin"}/></div>);
        }
        if(patients === null || patients.length===0){
            return (<div>No patients available</div>);
        }
        console.log(patients);
        return (
            <div>
                {patients && patients.map(patient => (
                    <div className={"card mb-3 mt-3 shadow-sm"} key={patient.id}><h3>{patient.name} {patient.surname}</h3></div>
                    //<img src={exercises_files_path+exercise.url} key={exercise.id}></img>

                ))}
            </div>
        );
    }
}
export default PatientsList;