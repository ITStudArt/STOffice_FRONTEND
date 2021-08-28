import React from "react";
import MetaTags from 'react-meta-tags';
import TherapistsList from "./TherapistsList";
import "./styles/userProfile.css";

export class Therapist extends React.Component {
    render() {
        const {therapist, isFetching} = this.props;
        if (isFetching) {
            return (<div><i className={"fas fa-spinner fa-spin"}/></div>);
        }
        if (therapist === null) {
            return (<div>Therapist doesn't exist</div>);
        }
        return (
            <div className={"card mb-3 mt-3 shadow-sm"}>
                <div className={"card-body"}>
                <ul className={"list-group list-group-flush"}>
                    <li className={"list-group-item"}>
                        Imie: {therapist.name}
                    </li>
                    <li className={"list-group-item"}>
                        Nazwisko: {therapist.surname}
                    </li>
                    <li className={"list-group-item"}>
                        Email: {therapist.email}
                    </li>
                    <li className={"list-group-item"}>
                        Nr telefon: {therapist.phone}
                    </li>
                </ul>
                </div>
            </div>
        );

    }
}
export default Therapist;