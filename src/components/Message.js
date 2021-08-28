import React from "react";
import "./styles/Spinner.css";

export class Message extends React.Component{
    render(){
        const {message} = this.props;
        return (
            <div className="loading">
                <div className="loader">
                    {message}
                </div>
            </div>
        );
    }
}