import React from "react";

const RegistrationForm = props => {
  return (
    <div className="signup_container">
      <form>
        <div className="input_field">
          <label for="email">Email</label>
          <input type="email" name="email" value="Email" placeholder="Email" />
        </div>
        <div className="input_field">
          <label for="password">Password</label>

          <input
            type="password"
            name="password"
            value="password"
            placeholder="Password"
          />
        </div>
        <input className="submit_button" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RegistrationForm;
