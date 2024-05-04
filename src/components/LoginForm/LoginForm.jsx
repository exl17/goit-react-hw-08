import css from "./LoginForm.module.css";
import { useId } from "react";
// import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { logInUser } from "../../redux/auth/operations";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  email: "",
  password: "",
};

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email address is required")
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
  password: Yup.string()
    .required("Password is required")
    .min(7, "Too Short!")
    .max(50, "Too Long!"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logInUser(values));

    actions.resetForm();
  };

  const emailFieldId = useId();
  const passwordFieldId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      <Form className={css.form}>
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
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;