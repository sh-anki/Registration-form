import React, { Component } from 'react';
import zxcvbn from 'zxcvbn';
import PasswordStrength from './PasswordStrength';
import RegistrationForm from './RegistrationForm';

import "../assets/styles.scss";


const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  const specialCharReg = RegExp(/(_|[^\w\d])/);  

  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }  

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: null,
          password: null,
          pwdValidation: {
              minChars: false,
              specialChar: false,
              pwdScore:0
          },
          errors: {
            email: '',
            password: '',
          }
        };
      }
      

      handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        let pwdParms = {};
        console.log(name);
        let errors = this.state.errors;
        let pwdValidation = this.state.pwdValidation;
      
        switch (name) {          
          case 'email': 
            errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
          case 'password':
              pwdParms = this.passwordHelper(value);
              pwdValidation = {...pwdParms};
            //  pwdValidation.minChars = pwdParms.charsCount;
            //  pwdValidation.specialChar = pwdParms.specialChar;
            //  pwdValidation.pwdScore = pwdParms._score;
              console.log("PARAMS", pwdParms);
            //  
            //  console.log("SCORE", _score);

         
            errors.password = 
              value.length < 8
                ? 'Password must be 8 characters long!'
                : '';
            break;
          default:
            break;
        }
        this.setState({errors, [name]: value, pwdValidation  }, ()=> {
            console.log("STATEEEE---> ", this.state )
        })
      }

      passwordHelper = pwd =>{
          const specialCharReg = RegExp(/(_|[^\w\d])/);
          const _score = zxcvbn(pwd).score;
          const charsCount = pwd.length > 8;
          const specialChar = specialCharReg.test(pwd);
          console.log("password", pwd);
          console.log("score", _score);
          console.log("charcount", charsCount);
          console.log("specialchar", specialChar);          
          return {_score, charsCount, specialChar};
      }

      handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(this.state.errors)) {
          console.info('Valid Form')
        }else{
          console.error('Invalid Form')
        }
      }

     

    render() { 
        const {errors, password, email, pwdValidation} = this.state;
        return ( 
        <div class="signup_wrapper">
        <RegistrationForm onSubmit={this.handleSubmit} 
        onChange={this.handleChange} 
        email={email}
        password={password}
        errors={errors}
        pwdValidation={pwdValidation} />
        {/* <PasswordStrength isPwdValid={this.state.pwdValidation}/>        */}
      </div>
       );
    }
}
 
export default App;