import React from "react";
import "./styles/Spinner.css";

export class Spinner extends React.Component{
    render(){
        return (
                    <div className="loading">
                        <div className="loader"></div>
                    </div>
        );
    }
}