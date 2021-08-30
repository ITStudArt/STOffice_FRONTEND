import React from "react";
import {Link} from "react-router-dom";
import {Spinner} from "./Spinner";

class TherapistsList extends React.Component{
    render() {
        const {therapists} = this.props;
        if(therapists === null || therapists.length===0){
            return (<div>No therapists available</div>);
        }
        console.log(therapists);
        return (
            <div>
                {therapists && therapists.map(therapist => (
                    <div className={"card mb-3 mt-3 shadow-sm"} key={therapist.id}><Link to={`/therapists/${therapist.id}`}><h3>{therapist.name} {therapist.surname}</h3></Link></div>
                    //<img src={exercises_files_path+exercise.url} key={exercise.id}></img>

                ))}
            </div>
        );
    }
}
export default TherapistsList;