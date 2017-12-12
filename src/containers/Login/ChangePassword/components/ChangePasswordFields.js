import React from 'react';
import { Field, reduxForm, Form, } from "redux-form";

import InputPassword from "../../../../components/Forms/InputPassword";
import SubmitBtn from "../../../../components/Forms/SubmitBtn";

import validate from "../../../../constants/validation";

function ChangePasswordFields(props) {
  const { handleFormSubmit, handleSubmit, reset } = props;
  return (
    <div>
     
      <h3 className="text-center">Change Password</h3>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Field name="new_password" label="New Password" component={InputPassword} />
      <Field name="confirm_password" label="Confirm Password" component={InputPassword} />


        <SubmitBtn type="submit" text="Submit" block />
      </Form>
    </div>
  );
}

ChangePasswordFields = reduxForm({
  form: "ChangePasswordFieldsForm", // a unique name for this form
  fields: [
    {
      id: "new_password",
      label: "New Password"
    }
  ],
  validate, // <--- validation function given to redux-form
  enableReinitialize: true, 
})(ChangePasswordFields);

export default ChangePasswordFields;

