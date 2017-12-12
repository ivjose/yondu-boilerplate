import React from 'react';
import { Field, reduxForm } from "redux-form";
import InputText from "../../../../components/Forms/InputText";
import InputPassword from "../../../../components/Forms/InputPassword";
import InputCheckbox from "../../../../components/Forms/InputCheckbox";
import SubmitBtn from "../../../../components/Forms/SubmitBtn";
import { Form } from 'semantic-ui-react'
import validate from "../../../../constants/validation";

function LoginFields(props) {
  const { handleFormSubmit, handleSubmit, reset } = props;
  return (
    <div>
      <img
        style={{padding: 20 }}
        className="img-fluid"
        src={`${process.env.PUBLIC_URL}/assets/img/dummy-logo-300x140.png`}
        alt="company logo"
      />
      <h3 className="text-center">Login Page</h3>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Field
          autoFocus
          name="username"
          label="Username"
          type="text"
          component={InputText}
        />
        <Field name="password" label="Password" component={InputPassword} />

        <Field
          name="remember_me"
          text="Remember Me"
          component={InputCheckbox}
        />


        <SubmitBtn type="submit" text="Submit"  fluid  primary/>
      </Form>
    </div>
  );
}

LoginFields = reduxForm({
  form: "LoginFieldsForm", // a unique name for this form
  fields: [
    {
      id: "username",
      label: "Username"
    },
    {
      id: "password",
      label: "Password"
    }
  ],
  validate, // <--- validation function given to redux-form
  enableReinitialize: true,
  initialValues: { remember_me: false }
})(LoginFields);

export default LoginFields;