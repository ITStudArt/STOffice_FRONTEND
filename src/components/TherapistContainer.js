import React from 'react';
export default class TherapistContainer extends React.Component{
    componentDidMount() {
        console.log(this.props);
    }
    render(){
        return (
            <div>
                Hello from Therapist Profile
            </div>
        );
    }
}