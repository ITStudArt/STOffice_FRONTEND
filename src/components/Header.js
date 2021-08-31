import React from 'react';
import {Link} from "react-router-dom";
import {Spinner} from "./Spinner";

export default class Header extends React.Component{
    renderUser(){
        const {userData, logout} = this.props;
        if(null === userData){
            return (<Spinner/>);
        }
        return (`Witaj ${userData.name.trim()} ${userData.surname.trim()}`);
    }
    render(){
        const {isAuthenticated,logout, role} = this.props;
        const isPatient = () =>{
            return role === "ROLE_PATIENT" || role === "ROLE_DEF_USER";
        };
        const ifTherapist = () =>{
            return role !== "ROLE_PATIENT" || role !== "ROLE_DEF_USER" || role !== null;
        };
        const isAdmin = () =>{
            return role ==="ROLE_ADMIN" || role ==="ROLE_SUPERADMIN";
        }
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/login">
                            STOffice
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {isAuthenticated ? (
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item active">
                                <Link to={"/profile"} className="nav-link active">
                                    {this.renderUser()}
                                </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" to="/patients">Pacjenci</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" to="/therapists">Terapeuci</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" to="/exercises">Cwiczenia</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="#" onClick={logout}>Wyloguj się</Link>
                            </li>



                        </ul>
                        ):(
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"><li className="nav-item">
                            <Link className="nav-link active" to="/login">Zaloguj się</Link>
                        </li></ul>
                    )}
                </div>
            </nav>


        );
    }
}
