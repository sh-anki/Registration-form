import React from 'react';

import PasswordStrength from './PasswordStrength';


const RegistrationForm = (props) => {
    console.log("in props", props);
    const { onSubmit, onChange, handleChange, email, password, errors, pwdValidation} = props;
    return (
        <div class="signup_container">          
          
           <form onSubmit={onSubmit} onChange={onChange}>
                <div class="input_field">
                    <label for="email">Email</label>
                    
                  <input type="email" name="email" value={email} placeholder="Email" onChange={handleChange} required />
                  {errors.email.length > 0 && 
  <span className='error'>{errors.email}</span>} 
                </div>
                <div class="input_field">
                <label for="password">Password</label>
                     
                  <input type="password" name="password" value={password} placeholder="Password" onChange={handleChange} required />
                  {/* errors.password.length > 0 && 
  <span className='error'>{errors.password}</span> */}
                </div> 
                <PasswordStrength isPwdValid={pwdValidation}/>                  
                <input class="button" type="submit" value="Submit" />
                
              </form>
            </div>
          
        
    )
}

export default RegistrationForm;