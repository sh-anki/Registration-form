import React, { Component } from 'react'; 

const PasswordStrength =({isPwdValid}) => {
  console.log("MIN CHARS", isPwdValid["minChars"]);
  let isCharPassed = isPwdValid["charsCount"]? "passed":"not_passed";
  let isSpeciaPassed = isPwdValid["specialChar"]? "passed":"not_passed";
  let isScoreValid = isPwdValid["_score"] > 2 ? "passed":"not_passed";

  console.log("PWDScore", isCharPassed);
    console.log("valid", isPwdValid);
    let count = 0;
    console.log("CHCK", isPwdValid["_score"]);

    for (let key in isPwdValid) {
     console.log("KEY", key);
        if( isPwdValid.hasOwnProperty(key) ) {
          console.log("hahahahahahahahah", key);
         /* const withTernary = ({
  conditionA, conditionB
}) => (
  (!conditionA)
    ? valueC
    : (conditionB)
    ? valueA
    : valueB
); */


          
            if(key !== "_score" && isPwdValid[key]) {
              
                count++;
            } else if (isPwdValid[key] > 2) {
                count++;
            }           
        }         
      }              
      console.log("RESULT", count);
      // const password_bar = ['strength-meter mt-2', count > 0 ? 'live' : 'hidden'].join(' ').trim();

      
    
    return (
      <div class="strength_container">
       <div id="password-strength-bar-wrapper" >
   <div class="password-strength-bar"></div>
   <div class="password-strength-bar-color" data-score={count}></div>
   <div class="password-strength-bar-2"></div>
   <div class="password-strength-bar-3" ></div>
   
</div>
            <div>
              <h5>A good password is:</h5>
    <ul class="password_check">
      <li className={isCharPassed}><span > </span>8+ characters</li>      
      <li className={isSpeciaPassed}><span> </span>Atleast one special character</li>
      <li className={isScoreValid}><span> </span>2+ Score from password Strength algorithm</li>
    </ul>
  </div>
  
    </div> 
       
    )
  }
  
  
  


export default PasswordStrength;