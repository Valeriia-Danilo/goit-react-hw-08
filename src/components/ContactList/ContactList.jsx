import Contact from '../Contact/Contact';
import css from '../ContactList/ContactList.module.css';
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import {selectNameFilter} from "../../redux/filtersSlice"

export default function ContactList() {
    const contacts = useSelector(selectContacts);
    const filters = useSelector(selectNameFilter);

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filters.toLowerCase())  
    );
    

    return (
        <ul className={css.list }>
            {filteredContacts.map((contact) =>
                <li key={contact.id}>
                    <Contact contact={contact}/>
                </li>
            )}
        </ul>
    )
   
}