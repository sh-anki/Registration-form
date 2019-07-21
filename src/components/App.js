import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm';

import "../assets/styles.scss";


class App extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="signup_wrapper">
        <RegistrationForm /></div>
       );
    }
}
 
export default App;
