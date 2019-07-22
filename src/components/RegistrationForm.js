import React from "react";

import PasswordStrength from "./PasswordStrength";

const RegistrationForm = props => {
  const {
    onSubmit,
    onChange,
    handleChange,
    email,
    password,
    errors,
    pwdValidation,
    enableSubmitButton
  } = props;
  console.log("PROPS", props);
  return (
    <div className="signup_container">
      <form onSubmit={onSubmit} onChange={onChange}>
        <div className="input_field">
          <label for="email">Email</label>
          {errors.email.length > 0 && (
            <span className="error">{errors.email}</span>
          )}
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
            data-error={errors.email ? true : false}
          />
        </div>
        <div className="input_field">
          <label for="password">Password</label>

          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <PasswordStrength isPwdValid={pwdValidation} />
        <input
          className="button"
          type="submit"
          value="Submit"
          disabled={!enableSubmitButton}
        />
      </form>
    </div>
  );
};

export default RegistrationForm;
