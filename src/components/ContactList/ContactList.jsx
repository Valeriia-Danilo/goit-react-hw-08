import Contact from '../Contact/Contact';
import css from '../ContactList/ContactList.module.css';
import { useSelector } from "react-redux";
import { selectFilteredContacts } from '../../redux/contacts/selectors';

export default function ContactList() {
    const filtredContacts = useSelector(selectFilteredContacts);
    

    return (
        <ul className={css.list }>
            {filtredContacts.map((contact) =>
                <li key={contact.id}>
                    <Contact contact={contact}/>
                </li>
            )}
        </ul>
    )
   
}