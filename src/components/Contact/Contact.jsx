import css from './Contact.module.css';
import { FaUserLarge, FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast, { Toaster } from 'react-hot-toast';


export default function Contact({ contact }) {

    const dispatch = useDispatch();
    function handleDelete() {
        dispatch(deleteContact(contact.id));
        toast.success('Contact deleted successfully!');

    }

    return (
        <div className={css.container}>
            <Toaster
  position="bottom-right"
  reverseOrder={false}
/>
            <div className={css.containerInfo}>
                <p><FaUserLarge className={ css.iconPhone} />{contact.name}</p>
                <p><FaPhone className={ css.iconPersone}/>{contact.number}</p>
            </div>
            <button className={css.deleteButton} onClick={handleDelete} >Delete</button>
        </div>
    )
}