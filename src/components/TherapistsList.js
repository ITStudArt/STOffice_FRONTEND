import React from "react";

class TherapistsList extends React.Component{
    render() {
        const {therapists, isFetching} = this.props;
        if(isFetching){
            return (<div><i className={"fas fa-spinner fa-spin"}/></div>);
        }
        if(therapists === null || therapists.length===0){
            return (<div>No therapists available</div>);
        }
        console.log(therapists);
        return (
            <div>
                {therapists && therapists.map(therapist => (
                    <div className={"card mb-3 mt-3 shadow-sm"} key={therapist.id}><h3>{therapist.name} {therapist.surname}</h3></div>
                    //<img src={exercises_files_path+exercise.url} key={exercise.id}></img>

                ))}
            </div>
        );
    }
}
export default TherapistsList;