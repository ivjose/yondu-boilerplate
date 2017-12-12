import React from 'react';
import { Field, reduxForm, Form, } from "redux-form";
import InputText from "../../../../components/Forms/InputText";
import InputPassword from "../../../../components/Forms/InputPassword";
import InputCheckbox from "../../../../components/Forms/InputCheckbox";
import SubmitBtn from "../../../../components/Forms/SubmitBtn";

import validate from "../../../../constants/validation";

function ForgetPasswordFields(props) {
  const { handleFormSubmit, handleSubmit, reset } = props;
  return (
    <div>
     
      <h3 className="text-center">Forgot Password</h3>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Field
          autoFocus
          name="email"
          label="Email"
          type="email"
          component={InputText}
        />
        


        <SubmitBtn type="submit" text="Submit" block />
      </Form>
    </div>
  );
}

ForgetPasswordFields = reduxForm({
  form: "ForgetPasswordFieldsForm", // a unique name for this form
  fields: [
    {
      id: "email",
      label: "Emails"
    },
  ],
  validate, // <--- validation function given to redux-form
  enableReinitialize: true, 
})(ForgetPasswordFields);

export default ForgetPasswordFields;

