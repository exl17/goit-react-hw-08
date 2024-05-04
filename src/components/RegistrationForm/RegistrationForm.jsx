import css from "./RegistrationForm.module.css";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { userRegister } from "../../redux/auth/operations";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const registrationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
  email: Yup.string()
    .required("Email address is required")
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
  password: Yup.string()
    .required("Password is required")
    .min(7, "Too Short!")
    .max(50, "Too Long!"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(userRegister(values));

    actions.resetForm();
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registrationSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field className={css.field} type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label className={css.label} htmlFor={emailFieldId}>
          Email
        </label>
        <Field
          className={css.field}
          type="email"
          name="email"
          id={emailFieldId}
        />
        <ErrorMessage className={css.error} name="email" component="span" />
        <label className={css.label} htmlFor={passwordFieldId}>
          Password
        </label>
        <Field
          className={css.field}
          type="password"
          name="password"
          id={passwordFieldId}
        />
        <ErrorMessage className={css.error} name="password" component="span" />
        <button className={css.formBtn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;