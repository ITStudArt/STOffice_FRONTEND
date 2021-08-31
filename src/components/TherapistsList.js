import React from "react";
import {Link} from "react-router-dom";
import {Spinner} from "./Spinner";

class TherapistsList extends React.Component{
    addTherapistButton(history){
        history.push("/add_therapist");
    }
    render() {
        const {therapists,history,userId} = this.props;


        if(therapists === null || therapists.length===0){
            return (<div>No therapists available</div>);
        }
        return (
            <div>
                <button type={"submit"} className={"btn btn-primary btn-big btn-block"} style={{marginTop: "1em"}} onClick={()=>this.addTherapistButton(history)}>Dodaj terapeute</button>
                {therapists && therapists.map(therapist => (
                    <div className={"card mb-3 mt-3 shadow-sm"} key={therapist.id}><Link to={`/therapists/${therapist.id}`}><h2>{therapist.name} {therapist.surname}</h2></Link></div>
                    //<img src={exercises_files_path+exercise.url} key={exercise.id}></img>

                ))}
            </div>
        );
    }
}
export default TherapistsList;