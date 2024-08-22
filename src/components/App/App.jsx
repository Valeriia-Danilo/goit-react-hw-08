import initialContacts from '../../contacts.json';
import { useState, useEffect } from 'react';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import css from '../App/App.module.css';
import "modern-normalize";

export default function App() {

    const [filter, setFilter] = useState('');

    const [contacts, setContacts] = useState(() => {

        const saveContacts = window.localStorage.getItem("saved-contacts");
        
        if (saveContacts !== null) {
            return JSON.parse(saveContacts);    
        }
                
        
        return initialContacts;
    });

    useEffect(() => {
       window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
    }, [contacts]);


    const deleteContacts = (contactId) => {
        setContacts((currentContacts) => {
        return (currentContacts.filter((contact) => contact.id !== contactId))
    })
    }
    
    const addContacts = (newContact) => {
        setContacts((currentContacts) => { return [...currentContacts, newContact] })
    }

    const filterContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
    
    

    return (
        <div className={css.container}>
            <h1 className={ css.title}>Phonebook</h1>
            <ContactForm addContacts={addContacts} />
            <SearchBox value={filter} onFilter={setFilter} />
            <ContactList contacts={filterContacts} onDelete={deleteContacts} />
</div>
    )
}

