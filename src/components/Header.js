import React from 'react';
import {Link} from "react-router-dom";

export default class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                            STOffice
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <Link to={"/"} className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/patients">Patients</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/exercises">Exercises</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/therapists">Therapists</Link>
                        </li>
                        <li className="nav-item">
                            <div className="dropdown">
                                <a className="nav-link active dropdown-toggle" href="#" role="button"
                                   id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>


        );
    }
}
