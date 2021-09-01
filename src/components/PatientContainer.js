import React from 'react';
export default class PatientContainer extends React.Component{
    componentDidMount() {
        console.log(this.props);
    }
    render(){
        return (
            <div>
                Hello from Patient Profile
            </div>
        );
    }
}