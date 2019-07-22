import React, { Component } from "react";
import zxcvbn from "zxcvbn";
import SubmitDialog from "./SubmitDialog";
import RegistrationForm from "./RegistrationForm";

import "../assets/styles.scss";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const specialCharReg = RegExp(/(_|[^\w\d])/);

const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      pwdValidation: {
        minChars: false,
        specialChar: false,
        pwdScore: 0
      },
      errors: {
        email: "",
        password: ""
      },
      enableSubmitButton: false,
      showDialog: false
    };
    this.defaultState = this.state;
  }

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let pwdParms = {};
    let errors = this.state.errors;
    let pwdValidation = this.state.pwdValidation;

    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        pwdParms = this.passwordHelper(value);
        pwdValidation = { ...pwdParms };

        errors.password =
          value.length < 8 || !specialCharReg.test(value)
            ? "Invalid password"
            : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value, pwdValidation });
    if (validateForm(this.state.errors)) {
      this.setState({ enableSubmitButton: true });
    } else {
      this.setState({ enableSubmitButton: false });
    }
  };

  passwordHelper = pwd => {
    const specialCharReg = RegExp(/(_|[^\w\d])/);
    const _score = zxcvbn(pwd).score;
    const charsCount = pwd.length > 8;
    const specialChar = specialCharReg.test(pwd);
    return { _score, charsCount, specialChar };
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ showDialog: true });
  };

  hideDialog = () => {
    console.log("hello");
    this.setState(this.defaultState);
  };

  render() {
    const {
      errors,
      password,
      email,
      pwdValidation,
      enableSubmitButton,
      showDialog
    } = this.state;
    return (
      <div className="signup_wrapper">
        <RegistrationForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          email={email}
          password={password}
          errors={errors}
          pwdValidation={pwdValidation}
          enableSubmitButton={enableSubmitButton}
        />
        {showDialog && <SubmitDialog handleClose={this.hideDialog} />}
      </div>
    );
  }
}

export default App;
