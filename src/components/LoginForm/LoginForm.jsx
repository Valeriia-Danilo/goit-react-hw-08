import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';
import css from './LoginForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { selectIsLoading } from '../../redux/auth/selectors';


const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('This field is required'),
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters long')
    .required('This field is required'),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

function handleSubmit(values, actions) {
  if (!values.email || !values.password) {
    return;
    }
    dispatch(logIn(values));
    actions.resetForm();
  }


  return (
<Formik
  initialValues={{
    email: '',
    password: '',
  }}
  onSubmit={handleSubmit}
  validationSchema={validationSchema}
>
  <Form className={css.form} autoComplete="off">
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

    <button type="submit" className={css.button} disabled={isLoading}>
      Log In
    </button>
  </Form>
</Formik>
  );
}