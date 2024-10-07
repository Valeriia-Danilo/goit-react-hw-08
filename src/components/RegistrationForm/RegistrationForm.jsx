import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(5, 'Name must be at least 5 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters')
    .required('Password is required'),
});

export default function RegistrationForm() {
    const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    if (!values.email || !values.password || !values.name) {
      return;
    };
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
       validationSchema={validationSchema}
    >
      <Form className={css.form} autoComplete='off'>
        <label className={css.formTitle}>
          Username
                   <Field name="name">
            {({ field, form: { errors, touched } }) => (
              <input
                {...field}
                type="text"
                className={clsx(css.input, {
                  [css.inputError]: touched.email && errors.email,
                })}
              />
            )}
          </Field>
          <ErrorMessage name="name" component="span" className={css.err} />
        </label>
        <label className={css.formTitle}>
          Email
         <Field name="email">
            {({ field, form: { errors, touched } }) => (
              <input
                {...field}
                type="email"
                className={clsx(css.input, {
                  [css.inputError]: touched.email && errors.email,
                })}
              />
            )}
          </Field>
          <ErrorMessage name="email" component="span" className={css.err} />
        </label>
        <label className={css.formTitle}>
          Password
         <Field name="password">
            {({ field, form: { errors, touched } }) => (
              <input
                {...field}
                type="password"
                className={clsx(css.input, {
                  [css.inputError]: touched.password && errors.password,
                })}
              />
            )}
          </Field>
          <ErrorMessage name="password" component="span" className={css.err} />
        </label>
        <button type='submit' className={css.button}>Register</button>
      </Form>
    </Formik>
  );
}