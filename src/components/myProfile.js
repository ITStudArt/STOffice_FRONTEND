import React from 'react';
import "./styles/userProfile.css";
import {Spinner} from "./Spinner";
import {therapistFetch} from "../actions/action";

export class MyProfile extends React.Component {
    render() {
        const {userData} = this.props;
        if (userData === null) {
            return (<div>Nie udało sie wczytac profilu</div>);
        }
        const listExercises = userData.exercises.map((exercise) => <li key={exercise.id}>{exercise.name}</li>);
        return (
            <div className={"card mb-3 mt-3 shadow-sm"}>
                <div className={"card-body"}>
                    <ul className={"list-group list-group-flush"}>
                        <li className={"list-group-item"}>
                            Imie: {userData.name}
                        </li>
                        <li className={"list-group-item"}>
                            Nazwisko: {userData.surname}
                        </li>
                        <li className={"list-group-item"}>
                            Email: {userData.email}
                        </li>
                        <li className={"list-group-item"}>
                            Nr telefon: {userData.phone}
                        </li>
                        <li className={"list-group-item"}>
                            Cwiczenia: {listExercises}
                        </li>
                    </ul>
                </div>
            </div>
        );

    }
}
export default MyProfile;