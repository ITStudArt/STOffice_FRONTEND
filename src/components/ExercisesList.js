import React from "react";
import {Spinner} from "./Spinner";

class ExercisesList extends React.Component{
    render() {
        const {exercises} = this.props;
        if(exercises === null || exercises.length===0){
            return (<div>No Exercises available</div>);
        }
        const exercises_files_path = 'C:\\Users\\Artur\\Documents\\ZTPAI_New\\STOffice\\public';
        return (
            <div>
                    {exercises && exercises.map(exercise => (
                        <div className={"card mb-3 mt-3 shadow-sm"} key={exercise.id}><h3>{exercise.name}t</h3></div>
                        //<img src={exercises_files_path+exercise.url} key={exercise.id}></img>

                    ))}
            </div>
        );
    }
}
export default ExercisesList;