import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css'
import * as Yup from "yup";
import MaskedInput from 'react-text-mask';
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, addContact } from "../../redux/contactsSlice";

const contactSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Please fill in the field"),
    number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, "Number must be XXX-XX-XX").required("Please fill in the field"),
});

const initialValues = {
    name: "",
    number: "",
}

export default function ContactForm() {

    
const dispatch = useDispatch();
const contacts = useSelector(selectContacts);   

  const handleSubmit = (values, actions) => {
  const newContact = {
    id: nanoid(),
    name: values.name,
    number: values.number,
  };

  if (contacts.some(contact => contact.name === values.name)) {
    alert(`${values.name} is already in your contacts.`);
    return;
  }


  dispatch(addContact(newContact));


  actions.resetForm();
    };
    
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit } validationSchema={contactSchema}>

            <Form className={css.form}>
                <label className={css.formTitle } htmlFor="name">Name
                    <Field name="name">
                        {({ field, form: { errors, touched } }) => (
                            <input
                                {...field}
                                id="name"
                                className={clsx(css.input, {
                                    [css.inputError]: touched.name && errors.name,
                                })}
                                type="text"
                            />
                        )}
                    </Field>
                    <ErrorMessage name="name" component="span" className={css.err} />
                </label>
                <label className={css.formTitle} htmlFor="name">Number
                 <Field name="number">
                        {({ field, form: { errors, touched } }) => (
                            <MaskedInput
                                {...field}
                                mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                                placeholder="___-__-__"
                                id="number"
                                type="text"
                                className={clsx(css.input, {
                                    [css.inputError]: touched.number && errors.number, 
                                })}
                            />
                        )}
                    </Field>
                    <ErrorMessage name="number" component="span" className={css.err} />
                </label>
                <button type="submit" className={css.button}>Add contact</button>
            </Form>
        </Formik>
    )
}