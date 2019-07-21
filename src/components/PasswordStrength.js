import React from 'react'; 

const PasswordStrength = props => {
  
    return (      
            <div>
              <h5>A good password is:</h5>
    <ul className="password_check">
      <li><span > </span>8+ characters</li>      
      <li><span> </span>Atleast one special character</li>
      <li><span> </span>2+ Score from password Strength algorithm</li>
    </ul>
  </div>
  
    
       
    )
  }
  
  
  


export default PasswordStrength;