import React from "react";
import { shallow, mount } from "enzyme";
import App from "../components/App";

const app = mount(<App />);

/* Tests for App Component */

it("renders app component successfully", () => {
  expect(app).toMatchSnapshot();
});

it("initializes the state with empty email field", () => {
  expect(app.state().email).toEqual("");
});

it("initializes the state with empty password field", () => {
  expect(app.state().password).toEqual("");
});

it("should render a disabled submit button on page load", () => {
  expect(app.state().enableSubmitButton).toBeFalsy();
});

/* Tests for RegisterForm Component */

describe('when typing valid email address in email input',()=>{
    const validEmail = "test@test.com";
    beforeEach(()=>{
      app.find('.input-email').simulate('change', { target: {name: 'email', value: validEmail}});
    });
    it('updates email in `state`',()=>{
        expect(app.state().email).toEqual(validEmail);
    });
    it('should not have error for email in `state`',()=>{
        expect(app.state().errors.email).toEqual("");
    });
})


describe('when typing invalid email address in email input',()=>{
    const inValidEmail = "test@test";
    const inValidEmailText = "Email is not valid!";

    beforeEach(()=>{
      app.find('.input-email').simulate('change', { target: {name: 'email', value: inValidEmail}});
    });    
    it('updates error for email in `state`',()=>{
        expect(app.state().errors.email).toEqual(inValidEmailText);
    });
    it('displays invalid email address message',()=>{
        expect(app.find('.error').text()).toEqual(inValidEmailText);
    });    
})

/* Tests for PasswordStrength Component */

describe('when typing strong password in password input',()=>{
    const strongPassword = "strong@pwd4u";
    beforeEach(()=>{
      app.find('.input-pwd').simulate('change', { target: {name: 'password', value: strongPassword}});
    });  
    it('updates password in `state`',()=>{
        expect(app.state().password).toEqual(strongPassword);
    });
    it('should not sets error for password input in `state`',()=>{
        expect(app.state().errors.password).toEqual("");
    });
    it('should have 2+ score from zxcvbn',()=>{
       expect(app.state().pwdValidation._score > 2).toBeTruthy();
    });
    it('should have atleast one special character',()=>{
       expect(app.state().pwdValidation.specialChar).toBeTruthy();
    });
    it('should display strong as password strength label',()=>{
        expect(app.find('.strength-text').text()).toEqual("Strength: Strong");
     });
    it('should have atleast 8 character',()=>{
        expect(app.state().pwdValidation.charsCount).toBeTruthy();
     });
     it('should display data-strength bar with 100% capacity',()=>{
        expect(app.find('.password-strength-bar-color').getDOMNode().getAttribute('data-score') > 2 ).toBeTruthy();
     });
    
})

describe('when typing a weak or moderate password in password input',()=>{
    const weakPassword = "mypassword";
    beforeEach(()=>{
      app.find('.input-pwd').simulate('change', { target: {name: 'password', value: weakPassword}});
    }); 
    
    it('should have <= 2 score from zxcvbn',()=>{
       expect(app.state().pwdValidation._score <= 2).toBeTruthy();
    });    
     it('should not display data-strength bar with 100% capacity',()=>{
        expect(app.find('.password-strength-bar-color').getDOMNode().getAttribute('data-score') <= 2 ).toBeTruthy();
     });
     it('should display Weak as password strength label',()=>{
        expect(app.find('.strength-text').text()).toEqual("Strength: Weak");
     });
    
})

/* Tests for SubmitDialog Component */

describe('when both email and password are valid values',()=>{
    const strongPassword = "strong@pwd4u";
    const validEmail = "test@test.com";
    beforeEach(()=>{
      app.find('.input-pwd').simulate('change', { target: {name: 'email', value: validEmail}});
      app.find('.input-pwd').simulate('change', { target: {name: 'password', value: strongPassword}});
    });  
   
     it('should enables the Submit button',()=>{
        expect(app.find('.button').getDOMNode().getAttribute('disabled')).toBeFalsy();
     }); 
     
     it('should show Dialog on click of submit button',()=>{
        const fakeEvent = { preventDefault: () => console.log('preventDefault') };
        app.find('form').simulate('submit', fakeEvent);
        expect(app.state().showDialog).toBeTruthy();
     });
     it('should close Dialog on click of close dialog button',()=>{
        app.find('.close-dialog').simulate('click');
        expect(app.state().showDialog).toBeFalsy();
     });
     
    
});




