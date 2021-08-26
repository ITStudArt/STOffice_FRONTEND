import React from "react";

class ExercisesList extends React.Component{
    render() {
        const {exercises, isFetching} = this.props;
        if(isFetching){
            return (<div><i className={"fas fa-spinner fa-spin"}/></div>);
        }
        if(exercises === null || exercises.length===0){
            return (<div>No Exercises available</div>);
        }
        const exercises_files_path = 'C:\\Users\\Artur\\Documents\\ZTPAI_New\\STOffice\\public';
        console.log(exercises_files_path);
        return (
            <div>
                    {exercises && exercises.map(exercise => (
                        <div className={"card mb-3 mt-3 shadow-sm"} key={exercise.id}><h3>Some text</h3></div>
                        //<img src={exercises_files_path+exercise.url} key={exercise.id}></img>

                    ))}
            </div>
        );
    }
}
export default ExercisesList;