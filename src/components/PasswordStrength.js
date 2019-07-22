import React from "react";

const PasswordStrength = ({ isPwdValid }) => {
  let isCharPassed = isPwdValid["charsCount"] ? "passed" : "not-passed";
  let isSpeciaPassed = isPwdValid["specialChar"] ? "passed" : "not-passed";
  let isScoreValid = isPwdValid["_score"] > 2 ? "passed" : "not-passed";

  let count = 0;
  
  for (let key in isPwdValid) {
    if (isPwdValid.hasOwnProperty(key)) {
      if (key !== "_score" && isPwdValid[key]) {
        count++;
      } else if (isPwdValid[key] > 2) {
        count++;        
      }
    }
  }

  const strengthTxt = (count) => {
    switch (count) {
      case 0:
        return 'Invalid';
      case 1:
        return 'Weak';
      case 2:
        return 'Moderate';
      case 3:
        return 'Strong';      
      default:
        return 'Weak';
    }
  }
  

  return (
    <div className="strength-container">
      <div id="password-strength-bar-wrapper">
        <div className="password-strength-bar" />
        <div className="password-strength-bar-color" data-score={count} />
        <div className="password-strength-bar-2" />
        <div className="password-strength-bar-3" />        
      </div>
      <p className="strength-text">Strength: {strengthTxt(count)}</p>
      <div>
        <h5>A good password is:</h5>
        <ul className="password-check">
          <li className={isCharPassed}>
            <span> </span>8+ characters
          </li>
          <li className={isSpeciaPassed}>
            <span> </span>Atleast one special character
          </li>
          <li className={isScoreValid}>
            <span> </span>2+ Score from password Strength algorithm
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PasswordStrength;
