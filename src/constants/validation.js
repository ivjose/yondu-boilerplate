// import React from 'react'
// import {reduxForm} from 'redux-form'
// import moment from 'moment';

const validate = (values, props) => {
  const errors = {}



  // console.log(values, 'Values Item')
  props.fields.map(function (data) {
    if (!values[data.id]) {
      errors[data.id] = data.label + ' cannot be empty.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email_address)) {
      errors.email_address = 'Invalid email address';
    } 
    
    // console.log(props.fields, "validation!!!!!!@@@@");
    //New Password Checker
    if (!values.new_password) {
      errors.new_password = 'New Password cannot be empty';
    } else if (!/^.{8,}$/.test(values.new_password)) {
      errors.new_password = 'At least 8 characters';
    } else if (!/\d{1}/.test(values.new_password)) {
      errors.new_password = 'At least one numeric character';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])/.test(values.new_password)) {
      errors.new_password = 'Combination of Lowercase and Uppercase';
    } else if (!/(?=.*[_\W])/.test(values.new_password)) {
      errors.new_password = 'At least one special character (ex. !@#$%)';
    }

    if (!values.confirm_password) {
      errors.confirm_password = 'New Password cannot be empty';
    } else if (!/^.{8,}$/.test(values.new_password)) {
      errors.confirm_password = 'At least 8 characters';
    } else if (!/\d{1}/.test(values.new_password)) {
      errors.confirm_password = 'At least one numeric character';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])/.test(values.new_password)) {
      errors.confirm_password = 'Combination of Lowercase and Uppercase';
    } else if (!/(?=.*[_\W])/.test(values.new_password)) {
      errors.confirm_password = 'At least one special character (ex. !@#$%)';
    } else if (values.new_password !== values.confirm_password) {
      errors.confirm_password = 'New password and Confirm password should be the same';
    }



    

        

    

    

    
    
  
    
  
    

    










 



  })
  // console.log("erroooooooooooors",errors)
  return errors
}

export default validate;







